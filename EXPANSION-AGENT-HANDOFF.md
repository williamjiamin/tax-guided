# Expansion Agent Handoff

This repo now has a working first implementation of the world-class expansion plan. It is not the full 12-pillar rollout yet, but the core architecture and first public surfaces are live.

## What shipped

- Seed datasets under `data/expansion/` for:
  - forms
  - subnational tax
  - historical rates
  - glossary
  - compliance calendar
- Shared expansion contracts in [src/lib/expansion/types.ts](/Users/lipaiwang/tax-guided/src/lib/expansion/types.ts)
- Query helpers in [src/lib/expansion/repository.ts](/Users/lipaiwang/tax-guided/src/lib/expansion/repository.ts)
- New public route families:
  - `/forms`
  - `/forms/[country]`
  - `/forms/[country]/[formId]`
  - `/states`
  - `/states/[slug]` where `[slug]` is either a country code like `us` or a jurisdiction id like `us-ca`
  - `/historical`
  - `/historical/[country]/[taxType]`
  - `/historical/[country]/[taxType]/[year]`
  - `/glossary`
  - `/glossary/[termId]`
  - `/calendar`
  - `/calendar/[country]`
- SEO plumbing:
  - fixed root sitemap direction toward `taxguided.com`
  - added split sitemaps for forms, states, historical, glossary, and calendar
  - added [src/app/robots.ts](/Users/lipaiwang/tax-guided/src/app/robots.ts)
- Validation script:
  - `npm run validate:expansion`

## Key file map

- Data:
  - [data/expansion/forms.json](/Users/lipaiwang/tax-guided/data/expansion/forms.json)
  - [data/expansion/states.json](/Users/lipaiwang/tax-guided/data/expansion/states.json)
  - [data/expansion/historical-rates.json](/Users/lipaiwang/tax-guided/data/expansion/historical-rates.json)
  - [data/expansion/glossary.json](/Users/lipaiwang/tax-guided/data/expansion/glossary.json)
  - [data/expansion/compliance-calendar.json](/Users/lipaiwang/tax-guided/data/expansion/compliance-calendar.json)
- Core library:
  - [src/lib/expansion/constants.ts](/Users/lipaiwang/tax-guided/src/lib/expansion/constants.ts)
  - [src/lib/expansion/repository.ts](/Users/lipaiwang/tax-guided/src/lib/expansion/repository.ts)
  - [src/lib/expansion/seo.ts](/Users/lipaiwang/tax-guided/src/lib/expansion/seo.ts)
  - [src/lib/expansion/sitemaps.ts](/Users/lipaiwang/tax-guided/src/lib/expansion/sitemaps.ts)
- Shared UI:
  - [src/components/expansion/ExpansionPageShell.tsx](/Users/lipaiwang/tax-guided/src/components/expansion/ExpansionPageShell.tsx)
  - [src/components/expansion/SourceList.tsx](/Users/lipaiwang/tax-guided/src/components/expansion/SourceList.tsx)
  - [src/components/expansion/DisclaimerCard.tsx](/Users/lipaiwang/tax-guided/src/components/expansion/DisclaimerCard.tsx)

## Important route conventions

- `forms` use nested country and form slugs.
- `states` uses one dynamic segment for both country indexes and jurisdiction details because `/states/[country]` and `/states/[country-state]` would otherwise conflict in App Router.
- `calendar` currently ships country filters only. Month/year drill-down and ICS export are still open work.
- `historical` already supports timeline and per-year detail pages.

## Next best tasks

1. Move the expansion repository from local seed JSON to a hybrid local-plus-R2 reader.
2. Provision Cloudflare storage and bind `TAX_DATA` plus `TAX_INDEX`.
3. Expand Pillar 1 by crawling more IRS forms, then HMRC, CRA, and ATO.
4. Expand Pillar 2 with all 50 U.S. states before branching to Canada and Australia.
5. Add `/calendar/date/[year]/[month]` and ICS export.
6. Add treaty, statute, and case-law route families using the same shell and sitemap patterns.

## Cloudflare note

`wrangler.toml` now includes commented placeholders for the expansion bindings. Do not uncomment them until the actual bucket and namespace exist.

## Ready-to-paste prompt for the next agent

```markdown
Continue implementing the TaxGuided world-class expansion plan from `/Users/lipaiwang/tax-guided/WORLD-CLASS-EXPANSION-PLAN.md`.

Current status:
- Route families for forms, states, historical rates, glossary, and calendar already exist.
- Seed data lives in `data/expansion/`.
- Shared contracts and repository helpers live in `src/lib/expansion/`.
- Split sitemaps and robots metadata are already wired.

Your job:
1. Keep the existing route model and shared expansion types.
2. Do not replace the expansion system with a new architecture.
3. Expand the current implementation by adding real coverage for Pillar 1 and Pillar 2 first.
4. Preserve source citation blocks and tax disclaimers on every detail page.
5. Use `npm run validate:expansion`, `npm run lint`, and `npm run build` before handing off.

Constraints:
- Use primary sources where possible.
- Respect the existing App Router patterns and Tailwind styling.
- Keep the current `/states/[slug]` convention unless you also migrate every related link and sitemap entry safely.
```
