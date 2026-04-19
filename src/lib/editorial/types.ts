// Shared types for editorial content

export type EditorialGuideType =
  | "country"
  | "comparison"
  | "business-setup"
  | "treaty"
  | "form"
  | "rate"
  | "niche";

export interface EditorialGuide {
  id: string;
  slug: string;
  type: EditorialGuideType;
  title: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
  sources: Array<{
    label: string;
    url: string;
  }>;
}
