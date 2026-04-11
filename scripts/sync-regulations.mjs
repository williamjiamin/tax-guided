#!/usr/bin/env node

/**
 * sync-regulations.mjs
 *
 * Fetches the latest regulation items from IRS and China STA sources,
 * writes data/regulations.latest.json and regenerates the inline
 * TypeScript data file at src/lib/regulations/feed-data.ts.
 *
 * Usage:  node scripts/sync-regulations.mjs
 * No external dependencies required (uses native fetch).
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const JSON_PATH = resolve(ROOT, "data/regulations.latest.json");
const TS_PATH = resolve(ROOT, "src/lib/regulations/feed-data.ts");

// ---------------------------------------------------------------------------
// Source URLs & constants (mirrored from us-tax-blog/src/regulation-sources.js)
// ---------------------------------------------------------------------------

const US_IRB_URL = "https://www.irs.gov/irb";
const US_NEWS_URL = "https://www.irs.gov/newsroom/news-releases-for-current-month";
const CN_STA_API = "https://www.chinatax.gov.cn/getFileListByCodeId";
const CN_STA_SOURCE_URL = "https://fgk.chinatax.gov.cn/zcfgk/c100006/listflfg.html";
const CN_STA_CHANNEL_ID = "29a88b67e4b149cfa9fac7919dfb08a5";

const MAX_ITEMS_PER_SOURCE = 10;
const FETCH_TIMEOUT_MS = 15_000;
const USER_AGENT = "Mozilla/5.0 (compatible; TaxGuidedBot/1.0; +https://taxguided.com)";

// ---------------------------------------------------------------------------
// Helpers (ported from regulation-sources.js)
// ---------------------------------------------------------------------------

function cleanText(value) {
  return decodeEntities(String(value))
    .replace(/\s+/g, " ")
    .trim();
}

function decodeEntities(value) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) =>
      String.fromCodePoint(Number.parseInt(hex, 16)),
    )
    .replace(/&#(\d+);/g, (_, dec) =>
      String.fromCodePoint(Number.parseInt(dec, 10)),
    );
}

function stripTags(value) {
  return String(value)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ");
}

function forceHttps(url) {
  return String(url).replace(/^http:\/\//i, "https://");
}

function toAbsoluteUrl(pathOrUrl, baseUrl) {
  try {
    return new URL(pathOrUrl, baseUrl).toString();
  } catch {
    return baseUrl;
  }
}

function normalizeCnStaContentUrl(url) {
  const value = String(url);
  if (value.includes("www.chinatax.gov.cn/zcfgk/")) {
    return value.replace("www.chinatax.gov.cn/zcfgk/", "fgk.chinatax.gov.cn/zcfgk/");
  }
  return value;
}

function slugify(value) {
  const asciiSlug = String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 80);
  if (asciiSlug) return asciiSlug;

  const unicodeFallback = Array.from(String(value))
    .slice(0, 12)
    .map((char) => char.codePointAt(0).toString(16))
    .join("-");
  return unicodeFallback || "item";
}

function shortHash(value) {
  let hash = 2166136261;
  const text = String(value);
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}

function stableId(prefix, title, uniqueSeed) {
  const core = slugify(title);
  return `${prefix}-${core}-${shortHash(uniqueSeed || title)}`;
}

function toIsoDate(raw) {
  if (!raw) return null;
  const value = cleanText(String(raw));

  const directIso = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (directIso) return `${directIso[1]}-${directIso[2]}-${directIso[3]}`;

  const monthDate = value.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
  if (monthDate) {
    const mn = monthNameToNumber(monthDate[1]);
    if (mn) {
      return `${monthDate[3]}-${String(mn).padStart(2, "0")}-${String(Number(monthDate[2])).padStart(2, "0")}`;
    }
  }

  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toISOString().slice(0, 10);
}

function monthNameToNumber(name) {
  const months = {
    january: 1, february: 2, march: 3, april: 4, may: 5, june: 6,
    july: 7, august: 8, september: 9, october: 10, november: 11, december: 12,
  };
  return months[String(name).toLowerCase()] || null;
}

// ---------------------------------------------------------------------------
// Fetch helper with timeout
// ---------------------------------------------------------------------------

async function fetchText(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, {
      headers: { "user-agent": USER_AGENT },
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return await res.text();
  } finally {
    clearTimeout(timer);
  }
}

async function fetchJson(url, options) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return await res.json();
  } finally {
    clearTimeout(timer);
  }
}

// ---------------------------------------------------------------------------
// Source fetchers
// ---------------------------------------------------------------------------

async function fetchUsIrb() {
  const html = await fetchText(US_IRB_URL);
  const matches = [];
  const seen = new Set();
  const linkRegex =
    /<td><a href="(https:\/\/www\.irs\.gov\/irb\/[^"]+)">([^<]+)<\/a><\/td>/gi;

  for (const match of html.matchAll(linkRegex)) {
    const url = forceHttps(match[1]);
    const title = cleanText(match[2]);
    if (!title.startsWith("Internal Revenue Bulletin:")) continue;
    if (seen.has(url)) continue;
    seen.add(url);
    matches.push({ title, url });
    if (matches.length >= MAX_ITEMS_PER_SOURCE) break;
  }

  // Fetch publish dates from detail pages (in parallel, with individual error handling)
  const withDates = await Promise.all(
    matches.map(async (item) => {
      let publishedDate = null;
      try {
        const detailHtml = await fetchText(item.url);
        const dateMatch = detailHtml.match(/<p class="pubdate">([^<]+)<\/p>/i);
        publishedDate = toIsoDate(dateMatch ? dateMatch[1] : null);
      } catch {
        publishedDate = null;
      }
      return {
        id: stableId("irb", item.title, item.url),
        title: item.title,
        summary:
          "Authoritative weekly IRS bulletin publishing official rulings, procedures, notices, and announcements.",
        publishedDate,
        url: item.url,
        officialSourceUrl: item.url,
      };
    }),
  );

  return {
    id: "us-irs-irb",
    jurisdiction: "US",
    agency: "Internal Revenue Service",
    name: "Internal Revenue Bulletin",
    officialSourceUrl: US_IRB_URL,
    items: withDates,
  };
}

async function fetchUsNewsReleases() {
  const html = await fetchText(US_NEWS_URL);
  const items = [];
  const articleRegex =
    /<h2><a href="([^"]+)"[^>]*>([\s\S]*?)<\/a><\/h2>[\s\S]*?<div class="field field--name-field-pup-description-abstract[\s\S]*?field--item">([\s\S]*?)<\/div>/gi;

  for (const match of html.matchAll(articleRegex)) {
    const articleUrl = forceHttps(
      toAbsoluteUrl(match[1], "https://www.irs.gov"),
    );
    const title = cleanText(stripTags(match[2]));
    const summary = cleanText(stripTags(match[3]));
    const releaseId = (summary.match(/IR-\d{4}-\d+/i) || [null])[0];
    if (!releaseId) continue;

    const dateMatch = summary.match(/([A-Za-z]+\s+\d{1,2},\s+\d{4})/);
    items.push({
      id: releaseId.toLowerCase(),
      title,
      summary,
      publishedDate: toIsoDate(dateMatch ? dateMatch[1] : null),
      url: articleUrl,
      officialSourceUrl: articleUrl,
    });
    if (items.length >= MAX_ITEMS_PER_SOURCE) break;
  }

  return {
    id: "us-irs-news-releases",
    jurisdiction: "US",
    agency: "Internal Revenue Service",
    name: "News Releases (Current Month)",
    officialSourceUrl: US_NEWS_URL,
    items,
  };
}

async function fetchCnStaPolicy() {
  const form = new URLSearchParams({
    codeId: "",
    channelId: CN_STA_CHANNEL_ID,
    page: "1",
    size: String(MAX_ITEMS_PER_SOURCE),
  });

  const payload = await fetchJson(CN_STA_API, {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "user-agent": USER_AGENT,
    },
    body: form.toString(),
  });

  const results = payload?.results?.data?.results ?? [];

  const items = results.slice(0, MAX_ITEMS_PER_SOURCE).map((row) => {
    const url = normalizeCnStaContentUrl(
      forceHttps(
        toAbsoluteUrl(
          row.url || "https://www.chinatax.gov.cn/",
          "https://www.chinatax.gov.cn",
        ),
      ),
    );
    return {
      id: stableId(
        "sta",
        row.title || row.subTitleHtml || "item",
        row.url || row.subTitleHtml || row.title || "item",
      ),
      title: cleanText(row.title || row.subTitleHtml || "Tax policy update"),
      summary: cleanText(row.channelName || "政策法规文件"),
      publishedDate: toIsoDate(row.publishedTimeStr),
      url,
      officialSourceUrl: url,
    };
  });

  return {
    id: "cn-sta-policy-library",
    jurisdiction: "CN",
    agency: "State Taxation Administration",
    name: "Policy Library (政策法规库)",
    officialSourceUrl: CN_STA_SOURCE_URL,
    items,
  };
}

// ---------------------------------------------------------------------------
// Build full snapshot
// ---------------------------------------------------------------------------

async function buildSnapshot() {
  const SOURCE_CATALOG = [
    {
      id: "us-irs-irb",
      jurisdiction: "US",
      agency: "Internal Revenue Service",
      name: "Internal Revenue Bulletin",
      officialSourceUrl: US_IRB_URL,
    },
    {
      id: "us-irs-news-releases",
      jurisdiction: "US",
      agency: "Internal Revenue Service",
      name: "News Releases (Current Month)",
      officialSourceUrl: US_NEWS_URL,
    },
    {
      id: "cn-sta-policy-library",
      jurisdiction: "CN",
      agency: "State Taxation Administration",
      name: "Policy Library (政策法规库)",
      officialSourceUrl: CN_STA_SOURCE_URL,
    },
  ];

  const [usIrb, usNews, cnSta] = await Promise.allSettled([
    fetchUsIrb(),
    fetchUsNewsReleases(),
    fetchCnStaPolicy(),
  ]);

  function settledToSource(result, sourceId) {
    const template = SOURCE_CATALOG.find((s) => s.id === sourceId);
    if (result.status === "fulfilled") {
      return {
        ...template,
        ...result.value,
        error: null,
        itemCount: result.value.items.length,
      };
    }
    return {
      ...template,
      items: [],
      itemCount: 0,
      error: cleanText(result.reason?.message || String(result.reason)),
    };
  }

  const sourceEntries = [
    settledToSource(usIrb, "us-irs-irb"),
    settledToSource(usNews, "us-irs-news-releases"),
    settledToSource(cnSta, "cn-sta-policy-library"),
  ];

  const latestItems = sourceEntries
    .flatMap((source) =>
      source.items.map((item) => ({
        ...item,
        sourceId: source.id,
        sourceName: source.name,
        jurisdiction: source.jurisdiction,
      })),
    )
    .sort((a, b) => {
      const left = a.publishedDate ? Date.parse(a.publishedDate) : 0;
      const right = b.publishedDate ? Date.parse(b.publishedDate) : 0;
      return right - left;
    });

  return {
    schemaVersion: 1,
    fetchedAt: new Date().toISOString(),
    latestItems,
    sources: sourceEntries,
    warnings: sourceEntries
      .filter((s) => s.error)
      .map((s) => `${s.id}: ${s.error}`),
  };
}

// ---------------------------------------------------------------------------
// Merge with existing data on partial failure
// ---------------------------------------------------------------------------

function loadExistingFeed() {
  try {
    if (existsSync(JSON_PATH)) {
      return JSON.parse(readFileSync(JSON_PATH, "utf-8"));
    }
  } catch {
    // Corrupted file, start fresh
  }
  return null;
}

function mergeWithExisting(fresh, existing) {
  if (!existing) return fresh;

  // For each source that failed, backfill items from the existing feed
  for (const source of fresh.sources) {
    if (source.error && source.items.length === 0) {
      const oldSource = existing.sources?.find((s) => s.id === source.id);
      if (oldSource && oldSource.items?.length > 0) {
        source.items = oldSource.items;
        source.itemCount = oldSource.items.length;
        source.error = `${source.error} (kept ${oldSource.itemCount} cached items)`;
      }
    }
  }

  // Rebuild latestItems from merged sources
  fresh.latestItems = fresh.sources
    .flatMap((source) =>
      source.items.map((item) => ({
        ...item,
        sourceId: source.id,
        sourceName: source.name,
        jurisdiction: source.jurisdiction,
      })),
    )
    .sort((a, b) => {
      const left = a.publishedDate ? Date.parse(a.publishedDate) : 0;
      const right = b.publishedDate ? Date.parse(b.publishedDate) : 0;
      return right - left;
    });

  return fresh;
}

// ---------------------------------------------------------------------------
// Write output files
// ---------------------------------------------------------------------------

function writeJson(feed) {
  writeFileSync(JSON_PATH, JSON.stringify(feed, null, 2) + "\n", "utf-8");
}

function writeFeedDataTs(feed) {
  const itemsJson = JSON.stringify(feed.latestItems, null, 2);
  const ts = `import type { RegulationItem } from "./types";

// Auto-generated by scripts/sync-regulations.mjs — do not edit manually
export const FEED_FETCHED_AT = ${JSON.stringify(feed.fetchedAt)};

export const FEED_ITEMS: RegulationItem[] = ${itemsJson};
`;
  writeFileSync(TS_PATH, ts, "utf-8");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("Syncing regulation feeds...\n");

  const existing = loadExistingFeed();
  let feed;

  try {
    feed = await buildSnapshot();
  } catch (err) {
    console.error("Fatal error building snapshot:", err.message);
    process.exit(1);
  }

  feed = mergeWithExisting(feed, existing);

  // Write outputs
  writeJson(feed);
  writeFeedDataTs(feed);

  // Summary
  const usCount = feed.latestItems.filter((i) => i.jurisdiction === "US").length;
  const cnCount = feed.latestItems.filter((i) => i.jurisdiction === "CN").length;
  const total = feed.latestItems.length;

  console.log(`Synced ${total} items (${usCount} US, ${cnCount} CN)`);

  if (feed.warnings.length > 0) {
    console.log("\nWarnings:");
    for (const w of feed.warnings) {
      console.log(`  - ${w}`);
    }
  }

  console.log(`\nOutputs:`);
  console.log(`  ${JSON_PATH}`);
  console.log(`  ${TS_PATH}`);
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
