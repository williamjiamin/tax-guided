import type { Metadata } from "next";
import { CostComparisonClient } from "@/components/tools/CostComparisonClient";

export const metadata: Metadata = {
  title: "Filing Cost Comparison Calculator | TaxGuided.com",
  description:
    "Compare the cost of filing Form 5472 and Form 1065 with a CPA, online platform, or TaxGuided.com. See how much you can save over multiple years with transparent, flat-rate pricing.",
  openGraph: {
    title: "Filing Cost Comparison Calculator",
    description:
      "Compare CPA vs DIY platform vs online tool filing costs for foreign-owned LLCs. Transparent pricing, no hidden fees.",
    url: "https://taxguided.com/tools/cost-comparison",
    type: "website",
  },
  alternates: {
    canonical: "/tools/cost-comparison",
  },
};

export default function CostComparisonPage() {
  return <CostComparisonClient />;
}
