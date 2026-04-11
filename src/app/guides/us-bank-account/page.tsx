import type { Metadata } from "next";
import { UsBankAccountGuideClient } from "@/components/guides/UsBankAccountGuideClient";

export const metadata: Metadata = {
  title:
    "How to Open a US Bank Account for Your Foreign-Owned LLC | ForeignLLCTax.com",
  description:
    "Step-by-step guide to opening a US business bank account as a foreign LLC owner. Compare Mercury, Relay, Wise, and traditional banks. Requirements, tips, and common pitfalls.",
  alternates: { canonical: "/guides/us-bank-account" },
};

export default function UsBankAccountPage() {
  return <UsBankAccountGuideClient />;
}
