import type { Metadata } from "next";
import { CountryTransferGuideClient } from "@/components/guides/CountryTransferGuideClient";

export const metadata: Metadata = {
  title: "How to Transfer Money from US LLC to South Korea (KRW) | ForeignLLCTax.com",
  description:
    "Complete guide to transferring money from your US LLC bank account to South Korea. Compare Wise, bank wires, Payoneer, and more. Fees, speed, regulations, and tax implications.",
  alternates: { canonical: "/guides/transfer-south-korea" },
  openGraph: {
    title: "How to Transfer Money from US LLC to South Korea",
    description:
      "Compare the best ways to send money from your US business account to South Korea. Fees, speed, exchange rates, and South Korea-specific regulations.",
    url: "https://foreignllctax.com/guides/transfer-south-korea",
    type: "article",
  },
};

export default function Page() {
  return <CountryTransferGuideClient country="South Korea" slug="south-korea" />;
}
