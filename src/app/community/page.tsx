import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuestionCardServer } from "@/components/community/QuestionCardServer";
import { QA_CATALOG, QA_CATEGORIES } from "@/lib/qa/qa-catalog";

export const metadata: Metadata = {
  title: "Tax Q&A Community — Ask Questions, Get Expert Answers",
  description:
    "Browse 1,000+ tax questions answered by experts. Corporate tax, international compliance, bookkeeping, and more — every answer cites official sources.",
  alternates: { canonical: "/community" },
  openGraph: {
    title: "Tax Q&A Community — TaxGuided.com",
    description:
      "Real tax questions answered by the TaxGuided community. International tax, compliance, bookkeeping — every answer backed by official sources.",
    url: "/community",
    type: "website",
  },
};

const PAGE_SIZE = 30;

export default function CommunityPage() {
  // Sort: featured first, then by most recent
  const sorted = [...QA_CATALOG].sort((a, b) => {
    if (a.question.isFeatured && !b.question.isFeatured) return -1;
    if (!a.question.isFeatured && b.question.isFeatured) return 1;
    return (
      new Date(b.question.postedAt).getTime() - new Date(a.question.postedAt).getTime()
    );
  });

  const firstPage = sorted.slice(0, PAGE_SIZE);
  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const totalThreads = sorted.length;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50/80 to-white px-6 pt-16 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              Tax Q&A Community
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Real Tax Questions, Expert Answers
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {totalThreads.toLocaleString()} threads with answers sourced from official tax authorities worldwide.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
              <Link
                href="/community/all"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
              >
                Browse all {totalThreads.toLocaleString()} threads (full index)
              </Link>
            </div>
          </div>
        </section>

        {/* Categories nav — server-rendered for crawlability */}
        <section className="border-b border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-4">
            <div className="flex flex-wrap gap-2">
              {Object.entries(QA_CATEGORIES).map(([key, label]) => (
                <Link
                  key={key}
                  href={`/community/all#${key}`}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Listing — pure server-rendered cards (foreignllctax SEO recipe).
            Search lives on /community/all; we deliberately don't pass the
            whole catalog into a client component because that would bloat
            the RSC payload to several megabytes. */}
        <section className="px-6 py-10 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {firstPage.map((thread) => (
                <QuestionCardServer key={thread.question.id} thread={thread} />
              ))}
            </div>

            {/* Pagination — path-based for SSG + crawler followability */}
            <nav
              aria-label="Q&A pagination"
              className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm"
            >
              <span className="px-3 py-2 rounded-lg bg-blue-600 text-white font-medium">1</span>
              {Array.from({ length: Math.min(totalPages - 1, 10) }, (_, i) => i + 2).map((p) => (
                <Link
                  key={p}
                  href={`/community/page/${p}`}
                  className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-colors"
                >
                  {p}
                </Link>
              ))}
              {totalPages > 11 && (
                <Link
                  href={`/community/page/${totalPages}`}
                  className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-700"
                >
                  Last ({totalPages})
                </Link>
              )}
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
