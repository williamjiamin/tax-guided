import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SCENARIOS, SCENARIO_FILTERS } from "@/lib/scenarios/scenario-data";
import { ScenariosPageClient } from "@/components/scenarios/ScenariosPageClient";

export const metadata: Metadata = {
  title: "Tax Scenarios — Real Situations, Clear Next Steps | TaxGuided.com",
  description:
    "Walk through real-world tax scenarios for creators, freelancers, and foreign LLC owners. Understand the forms, deadlines, and next steps before you file.",
  openGraph: {
    title: "Tax Scenarios — Real Situations, Clear Next Steps | TaxGuided.com",
    description:
      "Walk through real-world tax scenarios for creators, freelancers, and foreign LLC owners.",
    url: "https://foreignllctax.com/scenarios",
    type: "website",
  },
  alternates: {
    canonical: "/scenarios",
  },
};

export default function ScenariosPage() {
  return (
    <ScenariosPageClient
      scenarios={SCENARIOS}
      filters={SCENARIO_FILTERS}
    />
  );
}
