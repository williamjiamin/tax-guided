import type { Metadata } from "next";
import { CountryLlcTaxGuideClient } from "@/components/guides/CountryLlcTaxGuideClient";

export const metadata: Metadata = {
  title: "US LLC Tax Guide for Brazil Residents — TaxGuided.com",
  description:
    "Complete guide to US LLC tax obligations for Brazil residents. Form 5472, ITIN requirements, and compliance deadlines. No US-Brazil tax treaty.",
  alternates: { canonical: "/guides/llc-tax-brazil" },
};

export default function Page() {
  return <CountryLlcTaxGuideClient country="Brazil" slug="brazil" />;
}
