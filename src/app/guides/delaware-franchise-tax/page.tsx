import type { Metadata } from "next";
import { DelawareFranchiseTaxGuideClient } from "@/components/guides/DelawareFranchiseTaxGuideClient";

export const metadata: Metadata = {
  title:
    "Delaware Franchise Tax Guide — LLC $300/Year Annual Payment | ForeignLLCTax.com",
  description:
    "Complete guide to the Delaware franchise tax for LLCs ($300/year flat fee, due June 1) and C-Corps. Covers payment steps, deadlines, late penalties, and Delaware tax advantages.",
  openGraph: {
    title:
      "Delaware Franchise Tax Guide — LLC $300/Year Annual Payment",
    description:
      "Step-by-step guide to paying your Delaware franchise tax. LLC flat $300 due June 1, C-Corp due March 1. Avoid $200 late penalties.",
    url: "https://foreignllctax.com/guides/delaware-franchise-tax",
    type: "website",
  },
  alternates: {
    canonical: "/guides/delaware-franchise-tax",
  },
};

export default function DelawareFranchiseTaxGuide() {
  return <DelawareFranchiseTaxGuideClient />;
}
