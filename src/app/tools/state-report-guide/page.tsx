import type { Metadata } from "next";
import { StateReportGuideClient } from "@/components/tools/StateReportGuideClient";

export const metadata: Metadata = {
  title: "State Annual Report Guide — Requirements by State | TaxGuided.com",
  description: "Find your state's annual report requirements for foreign-owned LLCs. Deadlines, fees, and filing instructions for Wyoming, Delaware, New Mexico, Florida, Texas, Nevada, and all 50 states.",
  openGraph: {
    title: "State Annual Report Guide — Requirements by State",
    description: "State-by-state annual report requirements, deadlines, and fees for foreign-owned LLCs.",
    url: "https://taxguided.com/tools/state-report-guide",
    type: "website",
  },
  alternates: { canonical: "/tools/state-report-guide" },
};

export default function StateReportGuidePage() {
  return <StateReportGuideClient />;
}
