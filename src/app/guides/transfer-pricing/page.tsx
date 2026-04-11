import type { Metadata } from "next";
import { TransferPricingGuideClient } from "@/components/guides/TransferPricingGuideClient";

export const metadata: Metadata = {
  title:
    "Transfer Pricing Guide for Foreign-Owned LLCs — Form 5472 Part V | ForeignLLCTax.com",
  description:
    "Understand transfer pricing rules for foreign-owned US LLCs. Learn how the IRS scrutinizes related-party transactions, how Form 5472 Part V captures them, documentation requirements, and the arm's length principle.",
  openGraph: {
    title: "Transfer Pricing Guide for Foreign-Owned LLCs",
    description:
      "How the IRS reviews related-party transactions between foreign owners and US LLCs. Proper documentation, Form 5472 Part V, and arm's length pricing explained.",
    url: "https://foreignllctax.com/guides/transfer-pricing",
    type: "website",
  },
  alternates: {
    canonical: "/guides/transfer-pricing",
  },
};

export default function TransferPricingPage() {
  return <TransferPricingGuideClient />;
}
