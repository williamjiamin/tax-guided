import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to United Arab Emirates (AED) | ForeignLLCTax.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to United Arab Emirates. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-uae" },
  openGraph: {
    title: "How to Transfer Money from US LLC to United Arab Emirates",
    description:
      "Compare the best ways to send money from your US business account to United Arab Emirates. Fees, speed, exchange rates, and United Arab Emirates-specific regulations.",
    url: "https://foreignllctax.com/guides/transfer-uae",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="United Arab Emirates" slug="uae" />;
}
