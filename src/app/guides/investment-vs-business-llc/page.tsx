import type { Metadata } from "next";
import { InvestmentVsBusinessLlcGuideClient } from "@/components/guides/InvestmentVsBusinessLlcGuideClient";

export const metadata: Metadata = {
  title:
    "Investment LLC vs Business LLC — Two Different Tax Paths for Foreign Owners | ForeignLLCTax.com",
  description:
    "Foreign-owned LLCs fall into two completely different filing paths: passive investment (Form 5472 only) or active business (1040-NR, Schedule C, ITIN, and more). Learn which category your LLC belongs to and what forms you need to file.",
  openGraph: {
    title: "Investment LLC vs Business LLC — Two Different Tax Paths for Foreign Owners",
    description:
      "Your foreign-owned LLC is either a passive investment vehicle or an active business. The IRS treats these completely differently. Find out which path applies to you.",
    url: "https://foreignllctax.com/guides/investment-vs-business-llc",
    type: "website",
  },
  alternates: {
    canonical: "/guides/investment-vs-business-llc",
  },
};

export default function InvestmentVsBusinessLlcGuide() {
  return <InvestmentVsBusinessLlcGuideClient />;
}
