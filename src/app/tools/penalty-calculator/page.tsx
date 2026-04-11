import type { Metadata } from "next";
import { PenaltyCalculatorClient } from "@/components/tools/PenaltyCalculatorClient";

export const metadata: Metadata = {
  title: "Form 5472 Penalty Calculator — How Much Could You Owe the IRS?",
  description:
    "Calculate your potential IRS penalty for missing Form 5472. The base penalty is $25,000 per form, per year — and it increases over time. Free calculator.",
  openGraph: {
    title: "Form 5472 Penalty Calculator",
    description:
      "Calculate your potential IRS penalty for missing Form 5472. $25,000 base penalty per form, per year.",
    url: "https://foreignllctax.com/tools/penalty-calculator",
    type: "website",
  },
  alternates: {
    canonical: "/tools/penalty-calculator",
  },
};

export default function PenaltyCalculatorPage() {
  return <PenaltyCalculatorClient />;
}
