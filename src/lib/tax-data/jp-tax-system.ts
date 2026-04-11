import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  Japan — Tax System (2024-2025 rates)                              */
/* ------------------------------------------------------------------ */

export const JP_TAX_SYSTEM: TaxSystem = {
  country: "Japan",
  countryCode: "JP",
  currency: "Japanese Yen",
  currencySymbol: "¥",

  corporateRate: "23.2% (national) / ~30% effective",
  corporateDetails:
    "The national corporate tax rate is 23.2%. Combined with local enterprise tax, local corporate tax, inhabitants tax, and special reconstruction tax, the effective corporate tax rate is approximately 29.74% for companies in Tokyo. Small and medium-sized enterprises with capital of ¥100 million or less benefit from a reduced 15% rate on the first ¥8 million of income.",

  individualBrackets: [
    { min: 0, max: 1950000, rate: 5 },
    { min: 1950001, max: 3300000, rate: 10 },
    { min: 3300001, max: 6950000, rate: 20 },
    { min: 6950001, max: 9000000, rate: 23 },
    { min: 9000001, max: 18000000, rate: 33 },
    { min: 18000001, max: 40000000, rate: 40 },
    { min: 40000001, max: null, rate: 45 },
  ],

  capitalGainsRate: "20.315%",
  capitalGainsDetails:
    "Capital gains on listed shares and financial instruments are taxed at a flat 20.315% (15.315% national income tax including 0.315% reconstruction surcharge, plus 5% local inhabitants tax). Real estate gains are taxed at 39.63% for short-term holdings (5 years or less) and 20.315% for long-term holdings. A special NISA (Nippon Individual Savings Account) provides tax-free returns on qualifying investments.",

  vatOrSalesTax: "10% consumption tax",
  vatDetails:
    "Japan's consumption tax (Shohizei) is 10% on most goods and services. A reduced rate of 8% applies to food and beverages (excluding dining out and alcohol) and newspaper subscriptions. The tax is split between national (7.8%) and local (2.2%) portions. The Invoice System (Tekikaku Invoice Seido) was introduced in October 2023.",

  socialSecurity: "~15% employee / ~15% employer",
  socialSecurityDetails:
    "Social insurance premiums are shared roughly equally between employee and employer. Health insurance: approximately 10% (5% each, varies by insurer). Employee pension: 18.3% (9.15% each). Employment insurance: approximately 1.55% total. Workers' accident insurance: employer only (varies by industry). Long-term care insurance: approximately 1.6% for those aged 40-64.",

  withholding: {
    dividends: "20.42% (reduced by treaty)",
    interest: "20.42% (reduced by treaty)",
    royalties: "20.42% (reduced by treaty)",
  },

  filingDeadline: "March 15",

  taxAuthority: "National Tax Agency (NTA / 国税庁)",
  taxAuthorityUrl: "https://www.nta.go.jp",

  keyFeatures: [
    "Residence-based taxation with worldwide income for residents (183-day rule)",
    "Reconstruction surcharge of 2.1% on income tax applies through 2037",
    "NISA tax-free investment accounts for individual investors",
    "Furusato Nozei (hometown tax) system allows donations to local governments for tax deductions",
    "Blue return filing system provides extra deductions for qualified business taxpayers",
    "Consumption tax Invoice System introduced in 2023 for input tax credits",
    "Tax treaties with over 80 countries to prevent double taxation",
    "Departure tax of ¥1,000 per person when leaving Japan",
  ],

  lastUpdated: "2025-01",
};
