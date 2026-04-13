import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getCountryCatalog,
} from "@/lib/laws/catalog-index";
import { CountryLawsClient } from "@/components/laws/CountryLawsClient";

export const dynamicParams = true;
export const revalidate = 86400;

interface Props {
  params: Promise<{ country: string }>;
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
