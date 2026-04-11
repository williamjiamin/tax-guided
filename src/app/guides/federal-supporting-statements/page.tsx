import type { Metadata } from "next";
import { FederalSupportingStatementsGuideClient } from "@/components/guides/FederalSupportingStatementsGuideClient";

export const metadata: Metadata = {
  title:
    "Federal Supporting Statements for Form 5472 — What They Are and When You Need Them | ForeignLLCTax.com",
  description:
    "Learn what federal supporting statements are, when the IRS requires them with Form 5472, and how to format them. Includes templates for disregarded entity disclosure and transaction detail.",
  openGraph: {
    title: "Federal Supporting Statements for Form 5472",
    description:
      "What federal supporting statements are, when they are required, and how to format them for your Form 1120 + Form 5472 filing.",
    url: "https://foreignllctax.com/guides/federal-supporting-statements",
    type: "website",
  },
  alternates: {
    canonical: "/guides/federal-supporting-statements",
  },
};

export default function FederalSupportingStatementsGuide() {
  return <FederalSupportingStatementsGuideClient />;
}
