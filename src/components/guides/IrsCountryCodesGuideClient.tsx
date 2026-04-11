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
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
      />
    </svg>
  );
}

const COUNTRY_CODES = [
  { country: "Nigeria", irs: "NI", iso: "NG", note: "Very common mistake" },
  { country: "United Kingdom", irs: "UK", iso: "GB", note: "ISO uses GB" },
  { country: "South Korea", irs: "KS", iso: "KR", note: "Different code" },
  { country: "Taiwan", irs: "TW", iso: "TW", note: "Same" },
  { country: "China", irs: "CH", iso: "CN", note: "Different!" },
  { country: "Germany", irs: "GM", iso: "DE", note: "Very different" },
  { country: "Japan", irs: "JA", iso: "JP", note: "Different" },
  { country: "India", irs: "IN", iso: "IN", note: "Same" },
  { country: "Brazil", irs: "BR", iso: "BR", note: "Same" },
  { country: "Mexico", irs: "MX", iso: "MX", note: "Same" },
  { country: "France", irs: "FR", iso: "FR", note: "Same" },
  { country: "Canada", irs: "CA", iso: "CA", note: "Same" },
  { country: "Australia", irs: "AS", iso: "AU", note: "Different!" },
  { country: "United Arab Emirates", irs: "AE", iso: "AE", note: "Same" },
  { country: "Philippines", irs: "RP", iso: "PH", note: "Very different" },
  { country: "Singapore", irs: "SN", iso: "SG", note: "Different" },
  { country: "Vietnam", irs: "VM", iso: "VN", note: "Different" },
  { country: "Thailand", irs: "TH", iso: "TH", note: "Same" },
  { country: "Indonesia", irs: "ID", iso: "ID", note: "Same" },
  { country: "Hong Kong", irs: "HK", iso: "HK", note: "Same" },
];

