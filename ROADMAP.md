# TaxGuided.com — Project Roadmap & Content Plan

## Project Vision
TaxGuided.com is a global tax knowledge platform — a combination of:
- **Tax Law Database** — searchable regulations from 20+ countries
- **Q&A Community** — Stack Overflow / Quora for tax & bookkeeping
- **Comparison Tools** — side-by-side country tax system comparisons
- **Incorporation Advisor** — wizard to find optimal jurisdiction
- **SEO Content Engine** — guides, articles, and Q&A driving organic traffic

The site links to [ForeignLLCTax.com](https://foreignllctax.com) for paid tax filing services.

---

## Current State (as of April 2026)

### What's Built
| Feature | Status | Pages/Items |
|---------|--------|-------------|
| Tax Law Database (`/laws`) | ✅ Live | 20 countries, browseable by country |
| Q&A Community (`/community`) | ✅ Live | 300+ threads, Ask a Question form |
| Tax System Comparison (`/compare`) | ✅ Live | 20 countries, pick any 2-3 |
| Incorporation Advisor (`/tools/incorporate`) | ✅ Live | 3-step wizard, 20 jurisdictions |
| Tax News Feed (`/news`) | ✅ Live | IRS + China STA regulation feed |
| Creator Tax Scenarios (`/scenarios`) | ✅ Live | 15 scenarios |
| Tax Shorts (`/shorts`) | ✅ Live | 7 short-form explainers |
| Country Tax Guides | ✅ Live | 8 country system guides + 10 LLC guides |
| Free Tools | ✅ Live | 15+ calculators and assessments |
| Guides | ✅ Live | 85+ guide pages |

### Tech Stack
- **Frontend**: Next.js 16 (App Router) + Tailwind CSS v4
- **Hosting**: Cloudflare Workers (via OpenNext)
- **Domain**: taxguided.com
- **Storage**: Cloudflare KV (subscribers, Q&A submissions)
- **Git**: github.com/williamjiamin/tax-guided

---

## Phase 2: Content Crawling & Data Pipeline (NEXT — for another AI agent)

### Goal
Build a comprehensive tax law database by crawling official government sources from all 20 countries. Store raw data on Cloudflare R2, serve processed data through the site.

### Crawling Plan

#### Priority 1: US + China (already partially done)
Source data exists in `us-tax-blog` repo (~36K entries). Tasks:
1. **Import full catalog** from `us-tax-blog/data/catalog.official.full.json` (50MB)
2. **Split by source** into per-agency JSON files
3. **Upload to Cloudflare R2** bucket `taxguided-data`
4. **Index entries** with title, date, agency, category, URL
5. **Build FTS index** for search functionality

Sources already crawled:
- US IRS Forms PDF Directory (3,114 entries)
- US IRS Internal Revenue Bulletin
- US IRS News Releases
- US Federal Register (5,000 entries)
- US SEC EDGAR (5,000 entries)
- CN NPC Law Database (10,000 entries)
- CN STA Policy Library (4,964 entries)
- CN 12366 Standard Forms
- CN NFRA Regulations
- CN PBC Finance Law
- CN CSRC Regulatory Library
- CN CAC Cyber Policy
- CN SPC Court Releases

#### Priority 2: Major Economies (NEW crawling needed)
For each country, identify and crawl the primary tax authority website:

| Country | Tax Authority | URL | What to Crawl |
|---------|--------------|-----|---------------|
| UK | HMRC | gov.uk/government/organisations/hm-revenue-customs | Guidance, forms, policy papers |
| Germany | BZSt | bzst.de | Tax circulars, forms, guidance |
| France | DGFiP | impots.gouv.fr | Tax bulletins, forms |
| Japan | NTA | nta.go.jp | Tax answers, forms, circulars |
| South Korea | NTS | nts.go.kr | Tax rulings, forms |
| India | CBDT | incometaxindia.gov.in | Circulars, notifications, forms |
| Brazil | RFB | gov.br/receitafederal | Normative instructions, forms |
| Canada | CRA | canada.ca/revenue-agency | Tax folios, forms, guides |
| Australia | ATO | ato.gov.au | Rulings, guides, forms |
| Singapore | IRAS | iras.gov.sg | E-tax guides, circulars |
| Hong Kong | IRD | ird.gov.hk | Practice notes, forms |
| UAE | FTA | tax.gov.ae | Public clarifications, guides |
| Ireland | Revenue | revenue.ie | Tax and duty manuals |
| Netherlands | Belastingdienst | belastingdienst.nl | Tax guides |
| Switzerland | FTA | estv.admin.ch | Circulars, forms |
| Mexico | SAT | sat.gob.mx | Tax rules, forms |
| Indonesia | DJP | pajak.go.id | Regulations, forms |
| Estonia | EMTA | emta.ee | Tax guides, forms |

#### Crawling Architecture
```
scripts/
├── crawlers/
│   ├── base-crawler.mjs          # Shared fetch + parse + rate-limit logic
│   ├── us-irs-crawler.mjs        # IRS-specific (already exists in us-tax-blog)
│   ├── cn-sta-crawler.mjs        # China STA (already exists)
│   ├── uk-hmrc-crawler.mjs       # HMRC guidance pages
│   ├── sg-iras-crawler.mjs       # IRAS e-tax guides
│   ├── ... (one per country)
│   └── run-all.mjs               # Orchestrator script
├── upload-to-r2.mjs              # Upload crawled data to Cloudflare R2
├── build-search-index.mjs        # Build FTS index from crawled data
└── generate-content.mjs          # Auto-generate Q&A + articles from data
```

#### Rate Limiting & Politeness
- Max 1 request per second per domain
- Respect robots.txt
- Set proper User-Agent: `TaxGuided-Bot/1.0 (+https://taxguided.com/bot)`
- Cache responses with ETag/If-Modified-Since
- Store raw HTML/JSON in R2 with checksums for dedup

### Storage Plan (Cloudflare R2)

```
taxguided-data/                    # R2 bucket
├── catalog/
│   ├── us/
│   │   ├── irs-forms.json         # IRS forms index
│   │   ├── irs-irb.json           # Internal Revenue Bulletins
│   │   ├── irs-news.json          # News releases
│   │   └── federal-register.json  # Federal Register entries
│   ├── cn/
│   │   ├── sta-policy.json        # STA policy library
│   │   ├── npc-laws.json          # NPC law database
│   │   └── ...
│   ├── gb/
│   │   └── hmrc-guidance.json
│   └── ... (per country)
├── archive/                       # Raw crawled HTML/PDF snapshots
│   ├── us/irs/2026-03-09/...
│   └── ...
├── search/
│   └── fts-index.json             # Full-text search index
└── generated/
    ├── qa-threads/                # Auto-generated Q&A content
    └── articles/                  # Auto-generated SEO articles
```

### Data Pipeline Flow
```
1. Crawl → scripts/crawlers/*.mjs
   ↓
2. Parse & normalize → extract title, date, summary, URL, category
   ↓
3. Upload to R2 → scripts/upload-to-r2.mjs
   ↓
4. Build search index → scripts/build-search-index.mjs
   ↓
5. Generate content → scripts/generate-content.mjs
   ↓
6. Update site data → data/catalog/*.json + src/lib/qa/*.ts
   ↓
7. Build & deploy → npm run cf:deploy
```

---

## Phase 3: SEO Content Generation (for another AI agent)

### Q&A Generation Plan
Generate Q&A threads for every combination of country × topic:

**Topics per country** (8 topics × 20 countries = 160 threads):
1. How does corporate/business tax work?
2. Individual income tax brackets and deductions?
3. VAT/GST: rates, registration, thresholds?
4. Withholding tax on dividends, interest, royalties?
5. Tax filing deadlines and penalties for late filing?
6. Starting a business: entity types, registration, costs?
7. Tax treaties: which countries, key benefits?
8. Digital nomad / remote worker tax implications?

**Cross-border topics** (20 additional):
- US-China double taxation avoidance
- UK-EU post-Brexit tax implications
- Singapore-India DTAA benefits
- Transfer pricing for multinationals
- FBAR and FATCA reporting
- CRS (Common Reporting Standard) obligations
- ... etc.

**Industry-specific** (30 additional):
- E-commerce sales tax in [country]
- Cryptocurrency taxation in [country]
- Freelancer/contractor tax in [country]
- Real estate investment tax in [country]
- ... etc.

**Total target**: 500+ Q&A threads (currently 300+, need 200+ more)

### Article Generation Plan
Generate long-form SEO articles from the tax law database:

**Article types**:
1. "[Country] Tax System: Complete Guide for [Year]" (20 articles)
2. "[Country] vs [Country]: Tax Comparison for Businesses" (30 articles)
3. "How to Start a Business in [Country]: Tax & Legal Guide" (20 articles)
4. "Tax Treaty Between [Country A] and [Country B]" (50 articles)
5. "[IRS Form/Regulation] Explained: What You Need to Know" (100 articles)
6. "[Country] [Tax Type] Rate [Year]: Brackets & Deadlines" (40 articles)

**Total target**: 260+ SEO articles (currently ~85 guides)

### Content Quality Rules
- Every Q&A answer must cite 2+ official government sources
- Every article must link to the original regulation/law
- Disclaimer on every page: "Educational content only, not tax advice"
- No made-up tax rates — all data from official sources
- Include "Last updated" date on every piece of content
- nofollow on all external links except government sources

---

## Phase 4: Platform Features (Future)

### User Accounts
- Email/password registration (or magic link)
- User profiles with history (questions asked, answers given)
- Saved/bookmarked Q&A threads
- Email notifications for answers to your questions

### Expert Verification System
- Users can claim professional credentials (CPA, EA, tax attorney)
- Verification: link to professional registry or upload license
- Verified experts get a badge on their answers
- Disclaimer: badge indicates credentials, not endorsement

### Voting System
- Upvote/downvote on answers (stored in KV)
- "Helpful" count visible on each answer
- Sort answers by votes (most helpful first)
- Reputation points for contributors

### Search & Discovery
- Full-text search across all content (laws, Q&A, guides)
- Search suggestions / autocomplete
- "Related questions" sidebar on Q&A threads
- "People also ask" sections on guide pages

### Analytics & Monitoring
- Cloudflare Web Analytics (already set up)
- Track search queries (identify content gaps)
- Monitor which countries/topics get most traffic
- A/B test CTAs to ForeignLLCTax.com

---

## Phase 5: Monetization (Future)

### Revenue Streams
1. **ForeignLLCTax.com cross-sell** — CTAs on relevant pages ($49-199/filing)
2. **Affiliate partnerships** — Firstbase, doola, Alohi Fax
3. **Google AdSense** — once site has 20+ high-quality pages (already exceeds this)
4. **Premium Q&A** — paid access to expert-verified answers
5. **Sponsored country guides** — accounting firms sponsor their country's page
6. **API access** — sell access to the tax law database via API

### AdSense Prerequisites
- [x] 20+ pages of original content
- [x] Privacy policy, terms, disclaimer
- [x] Clear site identity and branding
- [ ] Domain age > 3 months
- [ ] Consistent publishing cadence
- [ ] Apply at google.com/adsense

---

## Immediate Next Steps (Handoff to AI Agent)

### Task 1: Import Full US-Tax-Blog Catalog
```bash
# The full catalog is at:
# /Users/lipaiwang/Tax Filer/us-tax-blog/data/catalog.official.full.json (50MB)
# Split it by source and upload to R2
node scripts/crawlers/import-existing-catalog.mjs
```

### Task 2: Crawl 18 New Countries
```bash
# Start with English-language tax authorities (easier to parse):
# UK (HMRC), Canada (CRA), Australia (ATO), Singapore (IRAS),
# Ireland (Revenue), Hong Kong (IRD), UAE (FTA)
node scripts/crawlers/run-all.mjs --countries=gb,ca,au,sg,ie,hk,ae
```

### Task 3: Generate 200 Q&A Threads
```bash
# Use the crawled data + tax system files to generate structured Q&A
node scripts/generate-content.mjs --type=qa --count=200
```

### Task 4: Generate 100 SEO Articles
```bash
# Country guides, comparison articles, form explainers
node scripts/generate-content.mjs --type=articles --count=100
```

### Task 5: Build Search Index
```bash
# Full-text search across all content
node scripts/build-search-index.mjs
```

---

## File Structure Reference

```
tax-guided/
├── data/
│   ├── catalog/           # Per-country regulation catalogs (20 JSON files)
│   │   ├── us.json, cn.json, gb.json, ...
│   └── regulations.latest.json  # Live regulation feed
├── scripts/
│   ├── sync-regulations.mjs     # Daily feed sync
│   ├── crawlers/                # Country-specific crawlers (TODO)
│   ├── upload-to-r2.mjs        # R2 upload (TODO)
│   ├── build-search-index.mjs  # FTS index builder (TODO)
│   └── generate-content.mjs    # Q&A + article generator (TODO)
├── src/
│   ├── app/
│   │   ├── laws/          # Tax law database browser
│   │   ├── community/     # Q&A community
│   │   ├── compare/       # Country comparison tool
│   │   ├── scenarios/     # Creator tax scenarios
│   │   ├── shorts/        # Tax short explainers
│   │   ├── news/          # Regulation news feed
│   │   ├── guides/        # 85+ guide pages + 8 country guides
│   │   ├── tools/         # 15+ free tools + incorporation advisor
│   │   └── api/           # API routes (subscribe, qa, regulations)
│   └── lib/
│       ├── tax-data/      # 20 country tax system files
│       ├── laws/          # Law catalog types + index
│       ├── regulations/   # Regulation feed types + data
│       ├── scenarios/     # Creator scenario data
│       ├── shorts/        # Tax short data
│       ├── qa/            # Q&A catalog + 20 content files (~30K lines)
│       └── tools/         # Incorporation advisor data
├── wrangler.toml          # Cloudflare config (taxguided.com)
├── package.json
└── ROADMAP.md             # This file
```

---

## Key URLs
- **Live site**: https://taxguided.com
- **GitHub**: https://github.com/williamjiamin/tax-guided
- **Workers**: https://tax-guided.williamjiaminus.workers.dev
- **Sister site**: https://foreignllctax.com (paid filing)
- **Data source**: https://github.com/williamjiamin/us-tax-blog
