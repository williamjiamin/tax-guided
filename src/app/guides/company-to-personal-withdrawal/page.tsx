import type { Metadata } from "next";
import { CompanyWithdrawalGuideClient } from "@/components/guides/CompanyWithdrawalGuideClient";

export const metadata: Metadata = {
  title:
    "How to Withdraw Funds from Your US LLC to Personal Account — Compliant Distribution Guide | TaxGuided.com",
  description:
    "Step-by-step guide to legally moving money from your US company bank account to your personal bank account. Covers distribution methods, compliance requirements, and tax reporting.",
  openGraph: {
    title:
      "How to Withdraw Funds from Your US LLC to Personal Account — Compliant Distribution Guide",
    description:
      "Step-by-step guide to legally moving money from your US company bank account to your personal bank account. Covers distribution methods, compliance requirements, and tax reporting.",
    url: "https://taxguided.com/guides/company-to-personal-withdrawal",
    type: "website",
  },
  alternates: {
    canonical: "/guides/company-to-personal-withdrawal",
  },
};

export default function CompanyWithdrawalGuide() {
  return <CompanyWithdrawalGuideClient />;
}
