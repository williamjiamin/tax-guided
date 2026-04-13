import type { Metadata } from "next";
import { BoiReportGuideClient } from "@/components/guides/BoiReportGuideClient";

export const metadata: Metadata = {
  title:
    "BOI Report Guide — Beneficial Ownership Information Filing for LLCs | TaxGuided.com",
  description:
    "Complete guide to Beneficial Ownership Information (BOI) reporting with FinCEN. Learn who must file, deadlines, required information, penalties ($500/day), and special rules for foreign-owned LLCs.",
  openGraph: {
    title: "BOI Report Guide — Beneficial Ownership Information Filing for LLCs",
    description:
      "Everything LLC owners need to know about FinCEN BOI reporting — deadlines, required info, penalties, and how foreign-owned LLCs are affected.",
    url: "https://taxguided.com/guides/boi-report",
    type: "website",
  },
  alternates: {
    canonical: "/guides/boi-report",
  },
};

export default function BoiReportPage() {
  return <BoiReportGuideClient />;
}
