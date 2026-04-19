import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getTaxScenarioBySlug, ALL_TAX_SCENARIOS } from "@/lib/editorial";

export const dynamicParams = true;
export const revalidate = 86400;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const scenario = getTaxScenarioBySlug(slug);
  if (!scenario) return { title: "Scenario Not Found" };
  return {
    title: `${scenario.seoTitle} | TaxGuided.com`,
    description: scenario.seoDescription,
    openGraph: {
      title: scenario.seoTitle,
      description: scenario.seoDescription,
      url: `https://taxguided.com/scenarios/article/${slug}`,
      type: "article",
    },
    alternates: { canonical: `/scenarios/article/${slug}` },
  };
}

export default async function TaxScenarioPage({ params }: Props) {
  const { slug } = await params;
  const scenario = getTaxScenarioBySlug(slug);
  if (!scenario) notFound();

  const related = ALL_TAX_SCENARIOS.filter((s) => s.id !== scenario.id).slice(0, 3);

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
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All Scenarios
            </Link>
            <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/30 mb-6">
              Tax scenario
            </span>
            <h1 className="text-3xl md:text-[2.5rem] font-extrabold text-white leading-tight mb-4">
              {scenario.title}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed">{scenario.summary}</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-6">
          <article className="max-w-3xl mx-auto space-y-10">
            {/* Situation */}
            <div className="bg-navy/5 border-l-4 border-gold rounded-r-xl p-6">
              <p className="text-xs font-semibold text-gold-dark uppercase tracking-wide mb-2">
                The situation
              </p>
              <p className="text-base text-gray-800 leading-relaxed whitespace-pre-wrap">
                {scenario.situation}
              </p>
            </div>

            {/* Sections */}
            {scenario.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
                  {section.heading}
                </h2>
                <div className="text-gray-700 leading-relaxed space-y-4 whitespace-pre-wrap">
                  {section.body}
                </div>
              </div>
            ))}

            {/* Action checklist */}
            {scenario.actionChecklist.length > 0 && (
              <div className="bg-gradient-to-br from-navy/5 to-gold/5 border border-gold/20 rounded-xl p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-5">Action checklist</h2>
                <ul className="space-y-3">
                  {scenario.actionChecklist.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-navy text-gold rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-gray-800 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Disclaimer */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <p className="text-sm font-bold text-amber-800 mb-2">Educational content only</p>
              <p className="text-sm text-amber-700 leading-relaxed">
                This scenario is for general education, not personalized tax advice. Confirm specifics with a qualified professional before acting.
              </p>
            </div>

            {/* Sources */}
            {scenario.sources.length > 0 && (
              <div className="pt-8 border-t border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-5">Official sources</h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {scenario.sources.map((src) => (
                    <a
                      key={src.url}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="group flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-gold hover:shadow-md transition-all"
                    >
                      <span className="text-sm font-medium text-gray-700 group-hover:text-navy transition-colors">
                        {src.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </article>
        </section>

        {/* Related */}
        {related.length > 0 && (
          <section className="bg-gray-50 py-12 px-6 border-t border-gray-200">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">More scenarios</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/scenarios/article/${r.slug}`}
                    className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gold hover:shadow-md transition-all"
                  >
                    <p className="font-bold text-gray-900 mb-2 leading-snug">{r.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {r.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
