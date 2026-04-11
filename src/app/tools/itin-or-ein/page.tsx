import type { Metadata } from "next";
import { ItinOrEinClient } from "@/components/tools/ItinOrEinClient";

export const metadata: Metadata = {
  title:
    "ITIN vs EIN — Which Do You Need? Free Decision Tool | ForeignLLCTax.com",
  description:
    "Free interactive decision tree to determine if you need an ITIN, EIN, or both. Designed for foreign entrepreneurs and non-resident LLC owners.",
  openGraph: {
    title: "ITIN vs EIN Decision Tree — Find Out What You Need",
    description:
      "Answer a few simple questions to find out whether you need an ITIN, an EIN, or both for your US business and tax filings.",
    url: "https://foreignllctax.com/tools/itin-or-ein",
    type: "website",
  },
  alternates: {
    canonical: "/tools/itin-or-ein",
  },
};

export default function ItinOrEinPage() {
  return <ItinOrEinClient />;
}
