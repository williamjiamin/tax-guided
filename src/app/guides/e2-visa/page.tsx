import type { Metadata } from "next";
import { E2VisaGuideClient } from "@/components/guides/E2VisaGuideClient";

export const metadata: Metadata = {
  title:
    "E-2 Treaty Investor Visa Guide for Foreign LLC Owners | TaxGuided.com",
  description:
    "E-2 visa overview for foreign LLC owners who want to live and work in the US. Requirements, investment amounts, treaty countries, duration, and tax implications explained.",
  alternates: { canonical: "/guides/e2-visa" },
};

export default function E2VisaPage() {
  return <E2VisaGuideClient />;
}
