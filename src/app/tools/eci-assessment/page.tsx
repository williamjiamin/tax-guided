import type { Metadata } from "next";
import { EciAssessmentClient } from "@/components/tools/EciAssessmentClient";

export const metadata: Metadata = {
  title:
    "Do I Have Effectively Connected Income (ECI)? — Free Assessment | TaxGuided.com",
  description:
    "Free ECI assessment tool for foreign LLC owners. Determine whether your US LLC has Effectively Connected Income and understand your tax filing obligations.",
  openGraph: {
    title: "ECI Assessment Tool — Do You Have Effectively Connected Income?",
    description:
      "Free tool to help foreign LLC owners determine if they have Effectively Connected Income (ECI) and what it means for their US tax obligations.",
    url: "https://taxguided.com/tools/eci-assessment",
    type: "website",
  },
  alternates: {
    canonical: "/tools/eci-assessment",
  },
};

export default function EciAssessmentPage() {
  return <EciAssessmentClient />;
}
