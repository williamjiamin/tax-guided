import { BASE_URL } from "@/lib/expansion/constants";

const SUB_SITEMAPS = [
  "sitemap.xml",
  "sitemap-forms.xml",
  "sitemap-states.xml",
  "sitemap-treaties.xml",
  "sitemap-statutes.xml",
  "sitemap-case-law.xml",
  "sitemap-historical.xml",
  "sitemap-calculators.xml",
  "sitemap-glossary.xml",
  "sitemap-calendar.xml",
  "sitemap-industry.xml",
  "sitemap-directory.xml",
];

export function GET() {
  const now = new Date().toISOString();
  const body = SUB_SITEMAPS.map(
    (file) =>
      `<sitemap><loc>${BASE_URL}/${file}</loc><lastmod>${now}</lastmod></sitemap>`
  ).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "content-type": "application/xml; charset=UTF-8",
      "cache-control": "public, max-age=3600",
    },
  });
}
