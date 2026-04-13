import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to Philippines (PHP) | TaxGuided.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to Philippines. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-philippines" },
  openGraph: {
    title: "How to Transfer Money from US LLC to Philippines",
    description:
      "Compare the best ways to send money from your US business account to Philippines. Fees, speed, exchange rates, and Philippines-specific regulations.",
    url: "https://taxguided.com/guides/transfer-philippines",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="Philippines" slug="philippines" />;
}
