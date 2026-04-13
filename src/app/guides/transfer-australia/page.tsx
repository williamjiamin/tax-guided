import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to Australia (AUD) | TaxGuided.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to Australia. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-australia" },
  openGraph: {
    title: "How to Transfer Money from US LLC to Australia",
    description:
      "Compare the best ways to send money from your US business account to Australia. Fees, speed, exchange rates, and Australia-specific regulations.",
    url: "https://taxguided.com/guides/transfer-australia",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="Australia" slug="australia" />;
}
