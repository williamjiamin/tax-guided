import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getTaxShortBySlug, ALL_TAX_SHORTS } from "@/lib/editorial";

export const dynamicParams = true;
export const revalidate = 86400;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const short = getTaxShortBySlug(slug);
  if (!short) return { title: "Short Not Found" };
  return {
    title: `${short.seoTitle} | TaxGuided.com`,
    description: short.seoDescription,
    openGraph: {
      title: short.seoTitle,
      description: short.seoDescription,
      url: `https://taxguided.com/shorts/article/${slug}`,
      type: "article",
    },
    alternates: { canonical: `/shorts/article/${slug}` },
  };
}

export default async function TaxShortPage({ params }: Props) {
  const { slug } = await params;
  const short = getTaxShortBySlug(slug);
  if (!short) notFound();

  const related = ALL_TAX_SHORTS.filter((s) => s.id !== short.id).slice(0, 3);

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
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All Shorts
            </Link>
            <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/30 mb-6">
              Tax short
            </span>
            <h1 className="text-3xl md:text-[2.5rem] font-extrabold text-white leading-tight">
              {short.title}
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-6">
          <article className="max-w-3xl mx-auto space-y-8">
            {/* Hook */}
            <div className="bg-navy/5 border-l-4 border-gold rounded-r-xl p-6">
              <p className="text-xs font-semibold text-gold-dark uppercase tracking-wide mb-2">
                The hook
              </p>
              <p className="text-lg font-semibold text-navy leading-snug italic whitespace-pre-wrap">
                &ldquo;{short.hook}&rdquo;
              </p>
            </div>

            {/* Body */}
            <div>
              <div className="text-gray-700 leading-relaxed space-y-4 whitespace-pre-wrap text-base">
                {short.body}
              </div>
            </div>

            {/* Close */}
            <div className="bg-gradient-to-r from-navy to-navy-light rounded-xl p-6 text-white">
              <p className="text-xs font-semibold text-gold uppercase tracking-wide mb-2">
                The takeaway
              </p>
              <p className="text-base leading-relaxed whitespace-pre-wrap">{short.close}</p>
            </div>

            {/* Sources */}
            {short.sources.length > 0 && (
              <div className="pt-6 border-t border-gray-200">
                <h2 className="text-base font-bold text-gray-900 mb-4">Official sources</h2>
                <div className="space-y-2">
                  {short.sources.map((src) => (
                    <a
                      key={src.url}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="block text-sm text-navy hover:text-gold-dark underline"
                    >
                      {src.label}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">More shorts</h2>
              <div className="grid gap-4 md:grid-cols-3">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    href={`/shorts/article/${r.slug}`}
                    className="bg-white border border-gray-200 rounded-xl p-5 hover:border-gold hover:shadow-md transition-all"
                  >
                    <p className="font-bold text-gray-900 mb-2 leading-snug">{r.title}</p>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 italic">
                      &ldquo;{r.hook}&rdquo;
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
