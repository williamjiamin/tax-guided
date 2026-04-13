import type { Metadata } from "next";
import { StripeSetupGuideClient } from "@/components/guides/StripeSetupGuideClient";

export const metadata: Metadata = {
  title:
    "How to Set Up Stripe for Your US LLC — Step-by-Step Activation Guide | TaxGuided.com",
  description:
    "Complete guide to activating Stripe payments for your foreign-owned US LLC. Covers business verification, bank account linking, and tax configuration.",
  openGraph: {
    title:
      "How to Set Up Stripe for Your US LLC — Step-by-Step Activation Guide",
    description:
      "Complete guide to activating Stripe payments for your foreign-owned US LLC. Covers business verification, bank account linking, and tax configuration.",
    url: "https://taxguided.com/guides/stripe-setup",
    type: "website",
  },
  alternates: {
    canonical: "/guides/stripe-setup",
  },
};

export default function StripeSetupGuide() {
  return <StripeSetupGuideClient />;
}
