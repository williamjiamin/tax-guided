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

const MONTHLY_TASKS = [
  {
    category: "Financial Review",
    time: "20 min",
    color: "blue",
    tasks: [
      "Download and review your LLC bank statement for the past month",
      "Record all transactions in your bookkeeping ledger or spreadsheet",
      "Categorize each transaction (capital contribution, distribution, expense, revenue)",
      "Flag all related-party transactions (between you and the LLC) — these go on Form 5472",
      "Reconcile your ledger balance with your bank statement ending balance",
    ],
  },
  {
    category: "Expense Documentation",
    time: "10 min",
    color: "green",
    tasks: [
      "Save receipts for all business expenses over $25 to your digital filing system",
      "Name receipt files with date, vendor, and amount (e.g., 2025-03-15-aws-$200.pdf)",
      "Note any expenses paid from personal funds on behalf of the LLC (these are reportable transactions)",
    ],
  },
  {
    category: "State Compliance Check",
    time: "10 min",
    color: "purple",
    tasks: [
      "Check if your state annual report is due this month (Wyoming: annually on the anniversary of formation)",
      "Verify your registered agent service is active and paid",
      "Check your registered agent mailbox for any state correspondence",
      "Confirm your LLC is in good standing on the state's business entity search website",
    ],
  },
  {
    category: "IRS and Federal",
    time: "10 min",
    color: "orange",
    tasks: [
      "Check your IRS mailbox or registered agent for any IRS correspondence",
      "If you received a CP notice, review it immediately (response deadlines are strict)",
      "Verify your EIN is still active by checking any recent IRS correspondence",
      "Note any significant business changes that may affect your next filing",
    ],
  },
  {
    category: "Documentation and Notes",
    time: "10 min",
    color: "teal",
    tasks: [
      "Write a brief monthly summary: total revenue, total expenses, any unusual transactions",
      "Document any new related-party arrangements (loans, service agreements, IP licenses)",
      "Update your running total of related-party transactions for the year",
      "Back up your records to cloud storage if not already automatic",
    ],
  },
];

const ANNUAL_CALENDAR = [
  { month: "January", tasks: "Begin gathering documents for prior year filing. Review full-year transaction totals." },
  { month: "February", tasks: "Prepare Form 5472 data. Verify all related-party transaction totals. Start your filing." },
  { month: "March", tasks: "Complete and review your Form 5472 + Form 1120. File early or prepare extension (Form 7004)." },
  { month: "April", tasks: "April 15 deadline. File or extend. Pay any applicable state fees. File state annual report if due." },
  { month: "May", tasks: "If you filed an extension, continue preparing. Confirm IRS received your filing." },
  { month: "June", tasks: "Mid-year review. Check that bookkeeping is current. Update any business address changes with the state." },
  { month: "July", tasks: "Review registered agent renewal. Verify LLC good standing. Check BOI report status with FinCEN." },
  { month: "August", tasks: "Review year-to-date financial summary. Identify any new reportable transactions." },
  { month: "September", tasks: "If you extended, finalize your filing. September is the last comfortable month before the October 15 extended deadline." },
  { month: "October", tasks: "October 15 extended deadline. Final filing date for extensions. Review Q4 plans." },
  { month: "November", tasks: "Begin year-end planning. Review any large transactions planned for December." },
  { month: "December", tasks: "Close the books for the year. Final reconciliation. Gather all receipts and statements." },
];

