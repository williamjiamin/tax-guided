import type { Metadata } from "next";
import { MultipleLlcsGuideClient } from "@/components/guides/MultipleLlcsGuideClient";

export const metadata: Metadata = {
  title:
    "Managing Multiple US LLCs as a Non-Resident: A Simple System | ForeignLLCTax.com",
  description:
    "How to organize and manage multiple US LLCs as a non-resident. Covers separate EINs, bookkeeping, filings, shared registered agents, and state-by-state considerations.",
  openGraph: {
    title: "Managing Multiple US LLCs as a Non-Resident: A Simple System",
    description:
      "A practical system for managing multiple US LLCs as a foreign owner. Stay organized and compliant across all entities.",
    url: "https://foreignllctax.com/guides/multiple-llcs",
    type: "website",
  },
  alternates: {
    canonical: "/guides/multiple-llcs",
  },
};

export default function MultipleLlcsGuide() {
  return <MultipleLlcsGuideClient />;
}
