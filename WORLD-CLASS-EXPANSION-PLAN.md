# TaxGuided.com — World-Class Expansion Plan

**Goal**: Make taxguided.com the most comprehensive, source-based, SEO-optimized tax guide in the world. Cover every jurisdiction, every form, every treaty, every historical rate, and every major case — all linked to primary sources.

**Audience for this document**: AI agents (Codex, Claude, Gemini, etc.) tasked with crawling, generating, and integrating tax content.

**Project context**:
- Stack: Next.js 16 (App Router) + Tailwind v4 on Cloudflare Workers via OpenNext
- Storage: Cloudflare KV (small data), Cloudflare R2 (bulk data — to be added)
- Repo: /Users/lipaiwang/tax-guided
- GitHub: github.com/williamjiamin/tax-guided
- Domain: taxguided.com
- All content lives as TypeScript data files; SSR routes consume them

---

## Current State (Inventory as of April 2026)

### Content
| Asset | Count | Coverage |
|-------|-------|----------|
| Q&A threads | ~1,000 | 20 countries + cross-border + industry |
| Editorial guides | 52 | Country, comparison, treaty, form, rate, niche |
| Static guides (page.tsx) | 84 | Forms, country LLC tax, transfer pricing |
| Tax scenarios | 47 | Original 16 + Codex 31 |
| Tax shorts | 37 | Original 7 + Codex 30 |
| Free tools | 23 | Calculators, wizards, assessments |
| News commentary | 20 | Original analysis on rule changes |
| Tax law catalog | 20 countries | 1,239 lines total — mostly metadata |
| Tax system data | 20 countries | Brackets, rates, VAT, deadlines |

