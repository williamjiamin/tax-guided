"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/* ------------------------------------------------------------------ */
/*  Shared icon                                                        */
/* ------------------------------------------------------------------ */

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function DelawareFranchiseTaxGuideClient() {
  const TOC = [
    { id: "what-is-franchise-tax", label: "What Is the Delaware Franchise Tax?" },
    { id: "fee-breakdown", label: "Fee Breakdown" },
    { id: "system-availability", label: "System Availability" },
    { id: "how-to-pay", label: "How to Pay — Step by Step" },
    { id: "deadlines-penalties", label: "Deadlines & Penalties" },
    { id: "tax-advantages", label: "Delaware Tax Advantages" },
    { id: "who-should-choose", label: "Who Should Choose Delaware?" },
    { id: "faq", label: "FAQ" },
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
            <span className="text-gray-600">Delaware Franchise Tax</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              State Compliance
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Delaware Franchise Tax Guide — LLC $300/Year Annual Payment
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Everything you need to know about the Delaware franchise tax: what it costs,
              when it&apos;s due, and how to pay it online step by step.
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
                Delaware LLCs pay a flat $300/year franchise tax (not tied to revenue)
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                LLC deadline: June 1st each year
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                C-Corp deadline: March 1st each year
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Late penalty: $200 + 1.5%/month interest
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                LLCs do NOT file a separate annual report — just pay the tax
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
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* What Is the Delaware Franchise Tax? */}
          <section id="what-is-franchise-tax" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What Is the Delaware Franchise Tax?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Delaware calls its annual business maintenance payment the &ldquo;franchise tax.&rdquo;
              This is not a tax on income or revenue — it is the fee you pay to remain in Good
              Standing with the State of Delaware. Every LLC, LP, and corporation registered in
              Delaware must pay it, regardless of whether the business earns any money.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Unlike many other states, Delaware does not require LLCs to file a separate annual
              report. Your only obligation is to pay the franchise tax by the deadline each year.
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Entity Type Differences</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                <li><strong>LLC:</strong> Flat $300/year — simple and predictable</li>
                <li><strong>C-Corp:</strong> Varies by size — minimum $175, maximum $200,000</li>
                <li><strong>LP/GP:</strong> $300/year (same as LLC)</li>
              </ul>
            </div>
          </section>

          {/* Fee Breakdown */}
          <section id="fee-breakdown" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Fee Breakdown
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Here is exactly what each entity type pays and when it is due.
            </p>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Entity Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Annual Fee</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Deadline</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">LLC / LP / GP</td>
                    <td className="py-3 px-3 text-gray-600">$300 flat</td>
                    <td className="py-3 px-3 text-gray-600">June 1</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">C-Corp (Authorized Shares)</td>
                    <td className="py-3 px-3 text-gray-600">Min $175</td>
                    <td className="py-3 px-3 text-gray-600">March 1</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 font-medium text-gray-800">C-Corp (Assumed Par Value)</td>
                    <td className="py-3 px-3 text-gray-600">Min $400</td>
                    <td className="py-3 px-3 text-gray-600">March 1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4 mb-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">LLC / LP / GP</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Annual Fee:</span> <span className="text-gray-800">$300 flat</span></p>
                  <p><span className="text-gray-500">Deadline:</span> <span className="text-gray-800">June 1</span></p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">C-Corp (Authorized Shares)</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Annual Fee:</span> <span className="text-gray-800">Min $175</span></p>
                  <p><span className="text-gray-500">Deadline:</span> <span className="text-gray-800">March 1</span></p>
                </div>
              </div>
              <div className="rounded-xl border border-gray-200 p-4">
                <h3 className="text-sm font-bold text-gray-900 mb-2">C-Corp (Assumed Par Value)</h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Annual Fee:</span> <span className="text-gray-800">Min $400</span></p>
                  <p><span className="text-gray-500">Deadline:</span> <span className="text-gray-800">March 1</span></p>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-amber-900 mb-2">C-Corp Calculation Methods</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                C-Corps have two calculation methods: <strong>Authorized Shares</strong> (minimum
                $175) and <strong>Assumed Par Value Capital</strong> (minimum $400). Delaware
                calculates both and you pay whichever amount is lower. The maximum franchise
                tax for any C-Corp is $200,000/year.
              </p>
            </div>
          </section>

          {/* System Availability */}
          <section id="system-availability" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              System Availability
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Delaware&apos;s online payment system is not available 24/7. The system operates
              daily from <strong>8:00 AM to 11:45 PM Eastern Time</strong>. It closes 15 minutes
              before midnight for maintenance.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-900 leading-relaxed">
                <strong>Tip:</strong> If you try to access the payment portal and do not see the
                payment button or get an error, check the time. The system may be down for its
                nightly maintenance window (11:45 PM - 8:00 AM ET). Try again during operating
                hours.
              </p>
            </div>
          </section>

          {/* How to Pay */}
          <section id="how-to-pay" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How to Pay — Step by Step
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Follow these steps to pay your Delaware franchise tax online.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Go to the payment portal</h3>
                  <p className="text-sm text-gray-600">
                    Visit{" "}
                    <a href="https://corp.delaware.gov/paytaxes/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                      corp.delaware.gov/paytaxes
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Select your entity type</h3>
                  <p className="text-sm text-gray-600">
                    Click &ldquo;click here to pay LLC/LP/GP taxes&rdquo; for LLCs, or the
                    corporation link for C-Corps.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Look up your File Number</h3>
                  <p className="text-sm text-gray-600">
                    If you do not know your Delaware File Number, look it up at{" "}
                    <a href="https://icis.corp.delaware.gov/ecorp/entitysearch/namesearch.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                      Delaware Entity Search
                    </a>
                    . Search by your company name to find it.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Enter File Number and pay</h3>
                  <p className="text-sm text-gray-600">
                    Enter your File Number on the payment page and complete the payment by credit
                    card or ACH.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">5</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Save your confirmation</h3>
                  <p className="text-sm text-gray-600">
                    Save or screenshot the confirmation page. You will also receive an email
                    receipt. Keep both for your records.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Deadlines & Penalties */}
          <section id="deadlines-penalties" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Deadlines & Penalties
            </h2>
            <div className="space-y-3 mb-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Deadlines</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li><strong>LLCs / LPs / GPs:</strong> June 1st each year</li>
                  <li><strong>C-Corps:</strong> March 1st each year</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-900 mb-2">Late Penalties</h3>
                <ul className="list-disc list-inside text-sm text-red-800 space-y-1 ml-2">
                  <li><strong>$200 flat penalty</strong> applied immediately after the deadline</li>
                  <li><strong>1.5% per month interest</strong> on both the unpaid tax and the penalty</li>
                  <li>Interest compounds monthly — the longer you wait, the more you owe</li>
                  <li>Severe delinquency can result in voiding your Good Standing status</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              If your entity loses Good Standing, you may face difficulty opening bank accounts,
              entering contracts, or proving your business is legitimate. Always pay on time.
            </p>
          </section>

          {/* Delaware Tax Advantages */}
          <section id="tax-advantages" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Delaware Tax Advantages
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Delaware is known for being &ldquo;business-friendly,&rdquo; but the specifics
              matter. Here is what Delaware actually offers — and what it does not.
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Advantages</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>No state sales tax (but Delaware has a Gross Receipts Tax on sellers at 0.1%-2.4%)</li>
                  <li>Only taxes income apportioned to Delaware — not a blanket out-of-state exemption</li>
                  <li>For C-Corps: dividends to non-resident shareholders generally not subject to Delaware withholding</li>
                  <li>Court of Chancery — specialized business court with decades of case law</li>
                  <li>Flexible corporate law allowing custom governance structures</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-amber-900 mb-2">Important Nuances</h3>
                <ul className="list-disc list-inside text-sm text-amber-800 space-y-1 ml-2">
                  <li>Delaware has a Gross Receipts Tax (0.1%-2.4%) that applies to sellers with Delaware nexus</li>
                  <li>&ldquo;No state income tax on out-of-state income&rdquo; is apportionment, not a blanket exemption</li>
                  <li>S-Corps must withhold for non-resident shareholders on Delaware-sourced income</li>
                  <li>The $300/year LLC franchise tax applies regardless of revenue — even $0 revenue LLCs pay it</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Who Should Choose Delaware? */}
          <section id="who-should-choose" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Who Should Choose Delaware?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Delaware is the right choice for a specific type of business. For most solo
              foreign-owned LLCs, it is more expensive than necessary.
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">Delaware Is Best For</h3>
                <ul className="list-disc list-inside text-sm text-blue-800 space-y-1 ml-2">
                  <li>Companies planning to raise venture capital</li>
                  <li>Businesses with complex equity structures (multiple share classes, convertible notes)</li>
                  <li>Companies expecting business disputes that benefit from the Court of Chancery</li>
                  <li>Startups that need Delaware C-Corp status for investor expectations</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Consider Alternatives Instead</h3>
                <p className="text-sm text-gray-600 mb-2">
                  For solo developers, freelancers, or small teams, these options save significant money:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li><strong>Wyoming:</strong> $60/year — best overall value for foreign-owned LLCs</li>
                  <li><strong>New Mexico:</strong> $0/year — cheapest option with no annual fees</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              <Link href="/guides/best-states-foreign-llc" className="text-blue-600 hover:text-blue-800 underline">
                Read our full state comparison guide
              </Link>{" "}
              to see how Delaware stacks up against Wyoming and New Mexico on cost, privacy,
              and ease of use.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              FAQ
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  What if I miss the deadline?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pay as soon as possible. A $200 late penalty is applied immediately, plus 1.5%
                  per month interest on the tax and penalty. The longer you wait, the more it costs.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Does my LLC need to file an annual report?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  No. Delaware LLCs do not file a separate annual report. Your only obligation is
                  to pay the $300 franchise tax by June 1st each year.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Can someone pay on my behalf?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Yes. Your registered agent or any authorized person can pay the franchise tax
                  on your behalf. Many registered agents offer this as part of their service.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  How is C-Corp franchise tax calculated?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Delaware uses two methods: the Authorized Shares method (minimum $175) and
                  the Assumed Par Value Capital method (minimum $400). The state calculates both
                  and you pay whichever result is lower. The maximum tax is $200,000.
                </p>
              </div>
            </div>
          </section>

          {/* Tip */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
            <p className="text-sm text-blue-900 leading-relaxed">
              <strong>Pro Tip:</strong> Set a calendar reminder for <strong>May 1</strong> (LLC)
              or <strong>February 1</strong> (C-Corp) to give yourself a full month to prepare
              and pay before the deadline. Do not wait until the last day — the online system has
              limited hours and may be busy near deadlines.
            </p>
          </div>

          {/* Related Guides */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid gap-3">
              <Link href="/guides/best-states-foreign-llc" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors">
                <span className="text-blue-500 text-lg">📊</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Best States for Foreign LLC</p>
                  <p className="text-xs text-gray-500">Compare Wyoming, Delaware, and New Mexico</p>
                </div>
              </Link>
              <Link href="/guides/wyoming-annual-report" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors">
                <span className="text-blue-500 text-lg">📋</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Wyoming Annual Report Guide</p>
                  <p className="text-xs text-gray-500">$60/year — the lowest-cost alternative</p>
                </div>
              </Link>
              <Link href="/guides/register-us-company" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors">
                <span className="text-blue-500 text-lg">🏢</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Register a US Company</p>
                  <p className="text-xs text-gray-500">Stripe Atlas vs Doola vs Firstbase vs DIY</p>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
