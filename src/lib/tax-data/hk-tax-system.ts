import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  Hong Kong — Tax System (2024-2025 rates)                          */
/* ------------------------------------------------------------------ */

export const HK_TAX_SYSTEM: TaxSystem = {
  country: "Hong Kong",
  countryCode: "HK",
  currency: "Hong Kong Dollar",
  currencySymbol: "HK$",

  corporateRate: "8.25% / 16.5%",
  corporateDetails:
    "Under the two-tiered profits tax regime, the first HK$2 million of assessable profits is taxed at 8.25%, and the remainder at 16.5%. For unincorporated businesses, the rates are 7.5% and 15% respectively. Only one entity in a group of connected entities can benefit from the two-tiered rate. Offshore profits are generally not taxable, subject to the refined Foreign-Sourced Income Exemption (FSIE) regime.",

  individualBrackets: [
    { min: 0, max: 50000, rate: 2 },
    { min: 50001, max: 100000, rate: 6 },
    { min: 100001, max: 150000, rate: 10 },
    { min: 150001, max: 200000, rate: 14 },
    { min: 200001, max: null, rate: 17 },
  ],

  capitalGainsRate: "0% (no capital gains tax)",
  capitalGainsDetails:
    "Hong Kong does not impose a capital gains tax. Gains from the disposal of capital assets, including shares, real estate, and other investments, are generally not subject to tax. However, if gains are considered trading profits arising in Hong Kong (e.g., from a business of trading in shares), they may be subject to profits tax. Stamp duty applies to transfers of Hong Kong stock (0.26% total).",

  vatOrSalesTax: "No VAT or sales tax",
  vatDetails:
    "Hong Kong does not have a value-added tax, goods and services tax, or general sales tax. This is a key feature of Hong Kong's simple and low-tax regime. Revenue is primarily raised through profits tax, salaries tax, property tax, and stamp duties.",

  socialSecurity: "5% employee / 5% employer (MPF)",
  socialSecurityDetails:
    "The Mandatory Provident Fund (MPF) requires employees and employers each to contribute 5% of relevant income, capped at HK$1,500 per month (based on maximum relevant income of HK$30,000). Employees earning less than HK$7,100 per month are not required to contribute but employers still must. Self-employed persons contribute 5% of relevant income. There is no other mandatory social security contribution.",

  withholding: {
    dividends: "0% (no withholding tax on dividends)",
    interest: "0% (no withholding tax on interest)",
    royalties: "4.95% / 16.5% (reduced by treaty)",
  },

  filingDeadline: "June 2 (individuals) / within 1 month of issue of return (businesses)",

  taxAuthority: "Inland Revenue Department (IRD)",
  taxAuthorityUrl: "https://www.ird.gov.hk",

  keyFeatures: [
    "Territorial source principle — only profits arising in or derived from Hong Kong are taxed",
    "No capital gains tax, no VAT/GST, no withholding tax on dividends or interest",
    "Simple tax system with low tax rates and a narrow tax base",
    "Salaries tax capped at standard rate of 15% on net income without deductions",
    "Personal allowance of HK$132,000 and various other allowances and deductions",
    "Two-tiered profits tax benefits small and medium businesses",
    "Refined Foreign-Sourced Income Exemption (FSIE) regime from 2023",
    "Growing tax treaty network with over 45 comprehensive DTAs",
  ],

  lastUpdated: "2025-01",
};
