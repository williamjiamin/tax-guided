import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to Brazil (BRL) | TaxGuided.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to Brazil. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-brazil" },
  openGraph: {
    title: "How to Transfer Money from US LLC to Brazil",
    description:
      "Compare the best ways to send money from your US business account to Brazil. Fees, speed, exchange rates, and Brazil-specific regulations.",
    url: "https://taxguided.com/guides/transfer-brazil",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="Brazil" slug="brazil" />;
}
