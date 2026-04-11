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

// Q&A categories (reuse from video-catalog + community-specific)
export const QA_CATEGORIES = {
  "form-5472": "Form 5472 & Foreign-Owned LLCs",
  "form-1120": "Form 1120 Corporate Tax Return",
  "ein-itin": "EIN & ITIN Applications",
  "compliance": "IRS Compliance & Penalties",
  "entity-setup": "LLC Formation & Entity Setup",
  "filing-process": "Filing Process & Procedures",
  "international": "International Tax Issues",
  "firpta": "FIRPTA & Foreign Real Estate",
  "international-corporate": "GILTI, Subpart F & BEAT",
  "state-tax": "State Tax for Foreign LLCs",
  "ecommerce": "E-Commerce & Digital Sellers",
  "crypto": "Cryptocurrency & Digital Assets",
  "estate-gift": "Estate & Gift Tax for NRAs",
  "aml-compliance": "AML, BSA & OFAC Compliance",
  "payroll": "Payroll & Employment Tax",
  "withholding": "Withholding & Tax Treaties",
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
