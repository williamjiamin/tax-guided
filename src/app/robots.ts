import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/expansion/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: [
      `${BASE_URL}/sitemap.xml`,
      `${BASE_URL}/sitemap-forms.xml`,
      `${BASE_URL}/sitemap-states.xml`,
      `${BASE_URL}/sitemap-historical.xml`,
      `${BASE_URL}/sitemap-glossary.xml`,
      `${BASE_URL}/sitemap-calendar.xml`,
      `${BASE_URL}/sitemap-calculators.xml`,
      `${BASE_URL}/sitemap-treaties.xml`,
      `${BASE_URL}/sitemap-statutes.xml`,
      `${BASE_URL}/sitemap-case-law.xml`,
      `${BASE_URL}/sitemap-industry.xml`,
      `${BASE_URL}/sitemap-directory.xml`,
    ],
    host: BASE_URL,
  };
}
