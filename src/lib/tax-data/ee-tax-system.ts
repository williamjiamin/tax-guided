import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  Estonia — Tax System (2024-2025 rates)                            */
/* ------------------------------------------------------------------ */

export const EE_TAX_SYSTEM: TaxSystem = {
  country: "Estonia",
  countryCode: "EE",
  currency: "Euro",
  currencySymbol: "€",

  corporateRate: "20% (only on distributed profits) / 22% from 2025",
  corporateDetails:
    "Estonia has a unique corporate tax system where retained and reinvested profits are not taxed. Corporate income tax of 20% (increasing to 22% from 2025) is only levied when profits are distributed as dividends or deemed distributions. Regular dividend distributions above a threshold may benefit from a reduced 14% rate (available for distributions up to the average of the previous three years' taxed distributions). This system strongly incentivizes reinvestment of profits.",

  individualBrackets: [
    { min: 0, max: null, rate: 20 },
  ],

  capitalGainsRate: "20% (flat, included in income)",
  capitalGainsDetails:
    "Capital gains are included in individual taxable income and taxed at the flat 20% income tax rate. However, gains from the sale of a principal residence are exempt. An investment account regime allows deferral of tax on financial asset gains as long as proceeds are reinvested within the account. Corporate capital gains are not taxed until distribution of profits.",

  vatOrSalesTax: "22%",
  vatDetails:
    "The standard VAT rate is 22% (increased from 20% in January 2024). A reduced rate of 9% applies to accommodation, press publications, and certain listed goods. Medicines, medical equipment, and books have a 5% reduced rate. Exports and intra-EU supplies are zero-rated. The VAT registration threshold is €40,000 of taxable turnover.",

  socialSecurity: "1.6% employee / 33% employer",
  socialSecurityDetails:
    "The employer pays a social tax of 33% on gross wages (20% for pension and 13% for health insurance). Employees contribute 1.6% for mandatory funded pension (second pillar) and 1.6% for unemployment insurance. The employer also pays 0.8% unemployment insurance. There are no caps on the social tax base. The social tax minimum obligation is based on the monthly minimum wage.",

  withholding: {
    dividends: "0% (for most distributions; 7% on reduced-rate distributions)",
    interest: "20% (reduced by treaty; 0% within EU)",
    royalties: "10% (reduced by treaty; 0% within EU)",
  },

  filingDeadline: "April 30 (individuals) / monthly CIT returns when distributing",

  taxAuthority: "Tax and Customs Board (Maksu- ja Tolliamet)",
  taxAuthorityUrl: "https://www.emta.ee",

  keyFeatures: [
    "Unique CIT system — no tax on retained profits, tax only on distribution at 20/22%",
    "Flat 20% personal income tax rate simplifies individual taxation",
    "e-Residency program allows foreign entrepreneurs to establish and manage Estonian companies remotely",
    "Highly digitized tax administration — 98% of tax returns filed electronically",
    "Basic tax-free allowance of €7,848 per year, tapering for higher incomes",
    "Investment account regime defers tax on financial investment gains",
    "EU membership provides access to EU Parent-Subsidiary and Interest/Royalties Directives",
    "33% employer social tax is among the highest in the EU",
  ],

  lastUpdated: "2025-01",
};
