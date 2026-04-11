import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  Germany — Tax System (2024-2025 rates)                            */
/* ------------------------------------------------------------------ */

export const DE_TAX_SYSTEM: TaxSystem = {
  country: "Germany",
  countryCode: "DE",
  currency: "Euro",
  currencySymbol: "€",

  corporateRate: "~30% (combined)",
  corporateDetails:
    "Corporate income tax (Körperschaftsteuer) is 15% plus a 5.5% solidarity surcharge on the tax amount (effective 15.825%). Municipal trade tax (Gewerbesteuer) varies by municipality, typically 14-17%, resulting in an overall effective corporate tax rate of approximately 29-33%. The average combined rate is about 30%.",

  individualBrackets: [
    { min: 0, max: 11784, rate: 0 },
    { min: 11785, max: 17005, rate: 14 },
    { min: 17006, max: 66760, rate: 24 },
    { min: 66761, max: 277825, rate: 42 },
    { min: 277826, max: null, rate: 45 },
  ],

  capitalGainsRate: "26.375% (flat)",
  capitalGainsDetails:
    "Capital gains from financial assets are subject to a flat withholding tax (Abgeltungsteuer) of 25% plus 5.5% solidarity surcharge, totaling 26.375%. Church tax may also apply (8-9% on the tax). Gains from the sale of private real estate held for more than 10 years are exempt. A savings allowance (Sparerpauschbetrag) of €1,000 per person applies.",

  vatOrSalesTax: "19% standard rate",
  vatDetails:
    "The standard VAT (Umsatzsteuer/Mehrwertsteuer) rate is 19%. A reduced rate of 7% applies to food, books, newspapers, public transport, hotel accommodation, and cultural events. Small businesses with turnover below €22,000 in the prior year may be exempt (Kleinunternehmerregelung).",

  socialSecurity: "~20% employee / ~20% employer",
  socialSecurityDetails:
    "Social insurance contributions are split roughly equally between employee and employer. Pension insurance: 18.6% (9.3% each). Health insurance: ~14.6% average (7.3% each) plus an additional contribution averaging ~1.7%. Unemployment insurance: 2.6% (1.3% each). Long-term care insurance: 3.4% (split varies by parental status). Contributions are capped at assessment ceilings (€90,600 for pension in West Germany, 2024).",

  withholding: {
    dividends: "26.375% (reduced by treaty)",
    interest: "0% (generally no WHT on interest)",
    royalties: "15.825% (reduced by treaty)",
  },

  filingDeadline: "July 31 of the following year (tax advisor: February 28 two years later)",

  taxAuthority: "Federal Central Tax Office (Bundeszentralamt für Steuern)",
  taxAuthorityUrl: "https://www.bzst.de",

  keyFeatures: [
    "Progressive income tax with rates from 0% to 45% plus solidarity surcharge",
    "Municipal trade tax (Gewerbesteuer) adds significantly to corporate tax burden",
    "Joint filing (Ehegattensplitting) allows married couples to split income",
    "Church tax of 8-9% on income tax liability for church members",
    "Extensive social security system with mandatory contributions",
    "Tax treaties with over 90 countries to avoid double taxation",
    "Loss carryforward unlimited in amount but limited to 60% of income above €1 million",
    "No general wealth tax, but real estate transfer tax of 3.5-6.5% by state",
  ],

  lastUpdated: "2025-01",
};
