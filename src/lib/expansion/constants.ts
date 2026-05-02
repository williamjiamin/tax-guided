export const BASE_URL = "https://taxguided.com";
export const EXPANSION_REVALIDATE_SECONDS = 86400;

export const COUNTRY_NAMES: Record<string, string> = {
  us: "United States",
  gb: "United Kingdom",
  ca: "Canada",
  au: "Australia",
  de: "Germany",
  fr: "France",
  jp: "Japan",
  kr: "South Korea",
  in: "India",
  br: "Brazil",
  mx: "Mexico",
  sg: "Singapore",
  hk: "Hong Kong",
  ae: "United Arab Emirates",
  ie: "Ireland",
  nl: "Netherlands",
  ch: "Switzerland",
  cn: "China",
  id: "Indonesia",
  ee: "Estonia",
};

export const TAX_TYPE_LABELS: Record<string, string> = {
  "corporate-income": "Corporate income tax",
  "individual-income": "Individual income tax",
  "capital-gains": "Capital gains tax",
  "payroll-tax": "Payroll tax",
  "estate-tax": "Estate tax",
  "franchise-thresholds": "Franchise tax threshold history",
  "llc-annual-tax": "LLC annual-tax rule history",
  "distributed-profit-tax": "Distributed profit tax history",
};

export const EXPANSION_DISCLAIMER =
  "This library is for general tax education only. Always verify filing obligations, due dates, and tax consequences against the cited primary source or with a qualified tax professional.";

export function getCountryName(code: string): string {
  return COUNTRY_NAMES[code.toLowerCase()] ?? code.toUpperCase();
}

export function getTaxTypeLabel(taxType: string): string {
  return TAX_TYPE_LABELS[taxType] ?? taxType.replace(/-/g, " ");
}

export function formatMonthLabel(month: number): string {
  return new Date(Date.UTC(2026, month - 1, 1)).toLocaleString("en-US", {
    month: "long",
    timeZone: "UTC",
  });
}
