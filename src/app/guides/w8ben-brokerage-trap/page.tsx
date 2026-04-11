import type { Metadata } from "next";
import { W8benBrokerageGuideClient } from "@/components/guides/W8benBrokerageGuideClient";

export const metadata: Metadata = {
  title: "W-8BEN vs W-9 for Foreign LLC Owners — The Brokerage Account Trap | ForeignLLCTax.com",
  description: "Foreign LLC owners who open US brokerage accounts often complete the wrong withholding certificate. Learn why filing W-9 instead of W-8BEN can lead to perjury risk and unexpected tax liability.",
  openGraph: {
    title: "W-8BEN vs W-9 — The Brokerage Account Trap for Foreign LLC Owners",
    description: "Why foreign-owned LLC owners must use W-8BEN (not W-9) for US brokerage accounts, and the tax consequences of getting it wrong.",
    url: "https://foreignllctax.com/guides/w8ben-brokerage-trap",
    type: "website",
  },
  alternates: { canonical: "/guides/w8ben-brokerage-trap" },
};

export default function W8benBrokerageGuidePage() {
  return <W8benBrokerageGuideClient />;
}
