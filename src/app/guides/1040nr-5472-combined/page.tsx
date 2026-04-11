import type { Metadata } from "next";
import { Combined1040Nr5472GuideClient } from "@/components/guides/Combined1040Nr5472GuideClient";

export const metadata: Metadata = {
  title:
    "Filing Form 1040-NR and Form 5472 Together — Complete Guide | ForeignLLCTax.com",
  description:
    "Learn how to file Form 1040-NR and Form 5472 together for your foreign-owned disregarded LLC. Two separate packages, different addresses, different deadlines — this guide explains the complete workflow.",
  openGraph: {
    title: "Filing Form 1040-NR and Form 5472 Together — Complete Guide",
    description:
      "Your foreign-owned LLC requires two separate IRS filing packages: Form 1040-NR and Form 5472 + pro forma 1120. Learn how income flows between them and avoid costly mistakes.",
    url: "https://foreignllctax.com/guides/1040nr-5472-combined",
    type: "website",
  },
  alternates: {
    canonical: "/guides/1040nr-5472-combined",
  },
};

export default function Combined1040Nr5472Guide() {
  return <Combined1040Nr5472GuideClient />;
}
