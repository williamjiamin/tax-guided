import type { Metadata } from "next";
import { UstbRiskGuideClient } from "@/components/guides/UstbRiskGuideClient";

export const metadata: Metadata = {
  title:
    "US Trade or Business (USTB) Risk for Foreign LLC Owners — When Form 5472 Alone Is Not Enough | TaxGuided.com",
  description:
    "Understand when your foreign-owned LLC may be engaged in US trade or business. Learn the consequences of USTB, deduction disallowance, branch profits tax, and when you need more than just Form 5472.",
  openGraph: {
    title: "US Trade or Business (USTB) Risk for Foreign LLC Owners",
    description:
      "When filing Form 5472 alone is not enough — understand USTB risk, deduction disallowance, and protective filing strategies.",
    url: "https://taxguided.com/guides/ustb-risk",
    type: "website",
  },
  alternates: { canonical: "/guides/ustb-risk" },
};

export default function UstbRiskGuidePage() {
  return <UstbRiskGuideClient />;
}
