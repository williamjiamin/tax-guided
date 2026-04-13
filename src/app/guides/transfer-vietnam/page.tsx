import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to Vietnam (VND) | TaxGuided.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to Vietnam. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-vietnam" },
  openGraph: {
    title: "How to Transfer Money from US LLC to Vietnam",
    description:
      "Compare the best ways to send money from your US business account to Vietnam. Fees, speed, exchange rates, and Vietnam-specific regulations.",
    url: "https://taxguided.com/guides/transfer-vietnam",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="Vietnam" slug="vietnam" />;
}
