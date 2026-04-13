import type { Metadata } from "next";
import { StripeAccountTipsGuideClient } from "@/components/guides/StripeAccountTipsGuideClient";

export const metadata: Metadata = {
  title:
    "Stripe Account Health Guide — How to Avoid Risk Flags and Account Holds | TaxGuided.com",
  description:
    "Essential tips to maintain a healthy Stripe account. Learn what triggers risk flags, how to build account reputation, and how to avoid payment holds.",
  openGraph: {
    title:
      "Stripe Account Health Guide — How to Avoid Risk Flags and Account Holds",
    description:
      "Essential tips to maintain a healthy Stripe account. Learn what triggers risk flags, how to build account reputation, and how to avoid payment holds.",
    url: "https://taxguided.com/guides/stripe-account-tips",
    type: "website",
  },
  alternates: {
    canonical: "/guides/stripe-account-tips",
  },
};

export default function StripeAccountTipsGuide() {
  return <StripeAccountTipsGuideClient />;
}
