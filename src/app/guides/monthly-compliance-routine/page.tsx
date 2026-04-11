import type { Metadata } from "next";
import { MonthlyComplianceGuideClient } from "@/components/guides/MonthlyComplianceGuideClient";

export const metadata: Metadata = {
  title:
    "Monthly Compliance Routine for Foreign-Owned LLCs (60 Minutes) | ForeignLLCTax.com",
  description:
    "A 60-minute monthly compliance routine for foreign-owned LLCs. Month-by-month checklist covering transactions, expenses, state compliance, and IRS requirements.",
  openGraph: {
    title: "Monthly Compliance Routine for Foreign-Owned LLCs (60 Minutes)",
    description:
      "Stay compliant year-round with a simple 60-minute monthly routine for your foreign-owned LLC.",
    url: "https://foreignllctax.com/guides/monthly-compliance-routine",
    type: "website",
  },
  alternates: {
    canonical: "/guides/monthly-compliance-routine",
  },
};

export default function MonthlyComplianceGuide() {
  return <MonthlyComplianceGuideClient />;
}
