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

function WarningIcon() {
  return (
    <svg
      className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex-shrink-0">
      {n}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  );
}

export function Combined1040Nr5472GuideClient() {
  const TOC = [
    { id: "when-both", label: "When You Need Both Forms" },
    { id: "two-packages", label: "The Two Filing Packages Explained" },
    { id: "income-flow", label: "How Income Flows Between the Forms" },
    { id: "filing-order", label: "Step-by-Step Filing Order" },
    { id: "common-mistakes", label: "Common Mistakes When Filing Both" },
    { id: "deadlines", label: "Deadlines" },
    { id: "what-we-handle", label: "What ForeignLLCTax.com Handles" },
    { id: "coming-soon", label: "Coming Soon: Full Combined Filing" },
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
            <span className="text-gray-600">1040-NR + 5472 Combined</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Advanced Filing Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Filing Form 1040-NR and Form 5472 Together
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              If your foreign-owned disregarded LLC is engaged in a US trade or business,
              you owe the IRS two separate filing packages. This guide explains how they
              relate, where the numbers go, and how to avoid the most expensive mistakes.
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
                Form 1040-NR and Form 5472 + 1120 are filed as two separate packages to different IRS addresses
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                The same LLC income appears on both filings but in different places and for different purposes
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Each package has its own deadline, its own mailing address, and its own ID requirements
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                ForeignLLCTax.com currently handles Form 5472 + 1120 ($49) with 1040-NR support coming soon
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

          {/* ============================================================ */}
          {/* Section 1 — When You Need Both Forms                         */}
          {/* ============================================================ */}
          <section id="when-both" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              When You Need Both Forms
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              If you are a nonresident alien who owns a single-member LLC (a disregarded
              entity) that is engaged in a US trade or business, the IRS requires you to
              file two completely separate packages every year:
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <h3 className="text-sm font-semibold text-blue-900 mb-1">
                  (A) Form 1040-NR — Your Personal Nonresident Tax Return
                </h3>
                <p className="text-sm text-blue-800">
                  This reports your income, deductions, and tax liability as a nonresident
                  individual. Your LLC&apos;s profit or loss flows onto this return through
                  Schedule C because the LLC is disregarded for tax purposes.
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <h3 className="text-sm font-semibold text-blue-900 mb-1">
                  (B) Pro Forma Form 1120 + Form 5472 — The LLC Information Return
                </h3>
                <p className="text-sm text-blue-800">
                  This reports the LLC&apos;s transactions with its foreign owner and other
                  related parties. It is an information return, not a tax return — no tax
                  is calculated or owed on this filing.
                </p>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Critical distinction:</strong> These two packages are NOT filed
                together. They go to different IRS addresses, have different ID
                requirements, and can even have different deadlines. Attaching Form 5472 to
                your 1040-NR is one of the most common (and most costly) filing errors.
              </p>
            </div>
          </section>

          {/* ============================================================ */}
          {/* Section 2 — The Two Filing Packages Explained                 */}
          {/* ============================================================ */}
          <section id="two-packages" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              The Two Filing Packages Explained
            </h2>

            {/* Package 1 */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white text-sm font-bold">1</span>
                <h3 className="text-base font-semibold text-gray-900">Package 1: Form 1040-NR</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Form 1040-NR is the US income tax return for nonresident aliens. If your
                disregarded LLC earns effectively connected income (ECI), that income is
                taxed on this return as if you earned it directly.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Component</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { component: "Form 1040-NR (main form)", purpose: "Reports income, deductions, credits, and calculates tax owed" },
                      { component: "Schedule C (Profit or Loss)", purpose: "Reports LLC business revenue, expenses, and net profit/loss" },
                      { component: "Schedule OI (Other Information)", purpose: "Visa type, days in the US, tax treaty claims, and residency info" },
                      { component: "Form W-7 (if no ITIN/SSN)", purpose: "Application for Individual Taxpayer Identification Number" },
                      { component: "Payment (if tax owed)", purpose: "Check or money order payable to United States Treasury" },
                    ].map((row) => (
                      <tr key={row.component} className="border-b border-gray-100">
                        <td className="py-2 px-3 text-gray-800 font-medium">{row.component}</td>
                        <td className="py-2 px-3 text-gray-600">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="text-sm text-gray-700">
                  <strong>ID required:</strong> ITIN or SSN. If you do not have one, you must
                  apply using Form W-7 and attach it to your 1040-NR. The IRS will process
                  the W-7 first, assign your ITIN, then process the tax return.
                </p>
              </div>
            </div>

            {/* Package 2 */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600 text-white text-sm font-bold">2</span>
                <h3 className="text-base font-semibold text-gray-900">Package 2: Form 5472 + Pro Forma Form 1120</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                This is an information return that reports the LLC&apos;s reportable
                transactions with its foreign owner and other related parties. No tax is
                calculated. The pro forma Form 1120 is mostly zeros — it serves only as a
                cover sheet for the Form 5472.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Component</th>
                      <th className="text-left py-2 px-3 font-semibold text-gray-700">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { component: "Pro forma Form 1120 (cover sheet)", purpose: "Header info only — name, EIN, address, tax year. All financial lines are zero." },
                      { component: "Form 5472 Parts I-IV", purpose: "Identifies the reporting corporation (LLC) and the 25% foreign owner" },
                      { component: "Form 5472 Part V", purpose: "Lists all reportable transactions — capital contributions, distributions, service fees, rents, etc." },
                      { component: "Form 5472 Part VI", purpose: "Additional information if the LLC had related-party transactions beyond Part V categories" },
                    ].map((row) => (
                      <tr key={row.component} className="border-b border-gray-100">
                        <td className="py-2 px-3 text-gray-800 font-medium">{row.component}</td>
                        <td className="py-2 px-3 text-gray-600">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 mt-3">
                <p className="text-sm text-gray-700">
                  <strong>ID required:</strong> EIN (Employer Identification Number) for the LLC
                  plus a reference ID for each foreign owner. No ITIN or SSN is needed for this
                  package.
                </p>
              </div>
            </div>
          </section>

          {/* ============================================================ */}
          {/* Section 3 — How Income Flows Between the Forms                */}
          {/* ============================================================ */}
          <section id="income-flow" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How Income Flows Between the Forms
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Because the LLC is a disregarded entity, the same underlying business
              activity appears on both filings — but in different places and for different
              purposes. Understanding where each number lands is essential for consistency.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Item</th>
                    <th className="text-left py-3 px-3 font-semibold text-blue-700 bg-blue-50/50">On 1040-NR</th>
                    <th className="text-left py-3 px-3 font-semibold text-blue-700 bg-blue-50/30">On 5472 + 1120</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      item: "LLC gross revenue",
                      nr: "Schedule C, Line 1 (Gross receipts)",
                      f5472: "Form 5472, Part V (as reportable transaction)",
                    },
                    {
                      item: "LLC business expenses",
                      nr: "Schedule C, Lines 8-27 (Expenses)",
                      f5472: "Form 5472, Part V (as reportable transactions)",
                    },
                    {
                      item: "Net profit from LLC",
                      nr: "Schedule C, Line 31 \u2192 1040-NR, Line 12",
                      f5472: "Not reported separately (embedded in transactions)",
                    },
                    {
                      item: "Capital contributions to LLC",
                      nr: "Not reported on 1040-NR",
                      f5472: "Form 5472, Part V (capital contribution from foreign owner)",
                    },
                    {
                      item: "Distributions from LLC",
                      nr: "Not reported on 1040-NR",
                      f5472: "Form 5472, Part V (distribution to foreign owner)",
                    },
                    {
                      item: "Owner\u2019s personal deductions",
                      nr: "1040-NR itemized or standard deduction",
                      f5472: "Not reported on 5472",
                    },
                  ].map((row) => (
                    <tr key={row.item} className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium text-gray-800">{row.item}</td>
                      <td className="py-3 px-3 text-gray-600 bg-blue-50/50">{row.nr}</td>
                      <td className="py-3 px-3 text-gray-600 bg-blue-50/30">{row.f5472}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Why this matters:</strong> If you report $50,000 in gross revenue on
                Schedule C but only $30,000 on Form 5472, the IRS computers will flag the
                discrepancy. Both filings pull from the same underlying financial records —
                the numbers must be internally consistent.
              </p>
            </div>
          </section>

          {/* ============================================================ */}
          {/* Section 4 — Step-by-Step Filing Order                         */}
          {/* ============================================================ */}
          <section id="filing-order" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Step-by-Step Filing Order
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The order matters. Completing Schedule C first ensures your numbers are
              consistent across both filing packages. Follow this sequence:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <StepNumber n={1} />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Gather all LLC financial records for the year</h3>
                  <p className="text-sm text-gray-600">
                    Bank statements, invoices, expense receipts, contracts, and any records of
                    capital contributions or distributions between you and the LLC.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <StepNumber n={2} />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Complete Schedule C (business income and expenses)</h3>
                  <p className="text-sm text-gray-600">
                    Calculate gross revenue (Line 1), cost of goods sold if applicable,
                    and itemize all deductible business expenses on Lines 8 through 27.
                    Line 31 gives you the net profit or loss.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <StepNumber n={3} />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Complete Form 1040-NR using Schedule C results</h3>
                  <p className="text-sm text-gray-600">
                    Transfer your Schedule C net profit to Line 12 of Form 1040-NR. Fill in
                    Schedule OI with your visa type, days present in the US, country of
                    residence, and any tax treaty positions you are claiming.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <StepNumber n={4} />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Apply for ITIN via Form W-7 if you do not have one</h3>
                  <p className="text-sm text-gray-600">
                    Form 1040-NR requires an ITIN or SSN. If you do not have either, complete
                    Form W-7 and attach it to the front of your 1040-NR. Include certified
                    copies of your passport or other acceptable identification documents.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <StepNumber n={5} />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Complete Form 5472 Part V (reportable transactions)</h3>
                  <p className="text-sm text-gray-600">
                    Using the same financial records from Step 1, report all transactions
                    between the LLC and its foreign owner: capital contributions, distributions,
                    service payments, rents, management fees, and any other monetary
                    transactions that occurred during the tax year.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <StepNumber n={6} />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Complete the pro forma Form 1120 (mostly zeros)</h3>
                  <p className="text-sm text-gray-600">
                    Fill in the header information: LLC name, EIN, address, tax year, and
                    date of incorporation. All income and deduction lines are typically zero
                    for a disregarded entity. This form serves only as a cover sheet for the
                    Form 5472.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <StepNumber n={7} />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Mail Form 1040-NR to the IRS</h3>
                  <p className="text-sm text-gray-600">
                    If you are including Form W-7, mail to: IRS ITIN Operation, Austin, TX
                    78714-0085. Otherwise, mail to the address specified in the Form 1040-NR
                    instructions for your situation. Include payment if tax is owed.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <StepNumber n={8} />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Fax or mail Form 5472 + 1120 separately to Ogden, UT</h3>
                  <p className="text-sm text-gray-600">
                    Mail to: Department of the Treasury, Internal Revenue Service, Ogden, UT
                    84201-0042. Alternatively, you can fax the 5472 + 1120 package to the IRS
                    at the number listed in the form instructions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mt-4">
              <p className="text-sm text-gray-700">
                <strong>Pro tip:</strong> Prepare both packages at the same time even though
                they are mailed separately. This ensures your numbers are consistent and
                reduces the chance of a mismatch that triggers an IRS inquiry.
              </p>
            </div>
          </section>

          {/* ============================================================ */}
          {/* Section 5 — Common Mistakes When Filing Both                  */}
          {/* ============================================================ */}
          <section id="common-mistakes" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Common Mistakes When Filing Both
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              These are the errors we see most frequently from filers who need both
              packages. Each one can result in penalties, processing delays, or rejected
              returns.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: "Filing Form 5472 attached to Form 1040-NR",
                  desc: "This is the single most common mistake. Form 5472 must be attached to its own pro forma Form 1120 and filed separately. The IRS will reject a 5472 stapled to a 1040-NR, and you may face the $25,000 penalty for failure to file.",
                  severity: "high",
                },
                {
                  title: "Forgetting to report LLC income on Schedule C",
                  desc: "Because the LLC is disregarded, its income is YOUR income. If you file a 1040-NR without Schedule C but also file a 5472 showing transactions, the IRS sees an information return with no corresponding tax return reporting that income.",
                  severity: "high",
                },
                {
                  title: "Not applying for an ITIN",
                  desc: "Form 1040-NR requires an ITIN or SSN. Many foreign LLC owners have an EIN for their LLC but never applied for a personal ITIN. Without one, your 1040-NR cannot be processed. Apply using Form W-7 attached to your return.",
                  severity: "medium",
                },
                {
                  title: "Reporting income differently on the two forms",
                  desc: "If Schedule C shows $80,000 in revenue but Form 5472 Part V shows $60,000 in transactions, the IRS will notice the discrepancy. Both filings must reflect the same underlying financial reality.",
                  severity: "medium",
                },
                {
                  title: "Missing the April 15 deadline for Form 1040-NR",
                  desc: "Form 1040-NR and Form 5472 + 1120 can have different deadlines. Non-US residents may get an automatic 2-month extension to June 15 for the 1040-NR, but the 5472 + 1120 follows the corporate calendar year deadline of April 15. Filing one on time and missing the other is a common oversight.",
                  severity: "medium",
                },
                {
                  title: "Using the wrong mailing address for each package",
                  desc: "The 1040-NR goes to one IRS address (often Austin, TX if including W-7) while the 5472 + 1120 goes to Ogden, UT. Sending both packages to the same address will cause processing delays and potential penalty notices.",
                  severity: "low",
                },
                {
                  title: "Forgetting to sign both returns",
                  desc: "Each package needs its own signature. The 1040-NR is signed by you (the individual). The pro forma 1120 is signed by an authorized officer of the LLC — which is also you, but in your capacity as the LLC owner/manager.",
                  severity: "low",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-xl p-4 border ${
                    item.severity === "high"
                      ? "bg-red-50 border-red-200"
                      : item.severity === "medium"
                      ? "bg-amber-50 border-amber-200"
                      : "bg-gray-50 border-gray-200"
                  }`}
                >
                  <div className="flex items-start gap-2">
                    <WarningIcon />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ============================================================ */}
          {/* Section 6 — Deadlines                                         */}
          {/* ============================================================ */}
          <section id="deadlines" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Deadlines
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The two packages have different deadlines and different extension rules.
              Missing either one carries significant penalties.
            </p>

            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Filing</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Due Date</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Extension</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Late Penalty</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      filing: "Form 1040-NR",
                      due: "April 15 (June 15 for non-US residents)",
                      extension: "Form 4868 extends to October 15",
                      penalty: "Failure-to-file penalty: 5% of unpaid tax per month, up to 25%",
                    },
                    {
                      filing: "Form 5472 + 1120",
                      due: "April 15 (calendar year)",
                      extension: "Form 7004 extends by 6 months",
                      penalty: "$25,000 per form, per year for failure to file",
                    },
                  ].map((row) => (
                    <tr key={row.filing} className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium text-gray-800">{row.filing}</td>
                      <td className="py-3 px-3 text-gray-600">{row.due}</td>
                      <td className="py-3 px-3 text-gray-600">{row.extension}</td>
                      <td className="py-3 px-3 text-gray-600">{row.penalty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-3">
              <p className="text-sm text-blue-800">
                <strong>Best practice:</strong> Prepare both packages at the same time,
                ideally in February or March. Even if you qualify for the automatic June 15
                extension on Form 1040-NR, your Form 5472 + 1120 is still due April 15
                unless you file Form 7004.
              </p>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Extension does not mean extension of payment.</strong> If you owe
                tax on your 1040-NR, you must pay by April 15 even if you extend the filing
                deadline. Interest and late payment penalties accrue from April 15
                regardless of any extension.
              </p>
            </div>
          </section>

          {/* ============================================================ */}
          {/* Section 7 — What ForeignLLCTax.com Handles                    */}
          {/* ============================================================ */}
          <section id="what-we-handle" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What ForeignLLCTax.com Handles
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              We currently handle one of the two filing packages and are actively building
              support for the other.
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-xs font-semibold">Available Now</span>
                  <h3 className="text-sm font-semibold text-blue-900">Form 5472 + Pro Forma 1120 — $49</h3>
                </div>
                <p className="text-sm text-blue-800 leading-relaxed mb-3">
                  Our guided filer walks you through every field of Form 5472 and the pro
                  forma 1120. You see a live preview of the actual IRS forms as you fill
                  them out, and we generate IRS-ready PDFs you can fax or mail.
                </p>
                <ul className="space-y-1.5 text-sm text-blue-800">
                  <li className="flex items-start gap-2"><CheckIcon /> Step-by-step guided workflow with plain-English explanations</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Real-time WYSIWYG preview of actual IRS forms</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Built-in validation catches errors before you file</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Downloadable IRS-ready PDFs</li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-gray-400 text-white text-xs font-semibold">Coming Soon</span>
                  <h3 className="text-sm font-semibold text-gray-900">Form 1040-NR Filing</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  For the 1040-NR package, you currently need either a CPA or to file
                  manually. We are building a 1040-NR tool that will integrate directly with
                  our 5472 filer, ensuring your numbers are consistent across both packages.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <Link
                href="/filer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Your Form 5472 Filing
                <ArrowIcon />
              </Link>
            </div>
          </section>

          {/* ============================================================ */}
          {/* Section 8 — Coming Soon: Full Combined Filing                 */}
          {/* ============================================================ */}
          <section id="coming-soon" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Coming Soon: Full Combined Filing
            </h2>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 text-white px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-4">
                In Development
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                One Workflow. Both Packages. No Confusion.
              </h3>
              <p className="text-sm text-blue-100 max-w-lg mx-auto mb-6 leading-relaxed">
                We are building a combined 1040-NR + 5472 filing experience. Enter your
                information once, and we will generate both IRS packages with consistent
                numbers, correct addresses, and the right forms for each mailing. No more
                guessing which number goes where.
              </p>

              {/* Waitlist CTA (visual only) */}
              <div className="max-w-md mx-auto">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-1.5">
                  <div className="flex-1 bg-white rounded-lg px-4 py-2.5 text-left">
                    <span className="text-sm text-gray-400">Enter your email address</span>
                  </div>
                  <div className="bg-white text-blue-700 px-5 py-2.5 rounded-lg text-sm font-semibold cursor-default hover:bg-blue-50 transition-colors">
                    Notify Me
                  </div>
                </div>
                <p className="text-xs text-blue-200 mt-3">
                  Join the waitlist and be the first to know when combined filing launches.
                  No spam — one notification when it is ready.
                </p>
              </div>
            </div>
          </section>

          {/* ============================================================ */}
          {/* Related Links                                                 */}
          {/* ============================================================ */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Related Guides
            </h2>
            <div className="space-y-2">
              {[
                { text: "Start your Form 5472 filing ($49)", href: "/filer" },
                { text: "Form 1040-NR filing guide", href: "/guides/form-1040-nr" },
                { text: "Common Form 5472 mistakes to avoid", href: "/guides/form-5472-common-mistakes" },
                { text: "DIY tax filing vs hiring a CPA", href: "/guides/diy-vs-cpa" },
                { text: "How to submit Form 5472 to the IRS", href: "/guides/how-to-submit-form-5472" },
                { text: "Record-keeping requirements for Form 5472", href: "/guides/record-keeping-5472" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  <ArrowIcon />
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
