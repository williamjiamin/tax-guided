import type { Metadata } from "next";
import { RegisterUsCompanyGuideClient } from "@/components/guides/RegisterUsCompanyGuideClient";

export const metadata: Metadata = {
  title:
    "How to Register a US Company as a Foreigner — Stripe Atlas vs Doola vs Firstbase vs DIY | TaxGuided.com",
  description:
    "Compare the top US company registration services for foreign founders. Stripe Atlas, Doola, Firstbase, and DIY Wyoming — costs, timelines, pros and cons.",
  openGraph: {
    title:
      "How to Register a US Company as a Foreigner — Stripe Atlas vs Doola vs Firstbase vs DIY",
    description:
      "Compare the top US company registration services for foreign founders. Stripe Atlas, Doola, Firstbase, and DIY Wyoming — costs, timelines, pros and cons.",
    url: "https://taxguided.com/guides/register-us-company",
    type: "website",
  },
  alternates: {
    canonical: "/guides/register-us-company",
  },
};

export default function RegisterUsCompanyGuide() {
  return <RegisterUsCompanyGuideClient />;
}
