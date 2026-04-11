"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/* ------------------------------------------------------------------ */
/*  Shared icons                                                       */
/* ------------------------------------------------------------------ */

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Bank comparison data                                               */
/* ------------------------------------------------------------------ */

const BANKS = [
  {
    name: "Mercury",
    type: "Online",
    monthlyFee: "Free",
    usVisitRequired: false,
    ssnRequired: false,
    multiCurrency: false,
    foreignLlcFriendly: true,
    highlight: true,
    notes:
      "Most popular for remote founders. 100% remote application. As of 2025, Mercury no longer accepts registered agent addresses \u2014 you need a real US business address (not CMRA). FDIC insured up to $5M. Integrates with Stripe, QuickBooks. Free ACH; international wires $20\u2013$44.",
  },
  {
    name: "Relay",
    type: "Online",
    monthlyFee: "Free",
    usVisitRequired: false,
    ssnRequired: false,
    multiCurrency: false,
    foreignLlcFriendly: true,
    highlight: true,
    notes:
      "Free business banking with up to 20 checking accounts and 50 Visa debit cards. $3M FDIC insurance through sweep program. Great backup if Mercury denies. Free domestic wires; international wires $50 (free on Pro plan at $30/mo).",
  },
  {
    name: "Wise Business",
    type: "Online",
    monthlyFee: "$31/mo",
    usVisitRequired: false,
    ssnRequired: false,
    multiCurrency: true,
    foreignLlcFriendly: true,
    highlight: false,
    notes:
      "Hold and convert 40+ currencies at mid-market rates. Requires paid plan ($31/mo) for US routing + account numbers. Not FDIC insured. KYC has tightened significantly in 2025. Best used alongside a real US bank account, not as primary.",
  },
  {
    name: "Payoneer",
    type: "Online",
    monthlyFee: "Free",
    usVisitRequired: false,
    ssnRequired: false,
    multiCurrency: true,
    foreignLlcFriendly: true,
    highlight: false,
    notes:
      "Provides US receiving account numbers (not a full bank account). Built for marketplace sellers (Amazon, Fiverr, Upwork). Free to receive; 1\u20132% FX markup on withdrawals. No US LLC required. Cannot send ACH/wires like a real bank.",
  },
  {
    name: "Lili",
    type: "Online",
    monthlyFee: "Free",
    usVisitRequired: false,
    ssnRequired: false,
    multiCurrency: false,
    foreignLlcFriendly: true,
    highlight: false,
    notes:
      "Accepts foreign LLC owners with 100% remote application. No SSN required. May accept a foreign business address (one of few). Good for freelancers and solo entrepreneurs. Gaining traction among non-residents.",
  },
  {
    name: "Airwallex",
    type: "Online",
    monthlyFee: "Free",
    usVisitRequired: false,
    ssnRequired: false,
    multiCurrency: true,
    foreignLlcFriendly: true,
    highlight: false,
    notes:
      "Opens local routing details in 20+ currencies and 60+ markets. Can open a USD account even without a US entity. Free Explore plan; Grow plan $99/mo. Ideal for businesses operating across multiple countries.",
  },
  {
    name: "Wells Fargo",
    type: "Traditional",
    monthlyFee: "$10/mo",
    usVisitRequired: true,
    ssnRequired: false,
    multiCurrency: false,
    foreignLlcFriendly: true,
    highlight: false,
    notes:
      "Most foreigner-friendly of the big US banks. Does NOT require SSN/ITIN for business accounts. Requires in-person branch visit. Visit a branch in a major city (CA, NY, TX) experienced with international clients.",
  },
  {
    name: "Chase Business",
    type: "Traditional",
    monthlyFee: "$15/mo",
    usVisitRequired: true,
    ssnRequired: true,
    multiCurrency: false,
    foreignLlcFriendly: false,
    highlight: false,
    notes:
      "Largest US bank network. Requires in-person visit and US residential address proof. More restrictive than Wells Fargo for non-residents. Difficult for fully remote foreign owners.",
  },
  {
    name: "Bank of America",
    type: "Traditional",
    monthlyFee: "$16/mo",
    usVisitRequired: true,
    ssnRequired: true,
    multiCurrency: false,
    foreignLlcFriendly: false,
    highlight: false,
    notes:
      "Nationwide branch access. Requires in-person visit and SSN/ITIN. More bureaucratic than Wells Fargo for foreign-owned LLCs. Waivable fees with minimum balance.",
  },
];

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function UsBankAccountGuideClient() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides/start-your-business" className="hover:text-blue-600">
              Guides
            </Link>
            <span>/</span>
            <span className="text-gray-600">US Bank Account</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Banking Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              How to Open a US Bank Account for Your Foreign-Owned LLC
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A US business bank account is essential for receiving payments,
              paying expenses, and managing your LLC&apos;s finances. Here&apos;s
              how to get one as a non-resident.
            </p>
          </div>

          {/* Key summary box */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
            <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex items-start gap-2">
                <CheckIcon />
                You do NOT need to visit the US to open a business bank account
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Mercury and Relay accept foreign-owned LLCs fully online
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                You need your EIN, Articles of Organization, and Operating Agreement
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Your registered agent address can serve as your US address
              </li>
            </ul>
          </div>

          {/* What you need */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              What You Need to Open a US Business Bank Account
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Every bank has slightly different requirements, but most will ask
              for the following documents:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "EIN (Employer Identification Number)",
                  desc: "Your LLC's tax ID number from the IRS. This is the single most important document. You cannot open a US bank account without it.",
                },
                {
                  title: "Articles of Organization",
                  desc: "The document filed with your state when your LLC was formed. Proves your LLC legally exists.",
                },
                {
                  title: "Operating Agreement",
                  desc: "Internal document outlining ownership and management. Many banks require this even for single-member LLCs.",
                },
                {
                  title: "Government-Issued ID",
                  desc: "Passport for all members/owners. Some banks also accept national ID cards from certain countries.",
                },
                {
                  title: "Proof of Address",
                  desc: "Utility bill, bank statement, or government document showing your home address. Some banks accept your registered agent address for the business address.",
                },
                {
                  title: "EIN Confirmation Letter (CP 575)",
                  desc: "The official IRS letter confirming your EIN. If you applied by fax, this arrives 4-8 weeks after application.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gray-50 border border-gray-100 rounded-xl p-4"
                >
                  <h3 className="text-sm font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-5 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Don&apos;t have an EIN yet?</strong> Foreign-owned LLCs
                must apply by mail or fax (online applications require an SSN/ITIN).
                Processing takes 4-8 weeks.
              </p>
              <Link
                href="/filer/ss4"
                className="inline-flex items-center gap-1.5 mt-2 text-sm font-medium text-blue-600 hover:text-blue-700"
              >
                Apply for your EIN with our SS-4 filer
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </div>
          </section>

          {/* Bank comparison table */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Bank Comparison for Foreign LLC Owners
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Not all banks welcome foreign-owned LLCs. Here&apos;s how the most
              popular options compare.
            </p>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">
                      Bank
                    </th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">
                      Type
                    </th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">
                      Monthly Fee
                    </th>
                    <th className="text-center py-3 px-3 font-semibold text-gray-700">
                      No US Visit
                    </th>
                    <th className="text-center py-3 px-3 font-semibold text-gray-700">
                      No SSN
                    </th>
                    <th className="text-center py-3 px-3 font-semibold text-gray-700">
                      Multi-Currency
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {BANKS.map((bank) => (
                    <tr
                      key={bank.name}
                      className={`border-b border-gray-100 ${
                        bank.highlight ? "bg-blue-50/50" : ""
                      }`}
                    >
                      <td className="py-3 px-3 font-medium text-gray-800">
                        {bank.name}
                        {bank.highlight && (
                          <span className="ml-2 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-gray-600">{bank.type}</td>
                      <td className="py-3 px-3 text-gray-600">
                        {bank.monthlyFee}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {!bank.usVisitRequired ? (
                          <CheckIcon />
                        ) : (
                          <XIcon />
                        )}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {!bank.ssnRequired ? (
                          <CheckIcon />
                        ) : (
                          <XIcon />
                        )}
                      </td>
                      <td className="py-3 px-3 text-center">
                        {bank.multiCurrency ? (
                          <CheckIcon />
                        ) : (
                          <XIcon />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {BANKS.map((bank) => (
                <div
                  key={bank.name}
                  className={`border rounded-xl p-4 ${
                    bank.highlight
                      ? "border-blue-300 bg-blue-50/50"
                      : "border-gray-200"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-800">{bank.name}</h3>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      {bank.type}
                    </span>
                    {bank.highlight && (
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{bank.notes}</p>
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                    <div>
                      Monthly: <strong>{bank.monthlyFee}</strong>
                    </div>
                    <div>
                      US visit:{" "}
                      <strong>
                        {bank.usVisitRequired ? "Required" : "Not needed"}
                      </strong>
                    </div>
                    <div>
                      SSN/ITIN:{" "}
                      <strong>
                        {bank.ssnRequired ? "Required" : "Not needed"}
                      </strong>
                    </div>
                    <div>
                      Multi-currency:{" "}
                      <strong>{bank.multiCurrency ? "Yes" : "No"}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Detailed bank reviews */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Bank-by-Bank Breakdown
            </h2>

            {/* Mercury */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Mercury -- Best for Remote Founders
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Mercury is the most popular banking choice for foreign-owned
                LLCs. The entire application process is online -- no US visit,
                no SSN, no ITIN required. Mercury provides a full US checking
                account with ACH, wire transfers, and a debit card.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  100% online application
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  No SSN or ITIN required
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Free ACH transfers and incoming wires
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Integrates with Stripe, QuickBooks, Xero
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Treasury feature for earning yield on idle cash
                </li>
              </ul>
            </div>

            {/* Relay */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Relay -- Best for Budgeting
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Relay offers free business banking with up to 20 individual
                checking accounts, making it easy to separate funds for taxes,
                operations, and savings. Also fully online-friendly for
                foreign owners.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Up to 20 separate checking accounts
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  No monthly fees, no minimum balance
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Profit First budgeting built in
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Integrates with QuickBooks and Xero
                </li>
              </ul>
            </div>

            {/* Wise */}
            <div className="mb-6 pb-6 border-b border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Wise Business -- Best for Multi-Currency
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Wise Business lets you hold and convert 40+ currencies at the
                real mid-market exchange rate. Ideal if you receive payments
                from international customers or need to pay contractors in
                different currencies.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Hold 40+ currencies in one account
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Mid-market exchange rates (no markup)
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Local bank details in USD, EUR, GBP, and more
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Batch payments for contractors
                </li>
              </ul>
            </div>

            {/* Traditional banks */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Traditional Banks (Chase, Bank of America)
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Traditional banks offer the largest ATM and branch networks,
                but they are significantly harder for foreign LLC owners.
                Most require an in-person visit to a US branch and an SSN or
                ITIN. Consider these only if you plan to visit the US
                regularly or already have an ITIN.
              </p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <XIcon />
                  In-person branch visit usually required
                </li>
                <li className="flex items-start gap-2">
                  <XIcon />
                  SSN or ITIN typically required
                </li>
                <li className="flex items-start gap-2">
                  <XIcon />
                  Monthly maintenance fees ($15-16/mo)
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Largest ATM and branch network in the US
                </li>
              </ul>
            </div>
          </section>

          {/* Step by step process */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Step-by-Step: Opening Your Account
            </h2>

            <ol className="space-y-6">
              {[
                {
                  step: 1,
                  title: "Get Your EIN First",
                  desc: "You cannot open a US bank account without an EIN. If you don't have one yet, apply using Form SS-4. Foreign owners must apply by fax or mail (4-8 weeks processing).",
                  link: { href: "/filer/ss4", text: "Apply for EIN" },
                },
                {
                  step: 2,
                  title: "Gather Your Documents",
                  desc: "Prepare your EIN confirmation letter (CP 575), Articles of Organization, Operating Agreement, and a valid passport. Having all documents ready speeds up the application.",
                },
                {
                  step: 3,
                  title: "Choose Your Bank",
                  desc: "For most foreign LLC owners, Mercury or Relay is the best choice. If you need multi-currency support, consider Wise Business. Only choose a traditional bank if you can visit the US in person.",
                },
                {
                  step: 4,
                  title: "Complete the Online Application",
                  desc: "Fill out the application form with your LLC details, upload your documents, and verify your identity. Most online banks complete the review within 1-5 business days.",
                },
                {
                  step: 5,
                  title: "Fund Your Account",
                  desc: "Once approved, make an initial deposit. You can typically fund via wire transfer from your home country or through a Wise transfer. Some banks have no minimum deposit.",
                },
                {
                  step: 6,
                  title: "Set Up Your Payment Processor",
                  desc: "Connect your bank account to Stripe, PayPal, or your preferred payment processor to start accepting customer payments through your LLC.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                    {item.link && (
                      <Link
                        href={item.link.href}
                        className="inline-flex items-center gap-1 mt-1 text-sm font-medium text-blue-600 hover:text-blue-700"
                      >
                        {item.link.text}
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Tips for foreign owners */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Tips for Foreign LLC Owners
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  US Address Requirement
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Some banks require a US address for your business. Your
                  registered agent address (included with most formation
                  services) typically works for this purpose. You do NOT need
                  to live in the US.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  SSN/ITIN Not Always Needed
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Online-friendly banks like Mercury and Relay do not require
                  an SSN or ITIN. Traditional banks almost always do. If you
                  do not have either, stick with online banking options.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  Keep Business and Personal Funds Separate
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Never mix personal and business funds. This protects your
                  LLC&apos;s limited liability status and makes tax reporting much
                  easier. Use your US business account exclusively for LLC
                  transactions.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  Application Denials
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  If one bank denies your application, try another. Each bank
                  has different risk criteria. Mercury tends to be the most
                  accepting of foreign-owned LLCs, but Relay and Wise are also
                  good alternatives.
                </p>
              </div>
            </div>
          </section>

          {/* doola CTA */}
          <section className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-6 md:p-8 mb-6 text-white">
            <h2 className="text-xl font-bold mb-2">
              Need Help Setting Up Your Bank Account?
            </h2>
            <p className="text-sm text-indigo-100 mb-5 max-w-2xl">
              doola&apos;s Business-in-a-Box package includes bank account setup
              assistance as part of their formation service. They guide you
              through the entire process -- from LLC formation to EIN to
              opening your bank account.
            </p>
            <a
              href="https://partnersps.doola.com/foreignllctax"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 transition-colors text-sm shadow-lg"
            >
              Get Started with doola
              <svg
                className="ml-2 w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </section>

          {/* Related resources */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Related Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "Apply for Your EIN (Form SS-4)",
                  desc: "Get your LLC's tax ID number from the IRS -- required before opening any bank account.",
                  href: "/filer/ss4",
                },
                {
                  title: "Start Your Foreign-Owned LLC",
                  desc: "Step-by-step guide from formation to first tax filing.",
                  href: "/guides/start-your-business",
                },
                {
                  title: "File Form 5472",
                  desc: "Required annual filing for every foreign-owned single-member LLC.",
                  href: "/filer",
                },
                {
                  title: "Penalty Calculator",
                  desc: "See what happens if you miss your filing deadline.",
                  href: "/tools/penalty-calculator",
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:bg-blue-50/30 transition-colors"
                >
                  <h3 className="text-sm font-semibold text-blue-600 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
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
