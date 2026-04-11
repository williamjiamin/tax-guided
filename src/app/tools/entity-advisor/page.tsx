import type { Metadata } from "next";
import { EntityAdvisorClient } from "@/components/tools/EntityAdvisorClient";

export const metadata: Metadata = {
  title:
    "LLC Entity Classification Advisor — Disregarded Entity vs Partnership vs C-Corp | ForeignLLCTax.com",
  description:
    "Free tool to help foreign LLC owners understand their tax classification options. Compare disregarded entity, partnership, and C-corporation status for your US LLC.",
  openGraph: {
    title:
      "LLC Entity Classification Advisor — Disregarded Entity vs Partnership vs C-Corp",
    description:
      "Free advisor tool for foreign LLC owners. Compare disregarded entity, partnership, and C-corp tax classifications and find the best option for your business.",
    url: "https://foreignllctax.com/tools/entity-advisor",
    type: "website",
  },
  alternates: {
    canonical: "/tools/entity-advisor",
  },
};

export default function EntityAdvisorPage() {
  return <EntityAdvisorClient />;
}
