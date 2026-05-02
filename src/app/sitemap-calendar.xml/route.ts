import { BASE_URL } from "@/lib/expansion/constants";
import { getComplianceCountries } from "@/lib/expansion/repository";
import { buildSitemapXml, type SitemapEntry } from "@/lib/expansion/sitemaps";

export function GET() {
  const entries: SitemapEntry[] = [
    {
      url: `${BASE_URL}/calendar`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...getComplianceCountries().map((country) => ({
      url: `${BASE_URL}/calendar/${country.code}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.6,
    })),
  ];

  return new Response(buildSitemapXml(entries), {
    headers: {
      "content-type": "application/xml; charset=UTF-8",
    },
  });
}
