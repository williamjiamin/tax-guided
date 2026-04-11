"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { RegulationFeedClient } from "@/components/news/RegulationFeedClient";
import { FEED_ITEMS, FEED_FETCHED_AT } from "@/lib/regulations/feed-data";

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
              Latest regulation updates from the IRS and China State Taxation Administration.
              Sourced directly from official government publications.
            </p>
            <p className="text-xs text-gray-500 mt-4">
              Last synced: {new Date(FEED_FETCHED_AT).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </section>

        {/* Feed */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <RegulationFeedClient items={FEED_ITEMS} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
