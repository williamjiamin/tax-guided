"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const GUIDE_CATEGORIES = [
  {
    title: "U.S. Tax for Foreign LLCs",
    description: "Form 5472, 1120, ECI rules, and compliance requirements for foreign-owned U.S. entities.",
    href: "/guides",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    count: "30+ guides",
  },
  {
    title: "International Tax Treaties",
    description: "Bilateral tax treaty analysis, withholding rates, and treaty benefits by country.",
    href: "/tools/treaty-lookup",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    count: "50+ countries",
  },
  {
    title: "Transfer Pricing",
    description: "Arm's length standards, documentation requirements, and country-by-country reporting.",
    href: "/guides",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    count: "20+ guides",
  },
  {
    title: "Country Tax Guides",
    description: "Tax obligations when operating a U.S. LLC from your home country. Region-specific advice.",
    href: "/guides",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    count: "11 countries",
  },
  {
    title: "Free Tax Tools",
    description: "Calculators, assessments, and interactive tools to check your compliance status.",
    href: "/tools/quick-tax-check",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    count: "15+ tools",
  },
  {
    title: "Wire Transfer Guides",
    description: "How to send money internationally for tax payments, LLC capital, and business operations.",
    href: "/guides",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    count: "20+ routes",
  },
];

const FEATURED_GUIDES = [
  { title: "Form 5472 Common Mistakes", href: "/guides/form-5472-common-mistakes", tag: "Popular" },
  { title: "Start Your Business Guide", href: "/guides/start-your-business", tag: "Beginner" },
  { title: "BOI Report Requirements", href: "/guides/boi-report", tag: "Updated" },
  { title: "Foreign LLC Bookkeeping", href: "/guides/foreign-llc-bookkeeping", tag: "Essential" },
  { title: "ECI vs. Non-ECI Income", href: "/tools/eci-assessment", tag: "Tool" },
  { title: "Section 1446 Withholding", href: "/guides/section-1446", tag: "Advanced" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-navy-dark to-navy pt-20 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-navy-light/60 text-gold px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-8 border border-gold/20">
              Expert-Sourced Tax Education
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
              Your Complete Guide to{" "}
              <span className="text-gold">Tax Laws</span>{" "}
              Around the World
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Comprehensive, expert-sourced guides covering international tax compliance,
              IRS form requirements, treaty benefits, and strategies for businesses operating across borders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/guides"
                className="bg-gold text-navy-dark px-8 py-3.5 rounded-xl font-bold text-base hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
              >
                Explore All Guides
              </Link>
              <Link
                href="/tools/quick-tax-check"
                className="border border-gray-500 text-white px-8 py-3.5 rounded-xl font-medium text-base hover:bg-navy-light transition-colors"
              >
                Free Tax Check
              </Link>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-white border-b border-gray-100 py-8 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "85+", label: "Tax Guides" },
              { stat: "50+", label: "Countries Covered" },
              { stat: "15+", label: "Free Tools" },
              { stat: "100+", label: "Q&A Topics" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-3xl font-extrabold text-navy">{item.stat}</div>
                <div className="text-sm text-gray-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Cards */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Browse by Topic</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                In-depth guides covering every aspect of international tax compliance and business operations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GUIDE_CATEGORIES.map((cat) => (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-gold hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-navy/5 rounded-lg flex items-center justify-center text-navy mb-4 group-hover:bg-gold/10 group-hover:text-gold-dark transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{cat.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">{cat.description}</p>
                  <span className="text-xs font-semibold text-navy uppercase tracking-wide">{cat.count}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Featured Guides</h2>
              <p className="text-gray-500">Start with these essential reads for international tax compliance.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {FEATURED_GUIDES.map((guide) => (
                <Link
                  key={guide.title}
                  href={guide.href}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-gold hover:bg-gold/5 transition-all"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        guide.tag === "Popular" ? "bg-red-100 text-red-700" :
                        guide.tag === "Updated" ? "bg-green-100 text-green-700" :
                        guide.tag === "Tool" ? "bg-purple-100 text-purple-700" :
                        guide.tag === "Advanced" ? "bg-orange-100 text-orange-700" :
                        "bg-blue-100 text-blue-700"
                      }`}>
                        {guide.tag}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-navy transition-colors">{guide.title}</h3>
                  </div>
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-gold transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Explore More Sections */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">More to Explore</h2>
              <p className="text-gray-500">Stay informed with live updates, real-world scenarios, and data-driven comparisons.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
              <Link href="/news" className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-gold hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-600 mb-3 group-hover:bg-gold/10 group-hover:text-gold-dark transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Tax News</h3>
                <p className="text-sm text-gray-500">Live regulation updates from IRS & China STA</p>
              </Link>
              <Link href="/scenarios" className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-gold hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-3 group-hover:bg-gold/10 group-hover:text-gold-dark transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Tax Scenarios</h3>
                <p className="text-sm text-gray-500">Real-world creator & freelancer tax situations</p>
              </Link>
              <Link href="/compare" className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-gold hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center text-green-600 mb-3 group-hover:bg-gold/10 group-hover:text-gold-dark transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">US vs China</h3>
                <p className="text-sm text-gray-500">Side-by-side tax system comparison</p>
              </Link>
              <Link href="/shorts" className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-gold hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 mb-3 group-hover:bg-gold/10 group-hover:text-gold-dark transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Tax Shorts</h3>
                <p className="text-sm text-gray-500">Quick explainers on common tax topics</p>
              </Link>
              <Link href="/tools/incorporate" className="group p-5 bg-white rounded-xl border border-gray-200 hover:border-gold hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-navy/5 rounded-lg flex items-center justify-center text-navy mb-3 group-hover:bg-gold/10 group-hover:text-gold-dark transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l3 3-3 3" /></svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Where to Incorporate</h3>
                <p className="text-sm text-gray-500">Find the best jurisdiction for your business</p>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Banner - Cross-link to ForeignLLCTax */}
        <section className="py-16 px-6 bg-navy">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Ready to File Your Foreign LLC Taxes?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Generate your IRS Form 5472 + pro forma 1120 in 15 minutes with our guided filing tool.
              Every field sourced from official IRS instructions.
            </p>
            <a
              href="https://foreignllctax.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-3.5 rounded-xl font-bold text-base hover:bg-gold-light transition-colors shadow-lg shadow-gold/20"
            >
              Visit ForeignLLCTax.com
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            <p className="text-sm text-gray-400 mt-4">Starting at $49 per filing &mdash; no subscription required</p>
          </div>
        </section>

        {/* Email Subscribe */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Stay Updated on Tax Law Changes</h2>
            <p className="text-gray-500 mb-8">
              Get notified when we publish new guides or when important tax deadlines approach.
            </p>
            <form className="flex gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 px-4 py-3 rounded-xl border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-navy text-white px-6 py-3 rounded-xl font-medium text-sm hover:bg-navy-light transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-gray-400 mt-3">Free, no spam. Unsubscribe anytime.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
