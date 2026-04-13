import type { Metadata } from "next";
import { DiyVsCpaGuideClient } from "@/components/guides/DiyVsCpaGuideClient";

export const metadata: Metadata = {
  title:
    "DIY Tax Filing vs CPA for Foreign-Owned LLCs: Cost, Risk, and Control | TaxGuided.com",
  description:
    "Compare the cost, risk, and control of DIY tax filing with online tools like ForeignLLCTax.com versus hiring a CPA ($500-2,000+). Learn when you need professional help and when self-filing makes sense.",
  openGraph: {
    title: "DIY Tax Filing vs CPA for Foreign-Owned LLCs",
    description:
      "Should you hire a CPA or file your foreign-owned LLC taxes yourself? A practical cost-benefit analysis.",
    url: "https://taxguided.com/guides/diy-vs-cpa",
    type: "website",
  },
  alternates: {
    canonical: "/guides/diy-vs-cpa",
  },
};

export default function DiyVsCpaGuide() {
  return <DiyVsCpaGuideClient />;
}
