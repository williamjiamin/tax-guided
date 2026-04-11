import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to Germany (EUR) | ForeignLLCTax.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to Germany. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-germany" },
  openGraph: {
    title: "How to Transfer Money from US LLC to Germany",
    description:
      "Compare the best ways to send money from your US business account to Germany. Fees, speed, exchange rates, and Germany-specific regulations.",
    url: "https://foreignllctax.com/guides/transfer-germany",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="Germany" slug="germany" />;
}
