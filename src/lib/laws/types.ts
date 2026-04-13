export type EntryCategory =
  | "law-and-guidance"
  | "forms"
  | "policy"
  | "regulation";

export type AgencyCategory =
  | "tax-authority"
  | "government"
  | "judicial";

export interface Agency {
  id: string;
  name: string;
  url: string;
  category: AgencyCategory;
}

export interface CatalogEntry {
  id: string;
  title: string;
  summary: string;
  publishedDate: string;
  url: string;
  agency: string;
  category: EntryCategory;
}

export interface CountryCatalog {
  countryCode: string;
  countryName: string;
  agencies: Agency[];
  entries: CatalogEntry[];
  totalEntries: number;
  lastUpdated: string;
}

export interface CountrySummary {
  code: string;
  name: string;
  entryCount: number;
  agencyCount: number;
  agencies: string[];
}
