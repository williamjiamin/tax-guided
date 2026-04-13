import type { Metadata } from "next";
import { TaxCalendarClient } from "@/components/tools/TaxCalendarClient";

export const metadata: Metadata = {
  title:
    "US Tax Calendar for Foreign LLC Owners — Every Deadline You Need | TaxGuided.com",
  description:
    "Visual 12-month tax calendar showing all IRS deadlines for foreign-owned US LLCs. Form 5472, Form 1120, estimated payments, FBAR, state deadlines, and more.",
  openGraph: {
    title: "US Tax Calendar for Foreign LLC Owners",
    description:
      "Never miss a US tax deadline. Visual calendar with all federal, state, and estimated payment deadlines for foreign-owned LLCs.",
    url: "https://taxguided.com/tools/tax-calendar",
    type: "website",
  },
  alternates: {
    canonical: "/tools/tax-calendar",
  },
};

export default function TaxCalendarPage() {
  return <TaxCalendarClient />;
}
