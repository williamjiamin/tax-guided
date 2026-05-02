import { BASE_URL } from "@/lib/expansion/constants";
import { getGlossaryTerms } from "@/lib/expansion/repository";
import { buildSitemapXml, type SitemapEntry } from "@/lib/expansion/sitemaps";

export function GET() {
  const entries: SitemapEntry[] = [
    {
      url: `${BASE_URL}/glossary`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...getGlossaryTerms().map((term) => ({
      url: `${BASE_URL}/glossary/${term.id}`,
      lastModified: new Date().toISOString(),
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
