import type { Metadata } from "next";
import { TaxExtensionFastTrackClient } from "@/components/tools/TaxExtensionFastTrackClient";

export const metadata: Metadata = {
  title: "File a Tax Extension Fast — Form 4868 & Form 7004",
  description:
    "Mobile-first tax extension tool for last-minute filers. Find the fastest IRS-compliant path for Form 4868, Form 7004, Direct Pay, or Free File in under two minutes.",
  openGraph: {
    title: "File a Tax Extension Fast",
    description:
      "Find the fastest legitimate extension path for individuals, nonresident filers, partnerships, and foreign-owned LLCs.",
    url: "https://taxguided.com/tools/file-tax-extension",
    type: "website",
  },
  alternates: {
    canonical: "/tools/file-tax-extension",
  },
};

export default function FileTaxExtensionPage() {
  return <TaxExtensionFastTrackClient />;
}
