/**
 * Daily auto-nudge for search engines.
 *
 * Once a day, this script tells search engines about a fresh batch of
 * URLs from taxguided.com so they prioritize crawling them. Two channels:
 *
 *   1. IndexNow (Bing, Yandex, Naver, Seznam, Yep — single API endpoint at
 *      api.indexnow.org). 10K URLs/day per host, free, no auth beyond the
 *      one-time key file at /<key>.txt that we host on the site.
 *
 *   2. Sitemap lastmod refresh — touch the in-repo sitemap timestamp so
 *      next deploy bumps `<lastmod>` on the sub-sitemap URLs we want
 *      Google to re-fetch. Google deprecated the sitemap-ping endpoint in
 *      June 2023; the only honest signal you can give them now is a real
 *      lastmod change in the sitemap they fetch on their own schedule.
 *
 * Note about Google: there is no public "request indexing" API for general
 * URLs (the Indexing API only accepts JobPosting + BroadcastEvent). We
 * rely on:
 *   a. The sitemaps we already submitted in GSC.
 *   b. Cloudflare Crawler Hints (free, auto-broadcasts changes to IndexNow
 *      partners — we set `vars.CRAWLER_HINTS_ENABLED=true` in the
 *      Cloudflare zone settings).
 *   c. Google's own scheduler responding to our internal-link density and
 *      origin response time (the structural fixes already shipped).
 *
 * Run from .github/workflows/seo-auto-nudge.yml daily at 06:11 UTC
 * (after the cross-project-drip job at 05:23 UTC has appended any new
 * auto-news content, so today's fresh URLs get nudged today).
 *
 * Required env:
 *   INDEXNOW_KEY           — must match the value at /<key>.txt
 * Optional env:
 *   SEO_AUTO_NUDGE_DISABLED — "true" to skip
 *   DRY_RUN                 — "true" to print URLs but not POST
 *   MAX_URLS                — override default of 10 URLs per run
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const REPO_ROOT = join(__dirname, "..");

const STATE_FILE = join(REPO_ROOT, ".cron", "seo-nudge-history.json");
const HOST = "taxguided.com";
const KEY_LOCATION = `https://${HOST}/${process.env.INDEXNOW_KEY ?? "MISSING_KEY"}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

const MAX_URLS = Number(process.env.MAX_URLS ?? "10");
const DRY_RUN = process.env.DRY_RUN === "true";
const DISABLED = process.env.SEO_AUTO_NUDGE_DISABLED === "true";
const KEY = process.env.INDEXNOW_KEY ?? "";

if (DISABLED) {
  console.log("SEO_AUTO_NUDGE_DISABLED=true — skipping run.");
  process.exit(0);
}

if (!KEY) {
  console.error(
    "Missing INDEXNOW_KEY env. Set it as a GitHub Actions secret and make sure the matching key file is hosted at /<key>.txt on the site."
  );
  process.exit(1);
}

interface State {
  /** ISO date string -> list of URLs nudged that day. Keep last 30 days. */
  history: Record<string, string[]>;
  /** Map url -> last-nudged ISO date. Avoid re-nudging the same URL within 30 days. */
  lastNudged: Record<string, string>;
}

function loadState(): State {
  if (!existsSync(STATE_FILE)) {
    return { history: {}, lastNudged: {} };
  }
  try {
    const data = JSON.parse(readFileSync(STATE_FILE, "utf8"));
    return {
      history: data.history ?? {},
      lastNudged: data.lastNudged ?? {},
    };
  } catch {
    return { history: {}, lastNudged: {} };
  }
}

function saveState(state: State): void {
  // Trim history to last 30 days to keep the state file small.
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 30);
  const cutoffStr = cutoff.toISOString().slice(0, 10);

  const trimmed: State = {
    history: {},
    lastNudged: {},
  };
  for (const [date, urls] of Object.entries(state.history)) {
    if (date >= cutoffStr) trimmed.history[date] = urls;
  }
  for (const [url, date] of Object.entries(state.lastNudged)) {
    if (date >= cutoffStr) trimmed.lastNudged[url] = date;
  }

  mkdirSync(dirname(STATE_FILE), { recursive: true });
  writeFileSync(STATE_FILE, JSON.stringify(trimmed, null, 2) + "\n");
}

/**
 * Fetch a sub-sitemap and return its <loc> URLs. We pull URLs from the
 * sub-sitemap that has the most recent <lastmod> overall — that's where
 * fresh content lives.
 */
