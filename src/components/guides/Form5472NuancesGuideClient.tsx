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

export function Form5472NuancesGuideClient() {
  const TOC = [
    { id: "part-iv-vs-part-v", label: "Part IV vs Part V -- Know the Difference" },
    { id: "25-percent-rule", label: "The 25% Ownership Rule Is Per-Person" },
    { id: "reference-id", label: "Reference ID Number Consistency" },
    { id: "no-efile", label: "No E-Filing, No Confirmation" },
    { id: "schedule-k-quirk", label: "Schedule K Software Quirk" },
    { id: "foreign-owned-usde", label: 'Write "Foreign-Owned US DE" on Top' },
    { id: "extension-filing", label: "Extension Filing (Form 7004)" },
    { id: "penalty", label: "The $25,000 Penalty Is Real" },
    { id: "first-year-date", label: "First-Year Filing Date" },
    { id: "multiple-5472s", label: "Multiple Forms 5472" },
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
            <span className="text-gray-600">Form 5472 Nuances</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Expert Tips
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Form 5472 Nuances & Filing Tips Most Guides Miss
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Beyond the basics: the subtle rules, common mistakes, and overlooked details
              that can mean the difference between a clean filing and a $25,000 penalty.
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
                Part IV and Part V serve different entity types -- using the wrong one is a common mistake
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                The 25% foreign ownership threshold is per-person, not aggregate
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Your reference ID number must stay consistent across all filing years
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Form 5472 cannot be e-filed -- you must fax or mail it with no IRS confirmation
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                The $25,000 penalty applies even if your LLC had zero income or transactions
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

          {/* Section 1: Part IV vs Part V */}
          <section id="part-iv-vs-part-v" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Part IV vs Part V -- Know the Difference
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              One of the most frequent mistakes on Form 5472 is filling out the wrong section.
              Parts IV and V look similar, but they apply to completely different entity types.
              Getting this wrong can trigger processing delays or penalty notices.
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">
                  Part IV (Lines 9-36): For Corporations
                </h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Part IV reports monetary transactions used in computing taxable income. This section
                  is for reporting corporation with a 25% foreign shareholder. If your entity is a
                  C-Corporation that files a regular Form 1120, you complete Part IV and report
                  transactions such as sales, rents, royalties, interest, and compensation paid to or
                  received from the related foreign person.
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">
                  Part V: For Disregarded Entities
                </h3>
                <p className="text-sm text-blue-800 leading-relaxed">
                  Part V reports reportable transactions of a foreign-owned US disregarded entity.
                  If you own a single-member LLC that is treated as a disregarded entity for tax
                  purposes, this is your section. You report capital contributions made by the
                  foreign owner, distributions received by the foreign owner, and other reportable
                  transactions such as loans, interest, and service fees between the LLC and its
                  foreign owner.
                </p>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <p className="text-sm text-amber-800">
                  <strong>Common mistake:</strong> If you are filing for a disregarded LLC, leave Part
                  IV completely blank and only complete Part V. If you are filing for a C-Corporation,
                  complete Part IV and leave Part V blank. Filling in both sections or using the
                  wrong one signals to the IRS that you may not understand your entity classification,
                  which can trigger additional scrutiny.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: 25% Ownership Rule */}
          <section id="25-percent-rule" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              The 25% Ownership Rule Is Per-Person
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Form 5472 is required when a single foreign person owns 25% or more of the
              voting power or value of a US corporation&apos;s stock. This is a per-person
              threshold, not an aggregate one. Many filers misunderstand this rule.
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  No Form 5472 required
                </h3>
                <p className="text-sm text-gray-600">
                  A US corporation has 50 unrelated foreign shareholders, each owning 2% of the
                  stock. Total foreign ownership is 100%, but no single person meets the 25%
                  threshold. No Form 5472 is required for any of these shareholders.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Form 5472 required
                </h3>
                <p className="text-sm text-gray-600">
                  A US corporation has two foreign shareholders: one owns 25% and the other owns
                  75%. Both meet the 25% threshold individually. A separate Form 5472 must be filed
                  for each shareholder who had reportable transactions with the corporation.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <CheckIcon />
                <p className="text-sm text-blue-800">
                  <strong>For single-member LLCs:</strong> If you are the sole foreign owner of a
                  disregarded entity, you own 100% -- well above the 25% threshold. Form 5472 is
                  always required for your LLC. The per-person rule matters more for multi-owner
                  corporations.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Reference ID Number */}
          <section id="reference-id" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Reference ID Number Consistency
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              If the foreign owner of the LLC does not have a US tax identification number
              (SSN or ITIN), you must provide a reference ID number on Form 5472. The IRS
              uses this number to track your filings year over year.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              You can create any alphanumeric reference ID you choose. There is no official
              format requirement. Common approaches include using your name and a number
              (e.g., &quot;JohnSmith123&quot;), a combination of initials and date of birth, or
              any other consistent identifier.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <p className="text-sm text-amber-800">
                  <strong>Critical rule:</strong> You must use the exact same reference ID number
                  every year. Changing your reference ID between filings makes it impossible for
                  the IRS to link your returns together. This can result in the IRS treating each
                  filing as if it came from a different person, potentially generating duplicate
                  penalty notices or processing errors.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <CheckIcon />
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> Write down your reference ID number and store it somewhere
                  safe. If you later obtain an ITIN, you should use the ITIN on future filings
                  instead of the reference ID. However, the transition should be noted -- some
                  practitioners recommend including both the ITIN and the old reference ID on the
                  first filing after obtaining the ITIN, so the IRS can link the records.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: No E-Filing */}
          <section id="no-efile" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              No E-Filing, No Confirmation
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Unlike most IRS forms, Form 5472 attached to a pro forma Form 1120 for a
              disregarded entity cannot be electronically filed. You must submit it by
              fax or by mail. This also means the IRS does not send a processing
              confirmation -- there is no &quot;accepted&quot; notification like you get with
              e-filed returns.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              This creates a record-keeping challenge. If the IRS later claims you did not
              file, you need proof that you submitted the form. Here is how to protect
              yourself:
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  If you fax the filing
                </h3>
                <p className="text-sm text-gray-600">
                  Keep the fax transmission confirmation report. This is your proof of delivery.
                  The report should show the date, time, recipient fax number, and number of
                  pages transmitted. Most online fax services also provide a digital receipt.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  If you mail the filing
                </h3>
                <p className="text-sm text-gray-600">
                  Use USPS Certified Mail with return receipt requested, or a trackable
                  commercial service such as FedEx, UPS, or DHL. The tracking number and
                  delivery confirmation serve as your proof of filing. Regular first-class
                  mail provides no delivery proof and is not recommended.
                </p>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <p className="text-sm text-amber-800">
                  <strong>Verify the address:</strong> The IRS mailing address and fax number for
                  Form 5472 filings can change from year to year. Always check the current
                  year&apos;s Form 5472 instructions on IRS.gov before sending. Using an outdated
                  address can result in your filing being lost or significantly delayed.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Schedule K Software Quirk */}
          <section id="schedule-k-quirk" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Schedule K Software Quirk
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The official IRS instructions state that Schedule K (Other Information) on the
              pro forma Form 1120 can be left blank when filing for a disregarded entity.
              Since the Form 1120 is only a &quot;shell&quot; for attaching Form 5472, the IRS
              does not require the additional information that Schedule K normally collects.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              However, if you use tax preparation software, you may encounter an issue.
              Many software programs require you to answer Schedule K questions -- particularly
              Question 7, which asks about foreign ownership -- before they will generate
              and attach Form 5472 to the return.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
              <div className="flex items-start gap-2">
                <CheckIcon />
                <p className="text-sm text-blue-800">
                  <strong>What to do:</strong> If your software requires Schedule K answers, go
                  ahead and answer them. Answering Question 7 (&quot;Yes&quot; to foreign ownership)
                  is factually correct and triggers the software to generate Form 5472. You will
                  not be penalized for providing additional truthful information on the pro forma
                  return.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              This is one of those areas where the IRS instructions and practical software
              implementation diverge. The instructions say you can leave it blank, but the
              software may not let you. Follow the software&apos;s requirements when necessary.
            </p>
          </section>

          {/* Section 6: Foreign-Owned US DE */}
          <section id="foreign-owned-usde" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Write &quot;Foreign-Owned US DE&quot; on Top
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The IRS instructs filers to write &quot;Foreign-Owned U.S. Disregarded
              Entity&quot; (or the abbreviation &quot;Foreign-Owned US DE&quot;) across the top
              of the Form 1120 when filing a pro forma return for a disregarded entity.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              This annotation serves an important purpose: it tells IRS processing staff
              that this Form 1120 is not a regular corporate tax return. Without it, the
              return may be routed to the wrong department or flagged as an incomplete
              corporate filing, causing processing delays and potential penalty notices.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">
                What to write and where
              </h3>
              <ul className="space-y-1.5 text-sm text-blue-800 ml-2">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Write across the top margin of page 1 of Form 1120
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Use clear, legible lettering
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Acceptable text: &quot;Foreign-Owned U.S. Disregarded Entity&quot; or
                  &quot;Foreign-Owned US DE&quot;
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  If using software that generates a PDF, check that the annotation appears
                  before printing or submitting
                </li>
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <p className="text-sm text-amber-800">
                  <strong>Do not skip this step.</strong> While omitting the annotation is not
                  itself a penalizable offense, it can cause your return to be misrouted within
                  the IRS, leading to unnecessary correspondence, processing delays, or erroneous
                  penalty assessments that you would then need to contest.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Extension Filing */}
          <section id="extension-filing" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Extension Filing (Form 7004)
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              If you cannot file your Form 5472 and pro forma Form 1120 by the April 15
              deadline, you can request a 6-month extension by filing Form 7004 (Application
              for Automatic Extension of Time to File Certain Business Income Tax,
              Information, and Other Returns).
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              For disregarded entities, the extension process has the same paper-only
              limitation as the main filing. Here is the complete process:
            </p>
            <div className="space-y-2 mb-4">
              {[
                "Complete Form 7004 -- select code 12 for Form 1120",
                "Print the completed form",
                'Write "Foreign-Owned U.S. Disregarded Entity" across the top of the form',
                "Sign the form (if required by the instructions)",
                "Mail or fax it to the same IRS office where you would send the actual return",
                "Keep your fax confirmation or certified mail receipt as proof of filing",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  <p className="text-sm text-gray-700">{step}</p>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <p className="text-sm text-amber-800">
                  <strong>Extension rules:</strong> The extension gives you more time to file,
                  but not more time to pay any tax owed. However, most foreign-owned disregarded
                  entities with no effectively connected income owe no US tax, so the
                  &quot;time to pay&quot; limitation is usually irrelevant for this type of filing.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <CheckIcon />
                <p className="text-sm text-blue-800">
                  <strong>With the extension:</strong> Your new deadline is October 15.
                  The extension is automatic -- you do not need to provide a reason. As long as
                  Form 7004 is filed by April 15, the extension is granted.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8: The Penalty */}
          <section id="penalty" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              The $25,000 Penalty Is Real
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The penalty for failure to timely file Form 5472 is $25,000 per form, per year.
              This is one of the steepest information return penalties in the US tax code,
              and it catches many foreign LLC owners off guard.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <div className="text-sm text-amber-800">
                  <p className="font-semibold mb-2">
                    The penalty applies even if:
                  </p>
                  <ul className="space-y-1.5 ml-1">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">&#8226;</span>
                      Your LLC had zero income for the entire year
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">&#8226;</span>
                      Your LLC had no transactions to report
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">&#8226;</span>
                      You owe no US tax whatsoever
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">&#8226;</span>
                      Your LLC was dormant or inactive
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-0.5">&#8226;</span>
                      You did not know about the filing requirement
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The penalty is for failing to file the information return itself, not for
              failing to pay tax. Even a completely dormant LLC with a zero balance sheet
              must file Form 5472 with a pro forma Form 1120 reporting no activity. The
              IRS considers the information return obligation separate from any tax liability.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <CheckIcon />
                <p className="text-sm text-blue-800">
                  <strong>If you missed a filing:</strong> File as soon as possible. The IRS
                  may assess the penalty, but you can request abatement by demonstrating
                  reasonable cause (such as not knowing about the requirement as a first-time
                  LLC owner). Voluntary late filing is always better than waiting for the IRS
                  to discover the omission.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: First-Year Filing Date */}
          <section id="first-year-date" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              First-Year Filing Date
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Your Form 1120 tax period begins on the date your LLC was incorporated (or
              formed), not on January 1. This is a frequent source of confusion for
              first-time filers.
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  First year (short period)
                </h3>
                <p className="text-sm text-gray-600">
                  If your LLC was formed on July 15, 2025, your first filing covers the period
                  from July 15, 2025 through December 31, 2025. This is called a short-period
                  return. You would enter July 15, 2025 as the beginning date and December 31,
                  2025 as the ending date in the header of Form 1120.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">
                  Subsequent years (full year)
                </h3>
                <p className="text-sm text-gray-600">
                  Starting from the second year onward, your filing period is the standard
                  calendar year: January 1 through December 31. So for 2026, you would report
                  the period January 1, 2026 through December 31, 2026.
                </p>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <p className="text-sm text-amber-800">
                  <strong>Do not start from January 1 in your first year.</strong> If your LLC
                  did not exist until July, reporting a period starting January 1 is incorrect.
                  The IRS may reject the return or send a notice requesting clarification. Always
                  use your actual incorporation date as the starting point for the first return.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10: Multiple Forms 5472 */}
          <section id="multiple-5472s" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Multiple Forms 5472
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              If your LLC has more than one foreign related party, you must file a separate
              Form 5472 for each related party that had reportable transactions with the
              entity during the tax year.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">
                Example: Two 50/50 foreign owners
              </h3>
              <p className="text-sm text-blue-800 leading-relaxed mb-2">
                A US LLC is owned equally by two foreign individuals, each holding 50%. Both
                made capital contributions during the year. You would:
              </p>
              <ul className="space-y-1.5 text-sm text-blue-800 ml-2">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  File one Form 5472 for Owner A, reporting their transactions
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  File a second Form 5472 for Owner B, reporting their transactions
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Enter &quot;2&quot; in Box 1G of Form 1120 (total number of Forms 5472 attached)
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Report the consolidated gross payments across all Forms 5472 in the
                  appropriate header fields on Form 1120
                </li>
              </ul>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Related parties include not just direct owners, but also entities or persons
              that are related to the owners under the IRC Section 267(b) and Section 707(b)
              definitions. If you paid rent to a company owned by your spouse, for example,
              that company may be a related party requiring its own Form 5472.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <p className="text-sm text-amber-800">
                  <strong>Each missed Form 5472 is a separate $25,000 penalty.</strong> If your
                  LLC has three related parties and you only file one Form 5472, the IRS can
                  assess a $25,000 penalty for each of the two missing forms -- a total of
                  $50,000 in penalties. Make sure you identify all related parties before filing.
                </p>
              </div>
            </div>
          </section>

          {/* CTA / Next Steps */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Next Steps
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Understanding these nuances puts you ahead of most filers. Now put that
              knowledge into action:
            </p>
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
