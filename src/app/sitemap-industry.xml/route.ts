import { BASE_URL } from "@/lib/expansion/constants";
import { getIndustryGuides } from "@/lib/expansion/repository";
import { buildSitemapXml, type SitemapEntry } from "@/lib/expansion/sitemaps";

export function GET() {
  const lastModified = new Date().toISOString();
  const entries: SitemapEntry[] = [
    {
      url: `${BASE_URL}/industry`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...getIndustryGuides().map((guide) => ({
      url: `${BASE_URL}/industry/${guide.country}/${guide.slug ?? guide.industry}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
  ];

  return new Response(buildSitemapXml(entries), {
    headers: {
      "content-type": "application/xml; charset=UTF-8",
    },
  });
}
