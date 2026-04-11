import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  India — Tax System (2024-2025 rates)                              */
/* ------------------------------------------------------------------ */

export const IN_TAX_SYSTEM: TaxSystem = {
  country: "India",
  countryCode: "IN",
  currency: "Indian Rupee",
  currencySymbol: "₹",

  corporateRate: "22-30%",
  corporateDetails:
    "Domestic companies opting for the concessional regime under Section 115BAA pay 22% (effective ~25.17% with surcharge and cess). New manufacturing companies under Section 115BAB pay 15% (effective ~17.16%). Companies not opting for concessional rates pay 25% (turnover up to ₹400 crore) or 30% (others), plus applicable surcharge and 4% health and education cess.",

  individualBrackets: [
    { min: 0, max: 400000, rate: 0 },
    { min: 400001, max: 800000, rate: 5 },
    { min: 800001, max: 1200000, rate: 10 },
    { min: 1200001, max: 1600000, rate: 15 },
    { min: 1600001, max: 2000000, rate: 20 },
    { min: 2000001, max: 2400000, rate: 25 },
    { min: 2400001, max: null, rate: 30 },
  ],

  capitalGainsRate: "12.5% (long-term) / 20% (short-term)",
  capitalGainsDetails:
    "From July 2024, long-term capital gains (LTCG) on listed equity and equity mutual funds are taxed at 12.5% above ₹1.25 lakh per year. Short-term capital gains (STCG) on listed equity are taxed at 20%. For other assets, LTCG is taxed at 12.5% without indexation benefit, and STCG is taxed at applicable slab rates. Holding periods vary by asset class.",

  vatOrSalesTax: "18% standard GST",
  vatDetails:
    "The Goods and Services Tax (GST) replaced most indirect taxes in July 2017. GST has four main rate slabs: 5%, 12%, 18% (standard), and 28% (luxury/demerit goods). Essential items like fresh food are exempt. Certain goods attract an additional compensation cess. GST is administered jointly by the central and state governments.",

  socialSecurity: "12% employee / 12% employer (EPF)",
  socialSecurityDetails:
    "Employees' Provident Fund (EPF): 12% of basic salary from both employee and employer (mandatory for establishments with 20+ employees, applicable to employees earning up to ₹15,000/month, though higher earners can opt in). Employee State Insurance (ESI): 0.75% employee + 3.25% employer for employees earning up to ₹21,000/month. Professional tax varies by state (max ₹2,500/year).",

  withholding: {
    dividends: "20% (reduced by treaty)",
    interest: "20% (reduced by treaty)",
    royalties: "20% (reduced by treaty)",
  },

  filingDeadline: "July 31 (non-audit) / October 31 (audit required)",

  taxAuthority: "Central Board of Direct Taxes (CBDT) / Income Tax Department",
  taxAuthorityUrl: "https://www.incometax.gov.in",

  keyFeatures: [
    "New Tax Regime (default from FY 2024-25) with lower rates but fewer deductions",
    "Old regime still available with deductions under Sections 80C, 80D, HRA, etc.",
    "GST unified India's fragmented indirect tax system across 28 states",
    "Tax Deducted at Source (TDS) on salaries, interest, rent, and professional fees",
    "Aadhaar-PAN linkage mandatory for income tax filing",
    "Presumptive taxation for small businesses and professionals under Sections 44AD/44ADA",
    "Tax incentives for startups recognized by DPIIT under Section 80-IAC",
    "Equalization levy on digital services by non-resident companies",
  ],

  lastUpdated: "2025-01",
};
