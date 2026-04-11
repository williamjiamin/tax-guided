import type { Metadata } from "next";
import { BestStatesGuideClient } from "@/components/guides/BestStatesGuideClient";

export const metadata: Metadata = {
  title:
    "Best US States for a Foreign-Owned LLC in 2026: Wyoming vs Delaware vs New Mexico | ForeignLLCTax.com",
  description:
    "Compare Wyoming, Delaware, and New Mexico for forming a foreign-owned LLC. Covers formation costs, annual fees, privacy protections, franchise tax, and registered agent requirements.",
  openGraph: {
    title:
      "Best US States for a Foreign-Owned LLC in 2026: Wyoming vs Delaware vs New Mexico",
    description:
      "Side-by-side comparison of the top three states for foreign-owned LLC formation. Find the best fit for your business.",
    url: "https://foreignllctax.com/guides/best-states-foreign-llc",
    type: "website",
  },
  alternates: {
    canonical: "/guides/best-states-foreign-llc",
  },
};

export default function BestStatesGuide() {
  return <BestStatesGuideClient />;
}
