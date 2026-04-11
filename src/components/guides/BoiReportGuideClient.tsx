"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function BoiReportGuideClient() {
  const TOC = [
    { id: "what-is-boi", label: "What Is BOI Reporting?" },
    { id: "who-must-file", label: "Who Must File?" },
    { id: "what-info-needed", label: "What Information Is Needed?" },
    { id: "deadlines", label: "Filing Deadlines" },
    { id: "how-to-file", label: "How to File" },
    { id: "foreign-owned-llcs", label: "Special Rules for Foreign-Owned LLCs" },
    { id: "updates-corrections", label: "When Updates Are Needed" },
    { id: "penalties", label: "Penalties for Non-Compliance" },
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
            <span className="text-gray-600">BOI Report</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Compliance Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              BOI Report Guide for LLC Owners
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Everything you need to know about Beneficial Ownership Information reporting with FinCEN
              — who must file, what&apos;s required, and how to stay compliant.
            </p>
          </div>

          {/* Key Info Box */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-3">Key Facts</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { label: "Filing System", value: "FinCEN BOI E-Filing" },
                { label: "Who Files", value: "Most LLCs and corporations" },
                { label: "Cost", value: "Free (no filing fee)" },
                { label: "Penalty", value: "Up to $500/day for non-compliance" },
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

          {/* What Is BOI Reporting? */}
          <section id="what-is-boi" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What Is BOI Reporting?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Beneficial Ownership Information (BOI) reporting is a federal requirement under the
              Corporate Transparency Act (CTA). It requires most companies formed or registered to do
              business in the United States to report information about their beneficial owners to the
              Financial Crimes Enforcement Network (FinCEN).
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The purpose of BOI reporting is to combat money laundering, terrorist financing, and
              other illicit activity by increasing transparency about who actually owns and controls
              U.S. companies. This is separate from IRS tax filings — it&apos;s a FinCEN requirement.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              A &quot;beneficial owner&quot; is any individual who either exercises substantial control
              over the company or owns or controls at least 25% of the ownership interests.
            </p>
          </section>

          {/* Who Must File? */}
          <section id="who-must-file" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Who Must File a BOI Report?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Two types of companies are required to file BOI reports — known as
              &quot;reporting companies&quot;:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-4">
              <li><strong>Domestic reporting companies:</strong> LLCs, corporations, and similar entities created by filing a document with a state secretary of state or equivalent office.</li>
              <li><strong>Foreign reporting companies:</strong> Entities formed under foreign law that have registered to do business in the U.S. by filing with a state.</li>
            </ul>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
              <p className="text-sm text-red-800">
                <strong>Important for foreign LLC owners:</strong> If you formed an LLC in any U.S. state
                (Delaware, Wyoming, etc.), your LLC is a domestic reporting company and must file a BOI
                report — regardless of where you live.
              </p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              There are 23 types of exempt entities (large companies, banks, regulated entities, etc.),
              but the typical foreign-owned single-member LLC does <strong>not</strong> qualify for any
              exemption and must file.
            </p>
          </section>

          {/* What Information Is Needed? */}
          <section id="what-info-needed" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What Information Is Needed?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              You&apos;ll need to provide information about the company, its beneficial owners, and (for
              newly formed companies) the company applicants:
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Company Information</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>Full legal name (and any trade names / DBAs)</li>
                  <li>Current U.S. street address</li>
                  <li>State of formation or registration</li>
                  <li>Taxpayer ID number (EIN or SSN)</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Beneficial Owner Information</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>Full legal name</li>
                  <li>Date of birth</li>
                  <li>Current residential address</li>
                  <li>Identifying document number (passport or government-issued ID) and an image of that document</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Company Applicant Information (if applicable)</h3>
                <p className="text-sm text-gray-600 mb-1">
                  Required for companies created on or after January 1, 2024. Same info as beneficial owners.
                  The company applicant is the person who filed the formation document (often the registered agent).
                </p>
              </div>
            </div>

            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Tip:</strong> Foreign owners can use their passport as the identifying document.
                Make sure you have a clear scan or photo ready before starting the filing.
              </p>
            </div>
          </section>

          {/* Filing Deadlines */}
          <section id="deadlines" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Filing Deadlines
            </h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Companies created before January 1, 2024</h3>
                  <p className="text-sm text-gray-600">Must file their initial BOI report by January 1, 2025.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Companies created in 2024</h3>
                  <p className="text-sm text-gray-600">Must file within 90 calendar days of formation.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">Companies created on or after January 1, 2025</h3>
                  <p className="text-sm text-gray-600">Must file within 30 calendar days of formation.</p>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> Check{" "}
                <a
                  href="https://www.fincen.gov/boi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-900"
                >
                  FinCEN&apos;s BOI page
                </a>{" "}
                for the latest deadline information, as enforcement timelines have been subject to
                legal challenges and may change.
              </p>
            </div>
          </section>

          {/* How to File */}
          <section id="how-to-file" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How to File Your BOI Report
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              BOI reports are filed directly with FinCEN through their online system. There is no fee
              to file.
            </p>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2 ml-2 mb-4">
              <li>Go to the FinCEN BOI E-Filing system at{" "}
                <a
                  href="https://boiefiling.fincen.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  boiefiling.fincen.gov
                </a>
              </li>
              <li>Select &quot;File BOIR&quot; (Beneficial Ownership Information Report)</li>
              <li>Enter your company information (legal name, EIN, state of formation)</li>
              <li>Add beneficial owner details (name, DOB, address, ID document)</li>
              <li>Upload a clear image of the identifying document for each beneficial owner</li>
              <li>Review and submit the report</li>
              <li>Save the confirmation — you&apos;ll receive a transcript with a confirmation ID</li>
            </ol>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-800">
                <strong>Good news:</strong> The filing process is straightforward and typically takes
                15-20 minutes if you have all your documents ready.
              </p>
            </div>
          </section>

          {/* Special Rules for Foreign-Owned LLCs */}
          <section id="foreign-owned-llcs" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Special Rules for Foreign-Owned LLCs
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Foreign-owned LLCs have some unique considerations for BOI reporting:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 ml-2 mb-4">
              <li>
                <strong>You are a domestic reporting company:</strong> Even though you&apos;re a foreign
                person, your LLC was formed in a U.S. state, making it a domestic reporting company.
              </li>
              <li>
                <strong>Use your passport:</strong> Foreign owners without a U.S. driver&apos;s license
                can use their passport as the identifying document.
              </li>
              <li>
                <strong>Use your foreign address:</strong> Report your actual residential address abroad
                — you do not need a U.S. address for the beneficial owner section.
              </li>
              <li>
                <strong>Company applicant may be different:</strong> If a formation service filed your
                LLC, the company applicant is the person at that service who submitted the paperwork,
                not necessarily you.
              </li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Remember:</strong> BOI reporting is separate from your IRS obligations. You
                still need to file Form 5472 with the IRS annually.{" "}
                <Link href="/filer" className="underline hover:text-blue-900">
                  File your Form 5472 here.
                </Link>
              </p>
            </div>
          </section>

          {/* When Updates Are Needed */}
          <section id="updates-corrections" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              When Updates Are Needed
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              You must file an updated BOI report within 30 days if any of the following changes occur:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-4">
              <li>A beneficial owner&apos;s name, address, or ID document changes</li>
              <li>A new beneficial owner is added (e.g., you bring on a partner)</li>
              <li>A beneficial owner is removed</li>
              <li>The company&apos;s legal name, address, or jurisdiction changes</li>
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed">
              If you discover an error in a previously filed report, you must file a corrected report
              within 30 days of discovering the inaccuracy.
            </p>
          </section>

          {/* Penalties */}
          <section id="penalties" className="bg-red-50 rounded-2xl border border-red-200 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-red-900 mb-3">
              Penalties for Non-Compliance
            </h2>
            <p className="text-sm text-red-800 leading-relaxed mb-3">
              The penalties for failing to file BOI reports are severe:
            </p>
            <ul className="list-disc list-inside text-sm text-red-800 space-y-2 ml-2 mb-4">
              <li>
                <strong>Civil penalties:</strong> Up to $500 per day for each day the violation
                continues (previously $591 as adjusted for inflation).
              </li>
              <li>
                <strong>Criminal penalties:</strong> Up to $10,000 fine and/or up to 2 years
                imprisonment for willful violations.
              </li>
              <li>
                <strong>False information:</strong> Knowingly providing false or fraudulent information
                carries the same criminal penalties.
              </li>
            </ul>
            <p className="text-sm text-red-800 leading-relaxed">
              These penalties apply to any person who causes the failure to file or files false
              information — including the beneficial owners themselves.
            </p>
          </section>

          {/* Next Steps / Related */}
          <section id="next-steps" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Next Steps
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              BOI reporting is just one part of your LLC compliance obligations. Make sure you&apos;re
              also handling your IRS tax filings:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/filer"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">File Form 5472</h3>
                <p className="text-xs text-gray-500 mt-1">File your annual IRS Form 5472 + pro forma 1120 online for $49.</p>
              </Link>
              <Link
                href="/tools/compliance-checklist"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">Compliance Checklist</h3>
                <p className="text-xs text-gray-500 mt-1">Make sure you haven&apos;t missed any filing requirements.</p>
              </Link>
              <Link
                href="/tools/penalty-calculator"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">Penalty Calculator</h3>
                <p className="text-xs text-gray-500 mt-1">Estimate potential IRS penalties for late or missed filings.</p>
              </Link>
              <Link
                href="/filer/ss4"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">EIN Application (SS-4)</h3>
                <p className="text-xs text-gray-500 mt-1">Need an EIN for your BOI report? Apply here.</p>
              </Link>
            </div>
          </section>

          {/* CTA — doola compliance */}
          <div className="bg-white rounded-2xl border-2 border-indigo-600 shadow-lg p-6 md:p-8 mb-6 relative">
            <div className="absolute -top-3 left-5 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Recommended
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Let doola Handle Your Compliance
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              BOI reporting, Form 5472, bookkeeping, and state filings — doola&apos;s Business-in-a-Box
              covers all your LLC compliance needs so you can focus on your business.
            </p>
            <a
              href="https://partnersps.doola.com/foreignllctax"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors text-sm"
            >
              Get Started with doola
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
              BOI report done? Now file your IRS Form 5472 + pro forma 1120 in minutes.
              Guided step-by-step for foreign-owned LLCs.
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
