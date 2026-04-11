"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function LlcDissolutionGuideClient() {
  const TOC = [
    { id: "overview", label: "Overview — Why Proper Dissolution Matters" },
    { id: "step-by-step", label: "Step-by-Step Dissolution Process" },
    { id: "final-tax-returns", label: "Filing Final Tax Returns" },
    { id: "state-dissolution", label: "State Dissolution / Withdrawal" },
    { id: "cancel-ein", label: "Canceling Your EIN" },
    { id: "close-bank-accounts", label: "Closing Bank Accounts" },
    { id: "cancel-registered-agent", label: "Canceling Your Registered Agent" },
    { id: "what-happens-if-you-dont", label: "What Happens If You Don't Dissolve Properly" },
    { id: "next-steps", label: "Next Steps" },
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
            <span className="text-gray-600">LLC Dissolution</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100/80 text-red-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Dissolution Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              How to Close a Foreign-Owned US LLC
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Step-by-step guide to properly dissolving your LLC — from filing final tax returns
              to canceling your registered agent. Avoid ongoing fees and $25,000 penalties.
            </p>
          </div>

          {/* Key Info Box */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-red-900 uppercase tracking-wide mb-3">Key Facts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Final IRS Filing", value: "Form 1120 (Final) + Form 5472" },
                { label: "State Filing", value: "Articles of Dissolution (varies)" },
                { label: "Penalty Risk", value: "$25,000/year for each missed Form 5472" },
                { label: "Total Steps", value: "5 steps to fully close" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-red-700 w-28 flex-shrink-0">{item.label}:</span>
                  <span className="text-sm text-red-800">{item.value}</span>
                </div>
              ))}
            </div>
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

          {/* Overview */}
          <section id="overview" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why Proper Dissolution Matters
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Simply stopping business operations does not close your LLC. Without proper dissolution,
              your LLC continues to exist as a legal entity, which means you remain liable for:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-4">
              <li>Annual state franchise taxes and filing fees</li>
              <li>Annual registered agent fees</li>
              <li>IRS filing requirements — Form 5472 must be filed every year the LLC exists</li>
              <li>BOI reporting updates with FinCEN</li>
            </ul>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-sm text-red-800">
                <strong>Critical:</strong> Each year you fail to file Form 5472, you face a $25,000
                penalty. If you stopped operating 3 years ago but never dissolved, you could owe
                $75,000 or more in penalties alone.
              </p>
            </div>
          </section>

          {/* Step-by-Step Process */}
          <section id="step-by-step" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Step-by-Step Dissolution Process
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Follow these five steps in order to properly close your foreign-owned LLC:
            </p>
            <div className="space-y-3">
              {[
                { step: "1", title: "File Final Tax Returns", desc: "File Form 1120 with 'Final Return' checked + final Form 5472 with the IRS.", color: "blue" },
                { step: "2", title: "File State Dissolution", desc: "File Articles of Dissolution (or Certificate of Cancellation) with your state.", color: "blue" },
                { step: "3", title: "Cancel Your EIN", desc: "Send a letter to the IRS to close your Employer Identification Number.", color: "blue" },
                { step: "4", title: "Close Bank Accounts", desc: "Withdraw all funds and close your U.S. business bank account.", color: "blue" },
                { step: "5", title: "Cancel Registered Agent", desc: "Notify your registered agent that the LLC is dissolved.", color: "blue" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Step 1: Final Tax Returns */}
          <section id="final-tax-returns" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Step 1: Filing Final Tax Returns
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              You must file a final Form 1120 (with Form 5472 attached) for the year in which the
              LLC ceases operations. This is required even if the LLC had no income during its
              final year.
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">Form 1120 — Final Return</h3>
                <ul className="list-disc list-inside text-sm text-blue-800 space-y-1 ml-2">
                  <li>Check the &quot;Final return&quot; box at the top of page 1 (Item A)</li>
                  <li>Report any income, deductions, and transactions for the final period</li>
                  <li>The tax year ends on the date of dissolution (short-year return)</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">Form 5472 — Final Filing</h3>
                <ul className="list-disc list-inside text-sm text-blue-800 space-y-1 ml-2">
                  <li>Report all related-party transactions through the dissolution date</li>
                  <li>Include any final distributions to the foreign owner</li>
                  <li>Include any payments for dissolution fees, legal costs, etc.</li>
                </ul>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-800">
                <strong>Our filer supports final returns:</strong>{" "}
                <Link href="/filer" className="underline hover:text-green-900">
                  Use our Form 5472 filer
                </Link>
                {" "}to generate your final Form 1120 + Form 5472. The &quot;Final Return&quot;
                checkbox is supported.
              </p>
            </div>
          </section>

          {/* Step 2: State Dissolution */}
          <section id="state-dissolution" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Step 2: State Dissolution / Withdrawal
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              You must file dissolution paperwork with the state where your LLC was formed. The
              document name and process varies by state:
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">State</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">Document Name</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">Filing Fee</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b">
                    <td className="p-3 font-medium">Delaware</td>
                    <td className="p-3">Certificate of Cancellation</td>
                    <td className="p-3">$200</td>
                  </tr>
                  <tr className="border-b bg-gray-50/50">
                    <td className="p-3 font-medium">Wyoming</td>
                    <td className="p-3">Articles of Dissolution</td>
                    <td className="p-3">$0 (free)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">New Mexico</td>
                    <td className="p-3">Articles of Dissolution</td>
                    <td className="p-3">$0 (free)</td>
                  </tr>
                  <tr className="border-b bg-gray-50/50">
                    <td className="p-3 font-medium">Florida</td>
                    <td className="p-3">Articles of Dissolution</td>
                    <td className="p-3">$25</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Texas</td>
                    <td className="p-3">Certificate of Termination</td>
                    <td className="p-3">$40</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <p className="text-sm text-amber-800">
                <strong>Important:</strong> Before filing dissolution, make sure all state taxes and
                annual report fees are current. Many states will not process a dissolution if there
                are outstanding obligations.
              </p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              If your LLC was registered as a foreign entity in additional states (i.e., you registered
              to do business in states beyond your formation state), you&apos;ll also need to file a
              Certificate of Withdrawal in each of those states.
            </p>
          </section>

          {/* Step 3: Cancel EIN */}
          <section id="cancel-ein" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Step 3: Canceling Your EIN
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              To close your EIN account with the IRS, you need to send a letter to:
            </p>
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <p className="text-sm text-gray-700 font-mono">
                Internal Revenue Service<br />
                Cincinnati, OH 45999
              </p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The letter should include:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-4">
              <li>The LLC&apos;s complete legal name</li>
              <li>The EIN number</li>
              <li>The LLC&apos;s business address</li>
              <li>The reason for closing (e.g., &quot;LLC has been dissolved and is no longer conducting business&quot;)</li>
              <li>A copy of the state dissolution confirmation (if available)</li>
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed">
              You can also fax this letter to the IRS.{" "}
              <a
                href="https://ref.alohi.com/foreignllctax"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Use Alohi Fax to send documents to the IRS online.
              </a>
            </p>
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> An EIN is never truly &quot;canceled&quot; — it remains
                permanently assigned to your LLC. What you&apos;re actually doing is closing the
                business account associated with the EIN, which stops the IRS from expecting future
                filings.
              </p>
            </div>
          </section>

          {/* Step 4: Close Bank Accounts */}
          <section id="close-bank-accounts" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Step 4: Closing Bank Accounts
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Before closing your bank account:
            </p>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-4">
              <li>Ensure all outstanding payments and deposits have cleared</li>
              <li>Transfer any remaining balance to the owner&apos;s personal account (this is a reportable distribution — include it on your final Form 5472)</li>
              <li>Download all bank statements for your records (you should keep these for at least 7 years)</li>
              <li>Contact your bank to formally close the account</li>
            </ol>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Timing:</strong> Close the bank account after you have filed your final tax
                returns and state dissolution. You may need the account to pay dissolution fees or
                receive any final payments.
              </p>
            </div>
          </section>

          {/* Step 5: Cancel Registered Agent */}
          <section id="cancel-registered-agent" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Step 5: Canceling Your Registered Agent
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Once your LLC is dissolved with the state, notify your registered agent to cancel your
              service. Most registered agents will continue to charge annual fees until notified.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li>Provide a copy of your state dissolution filing</li>
              <li>Request written confirmation of cancellation</li>
              <li>Check if any refund is available for the remaining service period</li>
              <li>Confirm there are no outstanding invoices</li>
            </ul>
          </section>

          {/* What Happens If You Don't Dissolve */}
          <section id="what-happens-if-you-dont" className="bg-red-50 rounded-2xl border border-red-200 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-red-900 mb-3">
              What Happens If You Don&apos;t Dissolve Properly
            </h2>
            <p className="text-sm text-red-800 leading-relaxed mb-3">
              Abandoning your LLC without proper dissolution creates compounding problems:
            </p>
            <div className="space-y-3">
              <div className="bg-white/60 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-900 mb-1">Continued State Fees</h3>
                <p className="text-sm text-red-800">
                  States continue to charge annual franchise taxes, report fees, and late penalties.
                  Delaware, for example, charges $300/year in franchise tax plus $200 late fees.
                  These accumulate and can eventually lead to administrative dissolution with
                  penalties.
                </p>
              </div>
              <div className="bg-white/60 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-900 mb-1">IRS Form 5472 Penalties</h3>
                <p className="text-sm text-red-800">
                  The IRS requires Form 5472 for every year the LLC exists — even with zero
                  activity. Each missed filing triggers a <strong>$25,000 penalty</strong>. Miss
                  3 years and you&apos;re facing $75,000 in penalties.
                </p>
              </div>
              <div className="bg-white/60 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-900 mb-1">Registered Agent Fees</h3>
                <p className="text-sm text-red-800">
                  Your registered agent continues to charge $100-$300/year. If you stop paying,
                  they may resign — which means your LLC loses its registered agent, a violation
                  in most states.
                </p>
              </div>
              <div className="bg-white/60 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-900 mb-1">Administrative Dissolution</h3>
                <p className="text-sm text-red-800">
                  If you accumulate enough unpaid fees, the state may administratively dissolve your
                  LLC. This does <strong>not</strong> remove your IRS filing obligations — you still
                  owe all back Form 5472 filings and penalties. Reinstatement to properly dissolve
                  may require paying all back fees plus penalties.
                </p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Related Tools
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/filer"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">File Final Form 5472</h3>
                <p className="text-xs text-gray-500 mt-1">File your final Form 1120 + Form 5472 with the Final Return box checked.</p>
              </Link>
              <Link
                href="/tools/penalty-calculator"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">Penalty Calculator</h3>
                <p className="text-xs text-gray-500 mt-1">Estimate penalties for missed Form 5472 filings.</p>
              </Link>
              <Link
                href="/tools/catch-up"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">Catch-Up Filing</h3>
                <p className="text-xs text-gray-500 mt-1">Need to file back years of Form 5472 before dissolving?</p>
              </Link>
              <Link
                href="/services/eci-filing"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">ECI Filing Service</h3>
                <p className="text-xs text-gray-500 mt-1">If your LLC had income connected to a U.S. trade or business.</p>
              </Link>
            </div>
          </section>

          {/* doola CTA */}
          <div className="bg-white rounded-2xl border-2 border-indigo-600 shadow-lg p-6 md:p-8 mb-6 relative">
            <div className="absolute -top-3 left-5 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Recommended
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Need Help with Dissolution?
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              doola can handle the entire dissolution process for your LLC — final tax filings,
              state paperwork, EIN closure, and more. Focus on what&apos;s next while they take care
              of closing out your LLC properly.
            </p>
            <a
              href="https://partnersps.doola.com/foreignllctax"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-sm"
            >
              Get Dissolution Assistance
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              File Your Final Form 5472
            </h2>
            <p className="text-sm text-blue-100 mb-6 max-w-lg mx-auto">
              Don&apos;t leave your LLC without a final Form 5472 filing. Our guided filer supports
              the Final Return checkbox and walks you through the process.
            </p>
            <Link
              href="/filer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-[15px] shadow-lg"
            >
              Start Filing — $49
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
