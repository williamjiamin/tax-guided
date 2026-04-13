import type { Metadata } from "next";
import { Form1040NRGuideClient } from "@/components/guides/Form1040NRGuideClient";

export const metadata: Metadata = {
  title:
    "Form 1040-NR Guide — Nonresident Alien Tax Return | TaxGuided.com",
  description:
    "Complete guide to IRS Form 1040-NR for nonresident aliens. Learn about ECI vs FDAP income, tax rates, deductions, filing deadlines, estimated payments, and treaty-based positions.",
  openGraph: {
    title: "Form 1040-NR Guide — Nonresident Alien Tax Return",
    description:
      "Everything nonresident aliens need to know about filing Form 1040-NR. ECI vs FDAP, tax rates, deductions, and deadlines explained.",
    url: "https://taxguided.com/guides/form-1040-nr",
    type: "website",
  },
  alternates: {
    canonical: "/guides/form-1040-nr",
  },
};

export default function Form1040NRGuidePage() {
  return <Form1040NRGuideClient />;
}
