import type { MetadataRoute } from "next";
import { getUniqueVideos } from "@/lib/learn/video-catalog";
import { QA_CATALOG } from "@/lib/qa/qa-catalog";
import { ALL_COUNTRY_CODES } from "@/lib/laws/catalog-index";
import {
  getCalculators,
  getComplianceCountries,
  getDirectoryRegistries,
  getFormCountries,
  getHistoricalSeriesSummaries,
  getIndustryGuides,
  getStatuteCountries,
  getStatuteCodesByCountry,
  getStatuteSections,
  getStateCountries,
  getTaxCases,
  getTreaties,
} from "@/lib/expansion/repository";
import { TRANSLATION_LOCALES } from "@/lib/expansion/translations";

const BASE_URL = "https://taxguided.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  // Core pages — highest priority
  const core: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/quiz`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/news`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/scenarios`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/shorts`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/compare`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/learn`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/guides`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/tools`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/community`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/forms`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/states`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/calculators`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/treaties`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/statutes`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/case-law`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/industry`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/directory`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/historical`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/glossary`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/calendar`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/translations`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

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
    ...QA_CATALOG.map((t) => ({
      url: `${BASE_URL}/community/${t.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ];

  // Laws — global tax law database
  const lawsPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/laws`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 },
    ...ALL_COUNTRY_CODES.map((code) => ({
      url: `${BASE_URL}/laws/${code}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];

  const formCountries: MetadataRoute.Sitemap = getFormCountries().map((country) => ({
    url: `${BASE_URL}/forms/${country.code}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const stateCountries: MetadataRoute.Sitemap = getStateCountries().map((country) => ({
    url: `${BASE_URL}/states/${country.code}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const historicalSeries: MetadataRoute.Sitemap = getHistoricalSeriesSummaries().map((item) => ({
    url: `${BASE_URL}/historical/${item.country}/${item.taxType}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const calendarCountries: MetadataRoute.Sitemap = getComplianceCountries().map((country) => ({
    url: `${BASE_URL}/calendar/${country.code}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const translationPages: MetadataRoute.Sitemap = TRANSLATION_LOCALES.map((locale) => ({
    url: `${BASE_URL}/translations/${locale}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const calculators: MetadataRoute.Sitemap = getCalculators().map((calculator) => ({
    url: `${BASE_URL}/calculators/${calculator.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const treaties: MetadataRoute.Sitemap = getTreaties().map((treaty) => ({
    url: `${BASE_URL}/treaties/${treaty.slug ?? treaty.id}`,
    lastModified: treaty.lastUpdated,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const statutes: MetadataRoute.Sitemap = getStatuteCountries().flatMap((country) => [
    ...getStatuteCodesByCountry(country.code).map((code) => ({
      url: `${BASE_URL}/statutes/${country.code}/${code}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...getStatuteCodesByCountry(country.code).flatMap((code) =>
      getStatuteSections(country.code, code).map((section) => ({
        url: `${BASE_URL}/statutes/${country.code}/${code}/${section.slug ?? section.section}`,
        lastModified: section.lastUpdated,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }))
    ),
  ]);

  const caseLawEntries = new Map<string, MetadataRoute.Sitemap[number]>();
  for (const entry of getTaxCases()) {
    const courtSlug = entry.court
      .toLowerCase()
      .replaceAll(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    const year = entry.decisionDate.slice(0, 4);

    caseLawEntries.set(`${BASE_URL}/case-law/${entry.country}/${courtSlug}`, {
      url: `${BASE_URL}/case-law/${entry.country}/${courtSlug}`,
      lastModified: entry.decisionDate,
      changeFrequency: "monthly",
      priority: 0.6,
    });

    caseLawEntries.set(
      `${BASE_URL}/case-law/${entry.country}/${courtSlug}/${year}/${entry.slug ?? entry.id}`,
      {
        url: `${BASE_URL}/case-law/${entry.country}/${courtSlug}/${year}/${entry.slug ?? entry.id}`,
        lastModified: entry.decisionDate,
        changeFrequency: "monthly",
        priority: 0.6,
      }
    );
  }
  const caseLaw: MetadataRoute.Sitemap = Array.from(caseLawEntries.values());

  const industry: MetadataRoute.Sitemap = getIndustryGuides().map((guide) => ({
    url: `${BASE_URL}/industry/${guide.country}/${guide.slug ?? guide.industry}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const directory: MetadataRoute.Sitemap = getDirectoryRegistries().map((registry) => ({
    url: `${BASE_URL}/directory/${registry.country}/${registry.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...core,
    ...tools,
    ...guides,
    ...learnArticles,
    ...communityPages,
    ...lawsPages,
    ...formCountries,
    ...stateCountries,
    ...historicalSeries,
    ...calendarCountries,
    ...translationPages,
    ...calculators,
    ...treaties,
    ...statutes,
    ...caseLaw,
    ...industry,
    ...directory,
  ];
}
