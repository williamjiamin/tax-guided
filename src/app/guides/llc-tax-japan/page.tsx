import type { Metadata } from "next";
import { CountryLlcTaxGuideClient } from "@/components/guides/CountryLlcTaxGuideClient";

export const metadata: Metadata = {
  title: "US LLC Tax Guide for Japan Residents — ForeignLLCTax.com",
  description:
    "Complete guide to US LLC tax obligations for Japan residents. Form 5472, tax treaties, ITIN requirements, and compliance deadlines.",
  alternates: { canonical: "/guides/llc-tax-japan" },
};

export default function Page() {
  return <CountryLlcTaxGuideClient country="Japan" slug="japan" />;
}
