import type { Metadata } from "next";
import { SalesTaxNexusClient } from "@/components/tools/SalesTaxNexusClient";

export const metadata: Metadata = {
  title:
    "Sales Tax Nexus Analyzer — Do You Need to Collect Sales Tax? | ForeignLLCTax.com",
  description:
    "Free sales tax nexus analyzer for foreign LLC owners. Check economic nexus thresholds by state and find out if your US LLC needs to collect and remit sales tax.",
  openGraph: {
    title: "Sales Tax Nexus Analyzer — Do You Have Sales Tax Obligations?",
    description:
      "Free tool to help foreign LLC owners determine if they have sales tax nexus in US states based on economic thresholds and business activities.",
    url: "https://foreignllctax.com/tools/sales-tax-nexus",
    type: "website",
  },
  alternates: {
    canonical: "/tools/sales-tax-nexus",
  },
};

export default function SalesTaxNexusPage() {
  return <SalesTaxNexusClient />;
}
