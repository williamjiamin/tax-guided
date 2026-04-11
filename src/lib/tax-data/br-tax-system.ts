import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  Brazil — Tax System (2024-2025 rates)                             */
/* ------------------------------------------------------------------ */

export const BR_TAX_SYSTEM: TaxSystem = {
  country: "Brazil",
  countryCode: "BR",
  currency: "Brazilian Real",
  currencySymbol: "R$",

  corporateRate: "34% (combined)",
  corporateDetails:
    "Corporate income tax (IRPJ) is 15% on taxable income, with a 10% surtax on income exceeding R$240,000 per year (R$20,000/month). The Social Contribution on Net Profit (CSLL) adds 9% (20% for financial institutions), bringing the standard combined rate to 34%. Companies may opt for simplified regimes (Simples Nacional or Lucro Presumido) based on revenue thresholds.",

  individualBrackets: [
    { min: 0, max: 26963.20, rate: 0 },
    { min: 26963.21, max: 33919.80, rate: 7.5 },
    { min: 33919.81, max: 45012.60, rate: 15 },
    { min: 45012.61, max: 55976.16, rate: 22.5 },
    { min: 55976.17, max: null, rate: 27.5 },
  ],

  capitalGainsRate: "15-22.5%",
  capitalGainsDetails:
    "Capital gains are taxed at progressive rates: 15% on gains up to R$5 million, 17.5% on gains from R$5-10 million, 20% on gains from R$10-30 million, and 22.5% on gains above R$30 million. Gains on stock exchange transactions are taxed at 15% (swing trade) or 20% (day trade). Individual gains up to R$35,000 per month from small-cap stock sales are exempt.",

  vatOrSalesTax: "ICMS 7-25% / IBS+CBS (reform pending)",
  vatDetails:
    "Brazil's indirect tax system is complex with multiple overlapping taxes. ICMS (state VAT) ranges from 7% to 25% depending on the state and product. ISS (municipal services tax) ranges from 2% to 5%. IPI (federal excise) varies by product. PIS/COFINS (federal contributions) total approximately 3.65-9.25%. A major tax reform (EC 132/2023) will replace these with IBS and CBS (combined ~26.5%) with gradual implementation from 2026 to 2033.",

  socialSecurity: "7.5-14% employee / 20% employer",
  socialSecurityDetails:
    "Employee INSS contributions are progressive: 7.5% up to R$1,412, 9% from R$1,412.01 to R$2,666.68, 12% from R$2,666.69 to R$4,000.03, and 14% from R$4,000.04 to R$7,786.02 (2024 ceiling). Employers contribute 20% on total payroll, plus 1-3% for work accident insurance (RAT), plus System S contributions (~5.8%). FGTS (severance fund): 8% employer contribution.",

  withholding: {
    dividends: "0% (currently exempt)",
    interest: "15% (reduced by treaty)",
    royalties: "15% (reduced by treaty)",
  },

  filingDeadline: "Last business day of May",

  taxAuthority: "Federal Revenue Service (Receita Federal do Brasil)",
  taxAuthorityUrl: "https://www.gov.br/receitafederal",

  keyFeatures: [
    "Dividends are currently tax-exempt for recipients (reform may change this)",
    "Complex multi-layered indirect tax system with federal, state, and municipal taxes",
    "Major tax reform (EC 132/2023) transitioning to dual VAT system by 2033",
    "Simples Nacional simplified regime for micro and small businesses",
    "Lucro Presumido allows presumed profit calculation for companies under R$78 million revenue",
    "Transfer pricing rules recently aligned with OECD standards (effective 2024)",
    "Interest on equity (JCP) allows deductible shareholder payments",
    "CPF (taxpayer ID) is essential for all tax transactions and financial activities",
  ],

  lastUpdated: "2025-01",
};
