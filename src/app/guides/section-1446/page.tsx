import type { Metadata } from "next";
import { Section1446GuideClient } from "@/components/guides/Section1446GuideClient";

export const metadata: Metadata = {
  title:
    "Section 1446 Withholding Guide — Partnership Tax on Foreign Partners | ForeignLLCTax.com",
  description:
    "Complete guide to IRC Section 1446 withholding on effectively connected taxable income allocated to foreign partners. Rates, quarterly payments, Forms 8804/8805/8813, and penalties explained.",
  openGraph: {
    title:
      "Section 1446 Withholding Guide — Partnership Tax on Foreign Partners",
    description:
      "Everything you need to know about Section 1446 withholding: rates, quarterly schedules, Forms 8804 and 8805, and how foreign partners claim credit.",
    url: "https://foreignllctax.com/guides/section-1446",
    type: "website",
  },
  alternates: {
    canonical: "/guides/section-1446",
  },
};

export default function Section1446GuidePage() {
  return <Section1446GuideClient />;
}
