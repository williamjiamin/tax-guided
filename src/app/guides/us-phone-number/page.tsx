import type { Metadata } from "next";
import { UsPhoneNumberGuideClient } from "@/components/guides/UsPhoneNumberGuideClient";

export const metadata: Metadata = {
  title:
    "How to Get a US Phone Number — Guide for Foreign LLC Owners | ForeignLLCTax.com",
  description:
    "Complete guide to getting a US phone number for your foreign-owned LLC. Covers Ultra Mobile PayGo, Tello, and other options with pricing and setup instructions.",
  openGraph: {
    title:
      "How to Get a US Phone Number — Guide for Foreign LLC Owners",
    description:
      "Complete guide to getting a US phone number for your foreign-owned LLC. Covers Ultra Mobile PayGo, Tello, and other options with pricing and setup instructions.",
    url: "https://foreignllctax.com/guides/us-phone-number",
    type: "website",
  },
  alternates: {
    canonical: "/guides/us-phone-number",
  },
};

export default function UsPhoneNumberGuide() {
  return <UsPhoneNumberGuideClient />;
}
