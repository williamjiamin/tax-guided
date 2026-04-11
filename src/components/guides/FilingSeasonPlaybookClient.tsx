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

const WEEKS = [
  {
    week: "Week 1",
    date: "Feb 17 - Feb 23",
    title: "Gather Your Documents",
    tasks: [
      "Download all 12 monthly bank statements for your LLC",
      "Collect your LLC formation documents (Articles of Organization, EIN confirmation letter CP 575)",
      "Locate your Operating Agreement",
      "Find your registered agent address and service agreement",
      "Pull up last year's filed Form 5472 and Form 1120 for reference",
    ],
    tip: "Create a folder called \"2025 Tax Filing\" and put everything in it. Having all documents in one place saves time later.",
  },
  {
    week: "Week 2",
    date: "Feb 24 - Mar 2",
    title: "Reconcile Your Books",
    tasks: [
      "Verify your bookkeeping ledger matches all 12 bank statements",
      "Calculate total related-party transactions for the year by category",
      "Identify all capital contributions (money you put into the LLC)",
      "Identify all distributions (money the LLC sent to you)",
      "Total any management fees, loans, rent, or royalties between you and the LLC",
    ],
    tip: "If your bookkeeping is not up to date, this is your catch-up week. Block extra time if needed.",
  },
  {
    week: "Week 3",
    date: "Mar 3 - Mar 9",
    title: "Prepare Your Entity Information",
    tasks: [
      "Confirm your LLC name matches exactly as registered with the IRS",
      "Verify your EIN is correct",
      "Confirm your LLC address (registered agent or principal office)",
      "Prepare your personal information as the foreign owner (name, foreign address, country code)",
      "Assign or confirm your reference ID number for Form 5472 Part II",
    ],
    tip: "Use the exact same information as last year unless something has changed. Consistency prevents IRS mismatches.",
  },
  {
    week: "Week 4",
    date: "Mar 10 - Mar 16",
    title: "Start Filling Out Your Forms",
    tasks: [
      "Begin your Form 5472 filing — start with Part I (reporting corporation information)",
      "Complete Part II (25% foreign shareholder information)",
      "Fill in Part IV (monetary transactions) with your reconciled totals",
      "Complete the pro-forma Form 1120 with basic entity information",
      "Check the correct tax year on both forms",
    ],
    tip: "Our filer walks you through each section step by step. You can save your progress and come back any time.",
  },
  {
    week: "Week 5",
    date: "Mar 17 - Mar 23",
    title: "Review Everything",
    tasks: [
      "Review all Form 5472 entries against your source documents",
      "Verify Part IV transaction amounts match your bookkeeping totals",
      "Check that entity information on Form 5472 matches Form 1120",
      "Verify country codes use IRS codes (not ISO codes)",
      "Confirm the reference ID matches what you used in prior years",
    ],
    tip: "This is the most important week. Errors caught now cost nothing. Errors caught by the IRS cost $25,000.",
  },
  {
    week: "Week 6",
    date: "Mar 24 - Mar 30",
    title: "Generate and Print Your Filing",
    tasks: [
      "Generate your final PDF package (Form 5472 + Form 1120)",
      "Review the generated PDFs one final time",
      "Print the forms (keep a digital copy as well)",
      "Sign the Form 1120 signature line",
      "Prepare your mailing envelope (Form 5472 must be mailed — it cannot be e-filed)",
    ],
    tip: "Use certified mail with return receipt (USPS) or a trackable service. You want proof the IRS received your filing.",
  },
  {
    week: "Week 7",
    date: "Mar 31 - Apr 6",
    title: "Mail Your Filing",
    tasks: [
      "Mail your completed forms to the IRS service center (address is in the Form 1120 instructions)",
      "Save your certified mail receipt and tracking number",
      "Record the mailing date in your files",
      "Consider using an online fax service as an alternative submission method",
      "Store a complete copy of everything you mailed in your tax filing folder",
    ],
    tip: "Mail at least 10 days before April 15. If something goes wrong with delivery, you still have time to refile.",
  },
  {
    week: "Week 8",
    date: "Apr 7 - Apr 15",
    title: "Final Deadline and Extension Backup",
    tasks: [
      "April 15 is the filing deadline for calendar-year filers",
      "If you have not filed yet, file Form 7004 for an automatic 6-month extension (to October 15)",
      "Form 7004 can be e-filed through most tax software or mailed to the IRS",
      "The extension extends the filing deadline but not the payment deadline (usually not applicable for pro-forma 1120s)",
      "Confirm delivery of your filing via USPS tracking",
    ],
    tip: "Filing an extension is not a red flag — millions of businesses do it. But if your filing is ready, do not delay. File and move on.",
  },
];

