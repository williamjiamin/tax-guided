"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

const MISTAKES = [
  {
    number: 1,
    title: "Using the Wrong Tax Year",
    description:
      "Form 5472 must match the tax year of the associated Form 1120. For most foreign-owned LLCs, this is the calendar year (January 1 through December 31). A common error is entering the year you are filing in rather than the year the return covers.",
    fix:
      "If you are filing in April 2026, your tax year is January 1, 2025 through December 31, 2025. Double-check that the tax year on Form 5472 Part I matches the tax year on Form 1120 page 1.",
  },
  {
    number: 2,
    title: "Missing or Incorrect Part IV Transaction Amounts",
    description:
      "Part IV of Form 5472 reports monetary transactions between the LLC and its foreign owner. Many filers leave this section blank or enter incorrect amounts. The IRS considers a blank Part IV on a return that should have transactions as an incomplete filing.",
    fix:
      "Report every dollar that moved between you and your LLC — capital contributions, loans, management fees, distributions, and expense reimbursements. Even if no money changed hands, report zero in the applicable lines rather than leaving them blank.",
  },
  {
    number: 3,
    title: "Inconsistent Entity Information Between Form 1120 and Form 5472",
    description:
      "The reporting corporation information on Form 5472 (Part I) must exactly match the corporation details on Form 1120. Mismatches in name, EIN, address, or tax year can cause the IRS to reject the filing or send a penalty notice.",
    fix:
      "Use the exact same LLC name (as registered with the IRS), EIN, and address on both forms. Copy the information directly rather than typing it from memory. Our filer auto-populates both forms from the same data to prevent this error.",
  },
  {
    number: 4,
    title: "Filing Late (Missing the April 15 Deadline)",
    description:
      "Form 5472 is due on April 15 for calendar-year filers (or the 15th day of the 4th month after the fiscal year ends). The penalty for late filing is $25,000 per form, and this penalty is assessed automatically by IRS computers.",
    fix:
      "Mark April 15 on your calendar and file at least 2 weeks early. If you cannot file on time, file Form 7004 to request an automatic 6-month extension (to October 15). The extension is for the Form 1120, which automatically extends the attached Form 5472.",
  },
  {
    number: 5,
    title: "Wrong Address Format for Foreign Owners",
    description:
      "Part II of Form 5472 requires the 25% foreign owner's address. Many filers try to force their foreign address into US address formatting. The IRS has specific fields for foreign addresses, including a country code field.",
    fix:
      "Use the foreign address fields (lines 1c through 1f in Part II). Enter the two-letter country code per the IRS country code list — for example, UK for the United Kingdom, JA for Japan, CH for China. Do not use ISO country codes, which differ from IRS codes in some cases.",
  },
  {
    number: 6,
    title: "Missing or Wrong Reference ID Number",
    description:
      "Part II, Line 1b asks for a reference ID number for the related party. This is not an EIN or tax ID — it is a number you assign to identify each related party across filings. Some filers leave this blank, others change it year to year.",
    fix:
      "Assign a simple, consistent reference ID for each related party (e.g., \"OWNER-001\") and use the same ID every year. The IRS uses this to track related-party reporting across multiple filings. Once assigned, do not change it.",
  },
  {
    number: 7,
    title: "Forgetting to Sign the Form 1120",
    description:
      "Form 5472 is attached to Form 1120, and Form 1120 requires a signature. An unsigned return is treated as if it was never filed. For a foreign-owned single-member LLC, the foreign owner (or an authorized representative) must sign.",
    fix:
      "Sign the Form 1120 on the Signature line at the bottom of page 1. If you are the sole foreign owner, you sign as the authorized officer. Print your name, title (e.g., \"Owner\" or \"Managing Member\"), and date. If using a paid preparer, they must also sign.",
  },
  {
    number: 8,
    title: "Not Reporting Zero-Dollar Transactions",
    description:
      "Some filers believe that if their LLC had no financial activity during the year, they do not need to file Form 5472. This is incorrect. If the LLC exists and has a foreign owner, Form 5472 must be filed even with zero transactions.",
    fix:
      "File Form 5472 with zeros in all transaction fields in Part IV. Attach it to a pro-forma Form 1120 (with zeros). The filing obligation exists as long as the LLC is a legal entity — it ends only when you formally dissolve the LLC.",
  },
  {
    number: 9,
    title: "Using Wrong Country Codes",
    description:
      "The IRS uses its own country code system, which differs from the standard ISO 3166 codes. For example, the IRS code for South Korea is KS (not KR), Australia is AS (not AU), and Germany is GM (not DE). Using ISO codes can cause processing errors.",
    fix:
      "Always reference the IRS country code list in the Form 5472 instructions. Our filer has the correct IRS country codes built in and will automatically use the right code for your country.",
  },
  {
    number: 10,
    title: "Not Filing When the LLC Had No Activity",
    description:
      "This is related to mistake #8 but deserves emphasis: many LLC owners who form their entity mid-year or who pause operations assume they can skip the filing for inactive years. The IRS disagrees — the filing requirement begins the day the LLC is formed and continues until it is formally dissolved.",
    fix:
      "File every year from the year your LLC was formed through the year you dissolve it. If your LLC was formed on November 15 and had no activity, you still file a Form 5472 for the short tax year (November 15 through December 31). If you have missed prior years, file the late returns as soon as possible — voluntary disclosure can help reduce penalties.",
  },
];

export function Form5472MistakesGuideClient() {
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
            <span className="text-gray-600">Form 5472 Mistakes</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-100/80 text-red-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Filing Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              10 Common Mistakes on Form 5472
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Each of these errors can trigger a $25,000 penalty. Here is how to avoid every one
              of them.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-red-900 uppercase tracking-wide mb-3">
              Why This Matters
            </h2>
            <ul className="space-y-2 text-sm text-red-900">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                The penalty for an incomplete or incorrect Form 5472 is $25,000 per form
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Penalties are assessed automatically by IRS computers — no human review first
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                An additional $25,000 penalty applies for each 30-day period the failure continues (up to $25,000 per period)
              </li>
            </ul>
          </div>

          {/* Table of Contents */}
          <nav className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
              The 10 Mistakes
            </h2>
            <ol className="space-y-1.5">
              {MISTAKES.map((m) => (
                <li key={m.number}>
                  <a
                    href={`#mistake-${m.number}`}
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {m.number}. {m.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Mistakes */}
          {MISTAKES.map((m) => (
            <section
              key={m.number}
              id={`mistake-${m.number}`}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 bg-red-100 text-red-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {m.number}
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  {m.title}
                </h2>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                {m.description}
              </p>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-1">How to fix it</h3>
                <p className="text-sm text-green-800 leading-relaxed">
                  {m.fix}
                </p>
              </div>
            </section>
          ))}

          {/* CTA */}
          <section className="bg-blue-50 border border-blue-200 rounded-2xl p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Avoid All 10 Mistakes Automatically
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Our Form 5472 filer has built-in validation that catches every mistake on this list
              before you generate your filing. The guided step-by-step process ensures you never
              leave a required field blank or use an incorrect format.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/filer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Your Filing
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/guides/form-5472-amendment"
                className="inline-flex items-center gap-2 text-blue-600 border border-blue-300 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-50 transition-colors"
              >
                Already filed with errors? Read our amendment guide
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
