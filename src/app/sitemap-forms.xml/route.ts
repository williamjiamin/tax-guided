import { BASE_URL } from "@/lib/expansion/constants";
import { getFormCountries, getForms } from "@/lib/expansion/repository";
import { buildSitemapXml, type SitemapEntry } from "@/lib/expansion/sitemaps";

export function GET() {
  const entries: SitemapEntry[] = [
    {
      url: `${BASE_URL}/forms`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...getFormCountries().map((country) => ({
      url: `${BASE_URL}/forms/${country.code}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.7,
    })),
    ...getForms().map((form) => ({
      url: `${BASE_URL}/forms/${form.country}/${form.slug}`,
      lastModified: form.lastUpdated,
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];

  return new Response(buildSitemapXml(entries), {
    headers: {
      "content-type": "application/xml; charset=UTF-8",
    },
  });
}
