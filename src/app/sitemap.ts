import type { MetadataRoute } from "next";
import { getUniqueVideos } from "@/lib/learn/video-catalog";
import { QA_CATALOG } from "@/lib/qa/qa-catalog";

const BASE_URL = "https://foreignllctax.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Core pages — highest priority
  const core: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/filer`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/quiz`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/partners`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/learn`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/dashboard`, lastModified: now, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  // Filing services
  const filers: MetadataRoute.Sitemap = [
    "partnership",
    "eci",
    "itin",
    "ss4",
  ].map((slug) => ({
    url: `${BASE_URL}/filer/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Service landing pages
  const services: MetadataRoute.Sitemap = [
    "",
    "partnership-filing",
    "eci-filing",
    "itin-application",
    "ss4-application",
    "annual-reminder",
  ].map((slug) => ({
    url: `${BASE_URL}/services${slug ? `/${slug}` : ""}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Tools — free content, great for SEO
  const tools: MetadataRoute.Sitemap = [
    "quick-tax-check",
    "self-employed-tax-hub",
    "gig-tax-set-aside",
    "eci-assessment",
    "entity-advisor",
    "penalty-calculator",
    "withholding-calculator",
    "treaty-lookup",
    "cost-comparison",
    "compliance-checklist",
    "tax-calendar",
    "ein-guide",
    "forms-wizard",
    "file-tax-extension",
    "refund-status",
    "itin-or-ein",
    "sales-tax-nexus",
    "transaction-categorizer",
    "catch-up",
    "deadline-reminder",
    "state-report-guide",
  ].map((slug) => ({
    url: `${BASE_URL}/tools/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Guides — educational content, great for long-tail SEO
  const guides: MetadataRoute.Sitemap = [
    "start-your-business",
    "form-1065",
    "form-1040-nr",
    "form-1120-f",
    "form-5472-amendment",
    "boi-report",
    "llc-tax-china",
    "llc-tax-india",
    "llc-tax-uk",
    "llc-tax-canada",
    "llc-tax-germany",
    "llc-tax-brazil",
    "llc-tax-australia",
    "llc-tax-japan",
    "llc-tax-south-korea",
    "llc-tax-mexico",
    "llc-dissolution",
    "fbar",
    "transfer-pricing",
    "section-1446",
    "b1-visa",
    "e2-visa",
    "green-card-tax-transition",
    "us-bank-account",
    "how-to-submit-form-5472",
    // International transfer guides (US LLC to country)
    "transfer-china",
    "transfer-japan",
    "transfer-singapore",
    "transfer-australia",
    "transfer-canada",
    "transfer-uk",
    "transfer-germany",
    "transfer-india",
    "transfer-brazil",
    "transfer-mexico",
    "transfer-south-korea",
    "transfer-philippines",
    "transfer-vietnam",
    "transfer-thailand",
    "transfer-indonesia",
    "transfer-nigeria",
    "transfer-uae",
    "transfer-hong-kong",
    "transfer-taiwan",
    "transfer-france",
    // Advanced / risk-awareness guides
    "ustb-risk",
    "form-1120-c-corp",
    "w8ben-brokerage-trap",
    "irs-country-codes",
    "record-keeping-5472",
    "protective-filing-1120f",
    "form-5472-nuances",
    // 1040-NR expansion guides
    "investment-vs-business-llc",
    "when-1040-nr",
    "1040nr-5472-combined",
    "federal-supporting-statements",
    "form-1042-s",
    "itin-1040nr-connection",
    // State compliance guides
    "delaware-franchise-tax",
    "wyoming-annual-report",
    // Business operations guides
    "register-us-company",
    "mercury-bank-guide",
    "us-phone-number",
    "stripe-setup",
    "stripe-account-tips",
    "cross-border-payments",
    "company-to-personal-withdrawal",
  ].map((slug) => ({
    url: `${BASE_URL}/guides/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Learn articles — educational content for long-tail SEO
  const learnArticles: MetadataRoute.Sitemap = getUniqueVideos().map((v) => ({
    url: `${BASE_URL}/learn/${v.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.65,
  }));

  // Community Q&A threads — high-value SEO content
  const communityPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/community`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.7 },
    ...QA_CATALOG.map((t) => ({
      url: `${BASE_URL}/community/${t.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  return [...core, ...filers, ...services, ...tools, ...guides, ...learnArticles, ...communityPages];
}
