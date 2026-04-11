import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  United Kingdom — Tax System (2024-2025 rates)                     */
/* ------------------------------------------------------------------ */

export const UK_TAX_SYSTEM: TaxSystem = {
  country: "United Kingdom",
  countryCode: "GB",
  currency: "British Pound",
  currencySymbol: "£",

  corporateRate: "19% / 25%",
  corporateDetails:
    "The main corporation tax rate is 25% for companies with profits over £250,000. A small profits rate of 19% applies to companies with profits up to £50,000. Marginal relief is available for profits between £50,000 and £250,000, resulting in an effective rate between 19% and 25%.",

  individualBrackets: [
    { min: 0, max: 12570, rate: 0 },
    { min: 12571, max: 50270, rate: 20 },
    { min: 50271, max: 125140, rate: 40 },
    { min: 125141, max: null, rate: 45 },
  ],

  capitalGainsRate: "10% / 18% / 20% / 24%",
  capitalGainsDetails:
    "Capital gains tax rates for 2024-25 are 10% (basic rate) and 20% (higher/additional rate) for most assets. Residential property gains are taxed at 18% (basic rate) and 24% (higher rate). An annual exempt amount of £3,000 applies. Business Asset Disposal Relief provides a 10% rate on qualifying gains up to a £1 million lifetime limit.",

  vatOrSalesTax: "20% standard rate",
  vatDetails:
    "The standard VAT rate is 20%. A reduced rate of 5% applies to domestic fuel, children's car seats, and certain other goods. A zero rate (0%) applies to most food, children's clothing, books, and newspapers. The VAT registration threshold is £90,000 of taxable turnover.",

  socialSecurity: "8-2% employee / 13.8% employer",
  socialSecurityDetails:
    "National Insurance Contributions (NICs) for employees: 8% on earnings between £12,570 and £50,270, and 2% above £50,270 (2024-25 rates after the January 2024 cut). Employers pay 13.8% on earnings above £9,100. Self-employed pay Class 4 NICs at 6% on profits between £12,570 and £50,270, and 2% above that. Class 2 NICs were abolished from April 2024.",

  withholding: {
    dividends: "0% (no withholding tax on dividends)",
    interest: "20% (reduced by treaty)",
    royalties: "20% (reduced by treaty)",
  },

  filingDeadline: "January 31 (online self-assessment) / October 31 (paper)",

  taxAuthority: "HM Revenue & Customs (HMRC)",
  taxAuthorityUrl: "https://www.gov.uk/government/organisations/hm-revenue-customs",

  keyFeatures: [
    "No withholding tax on dividends paid to non-residents",
    "Extensive double taxation treaty network with over 130 countries",
    "Residence-based taxation with statutory residence test (SRT)",
    "Non-domiciled residents can claim remittance basis for foreign income",
    "Personal allowance of £12,570 tapers for income over £100,000",
    "R&D tax relief schemes for qualifying expenditure",
    "Inheritance tax at 40% on estates above £325,000 nil-rate band",
    "Dividend allowance of £500 before taxation at special dividend rates",
  ],

  lastUpdated: "2025-01",
};
