import type { Metadata } from "next";
import { CountryLlcTaxGuideClient } from "@/components/guides/CountryLlcTaxGuideClient";

export const metadata: Metadata = {
  title: "US LLC Tax Guide for India Residents — TaxGuided.com",
  description:
    "Complete guide to US LLC tax obligations for India residents. Form 5472, tax treaties, ITIN requirements, and compliance deadlines.",
  alternates: { canonical: "/guides/llc-tax-india" },
};

export default function Page() {
  return <CountryLlcTaxGuideClient country="India" slug="india" />;
}
