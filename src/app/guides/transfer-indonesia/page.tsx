import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to Indonesia (IDR) | TaxGuided.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to Indonesia. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-indonesia" },
  openGraph: {
    title: "How to Transfer Money from US LLC to Indonesia",
    description:
      "Compare the best ways to send money from your US business account to Indonesia. Fees, speed, exchange rates, and Indonesia-specific regulations.",
    url: "https://taxguided.com/guides/transfer-indonesia",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="Indonesia" slug="indonesia" />;
}
