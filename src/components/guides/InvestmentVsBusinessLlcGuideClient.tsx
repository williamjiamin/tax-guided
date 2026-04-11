"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

export function InvestmentVsBusinessLlcGuideClient() {
  const TOC = [
    { id: "two-types", label: "Two Types of Foreign-Owned LLCs" },
    { id: "scenario-a", label: "Scenario A: Investment / Passive LLC" },
    { id: "scenario-b", label: "Scenario B: Business / Active LLC" },
    { id: "comparison", label: "Side-by-Side Comparison Table" },
    { id: "which-type", label: "How to Tell Which Type You Are" },
    { id: "gray-area", label: "The Gray Area" },
    { id: "what-we-cover", label: "What ForeignLLCTax.com Covers" },
    { id: "coming-soon", label: "Coming Soon: 1040-NR Support" },
  ];

  const comparisonRows = [
    { feature: "US trade or business?", investment: "No", business: "Yes" },
    { feature: "Form 1120", investment: "Pro forma (zeros)", business: "Pro forma (zeros)" },
    { feature: "Form 5472", investment: "Required", business: "Required" },
    { feature: "Form 1040-NR", investment: "NOT required", business: "REQUIRED" },
    { feature: "Schedule C", investment: "N/A", business: "Required" },
    { feature: "ITIN needed?", investment: "No (use reference ID)", business: "Yes" },
    { feature: "US tax owed?", investment: "Typically none", business: "Yes — on ECI" },
    { feature: "Estimated cost (DIY)", investment: "~$49", business: "$49 + CPA for 1040-NR" },
    { feature: "Complexity", investment: "Low", business: "High" },
  ];

  const checklist = [
    { question: "Do you have US customers?", answer: "Likely Business" },
    { question: "Do you have US employees or contractors?", answer: "Likely Business" },
    { question: "Do you sell products or services in the US?", answer: "Likely Business" },
    { question: "Do you just hold investments (stocks, real estate, IP)?", answer: "Likely Investment" },
    { question: "Do you have a physical office in the US?", answer: "Likely Business" },
    { question: "Is your LLC just a bank account and registered agent?", answer: "Likely Investment" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/guides/start-your-business" className="hover:text-gray-600">Guides</Link>
            <span>/</span>
            <span className="text-gray-600">Investment vs Business LLC</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Filing Comparison
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Investment LLC vs Business LLC for Foreign Owners
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Your foreign-owned LLC follows one of two completely different IRS filing paths.
              Most online guides only cover one. This guide explains both — and how to tell
              which applies to you.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex items-start gap-2">
                <CheckIcon />
                An investment/passive LLC only needs Form 5472 + pro forma 1120 — no US tax owed
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                A business/active LLC must also file Form 1040-NR, Schedule C, obtain an ITIN, and pay US tax
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                The distinction depends on whether your LLC is engaged in a US trade or business (USTB)
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                ForeignLLCTax.com currently covers the investment LLC filing path for $49
              </li>
            </ul>
          </div>

          {/* Table of Contents */}
          <nav className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
              In This Guide
            </h2>
            <ol className="space-y-1.5">
              {TOC.map((item, i) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Section 1: Two Types */}
          <section id="two-types" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Two Types of Foreign-Owned LLCs
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              When a non-US person forms a single-member LLC in the United States, the IRS
              classifies it as a disregarded entity. But there is a critical fork in the road
              that most online guides gloss over: your LLC either holds investments and assets
              passively, or it actively conducts business. The IRS treats these two scenarios
              completely differently.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The technical distinction comes down to one question: Is your LLC engaged in a
              US trade or business (USTB)? Your answer determines which forms you file, whether
              you owe US tax, whether you need an ITIN, and how much the whole process costs.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-blue-700">A</span>
                  <h3 className="text-sm font-semibold text-blue-900">Investment / Passive LLC</h3>
                </div>
                <p className="text-sm text-blue-800">
                  Holds assets like real estate, stocks, or crypto. No customers, no employees,
                  no active business operations in the US.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-lg font-bold text-amber-700">B</span>
                  <h3 className="text-sm font-semibold text-amber-900">Business / Active LLC</h3>
                </div>
                <p className="text-sm text-amber-800">
                  Sells products or services, has customers, may have employees or contractors.
                  Actively conducts trade or business in the US.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-gray-700">
                <strong>Why this matters:</strong> Most online articles about foreign-owned LLCs
                only describe Scenario A — the passive holding company that files Form 5472 and
                owes nothing. If your LLC runs an actual business, you have a much larger set of
                filing obligations. Getting this wrong can result in penalties starting at $25,000.
              </p>
            </div>
          </section>

          {/* Section 2: Scenario A */}
          <section id="scenario-a" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Scenario A: Investment / Passive LLC
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              A foreign person forms a Delaware, Wyoming, or other state LLC to hold US
              assets — real estate, stocks, cryptocurrency, intellectual property, or simply
              a US bank account. The LLC has no employees, no customers, and provides no
              services. It exists purely as a legal wrapper around passive holdings.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              This LLC is not engaged in a US trade or business. The filing requirements are
              straightforward and relatively inexpensive.
            </p>

            <h3 className="text-sm font-bold text-gray-900 mb-2">Filing Requirements</h3>
            <div className="space-y-2 mb-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <CheckIcon />
                  <span className="text-sm font-semibold text-blue-900">Pro Forma Form 1120</span>
                </div>
                <p className="text-xs text-blue-800">
                  Filed as a &ldquo;carrier&rdquo; return — most fields are zero. The IRS requires
                  this as the vehicle to which Form 5472 is attached.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <CheckIcon />
                  <span className="text-sm font-semibold text-blue-900">Form 5472</span>
                </div>
                <p className="text-xs text-blue-800">
                  Reports transactions between the LLC and its foreign owner — capital
                  contributions, distributions, loans, management fees, and other reportable
                  transactions.
                </p>
              </div>
            </div>

            <h3 className="text-sm font-bold text-gray-900 mb-2">What You Do NOT Need</h3>
            <ul className="space-y-1.5 text-sm text-gray-600 ml-1 mb-4">
              <li className="flex items-start gap-2"><XIcon /> No Form 1040-NR (no income tax return)</li>
              <li className="flex items-start gap-2"><XIcon /> No Schedule C (no business profit/loss)</li>
              <li className="flex items-start gap-2"><XIcon /> No ITIN required (use a reference ID on the return)</li>
              <li className="flex items-start gap-2"><XIcon /> No US tax owed (no effectively connected income)</li>
              <li className="flex items-start gap-2"><XIcon /> No state tax returns in most cases</li>
            </ul>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-800">
                <strong>Bottom line:</strong> If your LLC is purely passive, your annual compliance
                is a single mailing to the IRS containing the pro forma 1120 with Form 5472
                attached. No tax is due. Total cost with ForeignLLCTax.com: $49.
              </p>
            </div>
          </section>

          {/* Section 3: Scenario B */}
          <section id="scenario-b" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Scenario B: Business / Active LLC
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              A foreign person forms a Florida, Texas, or other state LLC to run a vending
              machine business, an e-commerce store, a consulting firm with US clients, a
              restaurant, or any other active enterprise. The LLC has customers, generates
              revenue, and may have employees or independent contractors.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              This LLC is engaged in a US trade or business. The income it earns is called
              Effectively Connected Income (ECI), and it is subject to US income tax. The
              filing requirements expand dramatically compared to Scenario A.
            </p>

            <h3 className="text-sm font-bold text-gray-900 mb-2">Filing Requirements</h3>
            <div className="space-y-2 mb-4">
              {[
                {
                  title: "Pro Forma Form 1120 + Form 5472",
                  desc: "Same as Scenario A — still required to report transactions with the foreign owner. This does not go away just because you also have business income.",
                },
                {
                  title: "Form 1040-NR (Nonresident Alien Income Tax Return)",
                  desc: "Reports the ECI earned through the LLC. This is a full income tax return where you calculate and pay US federal income tax on your business profits.",
                },
                {
                  title: "Schedule C (Profit or Loss from Business)",
                  desc: "Attached to Form 1040-NR. Details your business revenue, expenses, cost of goods sold, and net profit or loss.",
                },
                {
                  title: "Schedule SE (Self-Employment Tax) — Potentially",
                  desc: "If your LLC income is subject to self-employment tax, you may owe an additional 15.3% on net earnings. Treaty provisions and specific circumstances affect this.",
                },
                {
                  title: "ITIN (Individual Taxpayer Identification Number)",
                  desc: "Required to file Form 1040-NR. You must apply for an ITIN using Form W-7 if you do not already have one. This adds processing time and complexity.",
                },
                {
                  title: "State Tax Returns — Potentially",
                  desc: "If your LLC operates in a state with income tax (California, New York, Illinois, etc.), you may also owe state taxes and need to file state returns.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                  <div className="flex items-start gap-2 mb-1">
                    <CheckIcon />
                    <span className="text-sm font-semibold text-amber-900">{item.title}</span>
                  </div>
                  <p className="text-xs text-amber-800 ml-6">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-sm text-red-800">
                <strong>Important:</strong> Many foreign LLC owners with active businesses
                only file Form 5472 because that is all they have heard about. This is
                non-compliant. If your LLC earns ECI and you do not file Form 1040-NR, the
                IRS can assess taxes, penalties, and interest going back multiple years.
              </p>
            </div>
          </section>

          {/* Section 4: Comparison Table */}
          <section id="comparison" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Side-by-Side Comparison
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Here is a direct comparison of the two filing paths. The differences are substantial.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Feature</th>
                    <th className="text-left py-3 px-3 font-semibold text-blue-700 bg-blue-50/50">Investment LLC</th>
                    <th className="text-left py-3 px-3 font-semibold text-amber-700 bg-amber-50/50">Business LLC</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium text-gray-800">{row.feature}</td>
                      <td className="py-3 px-3 text-blue-700 bg-blue-50/50">{row.investment}</td>
                      <td className="py-3 px-3 text-amber-700 bg-amber-50/50">{row.business}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-gray-700">
                <strong>Cost difference:</strong> An investment LLC owner can handle their entire
                annual filing for $49 with our platform. A business LLC owner will likely spend
                $49 for the Form 5472 portion plus $500-2,000+ for a CPA to handle the 1040-NR,
                Schedule C, and related forms — until our 1040-NR support launches.
              </p>
            </div>
          </section>

          {/* Section 5: Which Type */}
          <section id="which-type" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How to Tell Which Type You Are
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Run through this checklist. Each question points toward one category or the other.
              If most of your answers lean one direction, that is likely your classification.
            </p>
            <div className="space-y-2 mb-4">
              {checklist.map((item) => (
                <div key={item.question} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                  <ArrowIcon />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.question}</p>
                    <p className={`text-xs font-semibold mt-0.5 ${
                      item.answer === "Likely Business"
                        ? "text-amber-600"
                        : "text-blue-600"
                    }`}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-sm font-bold text-gray-900 mb-2">Common Examples by Category</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-2">
                  Investment LLC
                </h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>- Holding US rental property</li>
                  <li>- US brokerage account for stocks</li>
                  <li>- Cryptocurrency held in US exchange</li>
                  <li>- Intellectual property licensing (passive)</li>
                  <li>- Bank account for receiving foreign wire transfers</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-2">
                  Business LLC
                </h4>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>- E-commerce store selling to US customers</li>
                  <li>- Consulting firm with US clients</li>
                  <li>- Vending machine or laundromat business</li>
                  <li>- Restaurant or physical retail store</li>
                  <li>- Freelancing platform payments (US source)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6: Gray Area */}
          <section id="gray-area" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              The Gray Area
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Not every LLC fits neatly into one category. Some common gray-area scenarios
              require careful analysis to determine whether the IRS would consider you
              engaged in a US trade or business.
            </p>
            <div className="space-y-3 mb-4">
              {[
                {
                  title: "E-commerce with no US warehouse",
                  desc: "You sell products online through a US LLC, but all inventory is shipped from overseas. Whether this constitutes USTB depends on where sales activities occur, where decisions are made, and where fulfillment happens.",
                },
                {
                  title: "SaaS with global customers",
                  desc: "Your software company is structured as a US LLC, but you operate entirely from abroad with customers worldwide. The location of your servers, where code is written, and where business decisions are made all factor in.",
                },
                {
                  title: "Consulting done entirely remotely",
                  desc: "You provide consulting services through a US LLC but perform all work from outside the US. Even if your clients are US-based, the location where services are performed is a key factor.",
                },
                {
                  title: "Real estate with active management",
                  desc: "You own rental property through your LLC but actively manage it — handling repairs, finding tenants, making renovation decisions. At some point, passive holding becomes active management.",
                },
                {
                  title: "Trading in securities",
                  desc: "Occasional stock trading through a US LLC is generally passive. But frequent, high-volume trading could be considered a trade or business depending on the facts and circumstances.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800 mb-2">
                <strong>If you are in the gray area:</strong> Err on the side of caution. Consider
                reviewing these related guides for more detailed analysis:
              </p>
              <div className="space-y-1.5 ml-1">
                <Link
                  href="/guides/ustb-risk"
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <ArrowIcon />
                  USTB Risk Assessment Guide
                </Link>
                <Link
                  href="/guides/protective-filing-1120f"
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 hover:underline"
                >
                  <ArrowIcon />
                  Protective Filing Guide (Form 1120-F)
                </Link>
              </div>
            </div>
          </section>

          {/* Section 7: What We Cover */}
          <section id="what-we-cover" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What ForeignLLCTax.com Covers
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Our platform currently supports Scenario A — the investment/passive LLC filing
              path. If your LLC holds assets without conducting an active business, we handle
              your entire annual filing obligation.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              For Scenario B (business/active LLC), you will still need our platform for the
              Form 5472 + pro forma 1120 portion of your filing. However, the 1040-NR,
              Schedule C, and related forms currently require professional help from a CPA
              or tax attorney experienced with nonresident filings.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <h3 className="text-base font-bold text-green-900 mb-2">
                File Your Form 5472 + Pro Forma 1120
              </h3>
              <p className="text-sm text-green-800 mb-4">
                Whether your LLC is passive or active, you need Form 5472 filed every year.
                Our guided filer walks you through every field, generates IRS-ready PDFs,
                and catches common errors before you file.
              </p>
              <Link
                href="/filer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Start Filing — $49
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </section>

          {/* Section 8: Coming Soon */}
          <section id="coming-soon" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Coming Soon: 1040-NR Support
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              We are building guided 1040-NR filing support for foreign LLC owners with US
              business activity. When it launches, you will be able to handle both Scenario A
              and Scenario B filings entirely through our platform — no CPA required for
              straightforward business LLCs.
            </p>

            <div className="bg-gradient-to-br from-blue-50 to-amber-50 border border-blue-200 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                <h3 className="text-base font-bold text-gray-900">
                  Join the 1040-NR Waitlist
                </h3>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Be the first to know when our 1040-NR filing tool launches. We will send you
                one email when it is ready — nothing else.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  readOnly
                />
                <button
                  type="button"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
                >
                  Notify Me
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                No spam. One notification when 1040-NR support launches.
              </p>
            </div>
          </section>

          {/* Related Guides */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Related Guides
            </h2>
            <div className="space-y-2">
              {[
                { text: "Start your Form 5472 filing ($49)", href: "/filer" },
                { text: "DIY vs CPA — cost-benefit analysis", href: "/guides/diy-vs-cpa" },
                { text: "Common Form 5472 mistakes to avoid", href: "/guides/form-5472-common-mistakes" },
                { text: "Filing season playbook for foreign LLC owners", href: "/guides/filing-season-playbook" },
                { text: "ECI assessment tool", href: "/eci" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  {item.text}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
