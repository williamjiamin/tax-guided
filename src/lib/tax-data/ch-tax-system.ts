import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  Switzerland — Tax System (2024-2025 rates)                        */
/* ------------------------------------------------------------------ */

export const CH_TAX_SYSTEM: TaxSystem = {
  country: "Switzerland",
  countryCode: "CH",
  currency: "Swiss Franc",
  currencySymbol: "CHF",

  corporateRate: "12-14% effective (varies by canton)",
  corporateDetails:
    "The federal corporate income tax rate is 8.5% on profit after tax (effective ~7.83%). Cantonal and communal taxes vary significantly, resulting in combined effective rates ranging from approximately 12% to 22% depending on location. Low-tax cantons like Zug (~12%), Lucerne (~12.3%), and Nidwalden (~12%) attract many holding companies. The Patent Box regime can reduce rates further on qualifying IP income.",

  individualBrackets: [
    { min: 0, max: 14500, rate: 0 },
    { min: 14501, max: 31600, rate: 0.77 },
    { min: 31601, max: 41400, rate: 0.88 },
    { min: 41401, max: 55200, rate: 2.64 },
    { min: 55201, max: 72500, rate: 2.97 },
    { min: 72501, max: 78100, rate: 5.94 },
    { min: 78101, max: 103600, rate: 6.6 },
    { min: 103601, max: 134600, rate: 8.8 },
    { min: 134601, max: 176000, rate: 11 },
    { min: 176001, max: 755200, rate: 13.2 },
    { min: 755201, max: null, rate: 13.2 },
  ],

  capitalGainsRate: "0% (private) / taxable (business)",
  capitalGainsDetails:
    "Private capital gains on movable assets (shares, securities) are generally tax-exempt for individuals. However, gains may be reclassified as taxable income if the taxpayer qualifies as a professional securities dealer. Capital gains on real estate are subject to cantonal real estate gains tax, with rates varying by canton and holding period. Business capital gains are taxed as ordinary income.",

  vatOrSalesTax: "8.1% standard rate",
  vatDetails:
    "The standard VAT rate is 8.1% (increased from 7.7% in January 2024). A reduced rate of 2.6% applies to food, medicines, books, and newspapers. A special rate of 3.8% applies to accommodation services. Exports and certain services are zero-rated. Businesses with annual domestic turnover below CHF 100,000 may be exempt from VAT registration.",

  socialSecurity: "~6.4% employee / ~6.4% employer (first pillar)",
  socialSecurityDetails:
    "The Swiss social security system has three pillars. First pillar (AHV/AVS): 8.7% total (4.35% each) on all salary, plus 1.4% IV/AI disability (0.7% each), 0.5% EO/APG (0.25% each). Second pillar (BVG/LPP): mandatory occupational pension with contributions varying by age (7-18% of coordinated salary, shared). Unemployment insurance: 2.2% (1.1% each) on salary up to CHF 148,200. Accident insurance: employer pays non-occupational and occupational premiums.",

  withholding: {
    dividends: "35% (reduced by treaty; refundable for treaty residents)",
    interest: "35% (reduced by treaty; refundable for treaty residents)",
    royalties: "0% (no WHT on royalties)",
  },

  filingDeadline: "March 31 (varies by canton, extensions commonly available)",

  taxAuthority: "Federal Tax Administration (FTA / ESTV)",
  taxAuthorityUrl: "https://www.estv.admin.ch",

  keyFeatures: [
    "Three-level taxation: federal, cantonal, and communal — rates vary dramatically by location",
    "Tax-exempt private capital gains on movable property for individuals",
    "35% withholding tax on dividends/interest, refundable via treaty or for Swiss residents",
    "Three-pillar social security system combining state, occupational, and private pensions",
    "Lump-sum taxation (forfait fiscal) available for qualifying wealthy foreign nationals",
    "Patent Box regime and R&D super-deduction reduce tax on qualifying IP income",
    "No inheritance/gift tax at federal level (cantonal rules vary widely)",
    "Cantonal tax competition results in some of the lowest effective rates in Europe",
  ],

  lastUpdated: "2025-01",
};
