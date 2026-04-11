import type { Metadata } from "next";
import { Form5472AmendmentClient } from "@/components/guides/Form5472AmendmentClient";

export const metadata: Metadata = {
  title:
    "Form 5472 Amendment Guide — How to Correct a Previously Filed Form | ForeignLLCTax.com",
  description:
    "Learn when and how to amend a Form 5472. Covers common errors, how to file a corrected return with an amended Form 1120, $25,000 penalty avoidance, and IRS reasonable cause arguments.",
  openGraph: {
    title: "Form 5472 Amendment Guide — How to Correct a Previously Filed Form",
    description:
      "Step-by-step guide to amending Form 5472 for foreign-owned LLCs. Avoid the $25,000 penalty with proper correction procedures.",
    url: "https://foreignllctax.com/guides/form-5472-amendment",
    type: "website",
  },
  alternates: {
    canonical: "/guides/form-5472-amendment",
  },
};

export default function Form5472AmendmentPage() {
  return <Form5472AmendmentClient />;
}
