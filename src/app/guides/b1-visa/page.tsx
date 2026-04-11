import type { Metadata } from "next";
import { B1VisaGuideClient } from "@/components/guides/B1VisaGuideClient";

export const metadata: Metadata = {
  title:
    "B-1 Business Visitor Visa Guide for Foreign LLC Owners | ForeignLLCTax.com",
  description:
    "Can you visit the US to manage your LLC? B-1 visa basics, what activities are allowed, Visa Waiver Program, and tax implications of US visits for foreign LLC owners.",
  alternates: { canonical: "/guides/b1-visa" },
};

export default function B1VisaPage() {
  return <B1VisaGuideClient />;
}
