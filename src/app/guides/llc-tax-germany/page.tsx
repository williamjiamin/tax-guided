import type { Metadata } from "next";
import { CountryLlcTaxGuideClient } from "@/components/guides/CountryLlcTaxGuideClient";

export const metadata: Metadata = {
  title: "US LLC Tax Guide for Germany Residents — TaxGuided.com",
  description:
    "Complete guide to US LLC tax obligations for Germany residents. Form 5472, tax treaties, ITIN requirements, and compliance deadlines.",
  alternates: { canonical: "/guides/llc-tax-germany" },
};

export default function Page() {
  return <CountryLlcTaxGuideClient country="Germany" slug="germany" />;
}
