import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  Indonesia — Tax System (2024-2025 rates)                          */
/* ------------------------------------------------------------------ */

export const ID_TAX_SYSTEM: TaxSystem = {
  country: "Indonesia",
  countryCode: "ID",
  currency: "Indonesian Rupiah",
  currencySymbol: "Rp",

  corporateRate: "22%",
  corporateDetails:
    "The standard corporate income tax rate is 22%. Publicly listed companies meeting certain requirements (at least 40% free float and 300+ shareholders) receive a 3% discount, resulting in a 19% rate. Micro, small, and medium enterprises (MSMEs) with gross revenue up to IDR 4.8 billion per year may elect to pay 0.5% final income tax on gross revenue. Companies with gross revenue up to IDR 50 billion receive a 50% rate reduction on a proportional basis.",

  individualBrackets: [
    { min: 0, max: 60000000, rate: 5 },
    { min: 60000001, max: 250000000, rate: 15 },
    { min: 250000001, max: 500000000, rate: 25 },
    { min: 500000001, max: 5000000000, rate: 30 },
    { min: 5000000001, max: null, rate: 35 },
  ],

  capitalGainsRate: "0.1% (listed shares) / 22% (other)",
  capitalGainsDetails:
    "Gains from the sale of shares listed on the Indonesian Stock Exchange are subject to a final 0.1% tax on gross transaction value. An additional 0.5% final tax applies to founder shares. For unlisted shares and other capital assets, gains are included in taxable income and subject to normal progressive rates for individuals or the 22% corporate rate. Land and building transfers are subject to a 2.5% final tax on gross value.",

  vatOrSalesTax: "11%",
  vatDetails:
    "The standard VAT (PPN) rate is 11% (increased from 10% in April 2022 under the Harmonization of Tax Regulations Law). A 12% rate is planned for January 2025. Essential goods and services including staple food, healthcare, education, social services, and financial services are exempt. Export of goods and certain services is zero-rated. Luxury Sales Tax (PPnBM) of 10-200% applies to luxury goods.",

  socialSecurity: "~5% employee / ~10% employer (BPJS)",
  socialSecurityDetails:
    "BPJS Ketenagakerjaan (employment): work accident (0.24-1.74% employer), death (0.3% employer), old-age savings (2% employee + 3.7% employer), pension (1% employee + 2% employer, capped). BPJS Kesehatan (health): 5% of salary (1% employee + 4% employer), capped at IDR 12 million salary. Total employee burden is approximately 5% and employer approximately 10% depending on risk classification.",

  withholding: {
    dividends: "20% (reduced by treaty; 0% for domestic corporate recipients meeting requirements)",
    interest: "20% (reduced by treaty)",
    royalties: "20% (reduced by treaty)",
  },

  filingDeadline: "March 31 (individuals) / April 30 (corporate)",

  taxAuthority: "Directorate General of Taxes (DJP — Direktorat Jenderal Pajak)",
  taxAuthorityUrl: "https://pajak.go.id",

  keyFeatures: [
    "22% corporate rate with reductions for listed companies (19%) and SMEs",
    "Final income tax of 0.5% for MSMEs with turnover up to IDR 4.8 billion",
    "Harmonization of Tax Regulations (HPP) Law reformed tax system from 2022",
    "35% top individual income tax rate bracket introduced for income above IDR 5 billion",
    "Luxury Sales Tax (PPnBM) targets specific luxury items at 10-200%",
    "Tax Amnesty programs (2016-2017 and 2022) have broadened the tax base",
    "NIK (national ID) integration with NPWP tax number from 2024",
    "Tax holidays of up to 20 years for pioneer industry investments above IDR 500 billion",
  ],

  lastUpdated: "2025-01",
};
