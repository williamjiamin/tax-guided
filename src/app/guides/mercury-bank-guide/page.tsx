import type { Metadata } from "next";
import { MercuryBankGuideClient } from "@/components/guides/MercuryBankGuideClient";

export const metadata: Metadata = {
  title:
    "Mercury Bank Account Guide — How to Open a US Business Bank Account for Your LLC | ForeignLLCTax.com",
  description:
    "Step-by-step guide to opening a Mercury bank account for your foreign-owned US LLC. Covers application process, required documents, fees, and tips for approval.",
  openGraph: {
    title:
      "Mercury Bank Account Guide — How to Open a US Business Bank Account for Your LLC",
    description:
      "Step-by-step guide to opening a Mercury bank account for your foreign-owned US LLC. Covers application process, required documents, fees, and tips for approval.",
    url: "https://foreignllctax.com/guides/mercury-bank-guide",
    type: "website",
  },
  alternates: {
    canonical: "/guides/mercury-bank-guide",
  },
};

export default function MercuryBankGuide() {
  return <MercuryBankGuideClient />;
}
