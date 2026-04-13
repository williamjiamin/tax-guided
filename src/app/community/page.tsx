import type { Metadata } from "next";
import { QA_CATALOG } from "@/lib/qa/qa-catalog";
import { QAListClient } from "@/components/community/QAListClient";

export const metadata: Metadata = {
  title: "Tax Q&A Community — Ask Questions, Get Expert Answers",
  description:
    "Get answers to your tax questions from a global community. Corporate tax, international compliance, bookkeeping, and more — with official source citations on every answer.",
  alternates: { canonical: "/community" },
  openGraph: {
    title: "Tax Q&A Community — TaxGuided.com",
    description:
      "Real tax questions answered by the TaxGuided community. International tax, compliance, bookkeeping — every answer backed by official sources.",
    url: "/community",
    type: "website",
  },
};

export default function CommunityPage() {
  return <QAListClient threads={QA_CATALOG} />;
}
