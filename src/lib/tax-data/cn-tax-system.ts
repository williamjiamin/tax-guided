import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  China — Tax System (2025 rates)                                   */
/* ------------------------------------------------------------------ */

export const CN_TAX_SYSTEM: TaxSystem = {
  country: "China",
  countryCode: "CN",
  currency: "Chinese Yuan",
  currencySymbol: "\u00A5",

  corporateRate: "25%",
  corporateDetails:
    "Standard corporate income tax rate is 25%. Small and low-profit enterprises enjoy a reduced effective rate (as low as 5% on the first CNY 1 million of taxable income). High and new technology enterprises qualify for a 15% rate. Enterprises in encouraged industries in western regions may also receive a 15% rate.",

  individualBrackets: [
    { min: 0, max: 36000, rate: 3 },
    { min: 36001, max: 144000, rate: 10 },
    { min: 144001, max: 300000, rate: 20 },
    { min: 300001, max: 420000, rate: 25 },
    { min: 420001, max: 660000, rate: 30 },
    { min: 660001, max: 960000, rate: 35 },
    { min: 960001, max: null, rate: 45 },
  ],

  capitalGainsRate: "20%",
  capitalGainsDetails:
    "Capital gains from the transfer of property are generally taxed at a flat 20% rate for individuals. Gains from the sale of publicly traded shares on domestic stock exchanges are currently exempt for individual investors. Corporate capital gains are included in ordinary business income and taxed at the standard corporate rate.",

  vatOrSalesTax: "13% standard rate",
  vatDetails:
    "China operates a value-added tax system with three main rates: 13% (standard, covering most goods and manufacturing), 9% (transportation, construction, basic telecom, and agricultural products), and 6% (modern services, financial services, and digital products). Small-scale taxpayers may use a simplified 3% rate.",

  socialSecurity: "~10.5% employee / ~27% employer",
  socialSecurityDetails:
    "Social insurance contributions cover pension (~8% employee / ~16% employer), medical (~2% employee / ~8% employer), unemployment (~0.5% employee / ~0.5% employer), work injury (~0.2-1.9% employer only), and maternity (~0.5-1% employer only). Rates and caps vary by city. A housing provident fund contribution of 5-12% each for employee and employer also applies.",

  withholding: {
    dividends: "10% (reduced by treaty)",
    interest: "10% (reduced by treaty)",
    royalties: "10% (reduced by treaty)",
  },

  filingDeadline: "March 1 - June 30 (annual reconciliation)",

  taxAuthority: "State Taxation Administration (STA)",
  taxAuthorityUrl: "https://www.chinatax.gov.cn",

  keyFeatures: [
    "Territorial-based taxation with worldwide income for tax residents (183-day rule)",
    "Individual Income Tax reform in 2019 introduced comprehensive income categories and special deductions",
    "Special additional deductions for children's education, continuing education, housing, elderly care, and infant care",
    "Tax incentives for high-tech enterprises, software companies, and encouraged industries",
    "Golden Tax System (Fapiao) for VAT invoice management and compliance",
    "Transfer pricing rules aligned with OECD guidelines",
    "Growing tax treaty network with over 100 countries",
    "Preferential tax policies for foreign investment in certain sectors and regions",
  ],

  lastUpdated: "2025-01-01",
};
