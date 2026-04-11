import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to China (CNY) | ForeignLLCTax.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to China. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-china" },
  openGraph: {
    title: "How to Transfer Money from US LLC to China",
    description:
      "Compare the best ways to send money from your US business account to China. Fees, speed, exchange rates, and China-specific regulations.",
    url: "https://foreignllctax.com/guides/transfer-china",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="China" slug="china" />;
}
