import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  Canada — Tax System (2024-2025 rates)                             */
/* ------------------------------------------------------------------ */

export const CA_TAX_SYSTEM: TaxSystem = {
  country: "Canada",
  countryCode: "CA",
  currency: "Canadian Dollar",
  currencySymbol: "C$",

  corporateRate: "15% federal / 23-31% combined",
  corporateDetails:
    "The federal corporate tax rate is 15% (38% base rate less 10% provincial abatement and 13% general rate reduction). The small business deduction reduces the rate to 9% on the first C$500,000 of active business income for Canadian-controlled private corporations (CCPCs). Combined federal-provincial rates range from approximately 23% to 31% depending on the province.",

  individualBrackets: [
    { min: 0, max: 57375, rate: 15 },
    { min: 57376, max: 114750, rate: 20.5 },
    { min: 114751, max: 158468, rate: 26 },
    { min: 158469, max: 220000, rate: 29 },
    { min: 220001, max: null, rate: 33 },
  ],

  capitalGainsRate: "50% inclusion rate (66.67% above C$250,000)",
  capitalGainsDetails:
    "Capital gains are included in income at a 50% inclusion rate for the first C$250,000 of net gains annually for individuals, and at 66.67% for gains exceeding that threshold (effective June 25, 2024). For corporations and trusts, the 66.67% inclusion rate applies to all capital gains. The taxable portion is then taxed at the individual's or corporation's marginal rate. Principal residence exemption eliminates gains on qualifying homes.",

  vatOrSalesTax: "5% GST (federal)",
  vatDetails:
    "The federal Goods and Services Tax (GST) is 5%. Some provinces levy an additional Provincial Sales Tax (PST) of 6-10%, while others participate in the Harmonized Sales Tax (HST) combining both (13-15%). Alberta, the territories, and certain others have no PST. Essential goods like basic groceries, prescription drugs, and medical devices are zero-rated or exempt.",

  socialSecurity: "5.95% employee / 5.95% employer (CPP)",
  socialSecurityDetails:
    "Canada Pension Plan (CPP): 5.95% each for employee and employer on pensionable earnings between C$3,500 and C$68,500 (2024). CPP2 adds 4% each on earnings from C$68,500 to C$73,200. Employment Insurance (EI): 1.66% employee, 2.324% employer on insurable earnings up to C$63,200. Quebec has its own QPP (6.4% each) and QPIP (provincial parental insurance).",

  withholding: {
    dividends: "25% (reduced by treaty)",
    interest: "25% (reduced by treaty)",
    royalties: "25% (reduced by treaty)",
  },

  filingDeadline: "April 30 (individuals) / June 15 (self-employed, payment still due April 30)",

  taxAuthority: "Canada Revenue Agency (CRA)",
  taxAuthorityUrl: "https://www.canada.ca/en/revenue-agency.html",

  keyFeatures: [
    "Federal-provincial dual tax system with each province setting its own rates and brackets",
    "Dividend gross-up and tax credit system integrates corporate and personal tax",
    "Tax-Free Savings Account (TFSA) with C$7,000 annual contribution room (2024)",
    "Registered Retirement Savings Plan (RRSP) for tax-deferred retirement savings",
    "First Home Savings Account (FHSA) for tax-free first home purchases",
    "Small business deduction reduces federal corporate rate to 9%",
    "Foreign tax credits and extensive treaty network to prevent double taxation",
    "Carbon pricing through federal fuel charge in non-participating provinces",
  ],

  lastUpdated: "2025-01",
};
