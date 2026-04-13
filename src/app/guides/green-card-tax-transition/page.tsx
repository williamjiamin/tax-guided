import type { Metadata } from "next";
import { GreenCardTaxTransitionClient } from "@/components/guides/GreenCardTaxTransitionClient";

export const metadata: Metadata = {
  title:
    "Green Card Tax Transition Guide for Foreign LLC Owners | TaxGuided.com",
  description:
    "What changes when a foreign LLC owner gets a US green card. Transition from Form 5472 to Form 1040, worldwide income taxation, self-employment tax, FBAR/FATCA, and common mistakes.",
  alternates: { canonical: "/guides/green-card-tax-transition" },
};

export default function GreenCardTaxTransitionPage() {
  return <GreenCardTaxTransitionClient />;
}
