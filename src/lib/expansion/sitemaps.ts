export interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency?: string;
  priority?: number;
}

function escapeXml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function buildSitemapXml(entries: SitemapEntry[]): string {
  const body = entries
    .map((entry) => {
      const lines = [
        "<url>",
        `<loc>${escapeXml(entry.url)}</loc>`,
        `<lastmod>${escapeXml(entry.lastModified)}</lastmod>`,
      ];

      if (entry.changeFrequency) {
        lines.push(`<changefreq>${escapeXml(entry.changeFrequency)}</changefreq>`);
      }

      if (typeof entry.priority === "number") {
        lines.push(`<priority>${entry.priority.toFixed(1)}</priority>`);
      }

      lines.push("</url>");
      return lines.join("");
    })
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`;
}
