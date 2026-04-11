import type { Metadata } from "next";
import { QA_CATALOG } from "@/lib/qa/qa-catalog";
import { QAListClient } from "@/components/community/QAListClient";

export const metadata: Metadata = {
  title: "Tax Q&A Community — Real Questions, Expert Answers",
  description:
    "Get answers to your foreign-owned LLC tax questions. Expert guidance on Form 5472, EIN applications, IRS compliance, and more — with IRS source citations on every answer.",
  alternates: { canonical: "/community" },
  openGraph: {
    title: "Tax Q&A Community — ForeignLLCTax.com",
    description:
      "Real tax questions answered by ForeignLLCTax. Form 5472, EIN, IRS compliance — every answer backed by IRS sources.",
    url: "/community",
    type: "website",
  },
};

export default function CommunityPage() {
  return <QAListClient threads={QA_CATALOG} />;
}
