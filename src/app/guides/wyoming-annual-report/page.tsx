import type { Metadata } from "next";
import { WyomingAnnualReportGuideClient } from "@/components/guides/WyomingAnnualReportGuideClient";

export const metadata: Metadata = {
  title:
    "Wyoming Annual Report Guide — LLC $60/Year Minimum Maintenance | TaxGuided.com",
  description:
    "Complete guide to the Wyoming LLC annual report. $60/year minimum fee, due on your formation anniversary month. File online in minutes. Avoid administrative dissolution.",
  openGraph: {
    title:
      "Wyoming Annual Report Guide — LLC $60/Year Minimum Maintenance",
    description:
      "Step-by-step guide to filing your Wyoming annual report. $60 minimum fee, due on your anniversary month. File up to 120 days early.",
    url: "https://taxguided.com/guides/wyoming-annual-report",
    type: "website",
  },
  alternates: {
    canonical: "/guides/wyoming-annual-report",
  },
};

export default function WyomingAnnualReportGuide() {
  return <WyomingAnnualReportGuideClient />;
}
