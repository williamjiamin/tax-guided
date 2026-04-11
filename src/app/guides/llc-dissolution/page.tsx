import type { Metadata } from "next";
import { LlcDissolutionGuideClient } from "@/components/guides/LlcDissolutionGuideClient";

export const metadata: Metadata = {
  title:
    "LLC Dissolution Guide — How to Close a Foreign-Owned US LLC | ForeignLLCTax.com",
  description:
    "Step-by-step guide to dissolving a foreign-owned US LLC. File final tax returns, state dissolution, cancel EIN, close bank accounts, and avoid $25,000 penalties for missed Form 5472 filings.",
  openGraph: {
    title: "LLC Dissolution Guide — How to Close a Foreign-Owned US LLC",
    description:
      "Complete guide to properly closing a foreign-owned US LLC. Final returns, state filing, EIN cancellation, and penalty avoidance.",
    url: "https://foreignllctax.com/guides/llc-dissolution",
    type: "website",
  },
  alternates: {
    canonical: "/guides/llc-dissolution",
  },
};

export default function LlcDissolutionPage() {
  return <LlcDissolutionGuideClient />;
}
