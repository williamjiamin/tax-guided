import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to India (INR) | TaxGuided.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to India. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-india" },
  openGraph: {
    title: "How to Transfer Money from US LLC to India",
    description:
      "Compare the best ways to send money from your US business account to India. Fees, speed, exchange rates, and India-specific regulations.",
    url: "https://taxguided.com/guides/transfer-india",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="India" slug="india" />;
}
