import type { Metadata } from "next";
import { SHORTS, SHORTS_FILTERS } from "@/lib/shorts/shorts-data";
import { ShortsPageClient } from "@/components/scenarios/ShortsPageClient";

export const metadata: Metadata = {
  title: "Tax Shorts — Tax Concepts in Under 60 Seconds | TaxGuided.com",
  description:
    "Bite-sized tax explainers for freelancers, creators, students, and expats. Each short breaks down one concept with a hook, explanation, and action step.",
  openGraph: {
    title: "Tax Shorts — Tax Concepts in Under 60 Seconds | TaxGuided.com",
    description:
      "Bite-sized tax explainers for freelancers, creators, students, and expats.",
    url: "https://taxguided.com/shorts",
    type: "website",
  },
  alternates: {
    canonical: "/shorts",
  },
};

export default function ShortsPage() {
  return <ShortsPageClient shorts={SHORTS} filters={SHORTS_FILTERS} />;
}
