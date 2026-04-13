import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to Taiwan (TWD) | TaxGuided.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to Taiwan. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-taiwan" },
  openGraph: {
    title: "How to Transfer Money from US LLC to Taiwan",
    description:
      "Compare the best ways to send money from your US business account to Taiwan. Fees, speed, exchange rates, and Taiwan-specific regulations.",
    url: "https://taxguided.com/guides/transfer-taiwan",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="Taiwan" slug="taiwan" />;
}
