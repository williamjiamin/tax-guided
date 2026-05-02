# World-Class Content Batch

This folder is a real, source-backed seed batch for all 12 expansion pillars in `WORLD-CLASS-EXPANSION-PLAN.md`.

What this is:
- Actual article copy, calculator logic, treaty notes, statute briefs, case briefs, glossary entries, deadline records, translation drafts, and directory-research notes.
- Written for direct ingestion by a later implementation agent.
- Built from primary or official sources wherever possible.

What this is not:
- It is not the full 100,000-page vision in one pass.
- It does not claim exhaustive country coverage yet.
- `pillar-11-multilingual.md` contains draft translations created from source-based English content and should receive native-speaker legal QA before publication.

Suggested ingestion pattern:
1. Treat each `Entry` block as a unit of content.
2. Map `Proposed route` to the route family already scaffolded in the app.
3. Lift `Key facts` into structured JSON where appropriate.
4. Lift `Article copy` or `Implementation spec` into editorial/article/calculator models.
5. Preserve the listed source URLs on the final page.

Date of this batch: 2026-05-01

Files:
- `pillar-01-forms-library.md`
- `pillar-02-state-provincial-tax.md`
- `pillar-03-tax-calculators.md`
- `pillar-04-tax-treaties.md`
- `pillar-05-historical-rate-tables.md`
- `pillar-06-statutory-text.md`
- `pillar-07-case-law.md`
- `pillar-08-glossary.md`
- `pillar-09-compliance-calendar.md`
- `pillar-10-industry-tax-guides.md`
- `pillar-11-multilingual.md`
- `pillar-12-practitioner-directory.md`
