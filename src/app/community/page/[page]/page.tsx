import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuestionCardServer } from "@/components/community/QuestionCardServer";
import { QA_CATALOG } from "@/lib/qa/qa-catalog";

const PAGE_SIZE = 30;

type Props = {
  params: Promise<{ page: string }>;
};

// Sort once at module load (build time).
const SORTED = [...QA_CATALOG].sort((a, b) => {
  if (a.question.isFeatured && !b.question.isFeatured) return -1;
  if (!a.question.isFeatured && b.question.isFeatured) return 1;
  return (
    new Date(b.question.postedAt).getTime() - new Date(a.question.postedAt).getTime()
  );
});

const TOTAL_PAGES = Math.max(1, Math.ceil(SORTED.length / PAGE_SIZE));

export function generateStaticParams() {
  // Pre-render pages 2..N at build time. Page 1 is /community itself.
  return Array.from({ length: TOTAL_PAGES - 1 }, (_, i) => ({
    page: String(i + 2),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { page } = await params;
  const n = Number(page);
  return {
    title: `Tax Q&A Community — Page ${n} of ${TOTAL_PAGES}`,
    description: `Browse page ${n} of TaxGuided's tax Q&A community. Real questions answered with citations to official tax authorities worldwide.`,
    alternates: { canonical: `/community/page/${n}` },
    openGraph: {
      title: `Tax Q&A Community — Page ${n}`,
      description: `Page ${n} of ${TOTAL_PAGES} in the TaxGuided community.`,
      url: `/community/page/${n}`,
      type: "website",
    },
  };
}

export default async function CommunityPagePage({ params }: Props) {
  const { page } = await params;
  const n = Number(page);
  if (!Number.isFinite(n) || n < 2 || n > TOTAL_PAGES) {
    notFound();
  }

  const start = (n - 1) * PAGE_SIZE;
  const items = SORTED.slice(start, start + PAGE_SIZE);
  const prevHref = n === 2 ? "/community" : `/community/page/${n - 1}`;
  const nextHref = n < TOTAL_PAGES ? `/community/page/${n + 1}` : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-50/80 to-white px-6 pt-16 pb-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-500 mb-2">
              Tax Q&A Community
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              Page {n} of {TOTAL_PAGES}
            </h1>
            <p className="mt-3 text-gray-600">
              Browse threads {start + 1}–{Math.min(start + PAGE_SIZE, SORTED.length)} of{" "}
              {SORTED.length.toLocaleString()}.
            </p>
            <div className="mt-4">
              <Link
                href="/community/all"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Or browse the full flat index →
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 py-10 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((thread) => (
                <QuestionCardServer key={thread.question.id} thread={thread} />
              ))}
            </div>

            {/* Pagination */}
            <nav
              aria-label="Q&A pagination"
              className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm"
            >
              <Link
                href={prevHref}
                className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-700"
              >
                ← Previous
              </Link>
              {/* Show a window of pages around current */}
              {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1)
                .filter((p) => Math.abs(p - n) <= 3 || p === 1 || p === TOTAL_PAGES)
                .map((p) =>
                  p === n ? (
                    <span
                      key={p}
                      className="px-3 py-2 rounded-lg bg-blue-600 text-white font-medium"
                    >
                      {p}
                    </span>
                  ) : (
                    <Link
                      key={p}
                      href={p === 1 ? "/community" : `/community/page/${p}`}
                      className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-700"
                    >
                      {p}
                    </Link>
                  )
                )}
              {nextHref ? (
                <Link
                  href={nextHref}
                  className="px-3 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:border-blue-300 hover:text-blue-700"
                >
                  Next →
                </Link>
              ) : null}
            </nav>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
