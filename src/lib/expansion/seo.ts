import type { Metadata } from "next";
import { BASE_URL } from "./constants";

export function absoluteUrl(path: string): string {
  return new URL(path, BASE_URL).toString();
}

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | TaxGuided.com`,
      description,
      url: absoluteUrl(path),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | TaxGuided.com`,
      description,
    },
  };
}

export function buildBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
