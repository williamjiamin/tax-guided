import type { Metadata } from "next";
import { QuickTaxCheckClient } from "@/components/tools/QuickTaxCheckClient";

export const metadata: Metadata = {
  title: "5-Minute Filing Check for Foreign-Owned LLCs | TaxGuided.com",
  description:
    "Quickly estimate the likely IRS forms, urgency, and next steps for a foreign-owned LLC before starting a full filing workflow. Free, mobile-friendly, and built for foreign-owned LLC compliance.",
  openGraph: {
    title: "5-Minute Filing Check for Foreign-Owned LLCs",
    description:
      "See the likely forms, deadline risk, and next step for your foreign-owned LLC before you start filing.",
    url: "https://taxguided.com/tools/quick-tax-check",
    type: "website",
  },
  alternates: {
    canonical: "/tools/quick-tax-check",
  },
};

export default function QuickTaxCheckPage() {
  return <QuickTaxCheckClient />;
}
