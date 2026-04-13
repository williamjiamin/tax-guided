import type { Metadata } from "next";
import { CatchUpClient } from "@/components/tools/CatchUpClient";

export const metadata: Metadata = {
  title:
    "Missed Filing Form 5472? How to Catch Up — Free Guide for Foreign-Owned LLCs",
  description:
    "Haven't filed Form 5472 for your foreign-owned LLC? Learn how to get back into compliance, avoid $25,000+ in penalties, and what reasonable cause relief is available.",
  openGraph: {
    title: "Missed Filing Form 5472? Here's How to Catch Up",
    description:
      "Step-by-step guide to catching up on missed Form 5472 filings for foreign-owned LLCs.",
    url: "https://taxguided.com/tools/catch-up",
    type: "website",
  },
  alternates: {
    canonical: "/tools/catch-up",
  },
};

export default function CatchUpPage() {
  return <CatchUpClient />;
}
