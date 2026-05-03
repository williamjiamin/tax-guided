import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QA_CATALOG, QA_CATEGORIES } from "@/lib/qa/qa-catalog";

export const metadata: Metadata = {
  title: "All Tax Q&A Threads — Complete Index | TaxGuided.com",
  description:
    "Flat index of every tax Q&A thread on TaxGuided. Browse 1,000+ tax questions grouped by category — every link goes directly to the answer.",
  alternates: { canonical: "/community/all" },
  openGraph: {
    title: "All Tax Q&A Threads — Complete Index",
    description: "Every tax Q&A thread on TaxGuided in one page, grouped by category.",
    url: "/community/all",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Group catalog by category.
function buildCategoryGroups() {
  const groups = new Map<string, typeof QA_CATALOG>();
  for (const thread of QA_CATALOG) {
    const cat = thread.question.category;
    const list = groups.get(cat) ?? [];
    list.push(thread);
    groups.set(cat, list);
  }
  // Sort within each group by date (newest first), and the categories
  // alphabetically by their human label.
  return Array.from(groups.entries())
    .map(([cat, threads]) => ({
      cat,
      threads: [...threads].sort(
        (a, b) =>
          new Date(b.question.postedAt).getTime() -
          new Date(a.question.postedAt).getTime()
      ),
    }))
    .sort((a, b) => {
      const labelA =
        QA_CATEGORIES[a.cat as keyof typeof QA_CATEGORIES] ?? a.cat;
      const labelB =
        QA_CATEGORIES[b.cat as keyof typeof QA_CATEGORIES] ?? b.cat;
      return labelA.localeCompare(labelB);
    });
}

const CATEGORY_GROUPS = buildCategoryGroups();
const TOTAL = QA_CATALOG.length;

export default function CommunityAllPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-50/80 to-white px-6 pt-16 pb-10">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
              All Tax Q&A Threads — Complete Index
            </h1>
            <p className="mt-3 text-gray-600">
              {TOTAL.toLocaleString()} threads across {CATEGORY_GROUPS.length} categories.
              Every link below goes directly to the answer.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Looking for a specific answer? Use{" "}
              <Link href="/community" className="text-blue-600 hover:underline">
                the searchable community page
              </Link>{" "}
              instead.
            </p>
          </div>
        </section>

        {/* Category nav (anchor-based) */}
        <section className="border-y border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 py-4">
            <nav aria-label="Category jump nav" className="flex flex-wrap gap-2 text-sm">
              {CATEGORY_GROUPS.map(({ cat, threads }) => {
                const label =
                  QA_CATEGORIES[cat as keyof typeof QA_CATEGORIES] ?? cat;
                return (
                  <a
                    key={cat}
                    href={`#${cat}`}
                    className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                  >
                    {label}{" "}
                    <span className="text-gray-400">({threads.length})</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </section>

        {/* The actual flat index — minimal HTML, just <a> tags */}
        <section className="px-6 py-10">
          <div className="max-w-5xl mx-auto">
            {CATEGORY_GROUPS.map(({ cat, threads }) => {
              const label =
                QA_CATEGORIES[cat as keyof typeof QA_CATEGORIES] ?? cat;
              return (
                <section key={cat} id={cat} className="mb-12 scroll-mt-24">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                    {label}{" "}
                    <span className="text-sm font-normal text-gray-500">
                      ({threads.length} threads)
                    </span>
                  </h2>
                  <ul className="space-y-2 text-sm">
                    {threads.map((thread) => (
                      <li key={thread.question.id}>
                        <a
                          href={`/community/${thread.slug}`}
                          className="text-blue-700 hover:text-blue-900 hover:underline"
                        >
                          {thread.question.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
