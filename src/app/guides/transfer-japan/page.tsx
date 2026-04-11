import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to Japan (JPY) | ForeignLLCTax.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to Japan. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-japan" },
  openGraph: {
    title: "How to Transfer Money from US LLC to Japan",
    description:
      "Compare the best ways to send money from your US business account to Japan. Fees, speed, exchange rates, and Japan-specific regulations.",
    url: "https://foreignllctax.com/guides/transfer-japan",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="Japan" slug="japan" />;
}
