"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RegulationFeedClient } from "@/components/news/RegulationFeedClient";
import { FEED_ITEMS, FEED_FETCHED_AT } from "@/lib/regulations/feed-data";
import { ALL_NEWS_COMMENTARY } from "@/lib/editorial";

export default function NewsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-navy-dark to-navy pt-16 pb-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-navy-light/60 text-gold px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-6 border border-gold/20">
              Live Regulation Feed
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Tax News & Updates</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Regulation updates from tax authorities worldwide &mdash; IRS, HMRC, CRA, ATO, NTA, IRAS, and more &mdash;
              plus original commentary on rules affecting cross-border founders and international taxpayers.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              Last synced: {new Date(FEED_FETCHED_AT).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </section>

        {/* Editorial commentary */}
        {ALL_NEWS_COMMENTARY.length > 0 && (
          <section className="bg-gradient-to-br from-navy/5 to-gold/5 py-12 px-6 border-b border-gray-200">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <p className="inline-block bg-gold/20 text-gold-dark text-xs font-semibold px-3 py-1 rounded-full border border-gold/30 uppercase mb-3">
                  Commentary
                </p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                  TaxGuided commentary on recent tax rules
                </h2>
                <p className="text-gray-600">
                  Plain-English analysis of what changed, who is affected, and what to do about it.
                </p>
              </div>
              <div className="space-y-3">
                {ALL_NEWS_COMMENTARY.map((item) => (
                  <Link
                    key={item.id}
                    href={`/news/${item.slug}`}
                    className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-gold hover:shadow-md transition-all"
                  >
                    <p className="text-xs text-gray-500 mb-1">
                      {new Date(item.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                    <p className="font-bold text-gray-900 mb-1 leading-snug">{item.title}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Live feed */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6">
              Official regulation feed
            </h2>
            <RegulationFeedClient items={FEED_ITEMS} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
