import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SCENARIOS } from "@/lib/scenarios/scenario-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SCENARIOS.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const scenario = SCENARIOS.find((s) => s.id === slug);

  if (!scenario) {
    return { title: "Scenario Not Found" };
  }

  return {
    title: `${scenario.title} | TaxGuided.com`,
    description: scenario.summary,
    openGraph: {
      title: `${scenario.title} | TaxGuided.com`,
      description: scenario.summary,
      url: `https://foreignllctax.com/scenarios/${scenario.id}`,
      type: "article",
    },
    alternates: {
      canonical: `/scenarios/${scenario.id}`,
    },
  };
}

export default async function ScenarioDetailPage({ params }: Props) {
  const { slug } = await params;
  const scenario = SCENARIOS.find((s) => s.id === slug);

  if (!scenario) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-navy-dark to-navy pt-20 pb-14 px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/scenarios"
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gold text-sm mb-8 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Scenarios
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/30">
                {scenario.formatLabel}
              </span>
              <span className="bg-navy-light/60 text-gray-300 text-xs font-medium px-3 py-1 rounded-full border border-gray-600">
                {scenario.audienceLabel}
              </span>
            </div>

            <h1 className="text-[2rem] md:text-[2.75rem] font-extrabold text-white leading-[1.15] tracking-tight">
              {scenario.title}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Trigger question callout */}
            <div className="bg-navy/5 border-l-4 border-gold rounded-r-xl p-6">
              <p className="text-xs font-semibold text-gold-dark uppercase tracking-wide mb-2">
                The question that starts this
              </p>
              <p className="text-lg font-semibold text-navy leading-snug italic">
                &ldquo;{scenario.triggerQuestion}&rdquo;
              </p>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                What this scenario is about
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {scenario.summary}
              </p>
            </div>

            {/* Why this matters */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Why this matters
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {scenario.whyThisMatters}
              </p>
            </div>

            {/* Common mistake — warning box */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-amber-800 mb-1">
                    Common mistake
                  </p>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    {scenario.commonMistake}
                  </p>
                </div>
              </div>
            </div>

            {/* Checkpoints */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-5">
                Checkpoints to work through
              </h2>
              <ol className="space-y-4">
                {scenario.checkpoints.map((cp, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-8 h-8 bg-navy text-gold rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-1">
                        {cp.headline}
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {cp.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Next move CTA */}
            <div className="bg-gradient-to-r from-navy to-navy-light rounded-xl p-6 text-white">
              <p className="text-xs font-semibold text-gold uppercase tracking-wide mb-2">
                Your next move
              </p>
              <p className="text-base leading-relaxed">{scenario.nextMove}</p>
            </div>

            {/* Official links */}
            {scenario.officialLinks.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-5">
                  Official resources
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {scenario.officialLinks.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-gold hover:shadow-md transition-all duration-200"
                    >
                      <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                        <svg
                          className="w-5 h-5 text-navy group-hover:text-gold-dark transition-colors"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700 group-hover:text-navy transition-colors">
                        {link.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
              {scenario.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
