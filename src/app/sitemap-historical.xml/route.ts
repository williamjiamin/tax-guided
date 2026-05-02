import { BASE_URL } from "@/lib/expansion/constants";
import {
  getHistoricalEntry,
  getHistoricalSeriesSummaries,
  getHistoricalTimeline,
} from "@/lib/expansion/repository";
import { buildSitemapXml, type SitemapEntry } from "@/lib/expansion/sitemaps";

export function GET() {
  const series = getHistoricalSeriesSummaries();
  const entries: SitemapEntry[] = [
    {
      url: `${BASE_URL}/historical`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...series.map((item) => ({
      url: `${BASE_URL}/historical/${item.country}/${item.taxType}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
    ...series.flatMap((item) =>
      getHistoricalTimeline(item.country, item.taxType).map((entry) => ({
        url: `${BASE_URL}/historical/${entry.country}/${entry.taxType}/${entry.year}`,
        lastModified: getHistoricalEntry(entry.country, entry.taxType, entry.year)?.sources[0]
          ?.verifiedAt
          ? `${getHistoricalEntry(entry.country, entry.taxType, entry.year)?.sources[0]?.verifiedAt}T00:00:00.000Z`
          : new Date().toISOString(),
        changeFrequency: "yearly",
        priority: 0.6,
      }))
    ),
  ];

  return new Response(buildSitemapXml(entries), {
    headers: {
      "content-type": "application/xml; charset=UTF-8",
    },
  });
}
