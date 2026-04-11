import type { Metadata } from "next";
import { LlcPrivacyGuideClient } from "@/components/guides/LlcPrivacyGuideClient";

export const metadata: Metadata = {
  title:
    "How to Maximize Privacy for Your Foreign-Owned LLC | ForeignLLCTax.com",
  description:
    "Practical privacy strategies for foreign-owned LLCs. Covers state anonymity laws, registered agents, EIN usage, anonymous domains, and privacy-focused banking.",
  openGraph: {
    title: "How to Maximize Privacy for Your Foreign-Owned LLC",
    description:
      "Legitimate privacy strategies for foreign LLC owners. Protect your personal information while staying fully compliant.",
    url: "https://foreignllctax.com/guides/llc-privacy-guide",
    type: "website",
  },
  alternates: {
    canonical: "/guides/llc-privacy-guide",
  },
};

export default function LlcPrivacyGuide() {
  return <LlcPrivacyGuideClient />;
}
