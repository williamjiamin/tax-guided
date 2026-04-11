import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  France — Tax System (2024-2025 rates)                             */
/* ------------------------------------------------------------------ */

export const FR_TAX_SYSTEM: TaxSystem = {
  country: "France",
  countryCode: "FR",
  currency: "Euro",
  currencySymbol: "€",

  corporateRate: "25%",
  corporateDetails:
    "The standard corporate income tax (impôt sur les sociétés) rate is 25%. A reduced rate of 15% applies to the first €42,500 of profits for small and medium enterprises with turnover under €10 million. An additional social contribution of 3.3% applies to companies with corporate tax exceeding €763,000.",

  individualBrackets: [
    { min: 0, max: 11294, rate: 0 },
    { min: 11295, max: 28797, rate: 11 },
    { min: 28798, max: 82341, rate: 30 },
    { min: 82342, max: 177106, rate: 41 },
    { min: 177107, max: null, rate: 45 },
  ],

  capitalGainsRate: "30% flat tax (PFU) or progressive scale",
  capitalGainsDetails:
    "The Prélèvement Forfaitaire Unique (PFU/flat tax) of 30% includes 12.8% income tax plus 17.2% social contributions. Taxpayers may opt for the progressive income tax scale plus 17.2% social contributions if more favorable. Real estate capital gains are taxed at 19% plus 17.2% social contributions, with a taper relief leading to full exemption after 22 years (income tax) and 30 years (social contributions).",

  vatOrSalesTax: "20% standard rate",
  vatDetails:
    "The standard VAT (TVA) rate is 20%. Reduced rates include 10% (restaurants, transport, renovation work), 5.5% (food products, books, energy, cultural events), and 2.1% (certain pharmaceuticals, press publications). Corsica and overseas territories have special rates.",

  socialSecurity: "~22% employee / ~45% employer",
  socialSecurityDetails:
    "France has very high social contributions. Employee contributions total approximately 22% covering health, pension, unemployment, and supplementary pension. Employer contributions total approximately 42-45% including health insurance, family allowances, pension, unemployment, work accidents, and training levies. The CSG (9.2%) and CRDS (0.5%) are social contributions applied to nearly all income.",

  withholding: {
    dividends: "25% (reduced by treaty)",
    interest: "0% (generally no WHT for EU/treaty countries)",
    royalties: "25% (reduced by treaty)",
  },

  filingDeadline: "Mid-May to early June (varies by zone and filing method)",

  taxAuthority: "Direction Générale des Finances Publiques (DGFiP)",
  taxAuthorityUrl: "https://www.impots.gouv.fr",

  keyFeatures: [
    "Family quotient system (quotient familial) reduces tax for families with children",
    "Flat tax (PFU) of 30% on investment income simplifies capital taxation",
    "Very high employer social contributions (~45%) are a major cost of employment",
    "Wealth tax on real estate (IFI) for net real estate assets above €1.3 million",
    "Mandatory income tax withholding at source (prélèvement à la source) since 2019",
    "Extensive tax treaty network reducing double taxation",
    "Research tax credit (CIR) of up to 30% on qualifying R&D expenditure",
    "Tax incentives for investments in DOM-TOM (overseas territories)",
  ],

  lastUpdated: "2025-01",
};
