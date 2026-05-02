import { BASE_URL } from "@/lib/expansion/constants";
import { getTreaties } from "@/lib/expansion/repository";
import { buildSitemapXml, type SitemapEntry } from "@/lib/expansion/sitemaps";

export function GET() {
  const entries: SitemapEntry[] = [
    {
      url: `${BASE_URL}/treaties`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...getTreaties().map((treaty) => ({
      url: `${BASE_URL}/treaties/${treaty.slug ?? treaty.id}`,
      lastModified: treaty.lastUpdated,
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
