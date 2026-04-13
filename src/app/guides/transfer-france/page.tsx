import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to France (EUR) | TaxGuided.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to France. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-france" },
  openGraph: {
    title: "How to Transfer Money from US LLC to France",
    description:
      "Compare the best ways to send money from your US business account to France. Fees, speed, exchange rates, and France-specific regulations.",
    url: "https://taxguided.com/guides/transfer-france",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="France" slug="france" />;
}
