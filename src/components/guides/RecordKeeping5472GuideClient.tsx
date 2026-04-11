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

export function RecordKeeping5472GuideClient() {
  const TOC = [
    { id: "why-records-matter", label: "Why Record-Keeping Matters" },
    { id: "contributions-vs-distributions", label: "Capital Contributions vs Distributions" },
    { id: "one-payment-hub", label: "Using One Payment Hub" },
    { id: "how-1099k-helps", label: "How 1099-K Helps" },
    { id: "what-to-track", label: "What to Track Monthly" },
    { id: "pre-incorporation", label: "Pre-Incorporation Expenses" },
    { id: "common-platforms", label: "Common Platforms and What They Track" },
    { id: "computing-totals", label: "Computing Your Total for Form 5472" },
    { id: "pdf-editing-tip", label: "PDF Editing Tip" },
    { id: "keeping-records", label: "Keeping Records for Future Years" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-green-50/50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/guides/start-your-business" className="hover:text-gray-600">Guides</Link>
            <span>/</span>
            <span className="text-gray-600">Record Keeping for 5472</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100/80 text-green-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Practical Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Record-Keeping for Form 5472
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              How to track capital contributions and distributions using Stripe, PayPal, Wise,
              and your 1099-K — so your Form 5472 numbers are accurate every year.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-sm text-green-900">
              <li className="flex items-start gap-2">
                <CheckIcon />
                Form 5472 requires accurate reporting of capital contributions and distributions
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Route all business transactions through one platform for a single source of truth
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Your 1099-K from Stripe or PayPal helps verify the numbers you report
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                A simple monthly spreadsheet is all most LLC owners need
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Keep records for at least 3-7 years in case of IRS audit
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
                  <a href={`#${item.id}`} className="text-sm text-green-600 hover:text-green-800 hover:underline">
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Section 1: Why Record-Keeping Matters */}
          <section id="why-records-matter" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why Record-Keeping Matters for Form 5472
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Form 5472 requires reporting of all reportable transactions between a foreign-owned
              US LLC and its foreign owner. For most single-member LLCs (disregarded entities),
              this means reporting two main categories: capital contributions (money you put INTO
              the LLC) and capital distributions (money the LLC pays OUT to you).
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The IRS expects these numbers to be accurate. The penalty for filing an incomplete
              or inaccurate Form 5472 is $25,000 per form — and this penalty applies even if
              you filed but got the numbers wrong. Getting your record-keeping right is not
              optional.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-800 mb-1">Under-Reporting Is Risky</h3>
                <p className="text-sm text-red-700">
                  If you report less than the actual amount of transactions, the IRS may view
                  your filing as incomplete. This can trigger penalty notices and additional
                  scrutiny of your LLC.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-amber-800 mb-1">Over-Reporting Is Wasteful</h3>
                <p className="text-sm text-amber-700">
                  Reporting inflated numbers does not help you. It can create inconsistencies
                  with other filings and may raise questions if the IRS ever reviews your
                  records.
                </p>
              </div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-green-800">
                <strong>The goal is simple:</strong> report exactly what happened. Good
                record-keeping makes this easy. Bad record-keeping forces you to guess —
                and guessing is what leads to problems.
              </p>
            </div>
          </section>

          {/* Section 2: Capital Contributions vs Distributions */}
          <section id="contributions-vs-distributions" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Capital Contributions vs Distributions Explained
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              These are the two transaction types that matter most for Form 5472 Part 5
              (for disregarded entities). Understanding the difference is the foundation
              of good record-keeping.
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">
                  Capital Contributions (Money IN to the LLC)
                </h3>
                <p className="text-sm text-blue-800 leading-relaxed mb-3">
                  A capital contribution is any money or property you (the foreign owner)
                  put into the LLC for business purposes. This includes:
                </p>
                <ul className="space-y-1.5 text-sm text-blue-800 ml-2">
                  <li className="flex items-start gap-2"><CheckIcon /> State filing fees and annual report fees</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Registered agent service fees</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Software and tools for the business (hosting, SaaS subscriptions)</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Domain name purchases and renewals</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Advertising and marketing expenses</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Business bank account opening deposits</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Any other money you transfer into the LLC bank account</li>
                </ul>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-purple-900 mb-2">
                  Capital Distributions (Money OUT from the LLC)
                </h3>
                <p className="text-sm text-purple-800 leading-relaxed mb-3">
                  A capital distribution is any money the LLC sends back to you (the foreign
                  owner) for personal use. This includes:
                </p>
                <ul className="space-y-1.5 text-sm text-purple-800 ml-2">
                  <li className="flex items-start gap-2"><CheckIcon /> Transfers from business bank account to your personal account</li>
                  <li className="flex items-start gap-2"><CheckIcon /> PayPal withdrawals from business account to personal bank</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Stripe payouts to your personal bank account</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Wise Business transfers to your personal Wise account</li>
                  <li className="flex items-start gap-2"><CheckIcon /> Any funds you take out of the business for personal use</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mt-4">
              <p className="text-sm text-gray-700">
                <strong>Important distinction:</strong> Business-to-business payments (like paying a
                vendor or receiving payment from a client) are NOT capital contributions or
                distributions. Those are operating transactions. Capital contributions and
                distributions only involve transactions between the LLC and its foreign owner.
              </p>
            </div>
          </section>

          {/* Section 3: Using One Payment Hub */}
          <section id="one-payment-hub" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Using One Payment Hub
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The single most impactful thing you can do for your record-keeping is route
              all business transactions through ONE platform. When money flows through
              multiple accounts, tracking becomes exponentially harder.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Pick one primary platform and make it your single source of truth:
            </p>

            <div className="space-y-3">
              {[
                {
                  title: "US Business Bank Account (Mercury, Relay)",
                  desc: "Best for most LLCs. All money flows through one bank account. Clean statements. Easy to reconcile at year-end.",
                  tag: "Recommended",
                },
                {
                  title: "Stripe",
                  desc: "Ideal if your business is primarily online payments. Stripe Dashboard shows every transaction with timestamps and metadata.",
                  tag: "Good for SaaS / E-commerce",
                },
                {
                  title: "PayPal Business",
                  desc: "Common for freelancers and service providers. Download monthly statements as CSV for easy tracking.",
                  tag: "Good for Services",
                },
                {
                  title: "Wise Business",
                  desc: "Popular with international business owners. Multi-currency support with clear transaction history.",
                  tag: "Good for International",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                    <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <p className="text-sm text-amber-800">
                  <strong>Avoid splitting transactions across platforms.</strong> If you receive
                  some payments through Stripe and others through PayPal, you need to track
                  both. Every additional platform doubles your reconciliation work at year-end.
                  If you must use multiple platforms, designate one as your primary and sweep
                  funds from others into it regularly.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: How 1099-K Helps */}
          <section id="how-1099k-helps" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How 1099-K Helps Your Form 5472 Filing
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Payment platforms like Stripe and PayPal issue Form 1099-K to the IRS when your
              payment volume exceeds certain thresholds. This form reports the total gross
              payments processed through that platform during the year.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Even though you (as a foreign owner of a disregarded entity) may not owe US
              income tax, the 1099-K is a valuable cross-reference tool for your Form 5472.
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-4">
              <h3 className="text-sm font-semibold text-green-900 mb-2">
                Why 1099-K Matters for Record-Keeping
              </h3>
              <ul className="space-y-1.5 text-sm text-green-800 ml-2">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  It provides an independent verification of your total payment volume
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  The IRS already has this number — your Form 5472 should be consistent with it
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  It helps you compute accurate capital distributions (money flowing out to you)
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  It serves as backup documentation if the IRS ever questions your filing
                </li>
              </ul>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Platform</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">1099-K Threshold (2025+)</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Where to Find It</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { platform: "Stripe", threshold: "$5,000+ in gross payments", where: "Dashboard > Documents > Tax Forms" },
                    { platform: "PayPal", threshold: "$5,000+ in gross payments", where: "Activity > Statements > Tax Documents" },
                    { platform: "Venmo Business", threshold: "$5,000+ in gross payments", where: "Settings > Tax Documents" },
                    { platform: "Square", threshold: "$5,000+ in gross payments", where: "Account > Tax Forms" },
                  ].map((row) => (
                    <tr key={row.platform} className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium text-gray-800">{row.platform}</td>
                      <td className="py-3 px-3 text-gray-600">{row.threshold}</td>
                      <td className="py-3 px-3 text-gray-600">{row.where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mt-4">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> The 1099-K threshold has changed multiple times. For tax
                year 2025, the IRS threshold is $5,000 in gross payments. Check the current
                threshold for your filing year as it may change. Even if you fall below the
                threshold, your platform may still provide transaction summaries you can use.
              </p>
            </div>
          </section>

          {/* Section 5: What to Track Monthly */}
          <section id="what-to-track" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What to Track Monthly
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              You do not need expensive bookkeeping software. A simple spreadsheet with five
              columns is all most LLC owners need. The key is consistency — update it every
              month, not once a year when you are scrambling to file.
            </p>

            <div className="bg-gray-50 rounded-xl p-5 mb-4">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                Recommended Spreadsheet Columns
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left py-2 px-2 font-semibold text-gray-700">Column</th>
                      <th className="text-left py-2 px-2 font-semibold text-gray-700">Example</th>
                      <th className="text-left py-2 px-2 font-semibold text-gray-700">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { col: "Date", example: "2025-03-15", purpose: "When the transaction occurred" },
                      { col: "Description", example: "Stripe payout to Chase account", purpose: "What the transaction was" },
                      { col: "Category", example: "Capital Distribution", purpose: "Contribution or Distribution" },
                      { col: "Amount (USD)", example: "$2,450.00", purpose: "Dollar amount of the transaction" },
                      { col: "Platform", example: "Stripe", purpose: "Where the transaction happened" },
                    ].map((row) => (
                      <tr key={row.col} className="border-b border-gray-200">
                        <td className="py-2 px-2 font-medium text-gray-800">{row.col}</td>
                        <td className="py-2 px-2 text-gray-600 font-mono text-xs">{row.example}</td>
                        <td className="py-2 px-2 text-gray-600">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-800 mb-1">Monthly Routine</h3>
                <p className="text-sm text-green-700">
                  Set a calendar reminder for the first of every month. Log in to your payment
                  platform, export the previous month&apos;s transactions, and categorize each one.
                  This takes 15-30 minutes per month and saves you hours at tax time.
                </p>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-800 mb-1">Year-End Summary</h3>
                <p className="text-sm text-green-700">
                  At the end of the year, add up all capital contributions and all capital
                  distributions separately. These two totals are the numbers that go on your
                  Form 5472. Having monthly data makes it easy to verify against your 1099-K
                  and platform statements.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>Tip:</strong> Use Google Sheets or Excel and create a separate tab for
                each calendar year. This keeps your records organized and makes it easy to
                look back at previous years if needed.
              </p>
            </div>
          </section>

          {/* Section 6: Pre-Incorporation Expenses */}
          <section id="pre-incorporation" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Pre-Incorporation Expenses
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              This is one of the more debated areas in Form 5472 record-keeping. Pre-incorporation
              expenses are costs you incurred BEFORE your LLC was officially formed — for example,
              researching which state to form in, domain name purchases, or tools you bought
              in anticipation of starting the business.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The question is: can you include these as capital contributions on Form 5472?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-800 mb-1">Conservative Approach</h3>
                <p className="text-sm text-green-700">
                  Only include expenses incurred after your LLC formation date. This is the safest
                  position and avoids any questions from the IRS about whether pre-formation
                  costs are legitimate capital contributions.
                </p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-amber-800 mb-1">Aggressive Approach</h3>
                <p className="text-sm text-amber-700">
                  Include pre-formation expenses as capital contributions, arguing that these
                  costs were necessary to establish the business. If you take this position,
                  keep excellent documentation and consider seeking professional advice.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mt-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <p className="text-sm text-gray-700">
                  <strong>Our recommendation:</strong> For most LLC owners, the amounts involved
                  in pre-incorporation expenses are relatively small (a few hundred dollars).
                  The conservative approach eliminates any risk of IRS pushback. If your
                  pre-incorporation expenses are substantial, consult a tax professional before
                  including them on Form 5472.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7: Common Platforms */}
          <section id="common-platforms" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Common Platforms and What They Track
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Each payment platform provides different reporting tools. Here is how to extract
              the data you need from the most popular platforms used by foreign-owned LLCs.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Stripe</h3>
                <ul className="space-y-1.5 text-sm text-gray-700 ml-2">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span><strong>Payments tab:</strong> Shows all received payments with dates, amounts, and customer details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span><strong>Payouts tab:</strong> Shows every transfer from Stripe to your bank account (these are your distributions)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span><strong>Reports section:</strong> Generate custom date-range reports with CSV export</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span><strong>Tax Documents:</strong> 1099-K available in Documents section (if applicable)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">PayPal</h3>
                <ul className="space-y-1.5 text-sm text-gray-700 ml-2">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span><strong>Activity page:</strong> Full transaction history with search and filter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span><strong>Statements:</strong> Monthly and annual statements available as PDF or CSV download</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span><strong>Tax Documents:</strong> 1099-K available under Statements &gt; Tax Documents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span><strong>Withdrawals:</strong> Track transfers to your personal bank account separately</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Wise Business</h3>
                <ul className="space-y-1.5 text-sm text-gray-700 ml-2">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span><strong>Statements:</strong> Monthly statements showing all transfers in and out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span><strong>Multi-currency view:</strong> Separate tracking per currency with auto-conversion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span><strong>CSV Export:</strong> Download all transactions for any date range</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span><strong>Recipients:</strong> Clearly shows who you sent money to and who sent money to you</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Mercury / Relay (US Business Bank)</h3>
                <ul className="space-y-1.5 text-sm text-gray-700 ml-2">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span><strong>Bank Statements:</strong> Monthly statements showing all credits and debits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span><strong>Transaction Search:</strong> Filter by date, amount, or description</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span><strong>Categories:</strong> Some platforms let you tag transactions for easier year-end review</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    <span><strong>Integrations:</strong> Connect to accounting tools if you need more detailed tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8: Computing Totals */}
          <section id="computing-totals" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Computing Your Total for Form 5472
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Once you have your year-end spreadsheet complete, computing the numbers for
              Form 5472 is straightforward. Here is the process:
            </p>

            <div className="space-y-4">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
                <h3 className="text-sm font-semibold text-blue-900 mb-3">Step-by-Step Calculation</h3>
                <ol className="space-y-3 text-sm text-blue-800">
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-200 text-blue-900 text-xs font-bold flex-shrink-0">1</span>
                    <span>Filter your spreadsheet for all transactions categorized as &quot;Capital Contribution&quot; — sum the amounts. This is your total capital contributions for the year.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-200 text-blue-900 text-xs font-bold flex-shrink-0">2</span>
                    <span>Filter your spreadsheet for all transactions categorized as &quot;Capital Distribution&quot; — sum the amounts. This is your total capital distributions for the year.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-200 text-blue-900 text-xs font-bold flex-shrink-0">3</span>
                    <span>Cross-check your capital distribution total against your 1099-K (if available). The 1099-K gross amount should be close to or greater than your distribution total.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-200 text-blue-900 text-xs font-bold flex-shrink-0">4</span>
                    <span>Enter these amounts in Form 5472 Part 5. Capital contributions typically go on line items related to amounts received, and distributions on line items related to amounts paid.</span>
                  </li>
                </ol>
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Example Calculation</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-300">
                        <th className="text-left py-2 px-2 font-semibold text-gray-700">Transaction Type</th>
                        <th className="text-right py-2 px-2 font-semibold text-gray-700">Annual Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-2 text-gray-600">State filing fee (Wyoming)</td>
                        <td className="py-2 px-2 text-right text-gray-800 font-mono">$100</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-2 text-gray-600">Registered agent fee</td>
                        <td className="py-2 px-2 text-right text-gray-800 font-mono">$150</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-2 text-gray-600">Software subscriptions</td>
                        <td className="py-2 px-2 text-right text-gray-800 font-mono">$600</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-2 text-gray-600">Domain and hosting</td>
                        <td className="py-2 px-2 text-right text-gray-800 font-mono">$200</td>
                      </tr>
                      <tr className="border-b border-gray-300 bg-blue-50">
                        <td className="py-2 px-2 font-semibold text-blue-800">Total Capital Contributions</td>
                        <td className="py-2 px-2 text-right font-semibold text-blue-800 font-mono">$1,050</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-2 text-gray-600">Stripe payouts to personal bank</td>
                        <td className="py-2 px-2 text-right text-gray-800 font-mono">$18,500</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 px-2 text-gray-600">PayPal withdrawal to personal bank</td>
                        <td className="py-2 px-2 text-right text-gray-800 font-mono">$3,200</td>
                      </tr>
                      <tr className="bg-purple-50">
                        <td className="py-2 px-2 font-semibold text-purple-800">Total Capital Distributions</td>
                        <td className="py-2 px-2 text-right font-semibold text-purple-800 font-mono">$21,700</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: PDF Editing Tip */}
          <section id="pdf-editing-tip" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              PDF Editing Tip
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              If you download IRS Form 5472 as a PDF and fill it out directly in your web
              browser (Chrome, Firefox, Edge), be aware that browser-based PDF viewers often
              have rendering issues with IRS forms.
            </p>

            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-800 mb-1">Common Browser PDF Problems</h3>
                <ul className="space-y-1 text-sm text-red-700 ml-4 list-disc">
                  <li>Text may appear misaligned or shifted when printed</li>
                  <li>Fields may overflow or get cut off at edges</li>
                  <li>Font rendering can differ between screen and print</li>
                  <li>Some form fields may not save properly</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-800 mb-1">Better Alternatives</h3>
                <ul className="space-y-1 text-sm text-green-700 ml-4 list-disc">
                  <li>Adobe Acrobat Reader (free) — the most reliable option for IRS PDFs</li>
                  <li>Preview on Mac — handles most IRS forms correctly</li>
                  <li>Use ForeignLLCTax.com — our filer generates properly formatted PDFs automatically</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-blue-800">
                <strong>Always verify:</strong> Before mailing your forms to the IRS, print the
                completed PDF and visually inspect every field. Make sure all text is legible,
                properly positioned, and nothing is cut off. A form that cannot be read by
                the IRS is effectively an incomplete filing.
              </p>
            </div>
          </section>

          {/* Section 10: Keeping Records */}
          <section id="keeping-records" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Keeping Records for Future Years
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Filing Form 5472 is not a one-time event. As long as your LLC exists, you must
              file every year. Good record-keeping habits now will save you significant time
              and stress in future years.
            </p>

            <div className="space-y-3 mb-4">
              {[
                {
                  title: "Retain records for 3-7 years",
                  desc: "The IRS generally has 3 years to audit a return, but this extends to 6 years if there is a substantial understatement. Keep all records for at least 7 years to be safe.",
                },
                {
                  title: "Use the same reference ID number every year",
                  desc: "Form 5472 asks for a reference ID number for the reporting entity. Use the same number each year for consistency. This helps the IRS match your filings across years.",
                },
                {
                  title: "Keep your spreadsheet consistent",
                  desc: "Use the same column structure and categories every year. This makes it easy to compare year-over-year and quickly spot anomalies or missing entries.",
                },
                {
                  title: "Store digital copies of all supporting documents",
                  desc: "Save your 1099-K forms, bank statements, payment platform exports, and completed Form 5472 PDFs in a dedicated folder for each tax year.",
                },
                {
                  title: "Back up everything",
                  desc: "Use cloud storage (Google Drive, Dropbox, iCloud) so your tax records are not lost if your computer fails. These documents are irreplaceable if the IRS comes asking.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-800">
                <strong>Year-end checklist:</strong> Before you close out a tax year, confirm
                that you have (1) your completed tracking spreadsheet, (2) platform statements
                or CSV exports, (3) your 1099-K forms (if applicable), (4) a copy of your filed
                Form 5472 and Form 1120, and (5) proof of mailing (USPS tracking number or
                certified mail receipt).
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Next Steps
            </h2>
            <div className="space-y-2">
              {[
                { text: "Start your Form 5472 filing ($49)", href: "/filer" },
                { text: "Learn about common Form 5472 mistakes", href: "/guides/form-5472-common-mistakes" },
                { text: "Set up bookkeeping for your LLC", href: "/guides/foreign-llc-bookkeeping" },
                { text: "Read the April filing season playbook", href: "/guides/filing-season-playbook" },
                { text: "DIY vs CPA — is self-filing right for you?", href: "/guides/diy-vs-cpa" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-green-600 hover:text-green-800"
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
