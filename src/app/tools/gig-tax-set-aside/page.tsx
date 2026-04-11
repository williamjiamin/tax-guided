import type { Metadata } from "next";
import { GigTaxSetAsideClient } from "@/components/tools/GigTaxSetAsideClient";

export const metadata: Metadata = {
  title: "Quarterly Gig Tax Check (2026) | ForeignLLCTax.com",
  description:
    "See whether gig and 1099 income likely creates quarterly estimated-tax payments for 2026, what to move before the next due date, and import CSV payouts to reduce manual entry.",
  openGraph: {
    title: "Quarterly Gig Tax Check (2026)",
    description:
      "A fast, mileage-aware quarterly-tax check for gig workers and side hustles, with a due-now answer and optional CSV import.",
    url: "https://foreignllctax.com/tools/gig-tax-set-aside",
    type: "website",
  },
  alternates: {
    canonical: "/tools/gig-tax-set-aside",
  },
};

export default function GigTaxSetAsidePage() {
  return <GigTaxSetAsideClient />;
}
