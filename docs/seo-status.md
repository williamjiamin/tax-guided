# SEO status — what's fixed, what's running, what's left

Snapshot: 2026-05-03. Update this file when you change anything in this list.

## What's fully automated now

| System | Cadence | What it does | Disable |
|---|---|---|---|
| **Cross-project content drip** | Daily 05:23 UTC | Pulls fresh tax news from foreignllctax.com router, generates commentary via Workers AI, commits to `auto-news.ts`, auto-deploys via cf:deploy. | `gh variable set CROSS_PROJECT_DRIP_DISABLED true -R williamjiamin/tax-guided` |
| **SEO auto-nudge** (NEW) | Daily 06:11 UTC | Picks 10 priority URLs (homepage + rotating hub + freshest news/scenarios/Q&A we haven't pinged in 30+ days), POSTs to IndexNow API. Bing/Yandex/Naver/Seznam pick up the change within hours. | `gh variable set SEO_AUTO_NUDGE_DISABLED true -R williamjiamin/tax-guided` |
| **Sitemap freshness** | Every deploy | `sitemap.xml` regenerates with current `lastmod` on each build. The cross-project-drip workflow triggers a deploy daily so Google's next sitemap fetch sees fresh `lastmod`. | n/a (built into sitemap.ts) |
| **HTTP/HTTPS + www/bare canonicalization** | Every request | Middleware 301-redirects all 4 URL variants to `https://taxguided.com/`. | revert `src/middleware.ts` |
| **Cloudflare Workers prerender cache** | Every request | Hub pages and SSG'd routes serve from edge cache when warm. | n/a |
| **GSC sitemap discovery** | Continuous | 12 sitemaps registered in GSC: index + main + 11 sub-sitemaps (forms/states/treaties/etc). Google fetches on its own schedule. | unsubmit in GSC sitemaps tab |

The 06:11 UTC time was picked deliberately — runs ~50 min after the
content-drip job at 05:23 UTC, so today's freshly-generated news
commentary is included in today's nudge batch.

## What's manual but rare

| Action | When you do it | Notes |
|---|---|---|
| GSC URL Inspection daily ritual | When `Crawled - currently not indexed` is rising | Per `seo-lessons.md` from foreignllctax — quota is ~10/day, only matters if Google has actually crawled but rejected. Currently the bottleneck is "Discovered queue", which is what auto-nudge feeds. |
| GSC VALIDATE FIX click | After fixing a "Why pages aren't indexed" bucket | Already done for the two open issues (canonical + alt-canonical) on 2026-05-02. |
| Backlink outreach | Continuous | Real publications + affiliate partners. Per the lessons, this is the dominant authority lever. Code can't fix it. |
| GSC Sitemaps re-fetch | If `Last read` date in GSC is >7d old | Click the sitemap, "Refresh" icon. Rarely needed. |

## GSC issues — current status

Captured directly from Search Console (Pages → Why pages aren't indexed):

| Issue | URLs affected | Status | Root cause | Fix shipped |
|---|---|---|---|---|
| Duplicate without user-selected canonical | 3 | **Validation started 2026-05-02** | All 4 hostname/protocol variants of the homepage served 200; no canonical tag. | `<link rel="canonical">` added in layout + middleware 301 collapses HTTP→HTTPS + www→bare. |
| Alternative page with proper canonical tag | 1 | **Validation started 2026-05-02** | `https://www.taxguided.com/laws/sg` had a canonical pointing at the bare host but the www version itself wasn't redirected. | Same middleware 301 fix; future crawls of any www URL get redirected before content even loads. |

These are the **only** two reasons in the GSC "Why pages aren't indexed"
panel today. There is no `Discovered – currently not indexed` bucket
yet because Google hasn't processed the recently-submitted sitemaps.
That bucket will likely appear over the next 1-2 weeks as Google starts
queuing the 1,800+ new URLs from the sub-sitemaps. **That's the bucket
the daily auto-nudge feeds.**

## Indexed page count

- Indexed: 4 (as of GSC data 26/04/2026, before the structural fixes)
- Not indexed: 4 (3 + 1 from the table above)
- Currently in re-validation: all 4 not-indexed pages

Once the validation completes (1-7 days), expect indexed to climb to 7+
and the not-indexed bucket to drop to 0 or shift into `Discovered`.

## What's left for you to do

### Now (today)
Nothing. Everything blocking on automation is wired.

### Tomorrow morning (when GSC quota resets ~24h after first request today)
1. GSC → URL Inspection on the homepage. Look at the canonical-validation
   status. If still `In progress`, keep waiting — it usually takes 3-7 days.
2. (Optional) Use the daily ~10-URL quota to nudge highest-value hub
   pages: `/community/all`, `/forms`, `/treaties`, `/case-law`,
   `/historical`, `/calculators`, `/states`, `/statutes`, `/glossary`,
   `/community/page/2`. The auto-nudge already pings IndexNow for these,
   but a manual GSC request adds a parallel signal to Google specifically.

### This week
1. Watch GSC → Pages report. Indexed count should start climbing.
2. Watch GSC → Sitemaps report. "Discovered pages" should grow as Google
   processes the 12 sub-sitemaps.
3. Watch GSC → Crawl Stats. If "Total crawl requests" is climbing, the
   SEO recovery is on track. If flat, your authority signal is the
   constraint and you need backlinks (see below).

### This month — the dominant lever per the foreignllctax lessons
Backlink outreach. Per `docs/seo-lessons.md` (foreignllctax):
> "Google's crawl budget for a domain scales with perceived authority.
> Backlinks are the dominant signal. Even 3-5 high-quality inbound links
> can dramatically increase how many pages/day Google crawls."

Targets in priority order:
1. Existing affiliate partners (Firstbase, doola, Alohi, etc) — ask for
   reciprocal links from their resources/help pages to relevant Q&A or
   guide pages.
2. Free directories: AlternativeTo, G2, Capterra, ProductHunt.
3. Reddit/Discord/Twitter — genuine, helpful answers in `r/tax`,
   `r/IRS`, `r/Entrepreneur`, `r/digitalnomad` etc., linking to the
   relevant page as a citation. One per thread, must add value.
4. Guest posts on small business / tax blogs.

Track every backlink obtained in a simple log so you can correlate
backlink growth with crawl-rate growth in GSC.

### If indexing stalls after 4 weeks
Re-read `docs/seo-lessons.md` from foreignllctax. The decision tree
there tells you which buckets matter and which don't. The single most
important question to answer: is the dominant "not indexed" reason
`Discovered – currently not indexed` (crawl-budget problem, code can't
fix) or `Crawled – currently not indexed` (content quality problem,
investigate the rejected pages)?

## Background

- Sitemaps registered: 12
- Total URLs in sitemaps: ~1,840
- IndexNow key: `edb5407b9bfef3806250e60fd40a949d` (also stored in
  `INDEXNOW_KEY` GitHub secret + at `public/<key>.txt` on the live site)
- Cross-project router source: `https://foreignllctax.com/tax-news-router-output.json`
- Daily auto-nudge state: `.cron/seo-nudge-history.json` (committed,
  trimmed to 30 days)