export function MonthlyComplianceGuideClient() {
  const TOC = [
    { id: "overview", label: "The 60-Minute Monthly Investment" },
    { id: "monthly-checklist", label: "Monthly Checklist" },
    { id: "annual-calendar", label: "Month-by-Month Annual Calendar" },
    { id: "tools", label: "Tools to Stay on Track" },
    { id: "common-pitfalls", label: "Common Pitfalls" },
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
            <span className="text-gray-600">Monthly Compliance</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-100/80 text-teal-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Compliance Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Monthly Compliance Routine for Foreign-Owned LLCs
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              60 minutes a month keeps your LLC compliant, your books clean, and your tax
              season stress-free.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-teal-800 uppercase tracking-wide mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-sm text-teal-900">
              <li className="flex items-start gap-2">
                <CheckIcon />
                A 60-minute monthly routine covers all compliance obligations
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Five categories: Financial Review, Expenses, State, Federal, Documentation
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Consistent monthly habits prevent tax season emergencies
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Set a recurring calendar reminder for the 1st of each month
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
              The 60-Minute Monthly Investment
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Running a compliant foreign-owned LLC does not require hours of work every week.
              The reality is that most compliance tasks can be handled in a single focused session
              each month. We have broken the work into five categories, each taking 10-20 minutes.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The key insight is that compliance problems almost always come from neglect, not
              complexity. An LLC owner who spends 60 minutes per month on these tasks will never
              face a surprise penalty or scramble at tax time. An owner who ignores compliance
              for 11 months and panics in April is far more likely to make costly errors.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Pro tip:</strong> Schedule a recurring calendar event for the 1st of each
                month. Treat it like a meeting that cannot be moved. 60 minutes, once a month.
                That is all it takes.
              </p>
            </div>
          </section>

          {/* Monthly Checklist */}
          <section id="monthly-checklist" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Monthly Checklist
            </h2>
            <div className="space-y-6">
              {MONTHLY_TASKS.map((group) => {
                const colorMap: Record<string, { bg: string; badge: string; text: string }> = {
                  blue: { bg: "bg-blue-50", badge: "bg-blue-100 text-blue-700", text: "text-blue-900" },
                  green: { bg: "bg-green-50", badge: "bg-green-100 text-green-700", text: "text-green-900" },
                  purple: { bg: "bg-purple-50", badge: "bg-purple-100 text-purple-700", text: "text-purple-900" },
                  orange: { bg: "bg-orange-50", badge: "bg-orange-100 text-orange-700", text: "text-orange-900" },
                  teal: { bg: "bg-teal-50", badge: "bg-teal-100 text-teal-700", text: "text-teal-900" },
                };
                const c = colorMap[group.color] || colorMap.blue;
                return (
                  <div key={group.category} className={`${c.bg} rounded-xl p-5`}>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`text-sm font-bold ${c.text} uppercase tracking-wide`}>
                        {group.category}
                      </h3>
                      <span className={`text-xs font-medium ${c.badge} px-2 py-0.5 rounded-full`}>
                        {group.time}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {group.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <div className="w-4 h-4 border border-gray-300 rounded mt-0.5 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Annual Calendar */}
          <section id="annual-calendar" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Month-by-Month Annual Calendar
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              In addition to the monthly routine above, certain months have specific deadlines and
              priorities. Here is what to focus on each month:
            </p>
            <div className="space-y-2">
              {ANNUAL_CALENDAR.map((item) => (
                <div key={item.month} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                  <span className="text-xs font-bold text-gray-500 w-20 flex-shrink-0 pt-0.5 uppercase">
                    {item.month}
                  </span>
                  <p className="text-sm text-gray-600">{item.tasks}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tools */}
          <section id="tools" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Tools to Stay on Track
            </h2>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Calendar Reminders</h3>
                <p className="text-sm text-gray-600">
                  Set a recurring event on the 1st of each month titled &quot;LLC Compliance Review
                  — 60 min.&quot; Add the April 15 and October 15 (extension) deadlines as separate
                  all-day events with 2-week advance reminders.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Bookkeeping Spreadsheet</h3>
                <p className="text-sm text-gray-600">
                  A simple Google Sheet or Excel file with columns for date, description, amount,
                  category, and related-party flag. See our{" "}
                  <Link href="/guides/foreign-llc-bookkeeping" className="text-blue-600 hover:underline">
                    bookkeeping guide
                  </Link>
                  {" "}for a full setup walkthrough.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Cloud Storage</h3>
                <p className="text-sm text-gray-600">
                  Google Drive, Dropbox, or iCloud — pick one and use it consistently. Create a
                  folder structure by year and month for receipts and statements.
                </p>
              </div>
            </div>
          </section>

          {/* Common Pitfalls */}
          <section id="common-pitfalls" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Common Pitfalls
            </h2>
            <div className="space-y-3">
              {[
                { pitfall: "Skipping months when there is no activity", fix: "File a \"no activity\" note in your records anyway. The routine keeps the habit alive, and you verify state/federal compliance even in quiet months." },
                { pitfall: "Mixing personal and business expenses", fix: "Use your LLC bank account exclusively for business. If you pay a business expense personally, immediately record it as a capital contribution." },
                { pitfall: "Ignoring state correspondence", fix: "Check your registered agent portal monthly. Missed state notices can result in administrative dissolution of your LLC." },
                { pitfall: "Waiting until April to start bookkeeping", fix: "The monthly routine exists to prevent this. If you have been consistent all year, April filing takes under an hour." },
              ].map((item) => (
                <div key={item.pitfall} className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-amber-900 mb-1">{item.pitfall}</h3>
                  <p className="text-sm text-amber-800">{item.fix}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Next Steps
            </h2>
            <div className="space-y-2">
              {[
                { text: "Set up your bookkeeping system", href: "/guides/foreign-llc-bookkeeping" },
                { text: "Read the April filing season playbook", href: "/guides/filing-season-playbook" },
                { text: "Avoid common Form 5472 mistakes", href: "/guides/form-5472-common-mistakes" },
                { text: "File your Form 5472 ($49)", href: "/filer" },
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