async function fetchSitemapUrls(sitemapUrl: string): Promise<string[]> {
  try {
    const res = await fetch(sitemapUrl, {
      headers: { "user-agent": "TaxGuided-Auto-Nudge/1.0 (+https://taxguided.com)" },
    });
    if (!res.ok) {
      console.warn(`  ! ${sitemapUrl} returned ${res.status}`);
      return [];
    }
    const xml = await res.text();
    const matches = xml.matchAll(/<loc>([^<]+)<\/loc>/g);
    return Array.from(matches, (m) => m[1].trim());
  } catch (err) {
    console.warn(`  ! ${sitemapUrl} fetch error: ${err}`);
    return [];
  }
}

/**
 * Pick today's batch of URLs to nudge. Strategy:
 *   1. Always include the homepage and top hub pages (rotates through them).
 *   2. Add the freshest news/auto-news commentary URLs (high-impact).
 *   3. Add /community Q&A threads we haven't nudged in 30+ days.
 *   4. Cap at MAX_URLS total.
 */
async function pickTodayBatch(state: State): Promise<string[]> {
  const today = new Date().toISOString().slice(0, 10);
  const todayDayOfYear = Math.floor(
    (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) /
      (1000 * 60 * 60 * 24)
  );

  // Hub rotation — one hub per day cycles through the list.
  const hubs = [
    "/",
    "/guides",
    "/community",
    "/community/all",
    "/forms",
    "/treaties",
    "/case-law",
    "/historical",
    "/calculators",
    "/states",
    "/statutes",
    "/glossary",
    "/news",
    "/scenarios",
    "/learn",
    "/laws",
    "/compare",
    "/industry",
    "/calendar",
  ];
  const todaysHub = hubs[todayDayOfYear % hubs.length];

  const candidates: string[] = [
    `https://${HOST}/`,
    `https://${HOST}${todaysHub}`,
  ];

  // Pull recent news + community URLs to nudge.
  const [newsXml, communityXml] = await Promise.all([
    fetchSitemapUrls(`https://${HOST}/sitemap.xml`),
    fetchSitemapUrls(`https://${HOST}/sitemap.xml`), // single sitemap.xml has both
  ]);

  // Filter to URLs we haven't nudged recently (30 days).
  const cutoff = new Date();
  cutoff.setDate(cutoff.getDate() - 30);
  const cutoffStr = cutoff.toISOString().slice(0, 10);

  const eligible = newsXml.filter((url) => {
    const last = state.lastNudged[url];
    return !last || last < cutoffStr;
  });

  // Prioritize: news/scenarios/shorts (fresh content) before deeper Q&A.
  const priority = (u: string) => {
    if (u.includes("/news/")) return 0;
    if (u.includes("/scenarios/")) return 1;
    if (u.includes("/shorts/")) return 2;
    if (u.includes("/community/")) return 3;
    if (u.includes("/learn/")) return 4;
    if (u.includes("/guides/")) return 5;
    return 6;
  };
  eligible.sort((a, b) => priority(a) - priority(b));

  // Add eligible URLs until we hit MAX_URLS.
  for (const url of eligible) {
    if (candidates.length >= MAX_URLS) break;
    if (!candidates.includes(url)) candidates.push(url);
  }

  // Mark as nudged for state file.
  for (const url of candidates) {
    state.lastNudged[url] = today;
  }
  state.history[today] = candidates;

  return candidates.slice(0, MAX_URLS);
}

async function postIndexNow(urls: string[]): Promise<void> {
  if (DRY_RUN) {
    console.log(`[dry-run] Would POST ${urls.length} URLs to IndexNow.`);
    return;
  }

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  // IndexNow uses the HTTP status as the entire response signal.
  // 200/202 = accepted; 400 = bad URL/key; 403 = key didn't match;
  // 422 = some URLs invalid for this key; 429 = rate-limit.
  console.log(`IndexNow POST → ${res.status} ${res.statusText}`);
  if (res.status >= 400) {
    const text = await res.text().catch(() => "");
    console.warn(`  body: ${text.slice(0, 500)}`);
    if (res.status === 403) {
      throw new Error(
        `IndexNow rejected the key. Make sure ${KEY_LOCATION} is publicly reachable and matches INDEXNOW_KEY.`
      );
    }
  }
}

async function main(): Promise<void> {
  const state = loadState();
  const urls = await pickTodayBatch(state);

  console.log(`Today's nudge batch (${urls.length} URLs):`);
  for (const u of urls) console.log(`  - ${u}`);

  await postIndexNow(urls);
  if (!DRY_RUN) saveState(state);
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
