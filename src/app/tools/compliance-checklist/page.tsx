import type { Metadata } from "next";
import { ComplianceChecklistClient } from "@/components/tools/ComplianceChecklistClient";

export const metadata: Metadata = {
  title:
    "Foreign-Owned LLC Compliance Checklist — Everything You Need Before Filing",
  description:
    "Free interactive checklist for foreign-owned LLC tax compliance. Make sure you have your EIN, formation details, transaction records, and owner information before filing Form 5472.",
  openGraph: {
    title: "Foreign-Owned LLC Compliance Checklist",
    description:
      "Free interactive checklist — verify you have everything before filing Form 5472 + pro forma 1120.",
    url: "https://taxguided.com/tools/compliance-checklist",
    type: "website",
  },
  alternates: {
    canonical: "/tools/compliance-checklist",
  },
};

export default function ComplianceChecklistPage() {
  return <ComplianceChecklistClient />;
}
