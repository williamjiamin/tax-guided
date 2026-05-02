# Pillar 12 — Practitioner Directory

Status: actual researched source pack  
Last verified: 2026-05-01  
Primary route family: `/directory`

## Directory build principle

The best first version of the practitioner directory should be built from official registries and official credential-verification systems, not from scraped marketing pages. That gives TaxGuided a cleaner trust story and a safer update path.

## Entry: `irs-preparer-directory`

- Proposed route: `/directory/us/federal-tax-return-preparers`
- Registry type: official public directory

### What it contains

The IRS says its public directory includes certain federal tax return preparers with active PTINs who also hold recognized credentials or qualifications, such as enrolled agent, CPA, attorney, enrolled actuary, enrolled retirement plan agent, or Annual Filing Season Program status.

### What to capture

- Name
- City
- State
- ZIP code
- Credential category
- Directory status date if available

### Caveats

- The IRS directory does not include every paid preparer.
- Preparers can opt out.
- The IRS FAQ says updates are weekly and may take up to four weeks to appear.

### Sources

- [IRS directory FAQ](https://www.irs.gov/tax-professionals/faqs-directory-of-federal-tax-return-preparers-with-credentials-and-select-qualifications)
- [IRS credential overview](https://www.irs.gov/tax-professionals/understanding-tax-return-preparer-credentials-and-qualifications)

## Entry: `irs-enrolled-agent-verification`

- Proposed route: `/directory/us/enrolled-agents`
- Registry type: official credential verification path

### What it contains

The IRS treats enrolled-agent status as a formal credential and provides a verification route through the Office of Enrollment.

### What to capture

- Name
- Enrollment status
- Verification channel
- Date verified

### Caveats

- This is partly a verification workflow rather than a consumer-style search interface.
- It should be used as a trust layer for EA records.

### Sources

- [IRS enrolled agents page](https://www.irs.gov/tax-professionals/enrolled-agents)
- [Verify the status of an enrolled agent](https://www.irs.gov/tax-professionals/verify-the-status-of-an-enrolled-agent)
- [Active enrolled agents file](https://www.irs.gov/tax-professionals/enrolled-agents/active-enrolled-agents-and-the-freedom-of-information-act)

## Entry: `cpa-verify`

- Proposed route: `/directory/us/cpa-verify`
- Registry type: national credential lookup

### What it contains

CPA Verify describes itself as a free public CPA lookup tool populated by official state regulatory data from boards of accountancy.

### What to capture

- Individual or firm name
- State board jurisdiction
- License status
- Disciplinary markers if shown
- Timestamp on record

### Caveats

- The site itself notes that each board updates at different intervals.

### Sources

- [CPA Verify](https://cpaverify.org/)

## Entry: `australia-tpb-register`

- Proposed route: `/directory/au/tax-practitioners-board-register`
- Registry type: official public register

### What it contains

The Tax Practitioners Board says the public can search the register using a legal or registration name, ASIC registered business name, or registration number to verify if a tax practitioner is registered.

### What to capture

- Practitioner or business name
- Registration number
- Registration status
- Contact details that are publicly shown
- Professional association data if displayed

### Caveats

- Some displayed details are configurable by the practitioner.

### Sources

- [Help using the TPB Register](https://www.tpb.gov.au/help-using-tpb-register)

## Entry: `icaew-directory`

- Proposed route: `/directory/uk/icaew`
- Registry type: official professional directory

### What it contains

ICAEW's public directory covers chartered accountants, ICAEW-licensed individuals, and licensed or accredited firms.

### What to capture

- Individual or firm name
- Membership number if displayed
- Firm location
- Specialist areas
- Whether the firm participates in the Business Advice Service

### Caveats

- This is a professional-body directory, not a government licensing register.
- It is still high-trust and useful for UK accounting and advisory search.

### Sources

- [Find a chartered accountant or firm](https://find.icaew.com/)

## Entry: `directory-quality-rubric`

- Proposed route: `/directory/methodology`
- Content type: trust and methodology page

### Editorial copy

TaxGuided should publish a methodology page alongside the directory explaining that listings are sourced from official registries or official professional directories wherever possible. The page should explain what each credential means, how freshness works, and why a directory listing is not the same thing as a recommendation. This matters commercially because a high-trust directory is more valuable than a large but unverifiable list.

### Supporting sources

- [IRS choosing a tax professional](https://www.irs.gov/tax-professionals/choosing-a-tax-professional)
- [Taxpayer Advocate: choosing a tax return preparer](https://www.taxpayeradvocate.irs.gov/get-help/filing-returns/choosing-a-tax-return-preparer/)
