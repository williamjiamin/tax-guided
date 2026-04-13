import type { Metadata } from "next";
import { Form5472MistakesGuideClient } from "@/components/guides/Form5472MistakesGuideClient";

export const metadata: Metadata = {
  title:
    "10 Common Mistakes on Form 5472 (and How to Avoid Them) | TaxGuided.com",
  description:
    "Avoid the $25,000 penalty for Form 5472 errors. Learn the 10 most common mistakes foreign-owned LLC owners make on Form 5472 and how to fix each one.",
  openGraph: {
    title: "10 Common Mistakes on Form 5472 (and How to Avoid Them)",
    description:
      "The most frequent Form 5472 errors that trigger the $25,000 penalty and how to prevent them.",
    url: "https://taxguided.com/guides/form-5472-common-mistakes",
    type: "website",
  },
  alternates: {
    canonical: "/guides/form-5472-common-mistakes",
  },
};

export default function Form5472MistakesGuide() {
  return <Form5472MistakesGuideClient />;
}
