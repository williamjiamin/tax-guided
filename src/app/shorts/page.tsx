import type { Metadata } from "next";
import Link from "next/link";
import { SHORTS, SHORTS_FILTERS } from "@/lib/shorts/shorts-data";
import { ShortsPageClient } from "@/components/scenarios/ShortsPageClient";
import { ALL_TAX_SHORTS } from "@/lib/editorial";

export const metadata: Metadata = {
  title: "Tax Shorts — Tax Concepts in Under 60 Seconds | TaxGuided.com",
  description:
    "Bite-sized tax explainers for freelancers, creators, students, and expats. Each short breaks down one concept with a hook, explanation, and action step.",
  openGraph: {
    title: "Tax Shorts — Tax Concepts in Under 60 Seconds | TaxGuided.com",
    description:
      "Bite-sized tax explainers for freelancers, creators, students, and expats.",
    url: "https://taxguided.com/shorts",
    type: "website",
  },
  alternates: {
    canonical: "/shorts",
  },
};

export default function ShortsPage() {
  return (
    <>
      <ShortsPageClient shorts={SHORTS} filters={SHORTS_FILTERS} />
      {ALL_TAX_SHORTS.length > 0 && (
        <div className="bg-gradient-to-br from-navy/5 to-gold/5 border-t border-gray-200 py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <p className="inline-block bg-gold/20 text-gold-dark text-xs font-semibold px-3 py-1 rounded-full border border-gold/30 uppercase mb-3">
                Editorial tax shorts
              </p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                {ALL_TAX_SHORTS.length} quick explainers on tax myths and misconceptions
              </h2>
              <p className="text-gray-600">
                One-minute takes on tax traps, myths, and surprising rules — each sourced from official guidance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {ALL_TAX_SHORTS.map((s) => (
                <Link
                  key={s.id}
                  href={`/shorts/article/${s.slug}`}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gold hover:shadow-md transition-all"
                >
                  <p className="font-semibold text-gray-900 text-sm mb-2 leading-snug">{s.title}</p>
                  <p className="text-xs text-gray-500 italic line-clamp-2">&ldquo;{s.hook}&rdquo;</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
