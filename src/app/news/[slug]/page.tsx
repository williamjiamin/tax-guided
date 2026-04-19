import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getNewsCommentaryBySlug, ALL_NEWS_COMMENTARY } from "@/lib/editorial";

export const dynamicParams = true;
export const revalidate = 86400;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getNewsCommentaryBySlug(slug);
  if (!item) return { title: "News Item Not Found" };
  return {
    title: `${item.seoTitle} | TaxGuided.com`,
    description: item.seoDescription,
    openGraph: {
      title: item.seoTitle,
      description: item.seoDescription,
      url: `https://taxguided.com/news/${slug}`,
      type: "article",
      publishedTime: item.publishedAt,
    },
    alternates: { canonical: `/news/${slug}` },
  };
}

export default async function NewsCommentaryPage({ params }: Props) {
  const { slug } = await params;
  const item = getNewsCommentaryBySlug(slug);
  if (!item) notFound();

  const related = ALL_NEWS_COMMENTARY.filter((n) => n.id !== item.id).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: item.seoTitle,
    description: item.seoDescription,
    datePublished: item.publishedAt,
    url: `https://taxguided.com/news/${item.slug}`,
    publisher: {
      "@type": "Organization",
      name: "TaxGuided.com",
      url: "https://taxguided.com",
    },
  };

  const publishedDate = new Date(item.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {/* Hero */}
          <section className="bg-gradient-to-b from-navy-dark to-navy pt-20 pb-14 px-6">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/news"
                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gold text-sm mb-8 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                All News
              </Link>
              <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/30 mb-6">
                Tax news & commentary · {publishedDate}
              </span>
              <h1 className="text-3xl md:text-[2.25rem] font-extrabold text-white leading-tight mb-4">
                {item.title}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">{item.summary}</p>
            </div>
          </section>

          {/* Content */}
          <section className="py-12 px-6">
            <article className="max-w-3xl mx-auto">
              {item.sections.map((section, i) => (
                <div key={i} className="mb-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
                    {section.heading}
                  </h2>
                  <div className="text-gray-700 leading-relaxed space-y-4 whitespace-pre-wrap">
                    {section.body}
                  </div>
                </div>
              ))}

              {/* Disclaimer */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-10">
                <p className="text-sm font-bold text-amber-800 mb-2">Educational content only</p>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Commentary reflects the state of the law as of {publishedDate}. Tax rules change and your facts matter — confirm anything important with a qualified professional or the cited official source before acting.
                </p>
              </div>

              {/* Sources */}
              {item.sources.length > 0 && (
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-5">Official sources</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {item.sources.map((src) => (
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">More commentary</h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      href={`/news/${r.slug}`}
                      className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gold hover:shadow-md transition-all"
                    >
                      <p className="text-xs text-gray-500 mb-2">
                        {new Date(r.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
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
    </>
  );
}
