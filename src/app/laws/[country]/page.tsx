import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ALL_COUNTRY_CODES,
  getCountryCatalog,
} from "@/lib/laws/catalog-index";
import { CountryLawsClient } from "@/components/laws/CountryLawsClient";

interface Props {
  params: Promise<{ country: string }>;
}

export function generateStaticParams() {
  return ALL_COUNTRY_CODES.map((code) => ({ country: code }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const catalog = getCountryCatalog(country);
  if (!catalog) return {};

  return {
    title: `${catalog.countryName} Tax Laws & Regulations | TaxGuided.com`,
    description: `Browse ${catalog.totalEntries} official tax regulations, guidance, and forms from ${catalog.countryName}. Sourced from ${catalog.agencies.map((a) => a.name).join(", ")}.`,
    openGraph: {
      title: `${catalog.countryName} Tax Laws & Regulations | TaxGuided.com`,
      description: `Browse official tax regulations from ${catalog.countryName}.`,
      url: `https://taxguided.com/laws/${country}`,
      type: "website",
    },
    alternates: {
      canonical: `/laws/${country}`,
    },
  };
}

export default async function CountryLawsPage({ params }: Props) {
  const { country } = await params;
  const catalog = getCountryCatalog(country);

  if (!catalog) {
    notFound();
  }

  return <CountryLawsClient catalog={catalog} />;
}
