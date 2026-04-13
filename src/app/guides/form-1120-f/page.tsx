import type { Metadata } from "next";
import { Form1120FGuideClient } from "@/components/guides/Form1120FGuideClient";

export const metadata: Metadata = {
  title:
    "Form 1120-F Guide — Foreign Corporation Income Tax Return | TaxGuided.com",
  description:
    "Complete guide to IRS Form 1120-F for foreign corporations doing business in the US. Learn about ECI taxation, branch profits tax, filing deadlines, the 18-month rule, and common mistakes.",
  openGraph: {
    title: "Form 1120-F Guide — Foreign Corporation Income Tax Return",
    description:
      "Everything foreign corporations need to know about filing Form 1120-F. ECI taxation, branch profits tax, deadlines, and deduction rules explained.",
    url: "https://taxguided.com/guides/form-1120-f",
    type: "website",
  },
  alternates: {
    canonical: "/guides/form-1120-f",
  },
};

export default function Form1120FGuidePage() {
  return <Form1120FGuideClient />;
}
