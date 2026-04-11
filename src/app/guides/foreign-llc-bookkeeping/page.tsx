import type { Metadata } from "next";
import { ForeignLlcBookkeepingGuideClient } from "@/components/guides/ForeignLlcBookkeepingGuideClient";

export const metadata: Metadata = {
  title:
    "A Simple Bookkeeping System for Foreign-Owned LLCs | ForeignLLCTax.com",
  description:
    "Set up a simple, effective bookkeeping system for your foreign-owned LLC. Learn what to track, recommended tools, chart of accounts, and how to prepare for Form 5472 season.",
  openGraph: {
    title: "A Simple Bookkeeping System for Foreign-Owned LLCs",
    description:
      "Practical bookkeeping guide for foreign-owned LLCs. Track transactions, organize receipts, and be ready for tax season.",
    url: "https://foreignllctax.com/guides/foreign-llc-bookkeeping",
    type: "website",
  },
  alternates: {
    canonical: "/guides/foreign-llc-bookkeeping",
  },
};

export default function ForeignLlcBookkeepingGuide() {
  return <ForeignLlcBookkeepingGuideClient />;
}