### Gaps (what makes it NOT world-class yet)
- **No full statutory text** (IRC, country tax codes)
- **No historical rate tables** (we only have current year)
- **No treaty library** (we link to treaties, no full text)
- **No case law database** (no Tax Court / Supreme Court decisions)
- **No sub-national coverage** (no US state, Canadian province, Indian state pages)
- **No forms library** (we discuss forms; we don't host them with metadata)
- **No glossary** (no central tax term dictionary)
- **No multilingual content** (English-only)
- **No live computation engines** (calculators are basic)
- **No practitioner/firm directory**

---

## The 12 Expansion Pillars

Each pillar = one parallel workstream. Pillars are independent and can run concurrently. Numbers are SEO traffic priority (1 = highest impact).

| # | Pillar | Est. pages | SEO impact | Difficulty |
|---|--------|-----------|------------|-----------|
| 1 | **Forms Library** | 5,000+ | 🔥🔥🔥 | Medium |
| 2 | **State / Provincial Tax** | 4,000+ | 🔥🔥🔥 | Medium |
| 3 | **Tax Calculators** | 200+ | 🔥🔥🔥 | High |
| 4 | **Tax Treaties Full Text** | 3,000+ | 🔥🔥 | Medium |
| 5 | **Historical Rate Tables** | 500+ | 🔥🔥 | Low |
| 6 | **Statutory Text Database** | 50,000+ | 🔥🔥 | High |
| 7 | **Case Law Database** | 20,000+ | 🔥 | High |
| 8 | **Glossary / Terminology** | 3,000+ | 🔥🔥 | Low |
| 9 | **Compliance Calendar** | 100+ | 🔥🔥 | Low |
| 10 | **Industry Tax Guides** | 500+ | 🔥🔥 | Medium |
| 11 | **Multilingual Translation** | All x N | 🔥 | High |
| 12 | **Practitioner Directory** | 10,000+ | 🔥 | High |

**Total potential pages**: 100,000+ across all pillars.

---

## Storage Architecture (BUILD THIS FIRST)

The current site uses TypeScript data files imported at build time. That doesn't scale to 100K+ pages. Add Cloudflare R2 for bulk data.

### Setup checklist (one-time)
```bash
# 1. Create R2 bucket
wrangler r2 bucket create taxguided-data

# 2. Add binding to wrangler.toml:
[[r2_buckets]]
binding = "TAX_DATA"
bucket_name = "taxguided-data"

# 3. Create KV namespace for indexes/search
wrangler kv:namespace create "TAX_INDEX"
```

### Bucket organization
```
taxguided-data/
├── statutes/
│   ├── us/
│   │   ├── irc/                    # Internal Revenue Code by section
│   │   │   ├── section-61.json     # § 61 (gross income)
│   │   │   ├── section-162.json    # § 162 (trade/business expenses)
│   │   │   └── ... (~9,800 sections)
│   │   ├── treas-regs/             # 26 CFR
│   │   ├── revenue-rulings/
│   │   ├── revenue-procedures/
│   │   └── notices/
│   ├── gb/
│   │   ├── ita-2007/               # Income Tax Act 2007
│   │   ├── cta-2010/               # Corporation Tax Act 2010
│   │   ├── itepa-2003/             # Income Tax (Earnings & Pensions) Act 2003
│   │   └── tcga-1992/              # Taxation of Chargeable Gains Act 1992
│   ├── de/
│   │   ├── estg/                   # Einkommensteuergesetz
│   │   └── kstg/                   # Körperschaftsteuergesetz
│   ├── ... (per country)
│
├── forms/
│   ├── us/irs/
│   │   ├── form-5472.json          # Metadata + PDF URL + instructions URL
│   │   ├── form-1040.json
│   │   └── ... (~3,000 forms)
│   ├── gb/hmrc/
│   ├── ... (per country)
│
├── treaties/
│   ├── us-gb-1980.json             # US-UK treaty + protocols
│   ├── us-cn-1984.json             # US-China DTAA
│   ├── us-de-1989.json
│   └── ... (~3,000 bilateral treaties)
│
├── case-law/
│   ├── us/tax-court/
│   │   ├── 2024/
│   │   ├── 2023/
│   │   └── ... (back to 1924)
│   ├── us/supreme-court/
│   ├── us/circuit-courts/
│   └── ... (per country)
│
├── historical-rates/
│   ├── us-corporate-1909-2026.json  # Year-by-year corporate rate
│   ├── us-individual-1913-2026.json # Year-by-year individual brackets
│   ├── us-capital-gains-1913-2026.json
│   ├── gb-corporation-1965-2026.json
│   └── ... (per country, per tax type)
│
├── states/
│   ├── us-ca/                       # California
│   │   ├── overview.json
│   │   ├── rates-2026.json
│   │   ├── forms.json
│   │   └── deadlines.json
│   ├── us-ny/, us-tx/, ...
│   ├── ca-on/, ca-bc/, ...           # Canadian provinces
│   ├── in-mh/, in-ka/, ...           # Indian states
│   └── ... (~200 sub-national)
│
├── glossary/
│   ├── terms-en.json                 # English tax terms
│   ├── terms-es.json
│   └── ... (per language)
│
└── search/
    ├── statutes-index.json           # FTS index for statutes
    ├── case-law-index.json
    └── full-index.json               # Combined search
```

### Routes that consume R2 data
```
/statutes/[country]/[code]/[section]
/forms/[country]/[form-number]
/treaties/[country-a]-[country-b]
/case-law/[country]/[court]/[year]/[case-id]
/historical/[country]/[tax-type]/[year]
/states/[country]-[state]
/glossary/[term]
```

All use SSR + ISR (revalidate: 86400) reading from R2 via the Workers binding.

---

## PILLAR 1: Forms Library

**Vision**: Every tax form ever issued, with metadata, PDF, instructions, e-file status, due dates, and links to related guides.

### Sources to crawl

| Country | Source | URL | Approx forms |
|---------|--------|-----|--------------|
| US | IRS Forms & Pubs | irs.gov/forms-instructions | 3,000+ |
| US | Federal Register (proposed forms) | federalregister.gov | Live |
| UK | HMRC Forms | gov.uk/government/collections/forms | 1,500+ |
| Canada | CRA Forms | canada.ca/en/revenue-agency/services/forms-publications/forms.html | 800+ |
| Germany | BZSt Formulare | formulare-bfinv.de | 500+ |
| France | DGFiP Formulaires | impots.gouv.fr/formulaires | 400+ |
| Japan | NTA 申告書 | nta.go.jp/taxes/tetsuzuki/shinsei | 600+ |
| South Korea | NTS Forms | nts.go.kr (forms section) | 300+ |
| India | Income Tax India Forms | incometaxindia.gov.in/Pages/forms.aspx | 500+ |
| Brazil | RFB Formulários | gov.br/receitafederal/pt-br/centrais-de-conteudo/formularios | 400+ |
| Australia | ATO Forms | ato.gov.au/forms-and-instructions | 600+ |
| Singapore | IRAS Forms | iras.gov.sg/quick-links/forms | 200+ |
| Hong Kong | IRD Forms | ird.gov.hk/eng/paf/iso.htm | 200+ |
| UAE | FTA Forms | tax.gov.ae | 50+ |
| Ireland | Revenue Forms | revenue.ie/en/online-services/services/manage-your-record/forms.aspx | 400+ |
| Netherlands | Belastingdienst Formulieren | belastingdienst.nl/formulieren | 300+ |
| Switzerland | ESTV Formulare | estv.admin.ch (cantons + federal) | 600+ |
| Mexico | SAT Trámites | sat.gob.mx (formatos) | 300+ |
| Indonesia | DJP Formulir | pajak.go.id (formulir) | 300+ |
| Estonia | EMTA Vormid | emta.ee (vormid) | 150+ |

### Schema (R2 JSON)
```typescript
interface TaxForm {
  id: string;                  // e.g. "us-irs-5472"
  country: string;             // ISO code
  authority: string;           // "IRS", "HMRC", etc.
  formNumber: string;          // "5472"
  formName: string;            // "Information Return of a 25% Foreign-Owned U.S. Corporation"
  description: string;         // 1-2 sentence summary
  category: string;            // "informational-return", "income-tax", "withholding"
  currentRevisionYear: number; // 2025
  pdfUrl: string;              // direct URL to current PDF
  instructionsUrl: string | null;
  filingMethod: ("paper" | "efile" | "fax")[];
  whoMustFile: string;         // plain-English description
  dueDates: Array<{
    description: string;       // "Annual return"
    date: string;              // "2026-04-15" or "15-04" (recurring)
    extension: string | null;  // form to file for extension
  }>;
  penalty: string | null;      // e.g. "$25,000 per form per year"
  relatedForms: string[];      // IDs of related forms
  relatedGuides: string[];     // slugs on taxguided.com
  historicalRevisions: Array<{ year: number; pdfUrl: string }>;
  lastUpdated: string;         // ISO datetime
  sources: Array<{ label: string; url: string }>;
}
```

### Site routes
- `/forms/[country]` — index (e.g. `/forms/us` lists all 3,000 IRS forms)
- `/forms/[country]/[form-id]` — detail page (e.g. `/forms/us/5472`)
- `/forms` — global index searchable by form number

### Handoff prompt for AI agent
```
Crawl all tax forms from {SOURCE_URL}. For each form:
1. Extract form number, name, description, category, current revision year
2. Get PDF download URL and instructions URL  
3. Determine filing methods (paper/efile/fax) from official source
4. Extract "who must file" criteria from instructions intro
5. Find due dates and penalties from instructions
6. Identify related forms (cross-references in instructions)
7. Output as JSON matching TaxForm schema
8. Upload to R2 bucket at forms/{country}/{authority}/{form-id}.json
9. Generate FTS index entry
10. Respect robots.txt; max 1 req/sec per domain; User-Agent: TaxGuided-Bot/1.0
```

### Update cadence
- New forms: weekly check
- Form revisions: monthly check (compare PDF checksums)
- Due dates: quarterly review

---

## PILLAR 2: State / Provincial / Sub-national Tax

**Vision**: Comprehensive coverage of every sub-national tax jurisdiction. Massive SEO opportunity since each state/province has hundreds of monthly searches for "[state] income tax 2026", "[state] sales tax", etc.

### Targets

| Jurisdiction | Sub-units | Source |
|--------------|-----------|--------|
| US | 50 states + DC + territories | state revenue dept websites |
| Canada | 13 provinces/territories | provincial finance ministries |
| India | 28 states + 8 UTs | state commercial tax depts |
| Australia | 6 states + 2 territories | state revenue offices |
| Germany | 16 Länder | state finance ministries |
| Brazil | 26 states + DF | secretarias da fazenda |
| Mexico | 31 states + CDMX | secretarías de finanzas |
| Switzerland | 26 cantons | cantonal tax offices |
| Spain | 17 autonomous communities | Hacienda regional |

### Schema
```typescript
interface SubnationalTax {
  id: string;                  // "us-ca", "ca-on", "in-mh"
  country: string;
  state: string;               // "California", "Ontario", "Maharashtra"
  code: string;                // "CA", "ON", "MH"
  authority: { name: string; url: string };
  
  individualTax: {
    hasOwnTax: boolean;
    type: "flat" | "progressive" | "none";
    brackets?: Array<{ min: number; max: number | null; rate: number }>;
    standardDeduction?: number;
    currency: string;
  };
  
  corporateTax: {
    hasOwnTax: boolean;
    rate?: number;
    notes: string;
  };
  
  salesTax: {
    hasOwnTax: boolean;
    rate?: number;
    type: "VAT" | "GST" | "sales" | "use" | "none";
    nexusRules: string;
  };
  
  propertyTax: { rate: string; notes: string };
  inheritanceTax: { hasOwnTax: boolean; rate?: number };
  filingDeadline: string;
  forms: string[];             // form IDs
  taxYear: string;             // "2026"
  sources: Array<{ label: string; url: string }>;
}
```

### Site routes
- `/states/[country-state]` — e.g. `/states/us-ca`, `/states/ca-on`
- `/states/[country]` — index for that country

### Handoff prompt
```
For each sub-national jurisdiction in [country]:
1. Identify the official tax authority website
2. Extract individual income tax structure (rates, brackets)
3. Extract corporate tax (if separate from federal)
4. Extract sales/VAT/GST rates and nexus rules  
5. Identify property tax rates (range if varies by locality)
6. Find filing deadlines for state returns
7. List required forms
8. Output as SubnationalTax JSON
9. Upload to R2: states/{country}-{state-code}.json
10. Generate page content for /states/{country-state}
```

---

## PILLAR 3: Tax Calculators

**Vision**: Working calculators for every major tax computation. These are massive SEO + utility magnets.

### Calculator inventory

**Per country (× 20)**:
- Income tax calculator (using current brackets)
- Self-employment / freelancer tax calculator  
- Corporate tax calculator
- VAT/GST registration threshold checker
- Capital gains tax calculator
- Withholding calculator (treaty-aware)
- Take-home pay calculator
- Tax refund estimator

**Cross-border**:
- Treaty withholding lookup (any pair of countries × payment type)
- Foreign tax credit estimator (US)
- FEIE vs FTC comparison (US expat)
- Permanent establishment risk calculator
- Transfer pricing arm's-length range

**Historical**:
- "What would I have paid in [year]?" calculator (uses historical brackets)
- Inflation-adjusted lifetime tax burden

### Implementation pattern

Each calculator = a client component + a data file with rules.

```typescript
// src/lib/calculators/types.ts
export interface CalculatorRule {
  id: string;
  country: string;
  type: "income-tax" | "vat" | "cgt" | "withholding" | "se-tax";
  taxYear: number;
  formula: CalculatorFormula;     // see below
  sources: Source[];
}

export type CalculatorFormula = 
  | { kind: "progressive"; brackets: Bracket[]; deduction: number }
  | { kind: "flat"; rate: number; threshold: number }
  | { kind: "tiered-with-additions"; tiers: Tier[]; surcharges: Surcharge[] };
```

### Site routes
- `/calculators/[country]/[type]` — e.g. `/calculators/us/income-tax`
- `/calculators/treaty-withholding` — bilateral lookup
- `/calculators/historical/[country]/[year]` — historical calc

---

## PILLAR 4: Tax Treaties Full Text

**Vision**: Searchable full text of every bilateral DTA (~3,000 globally), with article-by-article breakdowns and rate matrices.

### Sources

| Maintainer | URL | Coverage |
|-----------|-----|----------|
| OECD | oecd.org/tax/treaties | Most modern treaties |
| US Treasury | home.treasury.gov/policy-issues/tax-policy/international-tax | All US treaties |
| IRS | irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z | US treaties |
| HMRC | gov.uk/government/collections/tax-treaties | UK treaties |
| Each country's tax authority | (varies) | Their own treaties |

### Schema
```typescript
interface TaxTreaty {
  id: string;                  // "us-gb-2002" (latest protocol year)
  countryA: string;            // "US"
  countryB: string;            // "GB"
  signedDate: string;
  effectiveDate: string;
  protocolDates: string[];     // amendments
  fullTextUrl: string;         // PDF on treasury/gov site
  fullTextHtmlUrl: string | null;
  
  withholdingMatrix: {
    dividends: { individualRate: number; corporateRate: number; conditions: string };
    interest: { rate: number; exceptions: string };
    royalties: { rate: number; type: string };
    technicalServices: number | null;
  };
  
  articles: Array<{
    number: number;            // Article 1, 2, ...
    title: string;             // "Persons Covered", "Taxes Covered"
    summary: string;           // plain-English
    fullText: string;          // verbatim
  }>;
  
  permanentEstablishment: {
    constructionThreshold: string;  // "12 months"
    serviceThreshold: string | null;
    dependentAgentRules: string;
  };
  
  capitalGains: { realEstateCarveOut: boolean; substantialShareholding: boolean };
  pensions: { taxedIn: "source" | "residence" | "split"; notes: string };
  studentClause: boolean;
  teachersClause: boolean;
  exchangeOfInformation: boolean;
  mli: { covered: boolean; mliEffectiveDate: string | null };
  
  lastUpdated: string;
  sources: Source[];
}
```

### Site routes
- `/treaties` — global index
- `/treaties/[country-a]-[country-b]` — e.g. `/treaties/us-gb`
- `/treaties/[country]` — all treaties for one country

---

## PILLAR 5: Historical Rate Tables

**Vision**: Year-by-year tables of every tax rate ever set, with citations to enacting legislation.

### Coverage targets

| Country | Tax type | Earliest year |
|---------|----------|--------------|
| US | Federal individual income tax | 1913 |
| US | Federal corporate income tax | 1909 |
| US | Capital gains tax | 1913 |
| US | Estate tax | 1916 |
| US | Payroll tax (FICA) | 1937 |
| US | State income tax (per state) | varies |
| UK | Income tax | 1799 |
| UK | Corporation tax | 1965 |
| UK | VAT | 1973 |
| UK | Capital gains tax | 1965 |
| Germany | Einkommensteuer | 1920 |
| France | Impôt sur le revenu | 1914 |
| Japan | 所得税 | 1887 |
| ... | ... | ... |

### Sources
- US: Tax Policy Center historical tables, Tax Foundation
- UK: HMRC archived rates, Institute for Fiscal Studies
- Each country: tax authority historical archives + legislative databases

### Schema
```typescript
interface HistoricalRate {
  id: string;                       // "us-individual-1986"
  country: string;
  taxType: string;                  // "individual-income"
  year: number;
  brackets: Array<{
    min: number;
    max: number | null;
    rate: number;
    filingStatus?: "single" | "mfj" | "mfs" | "hoh";
  }>;
  inflationAdjustedTo2026: Array<{
    min: number;
    max: number | null;
    rate: number;
  }>;
  enactingLegislation: { name: string; citation: string; url: string };
  notes: string;
  sources: Source[];
}
```

### Site routes
- `/historical/[country]/[tax-type]` — full timeline
- `/historical/[country]/[tax-type]/[year]` — specific year detail
- `/historical/comparison/[country]/[tax-type]?from=1980&to=2026` — comparison view

### SEO opportunity
- "What was the [country] tax rate in [year]?" — high search volume
- "Tax history of [country]" — evergreen authoritative content
- Used by economists, journalists, policy analysts (high backlink potential)

---

## PILLAR 6: Statutory Text Database

**Vision**: Full text of every primary tax statute, organized by section, with annotations and case law cross-references.

### Targets (highest priority)

| Country | Statute | Sections |
|---------|---------|----------|
| US | Internal Revenue Code (26 USC) | ~9,800 |
| US | Treasury Regulations (26 CFR) | ~10,000 |
| UK | Income Tax Act 2007 | 1,034 |
| UK | Corporation Tax Act 2009 + 2010 | 1,330 |
| UK | TCGA 1992 | 290 |
| UK | VATA 1994 | 100 |
| Germany | EStG, KStG, UStG, AO | ~2,000 |
| France | Code général des impôts | ~3,000 |
| Japan | 所得税法, 法人税法, 消費税法 | ~600 |
| India | Income Tax Act 1961 | 298 sections + 14 schedules |
| Canada | Income Tax Act | 260 sections |

### Sources

| Country | Source | URL |
|---------|--------|-----|
| US | Cornell Law / OLRC | uscode.house.gov |
| US | eCFR (regs) | ecfr.gov |
| UK | legislation.gov.uk | legislation.gov.uk |
| Germany | gesetze-im-internet.de | gesetze-im-internet.de |
| France | Légifrance | legifrance.gouv.fr |
| Japan | e-Gov 法令検索 | elaws.e-gov.go.jp |
| India | India Code | indiacode.nic.in |
| Canada | laws-lois.justice.gc.ca | laws-lois.justice.gc.ca |

### Schema
```typescript
interface StatuteSection {
  id: string;                  // "us-irc-61"
  country: string;
  statute: string;             // "26 USC", "ITA 2007"
  section: string;             // "61", "S.1"
  subsection: string | null;
  title: string;               // "Gross income defined"
  fullText: string;            // verbatim, possibly HTML-formatted
  effectiveDate: string;
  amendmentHistory: Array<{
    date: string;
    publicLaw?: string;        // "Pub. L. 117-169"
    description: string;
  }>;
  crossReferences: string[];   // other section IDs
  treasuryRegs: string[];      // for US: 26 CFR sections that interpret this
  caseLaw: string[];           // case IDs that cite this section
  guidesOnSite: string[];      // taxguided.com slugs
  lastUpdated: string;
  sources: Source[];
}
```

### Site routes
- `/statutes/[country]/[statute]/[section]` — full text
- `/statutes/[country]/[statute]` — TOC
- `/statutes/[country]` — statute index
- `/statutes/search?q=...` — full-text search

---

## PILLAR 7: Case Law Database

**Vision**: Indexed tax court decisions with summaries, holdings, and statutory cross-refs.

### Sources

| Court | URL | Approx cases |
|-------|-----|--------------|
| US Tax Court | ustaxcourt.gov | 80,000+ |
| US Supreme Court (tax cases) | supremecourt.gov | 500+ |
| US Court of Federal Claims | uscfc.uscourts.gov | varies |
| US Circuit Courts (tax) | govinfo.gov | thousands |
| UK Upper Tribunal Tax Chamber | gov.uk/tax-chamber-tribunal | thousands |
| UK Supreme Court (tax) | supremecourt.uk | hundreds |
| Canada Tax Court | tcc-cci.gc.ca | thousands |
| Australia AAT | aat.gov.au | thousands |
| India ITAT | itat.gov.in | thousands |

### Schema
```typescript
interface TaxCase {
  id: string;                  // "us-tc-2024-12345"
  country: string;
  court: string;
  citation: string;            // "T.C. Memo. 2024-XX"
  caseName: string;            // "Smith v. Commissioner"
  decisionDate: string;
  judges: string[];
  parties: { taxpayer: string; respondent: string };
  
  taxYears: number[];
  amountInDispute: number | null;
  
  holding: string;             // 1-2 sentence rule announced
  facts: string;               // brief facts summary
  reasoning: string;           // court's analysis
  outcome: "for-taxpayer" | "for-government" | "split" | "remanded";
  
  statutesApplied: string[];   // section IDs
  formsInvolved: string[];
  topics: string[];            // tags
  
  fullDecisionUrl: string;
  fullDecisionPdfUrl: string | null;
  
  appealHistory: Array<{ court: string; outcome: string; citation: string }>;
  citingCases: string[];
  citedCases: string[];
  
  sources: Source[];
}
```

### Site routes
- `/cases/[country]/[court]/[year]/[id]` — full case
- `/cases/[country]/[court]` — court index
- `/cases/topic/[topic]` — by topic
- `/statutes/.../section/.../cases` — cases citing a section

---

## PILLAR 8: Glossary / Terminology

**Vision**: 3,000+ tax terms in plain English, with definitions, examples, related terms, and translations.

### Term sources
- IRS Glossary
- HMRC tax terminology page
- IBFD International Tax Glossary
- OECD Glossary of Tax Terms
- Black's Law Dictionary (tax terms)

### Schema
```typescript
interface GlossaryTerm {
  id: string;                  // "effectively-connected-income"
  term: string;                // "Effectively Connected Income (ECI)"
  shortDefinition: string;     // 1 sentence
  fullDefinition: string;      // paragraph
  examples: string[];
  relatedTerms: string[];      // term IDs
  translations: Record<string, string>;  // lang -> term
  jurisdictions: string[];     // where this concept applies
  cites: Array<{ statute: string; section: string }>;
  sources: Source[];
}
```

### Site routes
- `/glossary` — A-Z index
- `/glossary/[term-id]` — full definition
- `/glossary/[country]` — country-specific terms

---

## PILLAR 9: Compliance Calendar

**Vision**: Master calendar of every tax deadline in every country, year-by-year.

### Schema
```typescript
interface ComplianceDeadline {
  id: string;
  country: string;
  jurisdiction: string;        // federal, state, etc.
  taxType: string;
  description: string;         // "Form 1040 individual return"
  dueDate: string;             // ISO date
  affectedTaxpayers: string[]; // ["individual", "self-employed"]
  formsRequired: string[];
  extensionAvailable: boolean;
  extensionForm: string | null;
  penalty: string;
  sources: Source[];
}
```

### Site routes
- `/calendar` — global view (filter by country)
- `/calendar/[country]` — country-specific
- `/calendar/[year]/[month]` — date drill-down
- ICS export per country

---

## PILLAR 10: Industry Tax Guides

**Vision**: Deep-dive guides for every major industry, by country.

### Top industries to cover

| Industry | Tax issues |
|----------|-----------|
| E-commerce | sales tax, marketplace facilitator laws, VAT registration |
| SaaS / Digital | DST, place of supply, tax characterization |
| Crypto | character of gain/loss, staking, mining, DeFi, NFTs |
| Real estate | depreciation, 1031, FIRPTA, PTI |
| Hospitality | tip credit, occupancy tax, payroll |
| Healthcare | Section 199A, accountable care, telehealth |
| Manufacturing | UNICAP, R&D credit, depreciation methods |
| Financial services | Section 475, mark-to-market, BEAT |
| Construction | percentage of completion, look-back, S/E tax |
| Agriculture | depreciation of livestock, crop insurance |
| Mining/Oil/Gas | depletion, IDC, percentage depletion |
| Entertainment | Section 181, residuals, royalties |
| Nonprofits | UBIT, public charity status, private foundation rules |
| Cross-border services | sourcing, withholding, treaty benefits |

### Schema
```typescript
interface IndustryGuide {
  id: string;
  country: string;
  industry: string;
  naicsCode?: string;          // for US
  title: string;
  sections: Array<{ heading: string; body: string }>;
  keyForms: string[];
  keyDeductions: string[];
  commonPitfalls: string[];
  recentChanges: Array<{ date: string; description: string }>;
  sources: Source[];
}
```

### Site routes
- `/industries/[industry]` — overview
- `/industries/[industry]/[country]` — country-specific
- `/industries` — index

---

## PILLAR 11: Multilingual Translation

**Vision**: All content available in major languages.

### Priority languages

| Language | Reach | Why |
|----------|-------|-----|
| Spanish | 500M | LATAM + Spain + US Hispanic |
| Mandarin (Simplified) | 1B | China business audience |
| Mandarin (Traditional) | 50M | TW + HK |
| Japanese | 125M | High-spend market |
| Korean | 80M | High-spend market |
| Portuguese | 230M | BR + Portugal |
| French | 280M | FR + Africa + Canada |
| German | 100M | DE + AT + CH |
| Hindi | 600M | India |
| Arabic | 400M | Gulf + N. Africa |

### Approach
1. Use existing i18n infrastructure (`src/lib/i18n/en.ts`)
2. Generate translation files per language
3. Use machine translation as draft, human review for accuracy
4. Mark machine-translated pages with disclaimer
5. Use `hreflang` attributes for SEO

### Routes
- `/[lang]/...` — same structure as English (e.g. `/es/forms/us/5472`)

---

## PILLAR 12: Practitioner Directory

**Vision**: Vetted directory of tax professionals (CPAs, EAs, tax attorneys, registered tax agents) by jurisdiction.

### Sources

| Country | Body | Public registry? |
|---------|------|------------------|
| US | NASBA (state CPAs) | Yes |
| US | IRS PTIN directory | Yes |
| US | State bar associations (tax attorneys) | Yes |
| US | NAEA (Enrolled Agents) | Yes |
| UK | ICAEW, ACCA, CIOT | Yes |
| Canada | CPA Canada | Yes |
| Australia | TPB Tax Practitioners Board | Yes |
| Germany | Steuerberaterkammer | Yes |
| ... | ... | Yes |

### Schema
```typescript
interface Practitioner {
  id: string;
  fullName: string;
  firmName: string;
  credentials: string[];       // ["CPA", "EA"]
  countries: string[];
  states: string[];
  specialties: string[];       // ["foreign-llc", "expat", "crypto"]
  languages: string[];
  contact: { email?: string; phone?: string; website?: string };
  registryUrl: string;         // public verification URL
  registryStatus: "active" | "inactive" | "suspended";
  yearsLicensed: number;
  fees: { hourly?: string; flatFee?: string };
  reviewCount: number;
  averageRating: number | null;
}
```

### Site routes
- `/find-a-practitioner/[country]/[specialty]`
- `/find-a-practitioner/[country]/[state]`

### Monetization
- Featured listings
- Practitioner profile claims
- Lead generation fees

---

## SEO Strategy

### URL hierarchy (must follow)
```
/forms/us/5472                      ← short, keyword-rich
/treaties/us-gb                     ← bilateral pair
/states/us-ca                       ← jurisdiction
/calculators/uk/income-tax          ← intent-based
/historical/us/individual/1986      ← year-anchored
/glossary/eci                       ← term lookup
/cases/us/tax-court/2024/smith-v-commissioner  ← citable
```

### On-page SEO requirements (every generated page)
1. `<title>` with primary keyword first, brand last
2. `<meta description>` 150-160 chars
3. `<h1>` with main keyword
4. JSON-LD structured data:
   - Article schema for guides/news
   - GovernmentService schema for forms
   - LegalText schema for statutes (custom)
   - FAQPage schema where applicable
   - BreadcrumbList schema
5. Internal links to ≥ 3 related pages
6. Canonical URL
7. Open Graph + Twitter Card
8. `lastUpdated` visible in body
9. ≥ 500 words on detail pages
10. Citation block with `nofollow` on external gov links (except `dofollow` for IRS, HMRC, etc. as official sources)

### Sitemap strategy
Multiple sitemaps split by content type:
- /sitemap.xml (index)
- /sitemap-forms.xml
- /sitemap-treaties.xml
- /sitemap-statutes.xml (paginated, 50K URLs each)
- /sitemap-cases.xml (paginated)
- /sitemap-guides.xml
- /sitemap-states.xml
- /sitemap-historical.xml

### Search Console actions
- Submit sitemaps weekly
- Monitor index coverage
- Track top queries; optimize underperforming pages
- Use Indexing API for high-priority new content

---

## Crawling Ethics & Compliance

### Universal rules
- **User-Agent**: `TaxGuided-Bot/1.0 (+https://taxguided.com/bot)`
- **Rate limit**: max 1 request per second per domain (slower for smaller sites)
- **Robots.txt**: respect; check before each crawl
- **Caching**: use If-Modified-Since / ETag to avoid re-fetching
- **Identification**: include contact email in User-Agent header for issues
- **Storage**: keep raw responses with checksums for verification
- **Attribution**: always cite original source with URL on output pages

### Avoid
- Scraping content explicitly forbidden by ToS (LexisNexis, Westlaw, BNA)
- Republishing copyrighted commentary verbatim (digest/summarize instead)
- Personal data scraping (no SSNs, no individual taxpayer info from court filings)

### Public-domain status
Most government tax law is public domain or has open-data clauses:
- US federal: 17 USC 105 (no copyright)
- UK: Open Government License
- EU: PSI directive
- Most countries: similar

But:
- Court opinions: usually public, but headnotes/syllabus are often copyrighted
- Translations: may be copyrighted by translator
- Compilations: original arrangement may be copyrighted

When in doubt, cite + link, don't republish.

---

## Update Cadence

| Asset type | Check frequency | Update mechanism |
|-----------|-----------------|------------------|
| News & rule changes | Daily | RSS + webhook |
| New forms | Weekly | crawler |
| Form revisions | Monthly | PDF checksum diff |
| Case law new | Daily | court RSS feeds |
| Statute amendments | Monthly | legislation.gov diff |
| Treaty changes | Quarterly | manual review |
| Historical rates | One-time then locked | manual |
| Glossary | Quarterly | manual review |
| Calendar | Annually | quarterly review |

### Implementation
- Cron jobs in Cloudflare Workers (`scheduled` handler)
- Each pillar has its own cron schedule
- All updates create R2 versions; no data loss
- Manual approval gate for major changes

---

## Quality Controls

### Automated
- TypeScript compilation passes
- All URLs return HTTP 200 (404 check on every link)
- All `sources[]` URLs are reachable
- No empty `description` or `body` fields
- All dates parse as valid ISO
- All citations match a real statute/case

### Manual
- Spot-check 1% of generated pages weekly
- Verify accuracy against primary source
- Editorial review for tone, clarity
- Legal review for jurisdiction-specific claims

### Trust signals to add
- "Verified [DATE] against [SOURCE]" badge
- "Last reviewed by [editor]" credit
- Outbound links to official sources prominent
- Disclaimer on every page

---

## Phased Rollout (12 months)

### Months 1-2: Infrastructure
- Set up R2 + KV
- Build dynamic routes for `/forms`, `/treaties`, `/states`, `/statutes`, `/cases`, `/historical`, `/glossary`, `/calendar`, `/industries`
- Build search infrastructure (Cloudflare-native or Algolia)
- Set up sitemaps & robots.txt

### Months 3-4: Pillars 1, 2, 5 (highest SEO impact, lowest difficulty)
- Forms library: US (3,000), UK, Canada, Australia
- State/provincial: US 50, Canada 13, Australia 8, India 28
- Historical rates: US individual + corporate (1913+), UK, Germany, France, Japan

### Months 5-6: Pillars 3, 4
- Calculators: 8 per country × 20 = 160
- Treaties: All US treaties (~70), UK (~140), key EU pairs

### Months 7-9: Pillar 6
- Statutory text: US IRC + Treas Regs, UK ITA + CTA + TCGA + VATA
- Statutory text: DE, FR, JP, IN

### Months 10-12: Pillars 7, 8, 9, 10, 11, 12
- Case law: US Tax Court (last 10 years), UK Upper Tribunal
- Glossary: 1,000 terms
- Compliance calendar
- Industry guides
- Multilingual: Spanish, Chinese (rest later)
- Practitioner directory MVP

---

## Success Metrics

### Year 1 targets
- **Pages**: 50,000+ indexed
- **Organic traffic**: 500K monthly visits
- **Search Console queries**: 100K unique
- **Keywords ranking top 10**: 5,000+
- **Backlinks**: 500+ from .gov, .edu, .org
- **Domain rating** (Ahrefs): 50+
- **ForeignLLCTax conversions**: 1,000/month

### Year 2 targets
- **Pages**: 200,000+
- **Organic traffic**: 5M monthly
- **Domain rating**: 70+
- **Multilingual traffic**: 30% of total

---

## Handoff Templates for AI Agents

Each pillar has a standalone handoff prompt. Pattern:

```markdown
## YOUR TASK

You are an AI agent assigned Pillar [N]: [Name].

## CONTEXT
- Project: TaxGuided.com (taxguided.com)
- Repo: github.com/williamjiamin/tax-guided
- Reference: WORLD-CLASS-EXPANSION-PLAN.md

## DELIVERABLES
1. R2 bucket data files matching [Schema]
2. Site route handlers at [route paths]
3. Sitemap entries
4. Internal link suggestions

## SOURCES
[List from pillar section]

## CRAWL RULES
[Universal rules]

## OUTPUT FORMAT
[Schema TypeScript]

## QUALITY CHECKLIST
- [ ] All URLs return 200
- [ ] All required fields present
- [ ] All dates valid ISO 8601
- [ ] Citations to primary sources
- [ ] No copyrighted text republished
- [ ] TypeScript compiles
- [ ] Sample 5 pages reviewed by human

## DELIVERY BATCHES
Submit in batches of [N] items per PR for review.
```

---

## Appendix A: Existing Site Conventions

To match the existing codebase, AI agents must follow:

1. **TypeScript everywhere** — no JSON-only data without TS types
2. **Existing import paths** — `@/lib/...`, `@/components/...`
3. **Existing patterns** for client/server boundaries
4. **Tailwind v4 syntax** — utility classes, no `@apply`
5. **Color palette**: `navy`, `navy-dark`, `navy-light`, `gold`, `gold-dark`, `gold-light` (defined in tailwind config)
6. **Header/Footer components**: import from `@/components/layout`
7. **All pages** must have `generateMetadata`, canonical URL, OpenGraph tags
8. **All dynamic routes** use `dynamicParams = true` and `revalidate = 86400` (or appropriate)
9. **External links** to official sources: `target="_blank" rel="noopener noreferrer"` (and `nofollow` for non-gov)
10. **Disclaimer block** on every guide/scenario/case/calculator page

## Appendix B: Cost Estimates

| Item | Estimate |
|------|----------|
| Cloudflare R2 storage (1TB) | $15/mo |
| Cloudflare R2 egress | Free |
| Cloudflare Workers (incl unbound) | $5/mo + $0.30/M req |
| Cloudflare KV | $0.50/M reads, $5/M writes |
| Domain | $12/yr |
| AI agent costs (Codex/Claude/Gemini) for crawling | $500-2,000/mo during build phase |
| Editor/reviewer (part-time) | $2,000-5,000/mo |
| **Total monthly run-rate** | **$2,500-7,000/mo** |

## Appendix C: Risk Register

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|-----------|
| Tax authority blocks crawler | Medium | High | Use polite UA, low rate, Cloudflare proxy |
| Copyright complaint | Low | Medium | Cite + link, never republish protected text |
| Inaccurate content liability | Medium | High | Disclaimers, "educational only", cite sources |
| Cloudflare cost spike | Low | Medium | Set budget alerts, lazy-load R2 |
| AI agent hallucination | Medium | High | Verify every citation against source URL |
| Loss of search rankings | Medium | High | Build slowly, no thin content, follow E-E-A-T |
| Competing sites copy | Low | Low | Original commentary, fast updates |

---

## Final Notes

This is a 1-2 year build. The site already has excellent foundations (1,000+ Q&A, 130+ guides, working tools, comparison engine). The expansion is about depth and breadth, not redesign.

Prioritize SEO traffic returns. Pillars 1, 2, and 5 (forms library, state/provincial, historical rates) deliver fastest results because:
1. They have high search volume per page
2. They're conceptually simple (low risk of inaccuracy)
3. They're easy to keep updated
4. They generate huge backlink potential from researchers/journalists

Pillars 6 and 7 (statutes, case law) are the long tail — massive volume but lower per-page traffic. Build these last with strong infrastructure.

Pillar 11 (multilingual) doubles the audience but requires careful execution to avoid SEO penalties from low-quality machine translations.

Good luck. Ship it.
