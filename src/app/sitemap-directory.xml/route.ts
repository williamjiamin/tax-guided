import { BASE_URL } from "@/lib/expansion/constants";
import { getDirectoryRegistries } from "@/lib/expansion/repository";
import { buildSitemapXml, type SitemapEntry } from "@/lib/expansion/sitemaps";

export function GET() {
  const lastModified = new Date().toISOString();
  const entries: SitemapEntry[] = [
    {
      url: `${BASE_URL}/directory`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...getDirectoryRegistries().map((registry) => ({
      url: `${BASE_URL}/directory/${registry.country}/${registry.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    })),
  ];

  return new Response(buildSitemapXml(entries), {
    headers: {
      "content-type": "application/xml; charset=UTF-8",
    },
  });
}
