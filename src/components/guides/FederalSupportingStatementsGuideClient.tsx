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

export function FederalSupportingStatementsGuideClient() {
  const TOC = [
    { id: "what-are-they", label: "What Are Federal Supporting Statements?" },
    { id: "when-required", label: "When Are They Required?" },
    { id: "statement-1", label: "Statement 1: Entity Disclosure" },
    { id: "statement-2", label: "Statement 2: Transaction Detail" },
    { id: "formatting", label: "How to Format Them" },
    { id: "example-template", label: "Example Template" },
    { id: "auto-generated", label: "Our Filer Generates These For You" },
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
            <span className="text-gray-600">Federal Supporting Statements</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Filing Detail
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Federal Supporting Statements for Form 5472
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              The extra pages your Form 1120 + Form 5472 filing may need — what they are,
              when the IRS requires them, and exactly how to write them.
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
                Supporting statements are free-form pages attached to your filing that give the IRS extra detail
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Disregarded entities must always include a statement identifying the owner
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                There is no official IRS form — plain typed pages work fine
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                ForeignLLCTax.com generates these statements automatically when you use our filer
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

          {/* Section 1: What Are Federal Supporting Statements? */}
          <section id="what-are-they" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What Are Federal Supporting Statements?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Federal supporting statements are additional pages you attach to your Form 1120 +
              Form 5472 filing. They provide extra detail that the IRS forms themselves do not
              have room for. Think of them as footnotes to your tax filing.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              IRS forms are designed with fixed fields and limited space. When a situation
              requires more context than a single line on the form can hold, the IRS expects
              you to explain it in a supporting statement.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              For foreign-owned single-member LLCs, supporting statements are especially
              common because the disregarded entity structure requires additional disclosure
              that Form 5472 alone does not fully capture.
            </p>
          </section>

          {/* Section 2: When Are They Required? */}
          <section id="when-required" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              When Are They Required?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              You need to attach a federal supporting statement when any of the following apply:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "The reporting corporation is a disregarded entity",
                  desc: "This is the most common trigger. If your LLC is treated as a disregarded entity for federal tax purposes, you must attach a statement identifying the owner. This is not optional.",
                },
                {
                  title: "Transactions need itemized detail",
                  desc: "When Part 5 of Form 5472 reports aggregate amounts (capital contributions, distributions, etc.), the IRS may expect a line-by-line breakdown showing dates and amounts.",
                },
                {
                  title: "Unusual items on the balance sheet need explanation",
                  desc: "If the pro-forma Form 1120 balance sheet includes items that look unusual — large swings, reclassifications, or atypical entries — a brief explanation helps avoid IRS inquiries.",
                },
                {
                  title: "The form instructions say 'attach a statement'",
                  desc: "Several lines on Form 5472 and Form 1120 explicitly instruct you to attach a statement for certain situations. When the instructions say it, do it.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-blue-50/50 border border-blue-100 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-amber-800">
                <strong>Practical tip:</strong> When in doubt, include a supporting statement.
                The IRS will never penalize you for providing too much information. But missing
                a required statement can trigger a penalty notice or a follow-up letter.
              </p>
            </div>
          </section>

          {/* Section 3: Statement 1 — Entity Disclosure */}
          <section id="statement-1" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Statement 1: Entity Disclosure
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              For disregarded entities, you must attach a statement that clearly identifies the
              entity and its owner. This is sometimes called the &ldquo;Foreign-Owned US Disregarded
              Entity&rdquo; statement. It must include:
            </p>
            <ul className="space-y-2.5 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Name and address of the disregarded entity (your LLC)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Name and TIN (taxpayer identification number) of the owner</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>A statement that the entity is treated as disregarded for federal tax purposes</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>The date the entity was formed</span>
              </li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>Why this matters:</strong> Without this statement, the IRS has no way to
                connect the disregarded entity (your LLC) to its foreign owner on the pro-forma
                Form 1120. The penalty for an incomplete filing is $25,000 per form.
              </p>
            </div>
          </section>

          {/* Section 4: Statement 2 — Transaction Detail */}
          <section id="statement-2" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Statement 2: Transaction Detail
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              When Part 5 of Form 5472 reports transactions between the reporting corporation
              and the 25% foreign owner, you may want to attach a breakdown. This is especially
              important when you have many transactions in a single category.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Capital Contributions</h3>
                <p className="text-sm text-gray-600 mb-2">
                  List each contribution with the date and amount. This is important when the
                  owner made multiple contributions throughout the year.
                </p>
                <div className="text-xs text-gray-500 bg-white rounded-lg p-3 font-mono">
                  <div className="grid grid-cols-3 gap-2 border-b border-gray-200 pb-1 mb-1 font-semibold text-gray-700">
                    <span>Date</span>
                    <span>Description</span>
                    <span className="text-right">Amount</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span>2025-01-15</span>
                    <span>Initial capital</span>
                    <span className="text-right">$5,000</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span>2025-06-01</span>
                    <span>Additional funding</span>
                    <span className="text-right">$3,000</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 border-t border-gray-200 pt-1 mt-1 font-semibold text-gray-700">
                    <span></span>
                    <span>Total</span>
                    <span className="text-right">$8,000</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Distributions</h3>
                <p className="text-sm text-gray-600">
                  Similarly, list each distribution with date and amount. If the owner withdrew
                  funds from the LLC multiple times during the year, itemize each one. The total
                  should match the amount reported on Form 5472 Part 5.
                </p>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-amber-800">
                <strong>Good practice:</strong> Even if you only had one or two transactions,
                attaching a detail statement makes your filing look thorough and reduces the
                chance of an IRS follow-up letter asking for clarification.
              </p>
            </div>
          </section>

          {/* Section 5: How to Format Them */}
          <section id="formatting" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How to Format Them
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              There is no official IRS form for supporting statements. They are free-form
              documents. That said, following a consistent format makes them easier for the
              IRS to process and reduces the risk of confusion.
            </p>
            <div className="space-y-2.5 text-sm text-gray-600">
              {[
                "Put your LLC name and EIN at the top of every page",
                'Title it clearly (e.g., "Federal Supporting Statement — Form 1120/5472")',
                "Number each statement (Statement 1, Statement 2, etc.)",
                "Use plain, direct language — no legal jargon needed",
                "Can be typed on plain paper or formatted as a PDF",
                "Keep it concise — the IRS does not want essays, just facts",
                "If mailing, place the statements directly behind the forms they support",
              ].map((rule) => (
                <div key={rule} className="flex items-start gap-2">
                  <CheckIcon />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>No special paper required.</strong> The IRS accepts supporting statements
                on standard letter-size paper. You do not need letterhead, notarization, or any
                special formatting. Typed is preferred over handwritten.
              </p>
            </div>
          </section>

          {/* Section 6: Example Template */}
          <section id="example-template" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Example Template
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Below is an example of what a complete set of supporting statements looks like.
              Replace the bracketed items with your actual information.
            </p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 font-mono text-xs leading-relaxed text-gray-700 space-y-4">
              {/* Header */}
              <div className="border-b border-gray-300 pb-3">
                <p className="font-bold text-gray-900">[LLC Name]</p>
                <p>EIN: XX-XXXXXXX</p>
                <p>Tax Year: January 1 &ndash; December 31, 2025</p>
                <p className="mt-1 font-semibold text-gray-800">
                  Federal Supporting Statement &mdash; Form 1120/5472
                </p>
              </div>

              {/* Statement 1 */}
              <div>
                <p className="font-bold text-gray-900 mb-2">STATEMENT 1 &mdash; Disregarded Entity Disclosure</p>
                <p className="mb-1">[LLC Name] is a single-member LLC organized under the laws of [State].</p>
                <p className="mb-1">The sole owner is [Owner Name], a nonresident alien individual.</p>
                <p className="mb-1">[LLC Name] is treated as a disregarded entity for federal income tax purposes.</p>
                <p>Date of formation: [Date]</p>
              </div>

              {/* Statement 2 */}
              <div>
                <p className="font-bold text-gray-900 mb-2">STATEMENT 2 &mdash; Capital Contributions Detail</p>
                <div className="grid grid-cols-3 gap-2 border-b border-gray-300 pb-1 mb-1 font-semibold text-gray-800">
                  <span>Date</span><span>Description</span><span className="text-right">Amount</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span>2025-01-15</span><span>Initial capital contribution</span><span className="text-right">$5,000</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <span>2025-06-01</span><span>Additional funding</span><span className="text-right">$3,000</span>
                </div>
                <div className="grid grid-cols-3 gap-2 border-t border-gray-300 pt-1 mt-1 font-semibold text-gray-800">
                  <span></span><span>Total capital contributions</span><span className="text-right">$8,000</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-3 italic">
              This is an example for illustration purposes. Adjust the content to match your
              actual LLC details, transactions, and tax year.
            </p>
          </section>

          {/* Section 7: Our Filer Generates These For You */}
          <section id="auto-generated" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Our Filer Generates These For You
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <p className="text-sm text-green-800 leading-relaxed mb-4">
                When you use ForeignLLCTax.com to file your Form 5472, we automatically generate
                the required supporting statements. No extra work needed. The filer collects
                your entity details and transaction data during the guided flow, then produces
                properly formatted statements as part of your downloadable PDF package.
              </p>
              <ul className="space-y-2 text-sm text-green-800 mb-4">
                {[
                  "Disregarded entity disclosure statement — auto-generated from your LLC info",
                  "Transaction detail statements — built from the transactions you enter",
                  "Correct formatting with LLC name, EIN, and tax year on every page",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/filer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Start Your Filing
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
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
                { text: "Common Form 5472 mistakes to avoid", href: "/guides/form-5472-common-mistakes" },
                { text: "DIY filing vs hiring a CPA", href: "/guides/diy-vs-cpa" },
                { text: "Filing season playbook for April deadlines", href: "/guides/filing-season-playbook" },
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
