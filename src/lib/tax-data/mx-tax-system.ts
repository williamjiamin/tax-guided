import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  Mexico — Tax System (2024-2025 rates)                             */
/* ------------------------------------------------------------------ */

export const MX_TAX_SYSTEM: TaxSystem = {
  country: "Mexico",
  countryCode: "MX",
  currency: "Mexican Peso",
  currencySymbol: "MX$",

  corporateRate: "30%",
  corporateDetails:
    "The standard corporate income tax (ISR) rate is 30%. In addition, companies must pay a 10% tax on dividends distributed to individual shareholders or foreign residents. An employee profit-sharing requirement (PTU) of 10% of taxable income (capped at 3 months salary or average of last 3 years) further increases the effective cost. Maquiladora and IMMEX companies have special transfer pricing rules.",

  individualBrackets: [
    { min: 0, max: 8952.49, rate: 1.92 },
    { min: 8952.50, max: 75984.55, rate: 6.4 },
    { min: 75984.56, max: 133536.07, rate: 10.88 },
    { min: 133536.08, max: 155229.80, rate: 16 },
    { min: 155229.81, max: 185852.57, rate: 17.92 },
    { min: 185852.58, max: 374837.88, rate: 21.36 },
    { min: 374837.89, max: 590795.99, rate: 23.52 },
    { min: 590796.00, max: 1127926.84, rate: 30 },
    { min: 1127926.85, max: 1503902.46, rate: 32 },
    { min: 1503902.47, max: 4511707.37, rate: 34 },
    { min: 4511707.38, max: null, rate: 35 },
  ],

  capitalGainsRate: "10% (stock market) / up to 35% (other)",
  capitalGainsDetails:
    "Gains from the sale of shares on the Mexican stock exchange are taxed at a flat 10% rate. Other capital gains for individuals are generally included in taxable income and subject to progressive rates up to 35%. Real estate gains may benefit from exemptions if the property was the taxpayer's principal residence (up to a limit). Corporate capital gains are included in ordinary taxable income at 30%.",

  vatOrSalesTax: "16%",
  vatDetails:
    "The standard VAT (IVA) rate is 16% throughout Mexico. A 0% rate applies to food, medicines, agricultural exports, and certain other essential goods. Exempt supplies include medical services, education, residential rent, land sales, and book sales. The northern border zone temporarily benefits from a reduced 8% IVA rate on qualifying activities.",

  socialSecurity: "~3% employee / ~25-35% employer",
  socialSecurityDetails:
    "The Mexican social security system (IMSS) places most of the burden on employers. Employer contributions include retirement (5.15%), health and maternity (varying %), work risk (0.5-7.6% based on industry risk class), disability/life (2.375%), daycare (1%), and housing (INFONAVIT, 5%). Employee contributions are relatively small at approximately 2.78% of salary. Contributions are capped at 25 times the daily UMA value.",

  withholding: {
    dividends: "10% (reduced by treaty)",
    interest: "4.9-35% (varies by type; 4.9% for banks, reduced by treaty)",
    royalties: "25-35% (reduced by treaty)",
  },

  filingDeadline: "April 30 (individuals) / March 31 (corporations)",

  taxAuthority: "Tax Administration Service (SAT — Servicio de Administración Tributaria)",
  taxAuthorityUrl: "https://www.sat.gob.mx",

  keyFeatures: [
    "30% flat corporate tax rate is one of the highest in the Americas",
    "Mandatory employee profit sharing (PTU) of 10% of taxable profits",
    "Electronic invoicing (CFDI) is mandatory for all transactions",
    "Maquiladora/IMMEX programs provide customs and transfer pricing benefits",
    "Simplified tax regime (RESICO) for small taxpayers earning up to MX$3.5 million",
    "10% additional tax on dividends distributed to individuals and foreign residents",
    "Northern border zone incentives with reduced ISR and IVA rates",
    "Anti-avoidance rules target outsourcing schemes and abusive structures",
  ],

  lastUpdated: "2025-01",
};
