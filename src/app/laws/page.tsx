import type { Metadata } from "next";
import {
  ALL_COUNTRIES,
  getTotalEntries,
  getTotalAgencies,
} from "@/lib/laws/catalog-index";
import { LawsPageClient } from "@/components/laws/LawsPageClient";

export const metadata: Metadata = {
  title:
    "Global Tax Law Database — Browse Tax Regulations by Country | TaxGuided.com",
  description:
    "Browse official tax regulations, guidance, and forms from 20 countries. Sourced directly from government tax authorities including IRS, HMRC, SAT, and more.",
  openGraph: {
    title: "Global Tax Law Database | TaxGuided.com",
    description:
      "Browse official tax regulations, guidance, and forms from 20 countries worldwide.",
    url: "https://taxguided.com/laws",
    type: "website",
  },
  alternates: {
    canonical: "/laws",
  },
};

export default function LawsPage() {
  return (
    <LawsPageClient
      countries={ALL_COUNTRIES}
      totalEntries={getTotalEntries()}
      totalAgencies={getTotalAgencies()}
    />
  );
}