export function FilingSeasonPlaybookClient() {
  const TOC = [
    { id: "overview", label: "How to Use This Playbook" },
    { id: "timeline", label: "8-Week Timeline" },
    { id: "extension", label: "What If You Need an Extension?" },
    { id: "after-filing", label: "After You File" },
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
            <span className="text-gray-600">Filing Season Playbook</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-orange-100/80 text-orange-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Filing Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              April Filing Season Playbook
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Your week-by-week action plan for filing Form 5472. Start 8 weeks before April 15
              and never scramble at the deadline again.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-orange-800 uppercase tracking-wide mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-sm text-orange-900">
              <li className="flex items-start gap-2">
                <CheckIcon />
                Start 8 weeks before April 15 (mid-February)
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Each week has a specific focus — no guessing what to do next
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Mail your filing at least 10 days before the deadline
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                If you cannot file on time, Form 7004 gives you an automatic 6-month extension
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

          {/* Overview */}
          <section id="overview" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How to Use This Playbook
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              This playbook breaks the entire Form 5472 filing process into 8 manageable weeks.
              Each week has a clear objective and a checklist of specific tasks. If you follow this
              plan, you will file on time, with confidence, and without the last-minute panic that
              leads to expensive mistakes.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The timeline assumes a calendar-year LLC with an April 15 filing deadline. If your
              LLC uses a fiscal year, adjust the weeks accordingly (your deadline is the 15th day
              of the 4th month after your fiscal year ends).
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Already behind schedule?</strong> If you are reading this in March or April,
                skip to Week 4 and compress Weeks 1-3 into a single weekend. The filing itself
                takes 30-60 minutes with{" "}
                <Link href="/filer" className="underline hover:text-blue-900">
                  our filer
                </Link>
                . The preparation is what takes time.
              </p>
            </div>
          </section>

          {/* Timeline */}
          <section id="timeline" className="space-y-6 mb-6">
            {WEEKS.map((w) => (
              <div
                key={w.week}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-auto px-3 h-8 bg-orange-100 text-orange-700 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {w.week}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">{w.title}</h2>
                    <p className="text-xs text-gray-400">{w.date}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-3">
                  {w.tasks.map((task, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <div className="w-4 h-4 border border-gray-300 rounded mt-0.5 flex-shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
                <div className="bg-blue-50 rounded-xl p-3">
                  <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> {w.tip}
                  </p>
                </div>
              </div>
            ))}
          </section>

          {/* Extension */}
          <section id="extension" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What If You Need an Extension?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              If you cannot file by April 15, file Form 7004 (Application for Automatic Extension
              of Time to File Certain Business Income Tax, Information, and Other Returns). This
              gives you an automatic 6-month extension to October 15.
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Key Facts About Form 7004</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>The extension is automatic — the IRS does not need to approve it</li>
                  <li>File Form 7004 by April 15 (the original due date)</li>
                  <li>Form 7004 can be e-filed through most tax software</li>
                  <li>The extension extends the time to file, not the time to pay (but pro-forma Form 1120s typically have no tax due)</li>
                  <li>Filing an extension is extremely common and is not a red flag</li>
                </ul>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm text-amber-800">
                  <strong>Important:</strong> The extension only protects you from the late filing
                  penalty if you file Form 7004 by the original deadline. If you miss both April 15
                  and fail to file Form 7004, the $25,000 penalty applies from the original
                  due date.
                </p>
              </div>
            </div>
          </section>

          {/* After Filing */}
          <section id="after-filing" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              After You File
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Once your filing is in the mail, here is what to do:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li>Save your certified mail tracking number and delivery confirmation</li>
              <li>Keep a complete copy of everything you filed (digital and paper)</li>
              <li>Store your copy in the tax-filings folder for the year</li>
              <li>Expect potential IRS correspondence in 3-6 months (usually a simple acknowledgment or nothing at all)</li>
              <li>If you receive a penalty notice (CP 215), respond within 30 days with a reasonable cause letter</li>
              <li>Begin your monthly compliance routine for the current year</li>
            </ul>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Next Steps
            </h2>
            <div className="space-y-2">
              {[
                { text: "Start your Form 5472 filing now ($49)", href: "/filer" },
                { text: "Avoid common Form 5472 mistakes", href: "/guides/form-5472-common-mistakes" },
                { text: "Set up your monthly compliance routine", href: "/guides/monthly-compliance-routine" },
                { text: "Learn how to submit your filing to the IRS", href: "/guides/how-to-submit-form-5472" },
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
