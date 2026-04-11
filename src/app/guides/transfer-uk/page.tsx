import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to United Kingdom (GBP) | ForeignLLCTax.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to United Kingdom. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-uk" },
  openGraph: {
    title: "How to Transfer Money from US LLC to United Kingdom",
    description:
      "Compare the best ways to send money from your US business account to United Kingdom. Fees, speed, exchange rates, and United Kingdom-specific regulations.",
    url: "https://foreignllctax.com/guides/transfer-uk",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="United Kingdom" slug="uk" />;
}
