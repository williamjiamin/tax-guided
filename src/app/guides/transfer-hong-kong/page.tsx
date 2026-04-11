import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to Hong Kong (HKD) | ForeignLLCTax.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to Hong Kong. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-hong-kong" },
  openGraph: {
    title: "How to Transfer Money from US LLC to Hong Kong",
    description:
      "Compare the best ways to send money from your US business account to Hong Kong. Fees, speed, exchange rates, and Hong Kong-specific regulations.",
    url: "https://foreignllctax.com/guides/transfer-hong-kong",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="Hong Kong" slug="hong-kong" />;
}
