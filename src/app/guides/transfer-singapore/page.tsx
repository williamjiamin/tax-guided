import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to Singapore (SGD) | TaxGuided.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to Singapore. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-singapore" },
  openGraph: {
    title: "How to Transfer Money from US LLC to Singapore",
    description:
      "Compare the best ways to send money from your US business account to Singapore. Fees, speed, exchange rates, and Singapore-specific regulations.",
    url: "https://taxguided.com/guides/transfer-singapore",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="Singapore" slug="singapore" />;
}
