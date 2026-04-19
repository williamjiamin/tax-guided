import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getEditorialGuideBySlug, ALL_EDITORIAL_GUIDES } from "@/lib/editorial";

export const dynamicParams = true;
export const revalidate = 86400;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getEditorialGuideBySlug(slug);
  if (!guide) return { title: "Guide Not Found" };
  return {
    title: `${guide.seoTitle} | TaxGuided.com`,
    description: guide.seoDescription,
    openGraph: {
      title: guide.seoTitle,
      description: guide.seoDescription,
      url: `https://taxguided.com/guides/article/${slug}`,
      type: "article",
    },
    alternates: { canonical: `/guides/article/${slug}` },
  };
}

export default async function EditorialGuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getEditorialGuideBySlug(slug);
  if (!guide) notFound();

  // Related guides: same type, exclude current
  const related = ALL_EDITORIAL_GUIDES
    .filter((g) => g.id !== guide.id)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.seoTitle,
    description: guide.seoDescription,
    url: `https://taxguided.com/guides/article/${guide.slug}`,
    publisher: {
      "@type": "Organization",
      name: "TaxGuided.com",
      url: "https://taxguided.com",
    },
  };

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
                href="/guides"
                className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gold text-sm mb-8 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                All Guides
              </Link>
              <h1 className="text-3xl md:text-[2.5rem] font-extrabold text-white leading-tight mb-4">
                {guide.title}
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed">{guide.summary}</p>
            </div>
          </section>

          {/* Content */}
          <section className="py-12 px-6">
            <article className="max-w-3xl mx-auto">
              {guide.sections.map((section, i) => (
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
                  This guide is for general education, not personalized tax advice. Tax rules change and your facts matter — confirm anything important with a qualified professional or the cited official source before taking action.
                </p>
              </div>

              {/* Sources */}
              {guide.sources.length > 0 && (
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h2 className="text-xl font-bold text-gray-900 mb-5">Official sources</h2>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {guide.sources.map((src) => (
                      <a
                        key={src.url}
                        href={src.url}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="group flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-4 hover:border-gold hover:shadow-md transition-all duration-200"
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
                <h2 className="text-2xl font-bold text-gray-900 mb-6">More guides</h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      href={`/guides/article/${r.slug}`}
                      className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gold hover:shadow-md transition-all"
                    >
                      <p className="text-xs font-semibold text-gold-dark uppercase mb-2">
                        {r.type === "country" ? "Country guide" : "Comparison"}
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
