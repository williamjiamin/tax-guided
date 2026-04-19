import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SCENARIOS, SCENARIO_FILTERS } from "@/lib/scenarios/scenario-data";
import { ScenariosPageClient } from "@/components/scenarios/ScenariosPageClient";
import { ALL_TAX_SCENARIOS } from "@/lib/editorial";

export const metadata: Metadata = {
  title: "Tax Scenarios — Real Situations, Clear Next Steps | TaxGuided.com",
  description:
    "Walk through real-world tax scenarios for creators, freelancers, and foreign LLC owners. Understand the forms, deadlines, and next steps before you file.",
  openGraph: {
    title: "Tax Scenarios — Real Situations, Clear Next Steps | TaxGuided.com",
    description:
      "Walk through real-world tax scenarios for creators, freelancers, and foreign LLC owners.",
    url: "https://taxguided.com/scenarios",
    type: "website",
  },
  alternates: {
    canonical: "/scenarios",
  },
};

export default function ScenariosPage() {
  return (
    <>
      <ScenariosPageClient
        scenarios={SCENARIOS}
        filters={SCENARIO_FILTERS}
      />
      {ALL_TAX_SCENARIOS.length > 0 && (
        <div className="bg-gradient-to-br from-navy/5 to-gold/5 border-t border-gray-200 py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="inline-block bg-gold/20 text-gold-dark text-xs font-semibold px-3 py-1 rounded-full border border-gold/30 uppercase mb-3">
                Editorial tax scenarios
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                {ALL_TAX_SCENARIOS.length} researched cross-border scenarios
              </h2>
              <p className="text-gray-600">
                Worked-through situations for expats, cross-border founders, and multi-country taxpayers. Each one cites official sources.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {ALL_TAX_SCENARIOS.map((s) => (
                <Link
                  key={s.id}
                  href={`/scenarios/article/${s.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gold hover:shadow-md transition-all"
                >
                  <p className="font-semibold text-gray-900 text-sm mb-1 leading-snug">{s.title}</p>
                  <p className="text-xs text-gray-500 line-clamp-2">{s.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
