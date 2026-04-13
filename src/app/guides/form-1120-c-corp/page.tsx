import type { Metadata } from "next";
import { Form1120CCorpGuideClient } from "@/components/guides/Form1120CCorpGuideClient";

export const metadata: Metadata = {
  title: "Form 1120 + Form 5472 for Foreign-Owned C-Corporations | TaxGuided.com",
  description: "Guide to filing Form 1120 corporate tax return with Form 5472 for US corporations with 25%+ foreign ownership. Covers Schedule K, Schedule N, balance sheet, compensation, and 5472 Part 4.",
  openGraph: {
    title: "Form 1120 + Form 5472 for Foreign-Owned C-Corporations",
    description: "How to file an actual (not pro forma) Form 1120 with Form 5472 when your US corporation has foreign shareholders.",
    url: "https://taxguided.com/guides/form-1120-c-corp",
    type: "website",
  },
  alternates: { canonical: "/guides/form-1120-c-corp" },
};

export default function Form1120CCorpGuidePage() {
  return <Form1120CCorpGuideClient />;
}
