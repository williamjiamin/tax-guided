"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function FbarGuideClient() {
  const TOC = [
    { id: "what-is-fbar", label: "What Is FBAR (FinCEN 114)?" },
    { id: "who-must-file", label: "Who Must File?" },
    { id: "fbar-and-foreign-llcs", label: "FBAR and Foreign-Owned LLCs" },
    { id: "fbar-vs-fatca", label: "FBAR vs. FATCA (Form 8938)" },
    { id: "filing-deadline", label: "Filing Deadline" },
    { id: "how-to-file", label: "How to File" },
    { id: "penalties", label: "Penalties" },
    { id: "common-misconceptions", label: "Common Misconceptions" },
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
            <span className="text-gray-600">FBAR Guide</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Reporting Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              FBAR Guide for Foreign LLC Owners
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Understand the Report of Foreign Bank and Financial Accounts (FBAR) — who must file,
              how it relates to your LLC, and how to avoid severe penalties.
            </p>
          </div>

          {/* Key Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-3">Key Facts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Form", value: "FinCEN 114 (FBAR)" },
                { label: "Threshold", value: "$10,000 aggregate at any time" },
                { label: "Deadline", value: "April 15 (auto-extension to Oct 15)" },
                { label: "Filing System", value: "BSA E-Filing (online only)" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-2">
                  <span className="text-xs font-semibold text-blue-700 w-28 flex-shrink-0">{item.label}:</span>
                  <span className="text-sm text-blue-800">{item.value}</span>
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

          {/* What Is FBAR? */}
          <section id="what-is-fbar" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What Is FBAR (FinCEN 114)?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The Report of Foreign Bank and Financial Accounts (FBAR), officially known as FinCEN
              Form 114, is a report filed with the Financial Crimes Enforcement Network (FinCEN).
              It requires U.S. persons to disclose their financial interest in, or signature authority
              over, foreign financial accounts if the aggregate value exceeds $10,000 at any time
              during the calendar year.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The FBAR is not a tax form — it is filed separately from your tax return. It is a
              reporting requirement under the Bank Secrecy Act (BSA) and is used to detect and
              prevent financial crimes such as money laundering and tax evasion.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Foreign financial accounts include bank accounts, securities accounts, mutual funds,
              and other types of financial accounts maintained with a foreign financial institution.
            </p>
          </section>

          {/* Who Must File? */}
          <section id="who-must-file" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Who Must File an FBAR?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              A <strong>United States person</strong> must file an FBAR if they have a financial
              interest in, or signature authority over, one or more foreign financial accounts with
              an aggregate value exceeding $10,000 at any time during the calendar year.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              &quot;United States person&quot; includes:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-4">
              <li>U.S. citizens (including those living abroad)</li>
              <li>U.S. residents (green card holders and those meeting the substantial presence test)</li>
              <li>Domestic entities — corporations, partnerships, LLCs, trusts, and estates formed in the U.S.</li>
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Important distinction:</strong> The $10,000 threshold is based on
                the <em>aggregate</em> value of <em>all</em> foreign accounts combined — not per
                account. If you have three accounts holding $4,000 each, the total ($12,000) exceeds
                the threshold and you must file.
              </p>
            </div>
          </section>

          {/* FBAR and Foreign-Owned LLCs */}
          <section id="fbar-and-foreign-llcs" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              FBAR and Foreign-Owned LLCs
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              This is where FBAR rules get nuanced for foreign LLC owners. There are two separate
              angles to consider:
            </p>

            <div className="space-y-4 mb-4">
              <div className="bg-blue-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">
                  Your U.S. LLC&apos;s Bank Account
                </h3>
                <p className="text-sm text-blue-800">
                  Your LLC likely has a U.S. bank account (e.g., Mercury, Relay, Wise). Since this is
                  a <em>U.S.</em> account, it is <strong>not</strong> a foreign account from the LLC&apos;s
                  perspective and does not need to be reported on an FBAR by the LLC itself.
                </p>
              </div>

              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">
                  The Foreign Owner&apos;s Obligations
                </h3>
                <p className="text-sm text-green-800">
                  As a foreign person (non-U.S. resident), you are generally <strong>not</strong> a
                  &quot;United States person&quot; for FBAR purposes, so you typically do not have a
                  personal FBAR filing requirement. However, if you become a U.S. tax resident (through
                  the substantial presence test or green card), FBAR obligations may apply to your
                  personal foreign accounts.
                </p>
              </div>

              <div className="bg-amber-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-amber-900 mb-2">
                  The LLC as a U.S. Entity
                </h3>
                <p className="text-sm text-amber-800">
                  Your LLC is a domestic entity and is technically a &quot;United States person.&quot;
                  If the LLC itself holds any foreign financial accounts (e.g., a business account in
                  your home country) with an aggregate value over $10,000, the LLC must file an FBAR.
                  This is uncommon for most foreign-owned single-member LLCs, but it&apos;s important
                  to be aware of.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
              <p className="text-sm text-gray-700">
                <strong>Bottom line:</strong> Most foreign-owned single-member LLCs with only a U.S.
                bank account do not have an FBAR filing requirement. But always check your specific
                situation — especially if your LLC holds accounts outside the U.S. or if you have
                U.S. tax residency.
              </p>
            </div>
          </section>

          {/* FBAR vs. FATCA */}
          <section id="fbar-vs-fatca" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              FBAR vs. FATCA (Form 8938)
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              FBAR and FATCA (Foreign Account Tax Compliance Act / Form 8938) are separate requirements
              that sometimes overlap. Here&apos;s how they differ:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">Feature</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">FBAR (FinCEN 114)</th>
                    <th className="text-left p-3 font-semibold text-gray-900 border-b">FATCA (Form 8938)</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b">
                    <td className="p-3 font-medium">Filed with</td>
                    <td className="p-3">FinCEN (Treasury)</td>
                    <td className="p-3">IRS (with tax return)</td>
                  </tr>
                  <tr className="border-b bg-gray-50/50">
                    <td className="p-3 font-medium">Threshold</td>
                    <td className="p-3">$10,000 aggregate</td>
                    <td className="p-3">$50,000-$200,000 (varies)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium">Who files</td>
                    <td className="p-3">U.S. persons</td>
                    <td className="p-3">U.S. persons with tax obligations</td>
                  </tr>
                  <tr className="border-b bg-gray-50/50">
                    <td className="p-3 font-medium">Filing method</td>
                    <td className="p-3">BSA E-Filing (online)</td>
                    <td className="p-3">Attached to tax return</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Covers</td>
                    <td className="p-3">Foreign bank/financial accounts</td>
                    <td className="p-3">Broader — includes foreign assets</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              If both thresholds are met, you may need to file both FBAR and Form 8938. They are not
              substitutes for each other.
            </p>
          </section>

          {/* Filing Deadline */}
          <section id="filing-deadline" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Filing Deadline
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The FBAR is due on <strong>April 15</strong> of the year following the calendar year
              being reported. If you miss the April 15 deadline, FinCEN provides an automatic
              extension to <strong>October 15</strong> — no extension request is needed.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              For example, the FBAR for the 2025 calendar year is due April 15, 2026, with an
              automatic extension to October 15, 2026.
            </p>
          </section>

          {/* How to File */}
          <section id="how-to-file" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How to File an FBAR
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              FBARs must be filed electronically through the BSA E-Filing system. Paper filing is not
              accepted.
            </p>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2 ml-2 mb-4">
              <li>
                Go to the{" "}
                <a
                  href="https://bsaefiling.fincen.treas.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  BSA E-Filing System
                </a>
              </li>
              <li>Select &quot;File FBAR&quot; and create an account (or log in)</li>
              <li>Complete the form with your information and account details</li>
              <li>For each foreign account, provide: institution name, account number, account type, maximum value during the year, and country</li>
              <li>Submit electronically and save the confirmation</li>
            </ol>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Tip:</strong> You&apos;ll need the maximum value of each account during the
                year, not the year-end balance. Check monthly statements to determine the highest
                balance.
              </p>
            </div>
          </section>

          {/* Penalties */}
          <section id="penalties" className="bg-red-50 rounded-2xl border border-red-200 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-red-900 mb-3">
              Penalties for Non-Compliance
            </h2>
            <p className="text-sm text-red-800 leading-relaxed mb-3">
              FBAR penalties are among the harshest in U.S. tax law:
            </p>
            <div className="space-y-3">
              <div className="bg-white/60 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-900 mb-1">Non-Willful Violation</h3>
                <p className="text-sm text-red-800">
                  Up to $10,000 per account, per year. This applies when the failure was not
                  intentional — e.g., you didn&apos;t know about the requirement.
                </p>
              </div>
              <div className="bg-white/60 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-900 mb-1">Willful Violation</h3>
                <p className="text-sm text-red-800">
                  The greater of $100,000 or 50% of the account balance at the time of the violation,
                  per account, per year. Criminal penalties may also apply, including fines up to
                  $500,000 and imprisonment up to 10 years.
                </p>
              </div>
            </div>
            <p className="text-sm text-red-800 leading-relaxed mt-3">
              Reasonable cause may help reduce or eliminate non-willful penalties. If you discover
              a failure to file, consult a tax professional about voluntary disclosure options.
            </p>
          </section>

          {/* Common Misconceptions */}
          <section id="common-misconceptions" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Common Misconceptions for Foreign LLC Owners
            </h2>
            <div className="space-y-4">
              {[
                {
                  myth: "My LLC has a U.S. bank account, so I need to file an FBAR.",
                  reality: "A U.S. bank account is not a foreign account. Your LLC only needs to file an FBAR if it holds accounts outside the U.S.",
                },
                {
                  myth: "As a foreign owner, I need to file an FBAR for my personal foreign accounts.",
                  reality: "If you are not a U.S. person (not a citizen, green card holder, or tax resident), you generally do not have a personal FBAR requirement.",
                },
                {
                  myth: "FBAR replaces Form 5472.",
                  reality: "They are completely separate requirements. FBAR is a FinCEN report about foreign accounts. Form 5472 is an IRS form about related-party transactions. Neither replaces the other.",
                },
                {
                  myth: "I don't owe taxes, so I don't need to file an FBAR.",
                  reality: "FBAR is a reporting requirement, not a tax. It applies regardless of whether you owe any U.S. taxes.",
                },
                {
                  myth: "Small accounts don't count.",
                  reality: "Every foreign account counts toward the $10,000 aggregate threshold, regardless of individual account size.",
                },
              ].map((item) => (
                <div key={item.myth} className="border border-gray-200 rounded-xl p-4">
                  <p className="text-sm text-red-600 font-semibold mb-1">
                    Myth: &quot;{item.myth}&quot;
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong className="text-green-700">Reality:</strong> {item.reality}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Next Steps
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/filer"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">File Form 5472</h3>
                <p className="text-xs text-gray-500 mt-1">File your annual IRS Form 5472 + pro forma 1120 for $49.</p>
              </Link>
              <Link
                href="/tools/compliance-checklist"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">Compliance Checklist</h3>
                <p className="text-xs text-gray-500 mt-1">Review all your U.S. LLC filing requirements in one place.</p>
              </Link>
              <Link
                href="/guides/boi-report"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">BOI Report Guide</h3>
                <p className="text-xs text-gray-500 mt-1">Another FinCEN requirement — learn about BOI reporting.</p>
              </Link>
              <Link
                href="/tools/deadline-reminder"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">Deadline Reminder</h3>
                <p className="text-xs text-gray-500 mt-1">Never miss a filing deadline — set up reminders.</p>
              </Link>
            </div>
          </section>

          {/* doola CTA */}
          <div className="bg-white rounded-2xl border-2 border-indigo-600 shadow-lg p-6 md:p-8 mb-6 relative">
            <div className="absolute -top-3 left-5 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Recommended
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Stay Compliant with doola Bookkeeping
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Proper bookkeeping makes all your filing obligations simpler — from Form 5472 to
              FBAR. doola provides dedicated bookkeeping, tax filing, and compliance management
              for foreign-owned LLCs.
            </p>
            <a
              href="https://partnersps.doola.com/foreignllctax"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-sm"
            >
              Explore doola Bookkeeping
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          {/* Final CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              File Your Form 5472 Online
            </h2>
            <p className="text-sm text-blue-100 mb-6 max-w-lg mx-auto">
              FBAR is separate from your IRS obligations. Make sure your Form 5472 is filed on time
              to avoid the $25,000 penalty.
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
