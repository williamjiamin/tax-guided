import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to Nigeria (NGN) | TaxGuided.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to Nigeria. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-nigeria" },
  openGraph: {
    title: "How to Transfer Money from US LLC to Nigeria",
    description:
      "Compare the best ways to send money from your US business account to Nigeria. Fees, speed, exchange rates, and Nigeria-specific regulations.",
    url: "https://taxguided.com/guides/transfer-nigeria",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="Nigeria" slug="nigeria" />;
}
