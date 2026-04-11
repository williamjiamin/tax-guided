import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to Mexico (MXN) | ForeignLLCTax.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to Mexico. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-mexico" },
  openGraph: {
    title: "How to Transfer Money from US LLC to Mexico",
    description:
      "Compare the best ways to send money from your US business account to Mexico. Fees, speed, exchange rates, and Mexico-specific regulations.",
    url: "https://foreignllctax.com/guides/transfer-mexico",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="Mexico" slug="mexico" />;
}
