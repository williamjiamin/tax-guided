import type { Metadata } from "next";
import { RefundStatusClient } from "@/components/tools/RefundStatusClient";

export const metadata: Metadata = {
  title: "IRS Refund Status Guide — What to Check After Filing",
  description:
    "See whether Where's My Refund applies to your filing, when it becomes worth checking, and which official IRS status path to use for individual, amended, nonresident, and business returns.",
  openGraph: {
    title: "IRS Refund Status Guide",
    description:
      "Post-filing guidance for refund tracking and IRS processing status, without sharing SSN details outside irs.gov.",
    url: "https://taxguided.com/tools/refund-status",
    type: "website",
  },
  alternates: {
    canonical: "/tools/refund-status",
  },
};

export default function RefundStatusPage() {
  return <RefundStatusClient />;
}
