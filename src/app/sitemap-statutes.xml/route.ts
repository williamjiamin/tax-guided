import { BASE_URL } from "@/lib/expansion/constants";
import { getStatuteCodesByCountry, getStatuteCountries, getStatuteSections } from "@/lib/expansion/repository";
import { buildSitemapXml, type SitemapEntry } from "@/lib/expansion/sitemaps";

export function GET() {
  const lastModified = new Date().toISOString();
  const entries: SitemapEntry[] = [
    {
      url: `${BASE_URL}/statutes`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...getStatuteCountries().flatMap((country) =>
      getStatuteCodesByCountry(country.code).flatMap((code) => [
        {
          url: `${BASE_URL}/statutes/${country.code}/${code}`,
          lastModified,
          changeFrequency: "monthly",
          priority: 0.6,
        },
        ...getStatuteSections(country.code, code).map((section) => ({
          url: `${BASE_URL}/statutes/${country.code}/${code}/${section.slug ?? section.section}`,
          lastModified: section.lastUpdated,
          changeFrequency: "monthly",
          priority: 0.6,
        })),
      ])
    ),
  ];

  return new Response(buildSitemapXml(entries), {
    headers: {
      "content-type": "application/xml; charset=UTF-8",
    },
  });
}
