import { BASE_URL } from "@/lib/expansion/constants";
import { getTaxCases } from "@/lib/expansion/repository";
import { buildSitemapXml, type SitemapEntry } from "@/lib/expansion/sitemaps";

export function GET() {
  const entries = new Map<string, SitemapEntry>();
  const now = new Date().toISOString();

  entries.set(`${BASE_URL}/case-law`, {
    url: `${BASE_URL}/case-law`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  });

  for (const entry of getTaxCases()) {
    const courtSlug = entry.court.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const year = entry.decisionDate.slice(0, 4);

    entries.set(`${BASE_URL}/case-law/${entry.country}/${courtSlug}`, {
      url: `${BASE_URL}/case-law/${entry.country}/${courtSlug}`,
      lastModified: entry.decisionDate,
      changeFrequency: "monthly",
      priority: 0.6,
    });

    entries.set(`${BASE_URL}/case-law/${entry.country}/${courtSlug}/${year}/${entry.slug ?? entry.id}`, {
      url: `${BASE_URL}/case-law/${entry.country}/${courtSlug}/${year}/${entry.slug ?? entry.id}`,
      lastModified: entry.decisionDate,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  return new Response(buildSitemapXml(Array.from(entries.values())), {
    headers: {
      "content-type": "application/xml; charset=UTF-8",
    },
  });
}
