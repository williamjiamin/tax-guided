import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  United Arab Emirates — Tax System (2024-2025 rates)               */
/* ------------------------------------------------------------------ */

export const AE_TAX_SYSTEM: TaxSystem = {
  country: "United Arab Emirates",
  countryCode: "AE",
  currency: "UAE Dirham",
  currencySymbol: "AED",

  corporateRate: "9%",
  corporateDetails:
    "The UAE introduced a federal corporate tax effective June 2023. Taxable income up to AED 375,000 is taxed at 0%. Income exceeding AED 375,000 is taxed at 9%. Qualifying Free Zone entities can benefit from a 0% rate on qualifying income. Large multinationals with global revenue above EUR 750 million may be subject to a 15% minimum tax under Pillar Two. Extractive industries and banking remain subject to emirate-level taxation.",

  individualBrackets: [
    { min: 0, max: null, rate: 0 },
  ],

  capitalGainsRate: "0% (individuals) / 9% (corporate, if applicable)",
  capitalGainsDetails:
    "There is no personal income tax or personal capital gains tax in the UAE. For corporations, capital gains are included in taxable income and subject to the 9% corporate tax rate. However, gains from qualifying shareholdings (participation exemption) and qualifying intra-group transfers can be exempt from corporate tax.",

  vatOrSalesTax: "5%",
  vatDetails:
    "VAT was introduced in January 2018 at a standard rate of 5%. Zero-rated supplies include exports of goods and services, international transportation, newly constructed residential property, and certain healthcare and education services. Exempt supplies include certain financial services and bare land. VAT registration is mandatory for businesses with taxable supplies exceeding AED 375,000.",

  socialSecurity: "5% employee / 12.5-15% employer (nationals only)",
  socialSecurityDetails:
    "Social security applies only to UAE and GCC nationals. UAE nationals: employee contributes 5% of salary, employer contributes 12.5% (private sector) or 15% (public sector in Abu Dhabi). GCC nationals: contributions at their home country rates. There are no social security obligations for expatriate employees, though the employer must provide end-of-service gratuity (21 days' salary per year for the first 5 years, 30 days per year thereafter).",

  withholding: {
    dividends: "0%",
    interest: "0%",
    royalties: "0%",
  },

  filingDeadline: "Within 9 months of the end of the relevant tax period",

  taxAuthority: "Federal Tax Authority (FTA)",
  taxAuthorityUrl: "https://tax.gov.ae",

  keyFeatures: [
    "No personal income tax — one of the key attractions for individuals",
    "New corporate tax introduced in 2023 at a competitive 9% rate",
    "Free Zone entities may enjoy 0% corporate tax on qualifying income",
    "No withholding taxes on dividends, interest, or royalties",
    "VAT at 5% is one of the lowest rates globally",
    "End-of-service gratuity system replaces social security for expatriates",
    "Participation exemption available for qualifying shareholding gains",
    "Transfer pricing rules and documentation requirements aligned with OECD",
  ],

  lastUpdated: "2025-01",
};
