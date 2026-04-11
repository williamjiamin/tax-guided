import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SHORTS } from "@/lib/shorts/shorts-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SHORTS.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const short = SHORTS.find((s) => s.id === slug);

  if (!short) {
    return { title: "Short Not Found" };
  }

  return {
    title: `${short.title} | TaxGuided.com`,
    description: short.summary,
    openGraph: {
      title: `${short.title} | TaxGuided.com`,
      description: short.summary,
      url: `https://foreignllctax.com/shorts/${short.id}`,
      type: "article",
    },
    alternates: {
      canonical: `/shorts/${short.id}`,
    },
  };
}

export default async function ShortDetailPage({ params }: Props) {
  const { slug } = await params;
  const short = SHORTS.find((s) => s.id === slug);

  if (!short) {
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
              href="/shorts"
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
              All Shorts
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-navy text-gold text-xs font-bold px-3 py-1 rounded-full border border-gold/30">
                {short.duration}
              </span>
              <span className="bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/30">
                {short.formatLabel}
              </span>
              <span className="bg-navy-light/60 text-gray-300 text-xs font-medium px-3 py-1 rounded-full border border-gray-600">
                {short.audienceLabel}
              </span>
            </div>

            <h1 className="text-[2rem] md:text-[2.75rem] font-extrabold text-white leading-[1.15] tracking-tight">
              {short.title}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-6">
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Hook callout */}
            <div className="bg-navy/5 border-l-4 border-gold rounded-r-xl p-6">
              <p className="text-xs font-semibold text-gold-dark uppercase tracking-wide mb-2">
                The hook
              </p>
              <p className="text-lg font-semibold text-navy leading-snug italic">
                &ldquo;{short.hook}&rdquo;
              </p>
            </div>

            {/* Summary */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                What this short covers
              </h2>
              <p className="text-gray-600 leading-relaxed">{short.summary}</p>
            </div>

            {/* Why it works */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                Why this works
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {short.whyItWorks}
              </p>
            </div>

            {/* Beats — vertical timeline */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Beat-by-beat breakdown
              </h2>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[18px] top-2 bottom-2 w-0.5 bg-gray-200" />

                <ol className="space-y-8">
                  {short.beats.map((beat, i) => (
                    <li key={i} className="relative flex gap-5">
                      {/* Timeline dot */}
                      <div className="relative z-10 w-9 h-9 bg-navy text-gold rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        {i + 1}
                      </div>

                      <div className="flex-1 bg-white border border-gray-200 rounded-xl p-5">
                        {/* Time window */}
                        <span className="inline-block bg-navy/5 text-navy text-xs font-bold px-2.5 py-1 rounded-full mb-3">
                          {beat.windowLabel}
                        </span>

                        {/* Headline */}
                        <h3 className="text-base font-bold text-gray-900 mb-2">
                          {beat.headline}
                        </h3>

                        {/* Script */}
                        <p className="text-sm text-gray-600 leading-relaxed mb-3">
                          {beat.script}
                        </p>

                        {/* Visual prompt */}
                        <p className="text-sm text-gray-400 italic leading-relaxed border-t border-gray-100 pt-3">
                          Visual: {beat.visualPrompt}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
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
                    {short.commonMistake}
                  </p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="bg-gradient-to-r from-navy to-navy-light rounded-xl p-6 text-white">
              <p className="text-xs font-semibold text-gold uppercase tracking-wide mb-2">
                Your next step
              </p>
              <p className="text-base leading-relaxed">
                {short.callToAction}
              </p>
            </div>

            {/* Official links */}
            {short.officialLinks.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-5">
                  Official resources
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {short.officialLinks.map((link) => (
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
              {short.tags.map((tag) => (
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
