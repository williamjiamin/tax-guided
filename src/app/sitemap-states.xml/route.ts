import { BASE_URL } from "@/lib/expansion/constants";
import { getStateCountries, getStates } from "@/lib/expansion/repository";
import { buildSitemapXml, type SitemapEntry } from "@/lib/expansion/sitemaps";

export function GET() {
  const entries: SitemapEntry[] = [
    {
      url: `${BASE_URL}/states`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...getStateCountries().map((country) => ({
      url: `${BASE_URL}/states/${country.code}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.7,
    })),
    ...getStates().map((state) => ({
      url: `${BASE_URL}/states/${state.id}`,
      lastModified: new Date().toISOString(),
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
