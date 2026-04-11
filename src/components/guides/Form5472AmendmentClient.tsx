"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function Form5472AmendmentClient() {
  const TOC = [
    { id: "when-to-amend", label: "When Do You Need to Amend?" },
    { id: "common-mistakes", label: "Common Mistakes That Require Amendment" },
    { id: "how-to-amend", label: "How to File an Amended Form 5472" },
    { id: "penalty-risk", label: "The $25,000 Penalty Risk" },
    { id: "reasonable-cause", label: "IRS Reasonable Cause Arguments" },
    { id: "deadline-considerations", label: "Deadline Considerations" },
    { id: "step-by-step", label: "Step-by-Step Amendment Process" },
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
            <span className="text-gray-600">Form 5472 Amendment</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100/80 text-amber-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Amendment Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              How to Amend Form 5472
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Made an error on a prior Form 5472 filing? Here&apos;s how to correct it and avoid or
              reduce the $25,000 penalty.
            </p>
          </div>

          {/* Key Info Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-amber-900 uppercase tracking-wide mb-3">Key Facts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Penalty", value: "$25,000 per incorrect/incomplete form" },
                { label: "How to Amend", value: "Corrected 5472 + Amended 1120" },
                { label: "Amended Box", value: "Check 'Amended return' on Form 1120" },
                { label: "IRS Mailing", value: "Ogden, UT Service Center" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-amber-700 w-28 flex-shrink-0">{item.label}:</span>
                  <span className="text-sm text-amber-800">{item.value}</span>
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

          {/* When to Amend */}
          <section id="when-to-amend" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              When Do You Need to Amend Form 5472?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              You need to amend a previously filed Form 5472 if you discover errors or omissions in
              the original filing. The IRS requires accurate reporting of all transactions between a
              foreign-owned LLC and its foreign owner (related party), and incorrect information can
              trigger the $25,000 penalty.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Common situations that require an amendment include discovering unreported transactions,
              correcting dollar amounts, fixing owner information errors, or addressing a wrong tax
              year on the original filing.
            </p>
          </section>

          {/* Common Mistakes */}
          <section id="common-mistakes" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Common Mistakes That Require Amendment
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: "Missing Transactions",
                  desc: "Forgot to report capital contributions, expense reimbursements, or other payments between you and the LLC. This is the most common error.",
                },
                {
                  title: "Incorrect Dollar Amounts",
                  desc: "Reported the wrong transaction amounts in Part V — for example, using a different currency conversion rate or miscalculating totals.",
                },
                {
                  title: "Wrong Owner Information",
                  desc: "Errors in the reporting corporation or 25% foreign shareholder sections — wrong TIN, incorrect address, misspelled name.",
                },
                {
                  title: "Wrong Tax Year",
                  desc: "Filed the Form 5472 with an incorrect tax year period on the associated Form 1120.",
                },
                {
                  title: "Missing Part V Categories",
                  desc: "Reported some transactions but missed entire categories — e.g., reported capital contributions but missed expense reimbursements.",
                },
                {
                  title: "Filing for the Wrong Entity",
                  desc: "Filed under the wrong EIN or entity name, particularly if you have multiple LLCs.",
                },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <svg className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.999L13.732 4.001c-.77-1.333-2.694-1.333-3.464 0L3.34 16.001C2.57 17.334 3.532 19 5.072 19z" />
                  </svg>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* How to Amend */}
          <section id="how-to-amend" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How to File an Amended Form 5472
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Unlike some IRS forms, there is no separate &quot;amended&quot; version of Form 5472. Instead,
              you file a corrected Form 5472 attached to an amended Form 1120:
            </p>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2.5 ml-2 mb-4">
              <li>
                <strong>Prepare a corrected Form 5472</strong> — fill it out completely with the
                correct information (not just the changed fields).
              </li>
              <li>
                <strong>Prepare an amended Form 1120</strong> — check the &quot;Amended return&quot;
                box at the top of page 1 (Item G, box 4).
              </li>
              <li>
                <strong>Attach the corrected Form 5472</strong> to the amended Form 1120.
              </li>
              <li>
                <strong>Include a statement</strong> explaining the reason for the amendment and what
                was corrected.
              </li>
              <li>
                <strong>Mail to the IRS</strong> — amended returns with Form 5472 must be mailed to
                the IRS Ogden Service Center.
              </li>
            </ol>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>IRS Mailing Address:</strong> Department of the Treasury, Internal Revenue
                Service, Ogden, UT 84201-0042. Include &quot;AMENDED RETURN&quot; prominently at the
                top of your filing.
              </p>
            </div>
          </section>

          {/* Penalty Risk */}
          <section id="penalty-risk" className="bg-red-50 rounded-2xl border border-red-200 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-red-900 mb-3">
              The $25,000 Penalty Risk
            </h2>
            <p className="text-sm text-red-800 leading-relaxed mb-3">
              The IRS imposes a $25,000 penalty for each Form 5472 that is filed with incomplete or
              inaccurate information, or for failure to maintain required records. This penalty applies
              per form, per year.
            </p>
            <p className="text-sm text-red-800 leading-relaxed mb-3">
              Voluntarily amending before the IRS contacts you significantly improves your position.
              If the IRS discovers the error first, the penalty is automatic and much harder to contest.
            </p>
            <p className="text-sm text-red-800 leading-relaxed">
              The penalty continues to accrue: if the IRS issues a notice and you fail to respond
              within 90 days, an additional $25,000 penalty can be assessed for each 30-day period
              of continued non-compliance.
            </p>
          </section>

          {/* Reasonable Cause */}
          <section id="reasonable-cause" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              IRS Reasonable Cause Arguments
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              If you&apos;ve already been assessed a penalty, you may request abatement by
              demonstrating &quot;reasonable cause&quot; — that you acted in good faith and the failure
              was not due to willful neglect.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Factors the IRS considers include:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-4">
              <li>You voluntarily corrected the error before IRS contact</li>
              <li>This was your first filing and you were unfamiliar with the requirements</li>
              <li>You relied on a professional tax advisor who gave incorrect guidance</li>
              <li>The error was due to circumstances beyond your control</li>
              <li>You acted promptly once you discovered the error</li>
              <li>The unreported transaction was immaterial or did not reduce tax liability</li>
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-800">
                <strong>Best practice:</strong> File the amendment voluntarily and include a detailed
                reasonable cause statement explaining why the error occurred and the steps you took
                to correct it. The sooner you act, the stronger your case.
              </p>
            </div>
          </section>

          {/* Deadline Considerations */}
          <section id="deadline-considerations" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Deadline Considerations
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              There is no specific deadline for filing an amended Form 5472, but timing matters:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li>
                <strong>File as soon as possible</strong> — delays weaken reasonable cause arguments
                and increase the risk of IRS discovery.
              </li>
              <li>
                <strong>Statute of limitations:</strong> The general 3-year statute of limitations for
                assessments may not apply to Form 5472 penalties (the IRS takes the position that
                filing an incomplete Form 5472 is equivalent to not filing).
              </li>
              <li>
                <strong>Before IRS contact:</strong> Voluntary amendments filed before the IRS sends
                a notice carry significantly more weight in penalty abatement requests.
              </li>
              <li>
                <strong>During an audit:</strong> If you discover errors during an IRS audit, disclose
                and correct them immediately — voluntary disclosure during an audit is viewed favorably.
              </li>
            </ul>
          </section>

          {/* Step-by-Step */}
          <section id="step-by-step" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Step-by-Step Amendment Process
            </h2>
            <div className="space-y-3">
              {[
                { step: "1", title: "Identify the Error", desc: "Review your original Form 5472 and note exactly what needs to be corrected." },
                { step: "2", title: "Gather Correct Information", desc: "Collect accurate transaction records, amounts, and owner details." },
                { step: "3", title: "Prepare the Corrected Form 5472", desc: "Fill out a complete, correct Form 5472 — all fields, not just the corrections." },
                { step: "4", title: "Prepare the Amended Form 1120", desc: "Complete Form 1120 with the 'Amended return' box checked." },
                { step: "5", title: "Write a Reasonable Cause Statement", desc: "Explain why the error occurred and what corrective steps you've taken." },
                { step: "6", title: "Mail to the IRS", desc: "Send the complete package (amended 1120 + corrected 5472 + statement) to the Ogden Service Center." },
                { step: "7", title: "Keep Copies", desc: "Retain copies of everything you mail, plus proof of mailing (certified mail recommended)." },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
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
                <h3 className="text-sm font-semibold text-gray-900">File Form 5472</h3>
                <p className="text-xs text-gray-500 mt-1">File a new or corrected Form 5472 + pro forma 1120 for $49.</p>
              </Link>
              <Link
                href="/tools/penalty-calculator"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">Penalty Calculator</h3>
                <p className="text-xs text-gray-500 mt-1">Estimate the penalties you may owe for incorrect filings.</p>
              </Link>
              <Link
                href="/tools/catch-up"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">Catch-Up Filing</h3>
                <p className="text-xs text-gray-500 mt-1">Behind on multiple years? File catch-up returns here.</p>
              </Link>
              <Link
                href="/guides/transfer-pricing"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">Transfer Pricing Guide</h3>
                <p className="text-xs text-gray-500 mt-1">Understand Part V reporting for related-party transactions.</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              Need to File or Correct Form 5472?
            </h2>
            <p className="text-sm text-blue-100 mb-6 max-w-lg mx-auto">
              Our guided filer walks you through every section of Form 5472 with a live PDF preview.
              Get it right the first time — or correct a prior filing.
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
