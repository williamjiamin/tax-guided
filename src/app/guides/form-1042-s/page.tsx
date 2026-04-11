import type { Metadata } from "next";
import { Form1042SGuideClient } from "@/components/guides/Form1042SGuideClient";

export const metadata: Metadata = {
  title:
    "Form 1042-S for Foreign LLC Owners — What It Means and What to Do | ForeignLLCTax.com",
  description:
    "Received a Form 1042-S? Learn what it means for foreign LLC owners, when you need to file a 1040-NR, how treaty benefits work, and how it relates to your Form 5472 obligation.",
  openGraph: {
    title: "Form 1042-S for Foreign LLC Owners — What It Means and What to Do",
    description:
      "A practical guide for foreign LLC owners who received Form 1042-S. Understand withholding, treaty benefits, and your filing obligations.",
    url: "https://foreignllctax.com/guides/form-1042-s",
    type: "website",
  },
  alternates: {
    canonical: "/guides/form-1042-s",
  },
};

export default function Form1042SGuide() {
  return <Form1042SGuideClient />;
}
