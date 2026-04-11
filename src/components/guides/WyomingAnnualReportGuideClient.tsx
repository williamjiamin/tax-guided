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

export function WyomingAnnualReportGuideClient() {
  const TOC = [
    { id: "what-is-annual-report", label: "What Is the Wyoming Annual Report?" },
    { id: "fee-calculation", label: "Fee Calculation" },
    { id: "how-to-file", label: "How to File — Step by Step" },
    { id: "deadlines", label: "Deadlines" },
    { id: "late-filing", label: "Late Filing Consequences" },
    { id: "why-wyoming", label: "Why Wyoming Is the Best Value" },
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
            <span className="text-gray-600">Wyoming Annual Report</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              State Compliance
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Wyoming Annual Report Guide — LLC $60/Year Minimum Maintenance
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Everything you need to know about the Wyoming annual report: fee calculation,
              filing steps, deadlines, and what happens if you miss it.
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
                Wyoming annual report fee is $60/year minimum (one of the lowest cost states)
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Fee based on Wyoming assets: $60 or $0.0002 x assets, whichever is greater
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Deadline: first day of the anniversary month of your formation
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                60 days late = administrative dissolution
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Can file up to 120 days early
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

          {/* What Is the Wyoming Annual Report? */}
          <section id="what-is-annual-report" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What Is the Wyoming Annual Report?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The Wyoming annual report is a mandatory filing required to maintain your LLC&apos;s
              Good Standing with the Wyoming Secretary of State. Every LLC, corporation, and other
              business entity registered in Wyoming must file it each year.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The annual report fee is $60 minimum for most LLCs. Since the fee is based on
              Wyoming assets (not total business assets), and most remote/foreign-owned LLCs hold
              no assets in Wyoming, you will almost certainly pay the $60 minimum.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-900 leading-relaxed">
                <strong>Key difference from Delaware:</strong> Wyoming does not have a separate
                franchise tax. The annual report fee ($60) is your only annual obligation to the
                state. Delaware charges $300/year for LLCs.
              </p>
            </div>
          </section>

          {/* Fee Calculation */}
          <section id="fee-calculation" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Fee Calculation
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The Wyoming annual report fee is calculated using a simple formula based on your
              assets located in Wyoming.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Formula</h3>
              <p className="text-sm text-gray-700 font-mono bg-white rounded-lg p-3 border border-gray-200">
                Fee = MAX($60, $0.0002 x total Wyoming assets)
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Breakeven point: $300,000 in Wyoming assets. Below that, you pay $60.
              </p>
            </div>

            <h3 className="text-sm font-semibold text-gray-900 mb-2">Examples</h3>
            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Wyoming Assets</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Calculated Fee</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">You Pay</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 text-gray-600">$0 (no WY assets)</td>
                    <td className="py-3 px-3 text-gray-600">$0</td>
                    <td className="py-3 px-3 font-medium text-gray-800">$60 (minimum)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 text-gray-600">$200,000</td>
                    <td className="py-3 px-3 text-gray-600">$40</td>
                    <td className="py-3 px-3 font-medium text-gray-800">$60 (minimum)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 text-gray-600">$300,000</td>
                    <td className="py-3 px-3 text-gray-600">$60</td>
                    <td className="py-3 px-3 font-medium text-gray-800">$60</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-3 text-gray-600">$1,210,000</td>
                    <td className="py-3 px-3 text-gray-600">$242</td>
                    <td className="py-3 px-3 font-medium text-gray-800">$242</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-3 mb-4">
              {[
                { assets: "$0 (no WY assets)", calc: "$0", pay: "$60 (minimum)" },
                { assets: "$200,000", calc: "$40", pay: "$60 (minimum)" },
                { assets: "$300,000", calc: "$60", pay: "$60" },
                { assets: "$1,210,000", calc: "$242", pay: "$242" },
              ].map((row) => (
                <div key={row.assets} className="rounded-xl border border-gray-200 p-4">
                  <div className="space-y-1 text-sm">
                    <p><span className="text-gray-500">WY Assets:</span> <span className="text-gray-800">{row.assets}</span></p>
                    <p><span className="text-gray-500">Calculated:</span> <span className="text-gray-800">{row.calc}</span></p>
                    <p><span className="text-gray-500">You Pay:</span> <span className="font-medium text-gray-800">{row.pay}</span></p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-amber-900 mb-2">Additional Notes</h3>
              <ul className="list-disc list-inside text-sm text-amber-800 space-y-1 ml-2">
                <li>2.4% credit card processing fee for online payment (minimum $1)</li>
                <li>Nonprofits pay $25 instead of $60</li>
                <li>Statutory trusts pay $100</li>
              </ul>
            </div>
          </section>

          {/* How to File */}
          <section id="how-to-file" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How to File — Step by Step
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Wyoming&apos;s annual report can be filed entirely online. The process takes about
              5 minutes.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Look up your Filing ID</h3>
                  <p className="text-sm text-gray-600">
                    Go to{" "}
                    <a href="https://wyobiz.wyo.gov/Business/FilingSearch.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                      Wyoming Business Filing Search
                    </a>{" "}
                    and search for your company name to find your Filing ID.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Go to the Annual Report Wizard</h3>
                  <p className="text-sm text-gray-600">
                    Visit{" "}
                    <a href="https://wyobiz.wyo.gov/Business/ARWizard.aspx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                      Wyoming Annual Report Wizard
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Enter Filing ID</h3>
                  <p className="text-sm text-gray-600">
                    Enter your Filing ID on the wizard page and click Next. Review your company
                    information and update if needed.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">4</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Pay $60 by credit card</h3>
                  <p className="text-sm text-gray-600">
                    Complete payment by credit card. A 2.4% processing fee applies (minimum $1).
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-7 h-7 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">5</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Download your receipt</h3>
                  <p className="text-sm text-gray-600">
                    Your filing is processed immediately. Download the receipt and save it for
                    your records.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Deadlines */}
          <section id="deadlines" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Deadlines
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Your annual report deadline is based on when your LLC was formed, not the calendar
              year.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">How It Works</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-2">
                Your report is due on the <strong>first day of the month</strong> in which your
                LLC was originally formed.
              </p>
              <div className="bg-white rounded-lg p-3 border border-gray-200">
                <p className="text-sm text-gray-700">
                  <strong>Example:</strong> If your LLC was formed on May 15, 2025, your first
                  annual report is due May 1, 2026. Then May 1, 2027, May 1, 2028, and so on.
                </p>
              </div>
            </div>
            <div className="bg-green-50 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-green-900 mb-2">Early Filing</h3>
              <p className="text-sm text-green-800 leading-relaxed">
                You can file your annual report up to <strong>120 days before</strong> the
                deadline. Filing early is recommended to avoid last-minute issues. There is no
                advantage to waiting until the due date.
              </p>
            </div>
          </section>

          {/* Late Filing Consequences */}
          <section id="late-filing" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Late Filing Consequences
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Wyoming takes late filings seriously. The consequences escalate quickly.
            </p>
            <div className="space-y-3">
              <div className="bg-amber-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-amber-900 mb-2">Day After Due Date</h3>
                <p className="text-sm text-amber-800">
                  Your entity becomes <strong>delinquent</strong>. You can still file, but you
                  are officially past due.
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-900 mb-2">60 Days Late</h3>
                <p className="text-sm text-red-800">
                  Your entity is <strong>administratively dissolved</strong>. It ceases to exist
                  as a legal entity in Wyoming.
                </p>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-900 mb-2">Reinstatement</h3>
                <ul className="list-disc list-inside text-sm text-red-800 space-y-1 ml-2">
                  <li>Reinstatement is possible within <strong>2 years</strong> of dissolution only</li>
                  <li>After 2 years, the entity is <strong>permanently gone</strong> — you must form a new LLC</li>
                  <li>You must pay all missed annual reports plus a reinstatement fee</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Wyoming Is the Best Value */}
          <section id="why-wyoming" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why Wyoming Is the Best Value
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Wyoming consistently ranks as one of the best states for foreign-owned LLCs. Here
              is why.
            </p>
            <div className="bg-green-50 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-green-900 mb-2">Wyoming Advantages</h3>
              <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                <li><strong>$60/year</strong> vs Delaware $300/year — save $240 annually</li>
                <li>No state income tax</li>
                <li>No franchise tax beyond the annual report fee</li>
                <li>Strong privacy — no public member or manager names</li>
                <li>No operating agreement filing requirement</li>
                <li>Simple online filing — processed immediately</li>
              </ul>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">Best For</h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                Solo developers, small teams, freelancers, and digital nomads. If you do not need
                Delaware&apos;s Court of Chancery or VC-friendly corporate structure, Wyoming
                gives you everything you need at a fraction of the cost.
              </p>
            </div>
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
                  File immediately. You have a 60-day grace period before administrative
                  dissolution. After dissolution, reinstatement is possible within 2 years
                  only — after that, the entity is permanently gone.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Can my registered agent file for me?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Yes, many registered agents offer annual report filing as an add-on service
                  for an additional fee. However, filing yourself takes about 5 minutes online
                  and saves you the extra cost.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  When does the filing take effect?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Online filings are processed immediately. Your Good Standing is updated as
                  soon as payment is confirmed.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Can I file early?
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Yes, you can file up to 120 days before your deadline. There is no advantage
                  to waiting — filing early ensures you do not miss the deadline.
                </p>
              </div>
            </div>
          </section>

          {/* Tip */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-6">
            <p className="text-sm text-blue-900 leading-relaxed">
              <strong>Pro Tip:</strong> Set a calendar reminder for <strong>2 months before
              your anniversary date</strong>. Since you can file up to 120 days early, this
              gives you plenty of time to complete the filing without rushing. For example, if
              your LLC was formed in June, set a reminder for April 1.
            </p>
          </div>

          {/* Related Guides */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>
            <div className="grid gap-3">
              <Link href="/guides/register-us-company" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors">
                <span className="text-blue-500 text-lg">🏢</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Register a US Company</p>
                  <p className="text-xs text-gray-500">Stripe Atlas vs Doola vs Firstbase vs DIY Wyoming</p>
                </div>
              </Link>
              <Link href="/guides/delaware-franchise-tax" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors">
                <span className="text-blue-500 text-lg">💰</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Delaware Franchise Tax Guide</p>
                  <p className="text-xs text-gray-500">$300/year — see the comparison</p>
                </div>
              </Link>
              <Link href="/guides/best-states-foreign-llc" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors">
                <span className="text-blue-500 text-lg">📊</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Best States for Foreign LLC</p>
                  <p className="text-xs text-gray-500">Compare Wyoming, Delaware, and New Mexico</p>
                </div>
              </Link>
              <Link href="/guides/mercury-bank-guide" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors">
                <span className="text-blue-500 text-lg">🏦</span>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Mercury Bank Guide</p>
                  <p className="text-xs text-gray-500">Open a US business bank account</p>
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
