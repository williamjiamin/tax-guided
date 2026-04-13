import type { Metadata } from "next";
import { CrossBorderPaymentsGuideClient } from "@/components/guides/CrossBorderPaymentsGuideClient";

export const metadata: Metadata = {
  title:
    "Cross-Border Payment Platform Comparison — Stripe vs PayPal vs Wise vs Paddle | TaxGuided.com",
  description:
    "In-depth comparison of cross-border payment platforms for foreign-owned US LLCs. Covers fees, currency conversion, payout speeds, and best use cases.",
  openGraph: {
    title:
      "Cross-Border Payment Platform Comparison — Stripe vs PayPal vs Wise vs Paddle",
    description:
      "In-depth comparison of cross-border payment platforms for foreign-owned US LLCs. Covers fees, currency conversion, payout speeds, and best use cases.",
    url: "https://taxguided.com/guides/cross-border-payments",
    type: "website",
  },
  alternates: {
    canonical: "/guides/cross-border-payments",
  },
};

export default function CrossBorderPaymentsGuide() {
  return <CrossBorderPaymentsGuideClient />;
}
