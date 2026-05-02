import { BASE_URL } from "@/lib/expansion/constants";
import { getCalculators } from "@/lib/expansion/repository";
import { buildSitemapXml, type SitemapEntry } from "@/lib/expansion/sitemaps";

export function GET() {
  const lastModified = new Date().toISOString();
  const entries: SitemapEntry[] = [
    {
      url: `${BASE_URL}/calculators`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...getCalculators().map((calculator) => ({
      url: `${BASE_URL}/calculators/${calculator.slug}`,
      lastModified,
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
