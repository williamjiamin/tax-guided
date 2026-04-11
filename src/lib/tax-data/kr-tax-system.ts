import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  South Korea — Tax System (2024-2025 rates)                        */
/* ------------------------------------------------------------------ */

export const KR_TAX_SYSTEM: TaxSystem = {
  country: "South Korea",
  countryCode: "KR",
  currency: "Korean Won",
  currencySymbol: "₩",

  corporateRate: "9-24%",
  corporateDetails:
    "Corporate income tax is progressive: 9% on income up to ₩200 million, 19% on income from ₩200 million to ₩20 billion, 21% on income from ₩20 billion to ₩300 billion, and 24% on income exceeding ₩300 billion. Local income tax adds 10% of the national corporate tax liability. These rates were reduced from the prior year's schedule effective January 2024.",

  individualBrackets: [
    { min: 0, max: 14000000, rate: 6 },
    { min: 14000001, max: 50000000, rate: 15 },
    { min: 50000001, max: 88000000, rate: 24 },
    { min: 88000001, max: 150000000, rate: 35 },
    { min: 150000001, max: 300000000, rate: 38 },
    { min: 300000001, max: 500000000, rate: 40 },
    { min: 500000001, max: 1000000000, rate: 42 },
    { min: 1000000001, max: null, rate: 45 },
  ],

  capitalGainsRate: "20-25% (financial) / 6-45% (real estate)",
  capitalGainsDetails:
    "Listed stock gains exceeding ₩50 million per year are taxed at 20% (25% for gains from shares in large corporations above ₩300 million). Real estate capital gains are taxed at progressive rates from 6% to 45% based on holding period and amount, with additional surcharges for short-term holdings and multiple property owners. A securities transaction tax of 0.18-0.23% also applies.",

  vatOrSalesTax: "10%",
  vatDetails:
    "A flat 10% VAT applies to most goods and services. Certain essential items such as unprocessed food, medical services, education, and financial services are zero-rated or exempt. Simplified taxation applies to small businesses with annual revenue below ₩80 million.",

  socialSecurity: "~9% employee / ~9% employer",
  socialSecurityDetails:
    "National Pension: 9% total (4.5% each). National Health Insurance: approximately 7.09% (3.545% each). Long-term care insurance: 12.81% of health insurance premium. Employment insurance: 0.9% employee + 0.9-1.5% employer (varies by company size). Workers' compensation: employer only (varies by industry).",

  withholding: {
    dividends: "20% (reduced by treaty)",
    interest: "20% (reduced by treaty)",
    royalties: "20% (reduced by treaty)",
  },

  filingDeadline: "May 31",

  taxAuthority: "National Tax Service (NTS / 국세청)",
  taxAuthorityUrl: "https://www.nts.go.kr",

  keyFeatures: [
    "Progressive corporate tax with four brackets ranging from 9% to 24%",
    "Local income tax adds 10% surcharge on national income tax liability",
    "Comprehensive real estate taxation with acquisition, holding, and transfer taxes",
    "Year-end tax settlement system for salaried employees simplifies filing",
    "Extensive tax incentives for R&D and technology investment",
    "Foreign investment zones and free economic zones offer tax reductions",
    "Cash receipt system encourages card/electronic payments for transparency",
    "Tax treaties with over 90 countries to prevent double taxation",
  ],

  lastUpdated: "2025-01",
};
