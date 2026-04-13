// Q&A Community data model and catalog
// Seed Q&As are stored here as static TypeScript data (SEO-optimized, fast)
// User-submitted questions are stored in KV and reviewed via admin API

export interface QAAuthor {
  displayName: string;
  avatarSeed: string; // deterministic seed for avatar color generation
  isOfficial?: boolean;
  badge?: "subscriber" | "new-member" | "expert";
}

export interface QAQuestion {
  id: string;
  title: string;
  body: string;
  author: QAAuthor;
  category: string;
  tags: string[];
  postedAt: string; // ISO date
  viewCount: number;
  answerCount: number;
  status: "answered" | "pending" | "closed";
  seoTitle: string;
  seoDescription: string;
  isFeatured?: boolean;
}

export interface QASource {
  label: string;
  url: string;
}

export interface QAAnswer {
  id: string;
  questionId: string;
  videoId?: string; // YouTube video ID for floating player
  articleContent: {
    sections: Array<{ heading: string; body: string }>;
    keyTakeaways: string[];
  };
  author: QAAuthor;
  postedAt: string;
  sources: QASource[];
}

export interface QAThread {
  question: QAQuestion;
  answers: QAAnswer[];
}

// Slug generation (same logic as video-catalog)
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[–—]/g, "-")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

// Q&A categories — global tax topics
export const QA_CATEGORIES = {
  // US-specific
  "form-5472": "Form 5472 & Foreign-Owned LLCs",
  "form-1120": "Corporate Tax Returns",
  "ein-itin": "EIN & ITIN Applications",
  "compliance": "Tax Compliance & Penalties",
  "entity-setup": "Business Formation & Entity Setup",
  "filing-process": "Filing Process & Procedures",
  "state-tax": "US State Tax",
  // International & cross-border
  "international": "International Tax",
  "firpta": "FIRPTA & Foreign Real Estate",
  "international-corporate": "GILTI, Subpart F & BEAT",
  "withholding": "Withholding & Tax Treaties",
  "transfer-pricing": "Transfer Pricing",
  "cross-border": "Cross-Border Business",
  // Industry & topic
  "ecommerce": "E-Commerce & Digital Sellers",
  "crypto": "Cryptocurrency & Digital Assets",
  "estate-gift": "Estate & Gift Tax",
  "aml-compliance": "AML, BSA & OFAC Compliance",
  "payroll": "Payroll & Employment Tax",
  "bookkeeping": "Bookkeeping & Accounting",
  "vat-gst": "VAT & GST",
  "self-employed": "Self-Employed & Freelancers",
  // Country-specific
  "us-tax": "United States Tax",
  "cn-tax": "China Tax",
  "uk-tax": "United Kingdom Tax",
  "sg-tax": "Singapore Tax",
  "ae-tax": "UAE Tax",
  "hk-tax": "Hong Kong Tax",
  "ie-tax": "Ireland Tax",
  "de-tax": "Germany Tax",
  "ee-tax": "Estonia Tax",
  "jp-tax": "Japan Tax",
  "ca-tax": "Canada Tax",
  "au-tax": "Australia Tax",
  "other-country": "Other Country Tax",
} as const;

export type QACategory = keyof typeof QA_CATEGORIES;

// Import seed content
import { SEED_THREADS } from "./qa-content";

// Build the full catalog with computed slugs
export const QA_CATALOG: (QAThread & { slug: string })[] = SEED_THREADS.map((thread) => ({
  ...thread,
  slug: slugify(thread.question.seoTitle),
}));

// Lookup helpers
export function getQABySlug(slug: string): (QAThread & { slug: string }) | undefined {
  return QA_CATALOG.find((t) => t.slug === slug);
}

export function getAllQASlugs(): string[] {
  return QA_CATALOG.map((t) => t.slug);
}

export function getQAsByCategory(category: string): (QAThread & { slug: string })[] {
  return QA_CATALOG.filter((t) => t.question.category === category);
}

export function getFeaturedQAs(): (QAThread & { slug: string })[] {
  return QA_CATALOG.filter((t) => t.question.isFeatured);
}

// Deterministic avatar color from seed string
export function getAvatarColor(seed: string): string {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colors = [
    "#3B82F6", "#EF4444", "#10B981", "#F59E0B", "#8B5CF6",
    "#EC4899", "#06B6D4", "#F97316", "#6366F1", "#14B8A6",
  ];
  return colors[Math.abs(hash) % colors.length];
}

// Get initials from display name
export function getInitials(name: string): string {
  return name
    .split(/[\s_]+/)
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
