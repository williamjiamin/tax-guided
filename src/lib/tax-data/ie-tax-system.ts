import type { TaxSystem } from "./types";

/* ------------------------------------------------------------------ */
/*  Ireland — Tax System (2024-2025 rates)                            */
/* ------------------------------------------------------------------ */

export const IE_TAX_SYSTEM: TaxSystem = {
  country: "Ireland",
  countryCode: "IE",
  currency: "Euro",
  currencySymbol: "€",

  corporateRate: "12.5% / 15%",
  corporateDetails:
    "The standard corporate tax rate is 12.5% on trading income and 25% on non-trading (passive) income. Ireland has agreed to the OECD Pillar Two global minimum tax, applying a 15% effective rate to large multinational groups with global revenue above €750 million. A 6.25% rate applies to qualifying income from the Knowledge Development Box (KDB). Capital gains are taxed at 33%.",

  individualBrackets: [
    { min: 0, max: 42000, rate: 20 },
    { min: 42001, max: null, rate: 40 },
  ],

  capitalGainsRate: "33%",
  capitalGainsDetails:
    "Capital gains tax (CGT) is levied at 33% on gains from the disposal of assets. A personal exemption of €1,270 per year applies. Entrepreneur relief provides a reduced 10% CGT rate on qualifying business asset disposals up to a €1 million lifetime limit. Principal private residence relief exempts gains on your main home. Certain share disposals in qualifying companies may benefit from participation exemption.",

  vatOrSalesTax: "23% standard rate",
  vatDetails:
    "The standard VAT rate is 23%. Reduced rates include 13.5% (tourism, hospitality, hairdressing, certain fuels), 9% (newspapers, e-publications, sports facilities), and 0% (most food, children's clothing, oral medicines, books). The flat-rate scheme for farmers applies at 4.8%. The VAT registration threshold is €80,000 for goods and €40,000 for services.",

  socialSecurity: "4% employee (PRSI) / 11.05% employer",
  socialSecurityDetails:
    "Pay Related Social Insurance (PRSI) for employees (Class A): employee contributes 4% on all earnings with no ceiling. Employer contributes 11.05% (8.8% on weekly earnings up to €441). Universal Social Charge (USC) is an additional tax on gross income: 0.5% on first €12,012, 2% on next €13,748, 4% on next €44,284, and 8% above €70,044. Self-employed pay 4% PRSI (Class S) plus USC.",

  withholding: {
    dividends: "25% (reduced by treaty)",
    interest: "20% (reduced by treaty)",
    royalties: "20% (reduced by treaty)",
  },

  filingDeadline: "October 31 (paper) / November mid-November (ROS e-filing)",

  taxAuthority: "Revenue Commissioners (Revenue)",
  taxAuthorityUrl: "https://www.revenue.ie",

  keyFeatures: [
    "12.5% corporate tax rate on trading income is among the lowest in the OECD",
    "Knowledge Development Box (KDB) offers 6.25% on qualifying IP income",
    "Extensive R&D tax credit of 30% on qualifying expenditure",
    "Two-rate individual income tax system (20% and 40%) is simple but steep",
    "Universal Social Charge (USC) adds 0.5-8% on top of income tax and PRSI",
    "Special Assignee Relief Programme (SARP) for inbound employees",
    "Foreign Earnings Deduction for employees working in developing countries",
    "Ireland is a major EU hub for multinationals due to favorable corporate regime and EU membership",
  ],

  lastUpdated: "2025-01",
};
