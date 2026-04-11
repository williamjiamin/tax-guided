import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  Netherlands — Tax System (2024-2025 rates)                        */
/* ------------------------------------------------------------------ */

export const NL_TAX_SYSTEM: TaxSystem = {
  country: "Netherlands",
  countryCode: "NL",
  currency: "Euro",
  currencySymbol: "€",

  corporateRate: "19% / 25.8%",
  corporateDetails:
    "Corporate income tax is 19% on taxable profits up to €200,000, and 25.8% on profits exceeding €200,000. The Netherlands has an extensive participation exemption that provides full exemption for qualifying dividends and capital gains from subsidiaries (5%+ shareholding). The innovation box regime taxes qualifying IP income at an effective rate of 9%.",

  individualBrackets: [
    { min: 0, max: 75518, rate: 36.93 },
    { min: 75519, max: null, rate: 49.5 },
  ],

  capitalGainsRate: "Box 2: 24.5-33% / Box 3: deemed return taxed at 36%",
  capitalGainsDetails:
    "The Netherlands uses a box system. Box 1: employment and business income at progressive rates. Box 2: income from substantial interest (5%+ shareholding) taxed at 24.5% up to €67,000 and 33% above that. Box 3: savings and investments are taxed on a deemed return (not actual returns) at a flat 36% rate. The Box 3 system is being reformed following court rulings. Real estate gains from a principal residence are exempt.",

  vatOrSalesTax: "21% standard rate",
  vatDetails:
    "The standard VAT (BTW) rate is 21%. A reduced rate of 9% applies to food, water, medicines, books, newspapers, magazines, accommodation, cultural events, passenger transport, and repairs of bicycles and clothing. Zero-rated supplies include intra-Community supplies and exports. The small business scheme (KOR) exempts businesses with annual turnover below €20,000.",

  socialSecurity: "~27.65% employee / varies employer",
  socialSecurityDetails:
    "Employee national insurance contributions (premies volksverzekeringen) are integrated into the income tax system: AOW (pension) 17.9%, Anw (survivors) 0.1%, Wlz (long-term care) 9.65% — totaling 27.65% on income up to approximately €38,098. These are included in the Box 1 tax rate of 36.93%. Employer-paid contributions include WW (unemployment), WAO/WIA (disability), and ZVW (health insurance). Health insurance is mandatory, with a base premium of approximately €1,700/year plus employer ZVW contribution of 6.57%.",

  withholding: {
    dividends: "15% (reduced by treaty)",
    interest: "0% (generally no WHT)",
    royalties: "0% (WHT on royalties introduced 2021 for abuse cases, otherwise 0%)",
  },

  filingDeadline: "May 1 (individuals) / May 1 (corporate, 5 months after fiscal year-end)",

  taxAuthority: "Tax and Customs Administration (Belastingdienst)",
  taxAuthorityUrl: "https://www.belastingdienst.nl",

  keyFeatures: [
    "Participation exemption provides 100% exemption on qualifying subsidiary dividends and gains",
    "Innovation box regime taxes qualifying IP profits at an effective 9% rate",
    "Box system separates income into three categories with different tax treatments",
    "30% ruling allows qualifying expat employees to receive 30% of salary tax-free for 5 years",
    "No withholding tax on interest payments (except for abuse situations)",
    "Fiscal unity regime allows group companies to consolidate tax filings",
    "Extensive tax treaty network with over 90 countries",
    "Advance Tax Ruling (ATR) system provides certainty on tax positions",
  ],

  lastUpdated: "2025-01",
};
