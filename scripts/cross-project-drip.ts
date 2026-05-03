/**
 * Cross-project content drip.
 *
 * Fetches the daily-regenerated router feed from sister project
 * foreignllctax.com (https://foreignllctax.com/tax-news-router-output.json),
 * which contains tax-relevant items the foreignllctax pipeline classified as
 * NOT specific to foreign-owned U.S. LLCs but still worth covering globally.
 *
 * For each new item (vs .cron/news-seen.json state), AI-generates commentary
 * via Cloudflare Workers AI (Llama 3.3 70B FP8 Fast — same model + free tier
 * as foreignllctax) targeting the tax-guided audience (tax professionals +
 * curious laypeople, multi-jurisdiction). Validates strictly. Appends valid
 * entries between AUTO-CONTENT markers in src/lib/editorial/auto-news.ts.
 *
 * Run from .github/workflows/cross-project-drip.yml daily at 05:23 UTC
 * (after foreignllctax's 04:17 UTC cron has refreshed the feed).
 *
 * Mirror of the foreignllctax content-drip pattern. See CLAUDE.md.
 *
 * Required env:
 *   CF_API_TOKEN     — Cloudflare API token with Workers AI Read perm
 *   CF_ACCOUNT_ID    — b592217282aafffff49d2fd557b56fc9
 * Optional env:
 *   CROSS_PROJECT_DRIP_DISABLED — "true" to skip the run entirely
 *   DRY_RUN          — "true" to preview without writing files
 *   MAX_NEW          — override default of 5 entries per run
 *   ROUTER_URL       — override the source URL (default: foreignllctax production)
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = join(__dirname, "..");

const STATE_FILE = join(REPO_ROOT, ".cron", "news-seen.json");
const TARGET_FILE = join(REPO_ROOT, "src", "lib", "editorial", "auto-news.ts");
const AUTO_START = "// ==== AUTO-CONTENT START ====";
const AUTO_END = "// ==== AUTO-CONTENT END ====";

const ROUTER_URL = process.env.ROUTER_URL ?? "https://foreignllctax.com/tax-news-router-output.json";
const MAX_NEW = Number(process.env.MAX_NEW ?? "5");
const DRY_RUN = process.env.DRY_RUN === "true";
const DISABLED = process.env.CROSS_PROJECT_DRIP_DISABLED === "true";

const CF_API_TOKEN = process.env.CF_API_TOKEN;
const CF_ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
const AI_MODEL = "@cf/meta/llama-3.3-70b-instruct-fp8-fast";

const MIN_RELEVANCE_SCORE = 6; // looser than foreignllctax (7) — broader audience

type RouterItem = {
  guid: string;
  source: string;
  title: string;
  url: string;
  publishedAt: string;
  bodyPreview: string;
  routerReason: string;
};

type RouterFeed = {
  schema?: string;
  generatedAt?: string;
  sourceProject?: string;
  count?: number;
  items?: RouterItem[];
};

type State = {
  seenGuids: Record<string, { seenAt: string }>;
};

type GeneratedCommentary = {
  relevanceScore?: number;
  title: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  sections: Array<{ heading: string; body: string }>;
  source: { label: string; url: string };
};

function loadState(): State {
  try {
    const raw = readFileSync(STATE_FILE, "utf8");
    const parsed = JSON.parse(raw) as State;
    parsed.seenGuids ||= {};
    return parsed;
  } catch {
    return { seenGuids: {} };
  }
}

function saveState(state: State): void {
  if (DRY_RUN) {
    console.log("[cross-drip:dry-run] would save state:", JSON.stringify(state).slice(0, 200));
    return;
  }
  writeFileSync(STATE_FILE, JSON.stringify(state, null, 2) + "\n", "utf8");
}

async function fetchRouterFeed(): Promise<RouterFeed> {
  const res = await fetch(ROUTER_URL, { headers: { "user-agent": "tax-guided cross-project-drip" } });
  if (!res.ok) {
    throw new Error(`router feed fetch failed: HTTP ${res.status}`);
  }
  const data = (await res.json()) as RouterFeed;
  return data;
}

async function generateCommentary(item: RouterItem): Promise<GeneratedCommentary | null> {
  if (!CF_API_TOKEN || !CF_ACCOUNT_ID) {
    console.error("[cross-drip] CF_API_TOKEN or CF_ACCOUNT_ID missing");
    return null;
  }

  const systemPrompt = `You write factual editorial commentary on recent tax developments for tax-guided.com. The audience is tax professionals (CPAs, EAs, tax attorneys) and tax-curious laypeople interested in U.S. and international tax topics.

The site covers tax laws, regulations, news, treaties, and case law worldwide. Items here have been pre-filtered as substantive tax content (not procedural noise).

CRITICAL FIRST STEP — relevance check:
Read the SOURCE below and ask: "Is this a substantive tax development that affects taxpayers, advisers, or the practice of tax compliance?" If not — for example, if this is a meeting agenda, a comment-period extension, or an unsubstantive procedural notice — output ONLY:
{"skip": true, "reason": "<one-line why not substantive>"}

Otherwise output STRICTLY a single JSON object (no prose, no code fence, no markdown):
{
  "relevanceScore": <integer 6-10 — refuse if you cannot honestly score >=6>,
  "title": "string — descriptive title, max 200 chars, neutral journalistic tone",
  "summary": "string — 2-3 sentence executive summary of what changed and who's affected, max 500 chars",
  "seoTitle": "string — max 70 chars, SEO-optimized",
  "seoDescription": "string — 140-160 chars",
  "sections": [
    {"heading": "What the official source actually said", "body": "2-3 paragraphs of factual recap, plain text"},
    {"heading": "Why this matters / who is affected", "body": "2-3 paragraphs of analytical commentary, plain text"},
    {"heading": "What practitioners or affected taxpayers should do", "body": "1-2 paragraphs of practical takeaways, plain text"}
  ]
}

NON-NEGOTIABLE RULES:
- Only state facts the SOURCE directly supports. Do not invent details.
- Tone: factual, professional, journalistic — not promotional or marketing.
- Do not refer to the website by name or use first-person plural ("we").
- Cite the source URL exactly once near the end of the last section.
- If you start writing and realize the source isn't substantive, BACK OUT and output the skip JSON.`;

  const userPrompt = `SOURCE: ${item.source}
TITLE: ${item.title}
URL: ${item.url}
PUBLISHED: ${item.publishedAt}
ROUTER REASON: ${item.routerReason}

BODY:
${item.bodyPreview}`;

  const apiUrl = `https://api.cloudflare.com/client/v4/accounts/${CF_ACCOUNT_ID}/ai/run/${AI_MODEL}`;
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${CF_API_TOKEN}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      max_tokens: 2000,
    }),
  });

  if (!res.ok) {
    console.warn(`[cross-drip] AI call failed for ${item.guid}: HTTP ${res.status} — ${await res.text().catch(() => "(no body)")}`);
    return null;
  }

  const apiResp = (await res.json()) as { result?: { response?: unknown } };
  const raw = apiResp.result?.response;
  if (raw === undefined || raw === null) {
    console.warn(`[cross-drip] AI returned no text for ${item.guid}`);
    return null;
  }

  // Llama 3.3 70B returns parsed object; fall back to string parsing if needed
  let parsed: GeneratedCommentary | { skip: true; reason?: string };
  if (typeof raw === "object") {
    parsed = raw as GeneratedCommentary | { skip: true; reason?: string };
  } else {
    const jsonStr = String(raw)
      .replace(/^```(?:json)?\s*/i, "")
      .replace(/\s*```\s*$/i, "")
      .trim();
    try {
      parsed = JSON.parse(jsonStr);
    } catch {
      console.warn(`[cross-drip] AI output not valid JSON for ${item.guid}: ${jsonStr.slice(0, 200)}`);
      return null;
    }
  }

  if ("skip" in parsed && parsed.skip) {
    console.log(`[cross-drip] AI skipped ${item.guid}: ${parsed.reason ?? "(no reason)"}`);
    return null;
  }

  // Inject source citation
  (parsed as GeneratedCommentary).source = { label: item.title, url: item.url };
  return parsed as GeneratedCommentary;
}

function isValidGenerated(g: GeneratedCommentary): { ok: true } | { ok: false; reason: string } {
  if (typeof g.relevanceScore !== "number" || g.relevanceScore < MIN_RELEVANCE_SCORE) {
    return { ok: false, reason: `relevanceScore ${g.relevanceScore ?? "missing"} below ${MIN_RELEVANCE_SCORE}` };
  }
  if (!g.title || g.title.length < 10 || g.title.length > 250)
    return { ok: false, reason: `title length out of range (${g.title?.length})` };
  if (!g.summary || g.summary.length < 50)
    return { ok: false, reason: "summary too short" };
  if (!g.seoTitle || g.seoTitle.length > 90)
    return { ok: false, reason: `seoTitle bad length (${g.seoTitle?.length})` };
  if (!g.seoDescription || g.seoDescription.length < 80)
    return { ok: false, reason: "seoDescription too short" };
  if (!Array.isArray(g.sections) || g.sections.length < 2)
    return { ok: false, reason: "sections must have >=2 entries" };
  for (const s of g.sections) {
    if (!s.heading || !s.body || s.body.length < 50)
      return { ok: false, reason: "section heading/body missing or body too short" };
  }
  return { ok: true };
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[–—]/g, "-")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

function clampPostedAt(iso: string): string {
  const ms = Date.parse(iso);
  const now = Date.now();
  if (!Number.isFinite(ms) || ms > now) return new Date(now).toISOString().slice(0, 10);
  return new Date(ms).toISOString().slice(0, 10);
}

function renderCommentaryLiteral(g: GeneratedCommentary, item: RouterItem, idCounter: number): string {
  const slug = slugify(g.seoTitle || g.title);
  const id = `news-cross-${slug}-${idCounter}`;
  const publishedAt = clampPostedAt(item.publishedAt);
  const stamp = JSON.stringify;

  const sections = g.sections
    .map(
      (s) =>
        `      {\n        heading: ${stamp(s.heading)},\n        body: ${stamp(s.body)},\n      },`,
    )
    .join("\n");

  return `  {
    id: ${stamp(id)},
    slug: ${stamp(slug)},
    title: ${stamp(g.title)},
    publishedAt: ${stamp(publishedAt)},
    summary: ${stamp(g.summary)},
    seoTitle: ${stamp(g.seoTitle)},
    seoDescription: ${stamp(g.seoDescription)},
    sections: [
${sections}
    ],
    sources: [
      { label: ${stamp(g.source.label)}, url: ${stamp(g.source.url)} },
    ],
  },`;
}

function appendToTargetFile(blocks: string[]): void {
  if (DRY_RUN) {
    console.log(`[cross-drip:dry-run] would append ${blocks.length} blocks to ${TARGET_FILE}`);
    if (blocks.length > 0) console.log("  preview:\n" + blocks[0].slice(0, 400) + "\n  ...");
    return;
  }
  const file = readFileSync(TARGET_FILE, "utf8");
  const startIdx = file.indexOf(AUTO_START);
  const endIdx = file.indexOf(AUTO_END);
  if (startIdx < 0 || endIdx < 0 || endIdx <= startIdx) {
    throw new Error(`AUTO-CONTENT markers missing or out of order in ${TARGET_FILE}`);
  }
  const before = file.slice(0, startIdx + AUTO_START.length);
  const between = file.slice(startIdx + AUTO_START.length, endIdx);
  const after = file.slice(endIdx);
  const newBetween = between.trimEnd() + "\n" + blocks.join("\n") + "\n  ";
  writeFileSync(TARGET_FILE, before + newBetween + after, "utf8");
}

async function main(): Promise<void> {
  if (DISABLED) {
    console.log("[cross-drip] CROSS_PROJECT_DRIP_DISABLED=true — skipping run.");
    return;
  }

  const state = loadState();
  const seenCount = Object.keys(state.seenGuids).length;
  console.log(`[cross-drip] State: ${seenCount} guids previously seen. Fetching ${ROUTER_URL}`);

  let feed: RouterFeed;
  try {
    feed = await fetchRouterFeed();
  } catch (err) {
    console.error("[cross-drip] FATAL:", err instanceof Error ? err.message : err);
    process.exit(1);
  }

  const items = feed.items ?? [];
  console.log(`[cross-drip] Feed schema=${feed.schema} generatedAt=${feed.generatedAt} count=${items.length}`);

  const fresh = items.filter((i) => !state.seenGuids[i.guid]);
  console.log(`[cross-drip] After dedup: ${fresh.length} fresh items`);

  if (fresh.length === 0) {
    console.log("[cross-drip] Nothing new from router today.");
    return;
  }

  const todays = fresh.slice(0, MAX_NEW);
  const generated: { item: RouterItem; commentary: GeneratedCommentary }[] = [];

  for (const item of todays) {
    const commentary = await generateCommentary(item);
    if (!commentary) {
      // Mark as seen so we don't retry the same broken source
      state.seenGuids[item.guid] = { seenAt: new Date().toISOString() };
      continue;
    }
    const validation = isValidGenerated(commentary);
    if (!validation.ok) {
      console.warn(`[cross-drip] Validation failed for ${item.guid}: ${validation.reason}`);
      state.seenGuids[item.guid] = { seenAt: new Date().toISOString() };
      continue;
    }
    generated.push({ item, commentary });
    state.seenGuids[item.guid] = { seenAt: new Date().toISOString() };
  }

  if (generated.length === 0) {
    console.log("[cross-drip] No items survived AI generation + validation.");
    saveState(state);
    return;
  }

  console.log(`[cross-drip] Generated ${generated.length} valid commentary entries.`);
  const blocks = generated.map((g, i) =>
    renderCommentaryLiteral(g.commentary, g.item, Date.now() + i),
  );
  appendToTargetFile(blocks);
  saveState(state);

  console.log(`[cross-drip] ✓ Appended ${generated.length} entries to ${TARGET_FILE}`);
}

main().catch((err) => {
  console.error("[cross-drip] FATAL:", err);
  process.exit(1);
});
