import type { Metadata } from "next";
import { RecordKeeping5472GuideClient } from "@/components/guides/RecordKeeping5472GuideClient";

export const metadata: Metadata = {
  title:
    "Record-Keeping for Form 5472 — Tracking Capital Contributions & Distributions | ForeignLLCTax.com",
  description:
    "How to track capital contributions and distributions for Form 5472 using Stripe, PayPal, Wise, and your 1099-K. Practical record-keeping for foreign-owned LLCs.",
  openGraph: {
    title: "Record-Keeping for Form 5472 — Capital Contributions & Distributions",
    description:
      "Practical guide to tracking transactions for Form 5472 reporting using payment platforms and 1099-K.",
    url: "https://foreignllctax.com/guides/record-keeping-5472",
    type: "website",
  },
  alternates: { canonical: "/guides/record-keeping-5472" },
};

export default function RecordKeeping5472GuidePage() {
  return <RecordKeeping5472GuideClient />;
}
