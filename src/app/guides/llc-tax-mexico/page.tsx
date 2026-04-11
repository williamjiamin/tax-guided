import type { Metadata } from "next";
import { CountryLlcTaxGuideClient } from "@/components/guides/CountryLlcTaxGuideClient";

export const metadata: Metadata = {
  title: "US LLC Tax Guide for Mexico Residents — ForeignLLCTax.com",
  description:
    "Complete guide to US LLC tax obligations for Mexico residents. Form 5472, tax treaties, ITIN requirements, and compliance deadlines.",
  alternates: { canonical: "/guides/llc-tax-mexico" },
};

export default function Page() {
  return <CountryLlcTaxGuideClient country="Mexico" slug="mexico" />;
}
