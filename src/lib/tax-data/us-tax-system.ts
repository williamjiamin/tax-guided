import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  United States — Federal Tax System (2025 rates)                   */
/* ------------------------------------------------------------------ */

export const US_TAX_SYSTEM: TaxSystem = {
  country: "United States",
  countryCode: "US",
  currency: "US Dollar",
  currencySymbol: "$",

  corporateRate: "21%",
  corporateDetails:
    "Flat 21% federal corporate income tax rate enacted by the Tax Cuts and Jobs Act of 2017. State corporate taxes range from 0% to approximately 11.5% depending on the state.",

  individualBrackets: [
    { min: 0, max: 11925, rate: 10 },
    { min: 11926, max: 48475, rate: 12 },
    { min: 48476, max: 103350, rate: 22 },
    { min: 103351, max: 197300, rate: 24 },
    { min: 197301, max: 250525, rate: 32 },
    { min: 250526, max: 626350, rate: 35 },
    { min: 626351, max: null, rate: 37 },
  ],

  capitalGainsRate: "0% / 15% / 20%",
  capitalGainsDetails:
    "Long-term capital gains (assets held over one year) are taxed at 0%, 15%, or 20% depending on taxable income. Short-term gains are taxed as ordinary income. An additional 3.8% Net Investment Income Tax applies above certain thresholds.",

  vatOrSalesTax: "No federal VAT",
  vatDetails:
    "The United States has no federal value-added tax or national sales tax. State and local sales taxes range from 0% to approximately 10.25% depending on jurisdiction. Five states have no state sales tax.",

  socialSecurity: "7.65% employee / 15.3% self-employed",
  socialSecurityDetails:
    "FICA taxes include 6.2% Social Security tax (on earnings up to $176,100 in 2025) and 1.45% Medicare tax (no cap). Employers match both. Self-employed pay the combined 15.3% rate. An additional 0.9% Medicare surtax applies above $200,000 for single filers.",

  withholding: {
    dividends: "30% (reduced by treaty)",
    interest: "30% (reduced by treaty)",
    royalties: "30% (reduced by treaty)",
  },

  filingDeadline: "April 15",

  taxAuthority: "Internal Revenue Service (IRS)",
  taxAuthorityUrl: "https://www.irs.gov",

  keyFeatures: [
    "Worldwide taxation for citizens and residents regardless of where they live",
    "Extensive tax treaty network reducing double taxation",
    "Standard deduction of $15,000 (single) or $30,000 (married filing jointly) for 2025",
    "Alternative Minimum Tax (AMT) for high-income taxpayers",
    "Foreign Earned Income Exclusion up to $130,000 for qualifying expats",
    "Pass-through entity taxation for S-corps, partnerships, and LLCs",
    "Estate tax exemption of approximately $13.99 million per individual",
    "State-level income taxes vary widely, with some states having no income tax",
  ],

  lastUpdated: "2025-01-01",
};
