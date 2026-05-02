# Pillar 03 — Tax Calculators

Status: actual implementation specs  
Last verified: 2026-05-01  
Primary route family: `/tools` or dedicated calculator routes

## Entry: `form-5472-deadline-calculator`

- Proposed route: `/tools/form-5472-deadline-calculator`
- Calculator type: deadline calculator

### Purpose

Calculate the filing due date and extension due date for a foreign-owned U.S. disregarded entity or reporting corporation filing Form 5472.

### Inputs

- `taxYearEndDate`
- `entityType`
  - `foreign-owned-us-de`
  - `domestic-reporting-corporation`
- `isCalendarYear`

### Rules

- Base due date: same due date as the underlying return.
- For a calendar-year Form 1120 filer, use April 15 of the following year.
- Extension path: Form 7004 must be filed by the regular due date.
- Output should warn that Form 5472 for a foreign-owned U.S. disregarded entity cannot be e-filed.

### Output text

- `Original due date`
- `Extension request due date`
- `Filing package reminder: Form 5472 + pro forma Form 1120`
- `Penalty warning: $25,000 base penalty`

### Example

For tax year ending December 31, 2025:
- Original due date: April 15, 2026
- Extension request due date: April 15, 2026

### Sources

- [Instructions for Form 5472](https://www.irs.gov/instructions/i5472)
- [Instructions for Form 7004](https://www.irs.gov/instructions/i7004)

## Entry: `california-llc-calendar-calculator`

- Proposed route: `/tools/california-llc-calendar-calculator`
- Calculator type: deadline calculator

### Purpose

Generate the core California LLC due dates for the annual tax, estimated LLC fee, and return filing.

### Inputs

- `taxYearStartDate`
- `taxYearEndDate`
- `entityClassification`
  - `single-member-owned-by-individual-or-non-pass-through`
  - `single-member-owned-by-s-corp`
  - `single-member-owned-by-partnership`
  - `llc-classified-as-partnership`

### Rules

- Annual tax due date: 15th day of the 4th month after the beginning of the taxable year.
- Estimated LLC fee due date: 15th day of the 6th month of the current tax year.
- Return due date depends on classification:
  - partnership-classified LLCs: 15th day of the 3rd month after year end
  - single-member LLC owned by an individual or non-pass-through entity: 15th day of the 4th month after year end
- Output should attach form references:
  - FTB 3522
  - FTB 3536
  - Form 568

### Example

For a calendar-year single-member LLC owned by an individual in 2026:
- Annual tax due date: April 15, 2026
- Estimated fee due date: June 15, 2026
- Return due date: April 15, 2027

### Sources

- [California business due dates](https://www.ftb.ca.gov/file/when-to-file/due-dates-business.html)
- [California LLC page](https://www.ftb.ca.gov/file/business/types/limited-liability-company/index.html)
- [Web Pay LLC payment types](https://webapp.ftb.ca.gov/WebPay/Help/LLC)

## Entry: `texas-franchise-obligation-checker`

- Proposed route: `/tools/texas-franchise-obligation-checker`
- Calculator type: threshold and filing-obligation checker

### Purpose

Tell a user whether they are above the Texas no-tax-due threshold and what filing package applies for the 2026 report year.

### Inputs

- `reportYear`
- `annualizedTotalRevenue`
- `entityCategory`
  - `retail-or-wholesale`
  - `other-taxable-entity`
  - `passive-entity`
- `hasTexasGrossReceipts`

### Rules

- For report years 2026 and 2027:
  - no-tax-due threshold = `2650000`
  - retail/wholesale rate = `0.00375`
  - other rate = `0.0075`
- If revenue is at or below the threshold:
  - no No Tax Due Report
  - still require PIR or OIR unless an exception applies
- If revenue is above the threshold:
  - require Long Form or E-Z Computation eligibility branch

### Output text

- `Threshold status`
- `Likely required Texas forms`
- `Reminder that reports are generally due May 15`
- `Reminder that marketplace sellers may still have franchise-tax nexus`

### Sources

- [Texas franchise tax page](https://comptroller.texas.gov/taxes/franchise/)
- [Texas 2026 franchise tax forms](https://comptroller.texas.gov/taxes/franchise/forms/2026-franchise.php)

## Entry: `switzerland-vat-calculator`

- Proposed route: `/tools/switzerland-vat-calculator`
- Calculator type: VAT invoice calculator

### Purpose

Calculate Swiss VAT on a net or gross basis using the current federal rates.

### Inputs

- `amount`
- `direction`
  - `net-to-gross`
  - `gross-to-net`
- `rateCategory`
  - `normal`
  - `reduced`
  - `special-accommodation`

### Rules

- Normal rate = `8.1%`
- Reduced rate = `2.6%`
- Special accommodation rate = `3.8%`
- Gross-to-net formula: `net = gross / (1 + rate)`
- VAT amount formula: `vat = gross - net` or `vat = net * rate`

### Example

CHF 1,000 net at the normal rate:
- VAT = CHF 81
- Gross = CHF 1,081

### Sources

- [Swiss VAT rates](https://www.estv.admin.ch/en/vat-rates-switzerland)

## Entry: `uk-self-assessment-late-filing-calculator`

- Proposed route: `/tools/uk-self-assessment-late-filing-calculator`
- Calculator type: penalty estimator

### Purpose

Estimate the statutory late-filing penalty stack for a Self Assessment return using the public HMRC penalty structure.

### Inputs

- `daysLate`
- `taxDue`

### Rules

- Immediate late-filing penalty: GBP 100
- After 3 months late: add GBP 10 per day, up to 90 days
- After 6 months late: add the greater of 5% of tax due or GBP 300
- After 12 months late: add another greater-of 5% or GBP 300
- Display payment penalties separately rather than merging them into filing penalties

### Output text

- `Late filing penalty estimate`
- `Separate warning that late payment penalties and interest may also apply`
- `Prompt to file now even if payment cannot be made immediately`

### Sources

- [Self Assessment penalties](https://www.gov.uk/self-assessment-tax-returns/penalties)

## Entry: `florida-annual-report-cost-calculator`

- Proposed route: `/tools/florida-annual-report-cost-calculator`
- Calculator type: filing-cost calculator

### Purpose

Estimate the state maintenance cost of a Florida annual report for different entity types.

### Inputs

- `entityType`
  - `llc`
  - `profit-corporation`
  - `not-for-profit-corporation`
  - `limited-partnership`
- `filedOnOrBeforeMay1`

### Rules

- LLC fee on time: `138.75`
- Profit corporation fee on time: `150.00`
- Not-for-profit corporation fee on time: `61.25`
- LP/LLLP fee on time: `500.00`
- Late fee after May 1:
  - apply `400.00` to LLCs, profit corporations, LPs, and LLLPs
  - do not apply to not-for-profit corporations

### Sources

- [Florida annual report overview](https://efile.sunbiz.org/sbs_ar_instr.html)
- [Florida LLC annual report help](https://efile.sunbiz.org/llc_ar_help.html)
