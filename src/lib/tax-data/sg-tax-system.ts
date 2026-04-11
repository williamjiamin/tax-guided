import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  Singapore — Tax System (2024-2025 rates)                          */
/* ------------------------------------------------------------------ */

export const SG_TAX_SYSTEM: TaxSystem = {
  country: "Singapore",
  countryCode: "SG",
  currency: "Singapore Dollar",
  currencySymbol: "S$",

  corporateRate: "17%",
  corporateDetails:
    "The headline corporate tax rate is 17%. A partial tax exemption scheme provides 75% exemption on the first S$10,000 of chargeable income and 50% exemption on the next S$190,000, resulting in effective rates well below 17% for smaller companies. New startup companies enjoy additional exemptions for the first three years. Singapore does not tax capital gains.",

  individualBrackets: [
    { min: 0, max: 20000, rate: 0 },
    { min: 20001, max: 30000, rate: 2 },
    { min: 30001, max: 40000, rate: 3.5 },
    { min: 40001, max: 80000, rate: 7 },
    { min: 80001, max: 120000, rate: 11.5 },
    { min: 120001, max: 160000, rate: 15 },
    { min: 160001, max: 200000, rate: 18 },
    { min: 200001, max: 240000, rate: 19 },
    { min: 240001, max: 280000, rate: 19.5 },
    { min: 280001, max: 320000, rate: 20 },
    { min: 320001, max: 500000, rate: 22 },
    { min: 500001, max: 1000000, rate: 23 },
    { min: 1000001, max: null, rate: 24 },
  ],

  capitalGainsRate: "0% (no capital gains tax)",
  capitalGainsDetails:
    "Singapore does not impose a capital gains tax. Gains from the disposal of investments, shares, and property are generally not taxable. However, gains may be treated as taxable income if the taxpayer is deemed to be trading (e.g., frequent property transactions). Gains from the sale of shares in a company are not taxable if the divesting company held at least 20% for at least 24 months.",

  vatOrSalesTax: "9% GST",
  vatDetails:
    "Goods and Services Tax (GST) was increased to 9% effective January 2024 (from 8% in 2023). GST applies to most goods and services supplied in Singapore and to imported goods. Exported goods and international services are zero-rated. Financial services and residential property sales/rentals are exempt. Businesses with annual taxable turnover exceeding S$1 million must register for GST.",

  socialSecurity: "20% employee / 17% employer (CPF)",
  socialSecurityDetails:
    "The Central Provident Fund (CPF) is mandatory for Singapore citizens and permanent residents. For employees up to age 55 earning more than S$750/month: employee contributes 20%, employer contributes 17%, totaling 37% of ordinary wages (capped at S$6,800/month). Rates decrease progressively for older workers. CPF funds are allocated across Ordinary Account, Special Account, and Medisave Account.",

  withholding: {
    dividends: "0% (no withholding tax on dividends)",
    interest: "15% (reduced by treaty)",
    royalties: "10% (reduced by treaty)",
  },

  filingDeadline: "April 15 (paper) / April 18 (e-Filing)",

  taxAuthority: "Inland Revenue Authority of Singapore (IRAS)",
  taxAuthorityUrl: "https://www.iras.gov.sg",

  keyFeatures: [
    "No capital gains tax makes Singapore attractive for investment holding",
    "Territorial tax system — only Singapore-sourced income and remitted foreign income are taxed",
    "One-tier corporate tax system with no tax on dividends received by shareholders",
    "Extensive tax incentive schemes (Pioneer, Development and Expansion, IP Development)",
    "Wide network of over 90 tax treaties and comprehensive avoidance of double taxation agreements",
    "Central Provident Fund (CPF) mandatory savings for retirement, healthcare, and housing",
    "No estate duty or inheritance tax since 2008",
    "GST Voucher scheme offsets GST impact for lower-income residents",
  ],

  lastUpdated: "2025-01",
};
