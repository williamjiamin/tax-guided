import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to Thailand (THB) | TaxGuided.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to Thailand. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-thailand" },
  openGraph: {
    title: "How to Transfer Money from US LLC to Thailand",
    description:
      "Compare the best ways to send money from your US business account to Thailand. Fees, speed, exchange rates, and Thailand-specific regulations.",
    url: "https://taxguided.com/guides/transfer-thailand",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="Thailand" slug="thailand" />;
}
