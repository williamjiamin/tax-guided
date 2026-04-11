"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/* ------------------------------------------------------------------ */
/*  Shared icon                                                        */
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

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function MercuryBankGuideClient() {
  const TOC = [
    { id: "why-mercury", label: "Why Mercury?" },
    { id: "prerequisites", label: "Prerequisites" },
    { id: "entry-point", label: "Important: Choose the Right Entry Point" },
    { id: "application-process", label: "Application Process — Step by Step" },
    { id: "after-approval", label: "After Approval" },
    { id: "account-fees", label: "Account Fees" },
    { id: "tips-for-approval", label: "Tips for Approval" },
    { id: "faq", label: "FAQ" },
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
            <span className="text-gray-600">Mercury Bank Guide</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Banking Setup
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Mercury Bank Account Guide — Opening a US Business Bank Account
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Complete walkthrough for opening a Mercury business bank account as a foreign LLC
              owner. Covers requirements, application steps, document preparation, and approval tips.
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
                Mercury is free to open — no minimum balance, no monthly fees, no annual fees
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                No SSN or ITIN required — supports foreign-owned US companies
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                $250 deposit bonus when depositing $10,000 within 90 days (requires referral link)
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Checking + Savings accounts (savings yields 1-2% APY)
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Integrates with Stripe, PayPal, Amazon, Shopify, QuickBooks, Gusto
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

          {/* Why Mercury? */}
          <section id="why-mercury" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why Mercury?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Mercury is a free business banking platform designed for startups and online businesses.
              It is one of the few US banks that actively supports foreign-owned US companies without
              requiring an SSN or ITIN. The platform offers an excellent UI/UX, FDIC insurance through
              partner banks, and seamless integrations with the tools you already use.
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Key Benefits</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>No minimum balance requirement</li>
                  <li>No monthly or annual fees</li>
                  <li>Supports non-US residents with US LLCs</li>
                  <li>FDIC insured through partner banks (up to $250K)</li>
                  <li>Clean, modern user interface</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Integrations</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>Stripe, PayPal, Shopify, Amazon</li>
                  <li>QuickBooks, Gusto</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">Transfer Fees</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>ACH transfers: free</li>
                  <li>Domestic wire: $5 per transfer</li>
                  <li>International wire: $20 per transfer</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Prerequisites */}
          <section id="prerequisites" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Prerequisites
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Before you start the Mercury application, make sure you have the following documents
              ready:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>Certificate of Formation</strong> — from your state of formation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>EIN confirmation</strong> — SS-4 approval letter or 147C letter from the IRS</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>Address proof</strong> — matching your LLC formation address (water/electric bill, credit card statement, or HK bank statement)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span><strong>Passport</strong> — valid, unexpired</span>
              </li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-4">
              <p className="text-sm text-blue-900">
                <strong>Tip:</strong> If you registered your LLC via Stripe Atlas, you can access your
                Certificate of Formation and EIN letter directly from your Atlas dashboard.
              </p>
            </div>
          </section>

          {/* Important: Choose the Right Entry Point */}
          <section id="entry-point" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Important: Choose the Right Entry Point
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
              <p className="text-sm text-amber-900">
                <strong>Warning:</strong> If you registered your LLC via Stripe Atlas, do NOT use the
                regular Mercury signup link. Instead, go through your Atlas dashboard: Bank &rarr;
                Mercury &rarr; Apply. You will still receive the $250 deposit bonus through this path.
              </p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              If you did NOT register via Stripe Atlas, you must use a referral or invitation link to
              qualify for the $250 deposit bonus. The bonus requires depositing $10,000 within 90 days
              of opening the account.
            </p>
          </section>

          {/* Application Process — Step by Step */}
          <section id="application-process" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Application Process — Step by Step
            </h2>
            <div className="space-y-5">
              {/* Step 1 */}
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="text-sm font-bold text-gray-900 mb-1">Step 1: Create Account</h3>
                <p className="text-sm text-gray-600">
                  Sign up on Mercury and choose a display name. This is just a nickname for your
                  account — it is not legally binding and can be changed later.
                </p>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="text-sm font-bold text-gray-900 mb-1">Step 2: Select Interests</h3>
                <p className="text-sm text-gray-600">
                  Mercury will ask about your interests. This does not affect your approval — pick
                  anything that seems relevant.
                </p>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="text-sm font-bold text-gray-900 mb-1">Step 3: Company Information</h3>
                <p className="text-sm text-gray-600">
                  Enter your LLC name, EIN, state of formation, and a brief description of your
                  business activities.
                </p>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="text-sm font-bold text-gray-900 mb-1">Step 4: Addresses</h3>
                <p className="text-sm text-gray-600 mb-2">
                  You will need to provide two addresses:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li><strong>Registered agent address</strong> — from your formation service</li>
                  <li><strong>Principal business address</strong> — your actual office or home address (must match your address proof document)</li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mt-2">
                  <p className="text-sm text-amber-900">
                    <strong>Important:</strong> These two addresses are different. Do not confuse your
                    registered agent address with your principal business address.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="text-sm font-bold text-gray-900 mb-1">Step 5: Upload Documents</h3>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>Certificate of Formation</li>
                  <li>SS-4 approval letter or 147C letter (EIN proof)</li>
                </ul>
                <p className="text-sm text-gray-500 mt-1">
                  Both documents are available from your Stripe Atlas dashboard if applicable.
                </p>
              </div>

              {/* Step 6 */}
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="text-sm font-bold text-gray-900 mb-1">Step 6: Business Activity</h3>
                <p className="text-sm text-gray-600">
                  Mercury will ask about your expected first deposit source and revenue timeline.
                  Select the options that best match your business situation.
                </p>
              </div>

              {/* Step 7 */}
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="text-sm font-bold text-gray-900 mb-1">Step 7: Address Verification</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Upload a document proving that your name and address match. Best options:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li><strong>HK bank statement</strong> (English — highest success rate)</li>
                  <li>International driver&apos;s license translation</li>
                  <li>Utility bill with English translation</li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mt-2">
                  <p className="text-sm text-amber-900">
                    <strong>Warning:</strong> Chinese-only documents often get rejected because Mercury
                    cannot match Chinese characters to your English address. Always add an English
                    translation to Chinese documents before submitting them.
                  </p>
                </div>
              </div>

              {/* Step 8 */}
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="text-sm font-bold text-gray-900 mb-1">Step 8: Review &amp; Submit</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Double-check everything before submitting. Consider making a deposit to accelerate
                  the review process:
                </p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                  <li>Deposit methods: international credit card, Wise, or PayPal</li>
                  <li>With deposit: approval typically takes ~1 day</li>
                  <li>Without deposit: approval takes longer</li>
                </ul>
              </div>
            </div>
          </section>

          {/* After Approval */}
          <section id="after-approval" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              After Approval
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Once your application is approved, your Mercury account is ready to use. Here are the
              key things to set up:
            </p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Bind to Stripe for payment collection</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Explore Mercury&apos;s perks/benefits program for startup discounts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Set up Checking + Savings accounts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Order virtual and physical cards for business expenses</span>
              </li>
            </ul>
          </section>

          {/* Account Fees */}
          <section id="account-fees" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Account Fees
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Fee Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Account opening", amount: "Free" },
                    { type: "Monthly fee", amount: "Free" },
                    { type: "Minimum balance", amount: "None" },
                    { type: "ACH transfers", amount: "Free" },
                    { type: "Domestic wire", amount: "$5/each" },
                    { type: "International wire", amount: "$20/each" },
                    { type: "Annual fee", amount: "None" },
                  ].map((row) => (
                    <tr key={row.type} className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium text-gray-800">{row.type}</td>
                      <td className="py-3 px-3 text-gray-600">{row.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Tips for Approval */}
          <section id="tips-for-approval" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Tips for Approval
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Use English-language address proofs — HK bank statement is ideal</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Ensure name spelling matches exactly across all documents</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Have a professional website ready — Mercury may review it</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Business description should be clear and legitimate</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Don&apos;t rush — incomplete applications get rejected</span>
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section id="faq" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              FAQ
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Do I need an SSN or ITIN?</h3>
                <p className="text-sm text-gray-600">
                  No. Mercury supports foreign-owned US companies and does not require an SSN or ITIN
                  to open an account.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Can I open an account from outside the US?</h3>
                <p className="text-sm text-gray-600">
                  Yes. The entire application process is 100% online. You do not need to visit the US
                  or any physical branch.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">What if my application is rejected?</h3>
                <p className="text-sm text-gray-600">
                  Contact Mercury support. Rejections are often fixable by providing additional
                  documentation or clarifying your business activities.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Can I have multiple accounts?</h3>
                <p className="text-sm text-gray-600">
                  Yes. Mercury offers both Checking and Savings accounts. You can use both simultaneously.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">Is my money safe?</h3>
                <p className="text-sm text-gray-600">
                  Yes. Mercury accounts are FDIC insured up to $250,000 through their partner banks.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
