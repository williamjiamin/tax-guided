"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Scenario } from "@/lib/scenarios/scenario-data";

interface ScenariosPageClientProps {
  scenarios: Scenario[];
  filters: { id: string; label: string }[];
}

export function ScenariosPageClient({
  scenarios,
  filters,
}: ScenariosPageClientProps) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? scenarios
      : scenarios.filter((s) => s.filters.includes(activeFilter));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-navy-dark to-navy pt-20 pb-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-navy-light/60 text-gold px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-8 border border-gold/20">
              <span>Scenario Walkthroughs</span>
              <span className="bg-gold text-navy-dark px-2 py-0.5 rounded-full text-[10px]">
                {scenarios.length}
              </span>
            </div>
            <h1 className="text-[2.5rem] md:text-[3.25rem] font-extrabold text-white mb-5 leading-[1.1] tracking-tight">
              Real Tax Situations,{" "}
              <span className="text-gold">Clear Next Steps</span>
            </h1>
            <p className="text-lg text-gray-300 mb-2 max-w-xl mx-auto leading-relaxed">
              Each scenario walks through a specific tax moment — the trigger,
              the checkpoints, and what to do next — so you can move forward with
              confidence.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-6 border-b border-gray-100 bg-gray-50/50">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === f.id
                    ? "bg-navy text-gold shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-gold hover:text-navy"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </section>

        {/* Scenario cards */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((scenario) => (
              <Link
                key={scenario.id}
                href={`/scenarios/${scenario.id}`}
                className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-gold hover:shadow-lg transition-all duration-200 flex flex-col"
              >
                {/* Format badge */}
                <span className="inline-block self-start bg-navy/5 text-navy text-xs font-semibold px-2.5 py-1 rounded-full mb-3 group-hover:bg-gold/10 group-hover:text-gold-dark transition-colors">
                  {scenario.formatLabel}
                </span>

                {/* Title */}
                <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-navy transition-colors">
                  {scenario.title}
                </h2>

                {/* Summary */}
                <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
                  {scenario.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {scenario.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="max-w-5xl mx-auto text-center py-16">
              <p className="text-gray-400 text-lg">
                No scenarios match this filter yet.
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
