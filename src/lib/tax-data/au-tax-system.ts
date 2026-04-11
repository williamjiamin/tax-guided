import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  Australia — Tax System (2024-2025 rates)                          */
/* ------------------------------------------------------------------ */

export const AU_TAX_SYSTEM: TaxSystem = {
  country: "Australia",
  countryCode: "AU",
  currency: "Australian Dollar",
  currencySymbol: "A$",

  corporateRate: "25-30%",
  corporateDetails:
    "The corporate tax rate is 25% for base rate entities (aggregated turnover under A$50 million and no more than 80% of assessable income is passive). All other companies pay 30%. The full franking credit system eliminates double taxation of dividends for Australian resident shareholders.",

  individualBrackets: [
    { min: 0, max: 18200, rate: 0 },
    { min: 18201, max: 45000, rate: 16 },
    { min: 45001, max: 135000, rate: 30 },
    { min: 135001, max: 190000, rate: 37 },
    { min: 190001, max: null, rate: 45 },
  ],

  capitalGainsRate: "Marginal rate (50% discount for 12+ months)",
  capitalGainsDetails:
    "Capital gains are included in assessable income and taxed at marginal rates. Individuals holding assets for more than 12 months receive a 50% discount (effectively halving the tax). Small business CGT concessions can further reduce or eliminate gains. Superannuation funds receive a one-third discount. The main residence exemption eliminates CGT on the family home.",

  vatOrSalesTax: "10% GST",
  vatDetails:
    "The Goods and Services Tax (GST) is a flat 10% on most goods and services. GST-free supplies include basic food, medical services, education, childcare, and exports. Input-taxed supplies (financial supplies and residential rent) do not attract GST but providers cannot claim input credits. Businesses with annual turnover of A$75,000 or more must register for GST.",

  socialSecurity: "11.5% employer (superannuation guarantee)",
  socialSecurityDetails:
    "The Superannuation Guarantee requires employers to contribute 11.5% of ordinary time earnings (increasing to 12% from July 2025) to an employee's superannuation fund. There is no employee social security contribution. The Medicare levy of 2% on taxable income funds the public health system. A Medicare levy surcharge of 1-1.5% applies to higher-income earners without private hospital cover.",

  withholding: {
    dividends: "30% unfranked (reduced by treaty; 0% if fully franked)",
    interest: "10% (reduced by treaty)",
    royalties: "30% (reduced by treaty)",
  },

  filingDeadline: "October 31 (self-lodging) / varies with tax agent (up to May 15)",

  taxAuthority: "Australian Taxation Office (ATO)",
  taxAuthorityUrl: "https://www.ato.gov.au",

  keyFeatures: [
    "Imputation (franking) credit system eliminates double taxation on dividends",
    "Compulsory superannuation contributions provide retirement savings (11.5%, rising to 12%)",
    "50% CGT discount for individuals on assets held more than 12 months",
    "Stage 3 tax cuts effective July 2024 reduced rates and restructured brackets",
    "Medicare levy of 2% funds universal public healthcare system",
    "Negative gearing allows deduction of investment property losses against other income",
    "Extensive small business CGT concessions for businesses under A$2 million net assets",
    "Tax treaties with over 45 countries and information exchange agreements",
  ],

  lastUpdated: "2025-01",
};
