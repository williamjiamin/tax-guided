import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to Canada (CAD) | TaxGuided.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to Canada. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-canada" },
  openGraph: {
    title: "How to Transfer Money from US LLC to Canada",
    description:
      "Compare the best ways to send money from your US business account to Canada. Fees, speed, exchange rates, and Canada-specific regulations.",
    url: "https://taxguided.com/guides/transfer-canada",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="Canada" slug="canada" />;
}
