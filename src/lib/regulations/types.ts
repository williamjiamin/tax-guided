export interface RegulationItem {
  id: string;
  title: string;
  summary: string;
  publishedDate: string;
  url: string;
  officialSourceUrl: string;
  sourceId: string;
  sourceName: string;
  jurisdiction: "US" | "CN";
}

export interface RegulationSource {
  id: string;
  name: string;
  jurisdiction: string;
  agency: string;
  officialSourceUrl: string;
  items: RegulationItem[];
  itemCount: number;
  error: string | null;
}

export interface RegulationFeed {
  schemaVersion: number;
  fetchedAt: string;
  latestItems: RegulationItem[];
  sources: RegulationSource[];
  warnings: string[];
}
