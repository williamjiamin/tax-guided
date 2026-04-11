import type { Metadata } from "next";
import { SubmitForm5472GuideClient } from "@/components/guides/SubmitForm5472GuideClient";

export const metadata: Metadata = {
  title:
    "How to Submit Form 5472 to the IRS — Fax, Mail & Signature Guide | ForeignLLCTax.com",
  description:
    "Step-by-step instructions for submitting Form 5472 and pro forma Form 1120 to the IRS. Learn about fax vs. mail options, signature requirements, IRS-approved delivery services, and how to protect yourself from the $25,000 penalty.",
  alternates: { canonical: "/guides/how-to-submit-form-5472" },
};

export default function SubmitForm5472Page() {
  return <SubmitForm5472GuideClient />;
}