export function IrsCountryCodesGuideClient() {
  const TOC = [
    { id: "why-this-matters", label: "Why This Matters" },
    { id: "where-needed", label: "Where Country Codes Are Needed" },
    { id: "common-mismatches", label: "Common Mismatches" },
    { id: "how-to-look-up", label: "How to Look Up Your Code" },
    { id: "tips", label: "Tips for Getting It Right" },
    { id: "wrong-code", label: "What Happens If You Use the Wrong Code" },
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
            <span className="text-gray-600">IRS Country Codes</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Reference Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              IRS Country Codes for Form 5472
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              The IRS uses its own country code system that differs from the ISO standard.
              Using the wrong code on your tax forms can cause processing delays or rejection.
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
                IRS country codes are NOT the same as ISO 3166 two-letter codes
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Many common countries have completely different IRS vs ISO codes
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Always verify your code against the official IRS list before filing
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                ForeignLLCTax.com automatically uses the correct IRS codes in your filing
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

          {/* Why This Matters */}
          <section id="why-this-matters" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why This Matters
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Most people assume that the two-letter country codes used on IRS tax forms are
              the same ISO 3166 codes used everywhere else on the internet. They are not.
              The IRS maintains its own country code list, and many codes differ from the
              international standard.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              For example, if you are a Nigerian citizen filing Form 5472, you might
              instinctively enter &quot;NG&quot; as your country code — that is the ISO code
              for Nigeria. But the IRS uses &quot;NI&quot; for Nigeria. Enter the wrong code,
              and the IRS may not be able to match your filing to their records, causing
              processing delays or a notice requesting clarification.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-amber-800">
                <strong>Real-world impact:</strong> We regularly see filers who used ISO codes
                instead of IRS codes on their Form 5472. While it typically does not trigger a
                $25,000 penalty on its own, it can cause the IRS to flag your return for manual
                review — adding weeks or months to processing time.
              </p>
            </div>
          </section>

          {/* Where Country Codes Are Needed */}
          <section id="where-needed" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Where Country Codes Are Needed
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Country codes appear in multiple places across Form 5472 and related IRS filings.
              Here is where you need to get them right:
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Form 5472 — Part I (Reporting Corporation)</h3>
                <ul className="text-sm text-gray-600 space-y-1 ml-2">
                  <li className="flex items-start gap-2"><CheckIcon /> Line 1l — Country of incorporation</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Line 1n — Country under whose laws you file an income tax return</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Line 1o — Country under whose laws you file a second income tax return</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Form 5472 — Part II (25% Foreign Shareholder)</h3>
                <ul className="text-sm text-gray-600 space-y-1 ml-2">
                  <li className="flex items-start gap-2"><CheckIcon /> Country of citizenship or incorporation</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Country where business is conducted</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Form 5472 — Part III (Related Party)</h3>
                <ul className="text-sm text-gray-600 space-y-1 ml-2">
                  <li className="flex items-start gap-2"><CheckIcon /> Country of citizenship or incorporation of the related party</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Country where business is conducted</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Other IRS Forms</h3>
                <ul className="text-sm text-gray-600 space-y-1 ml-2">
                  <li className="flex items-start gap-2"><CheckIcon /> Form 1120 — Schedule K and other international sections</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Form 1120-F — Foreign corporation income tax return</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Form W-7 — ITIN application (country of birth, citizenship)</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Form 1040-NR — Nonresident alien income tax return</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Common Mismatches */}
          <section id="common-mismatches" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Common Mismatches: IRS Codes vs ISO Codes
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The table below shows 20 countries frequently seen on foreign-owned LLC filings.
              Pay close attention to countries where the IRS code differs from the ISO code —
              these are the ones that trip people up.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Country</th>
                    <th className="text-left py-3 px-3 font-semibold text-blue-700 bg-blue-50/50">IRS Code</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">ISO Code</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Watch Out</th>
                  </tr>
                </thead>
                <tbody>
                  {COUNTRY_CODES.map((row) => {
                    const isDifferent = row.irs !== row.iso;
                    return (
                      <tr
                        key={row.country}
                        className={`border-b border-gray-100 ${isDifferent ? "bg-amber-50/40" : ""}`}
                      >
                        <td className="py-3 px-3 font-medium text-gray-800">{row.country}</td>
                        <td className="py-3 px-3 text-blue-700 bg-blue-50/50 font-mono font-bold">
                          {row.irs}
                        </td>
                        <td className="py-3 px-3 text-gray-600 font-mono">{row.iso}</td>
                        <td className="py-3 px-3">
                          {isDifferent ? (
                            <span className="inline-flex items-center gap-1 text-amber-700 font-medium text-xs">
                              <WarningIcon />
                              {row.note}
                            </span>
                          ) : (
                            <span className="text-green-600 text-xs font-medium">{row.note}</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-red-800">
                <strong>Important:</strong> This table covers only the most common countries
                for foreign-owned LLC filers. The full IRS country code list contains over
                250 entries. Always double-check your specific country against the official
                IRS list before filing.
              </p>
            </div>
          </section>

          {/* How to Look Up Your Code */}
          <section id="how-to-look-up" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How to Look Up Your Code
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              There are several reliable ways to find the correct IRS country code for your
              nationality or country of incorporation:
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">1. Form 5472 Instructions</h3>
                <p className="text-sm text-gray-600">
                  The official instructions for Form 5472 include the complete country code
                  list. Search for &quot;country codes&quot; within the instructions PDF
                  available on IRS.gov.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">2. IRS Publication 515</h3>
                <p className="text-sm text-gray-600">
                  Publication 515 (Withholding of Tax on Nonresident Aliens and Foreign Entities)
                  contains the full list of IRS country codes in its appendix. This is the
                  most comprehensive reference.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">3. Search IRS.gov</h3>
                <p className="text-sm text-gray-600">
                  Go to irs.gov and search for &quot;country codes for tax forms&quot; to find
                  the latest published list. The IRS occasionally updates codes when countries
                  change names or boundaries.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-1">4. Use ForeignLLCTax.com</h3>
                <p className="text-sm text-blue-800">
                  Our guided filer has the correct IRS country codes built in. When you select
                  your country from the dropdown, we automatically use the right IRS code on
                  your Form 5472 — no manual lookup needed.
                </p>
              </div>
            </div>
          </section>

          {/* Tips for Getting It Right */}
          <section id="tips" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Tips for Getting It Right
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Follow these guidelines to avoid country code errors on your IRS filings:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Always verify against the IRS list",
                  desc: "Never assume that ISO codes will work on IRS forms. Even if a code looks right, check it against the official IRS country code list. Many seemingly obvious codes are wrong.",
                },
                {
                  title: "Know which fields require country codes",
                  desc: "On Form 5472, the key fields are: country of incorporation (line 1L), country under whose laws you file (lines 1N, 1O), country of citizenship (Part II), and country where business is conducted. Each one needs the correct IRS code.",
                },
                {
                  title: "Use the same code consistently",
                  desc: "If you reference the same country in multiple places on your filing (for example, your country of citizenship and the country where your LLC conducts business), use the identical IRS code in every field. Inconsistency raises flags.",
                },
                {
                  title: "Remember that US = \"US\" on all IRS forms",
                  desc: "If your LLC is incorporated in the United States (which it should be if you have a foreign-owned US LLC), the country of incorporation is always \"US.\" This one happens to match the ISO code.",
                },
                {
                  title: "Watch for country name changes",
                  desc: "The IRS occasionally updates codes when countries change their official names. If you are filing for a country that has undergone a recent name change, check whether the IRS has issued an updated code.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What Happens If You Use the Wrong Code */}
          <section id="wrong-code" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What Happens If You Use the Wrong Code
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Using an incorrect country code on Form 5472 or other IRS forms generally will
              not trigger a standalone penalty. However, it can create a chain of issues that
              are better to avoid entirely:
            </p>
            <div className="space-y-3">
              {[
                {
                  title: "Processing delays",
                  desc: "The IRS uses country codes to route and categorize filings. An unrecognized or incorrect code may cause your return to be set aside for manual review rather than processed automatically.",
                },
                {
                  title: "IRS notice requesting clarification",
                  desc: "You may receive a letter from the IRS asking you to confirm or correct the country information on your filing. While not a penalty notice, this creates extra correspondence and delays.",
                },
                {
                  title: "Record-matching problems",
                  desc: "The IRS cross-references your filings with other records. If the country code on your Form 5472 does not match the country code on your EIN application or W-7, it can cause matching failures that trigger additional scrutiny.",
                },
                {
                  title: "Complications with future filings",
                  desc: "If your first filing uses an incorrect code and subsequent filings use the correct one, the inconsistency may raise questions. It is better to get it right from the start.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>Bottom line:</strong> An incorrect country code alone is unlikely to
                result in a $25,000 penalty. But combined with other errors, it contributes
                to an overall impression of a carelessly prepared filing. Getting the small
                details right signals to the IRS that your return was prepared with care.
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Next Steps
            </h2>
            <div className="space-y-2">
              {[
                { text: "Start your Form 5472 filing ($49)", href: "/filer" },
                { text: "Learn about common Form 5472 mistakes", href: "/guides/form-5472-common-mistakes" },
                { text: "How to submit Form 5472 to the IRS", href: "/guides/how-to-submit-form-5472" },
                { text: "Read the April filing season playbook", href: "/guides/filing-season-playbook" },
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
