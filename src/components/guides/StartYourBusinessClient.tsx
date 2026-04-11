"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GuideFlowChart } from "@/components/guides/GuideFlowChart";

/* ------------------------------------------------------------------ */
/*  Step content components                                            */
/* ------------------------------------------------------------------ */

function Step1() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose a Formation Service</h2>
      <p className="text-gray-500 text-sm mb-6">
        These platforms handle LLC registration, EIN applications, and registered agent services for international founders.
      </p>

      {/* doola — primary recommended option */}
      <div className="bg-white rounded-2xl border-2 border-indigo-600 shadow-lg p-5 relative">
        <div className="absolute -top-3 left-5 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Recommended — 10% OFF
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">doola</h3>
        <p className="text-sm text-gray-500 mb-4">
          All-in-one Business-in-a-Box for LLCs. Beyond formation, doola handles bookkeeping, tax filings, sales tax, and gives you a dedicated account manager and free CPA consultation.
        </p>
        <ul className="space-y-1.5 mb-5">
          {[
            "LLC formation + EIN + registered agent",
            "Dedicated bookkeeping (in-house)",
            "Annual state & IRS tax filings",
            "Sales tax registration",
            "Free CPA consultation",
            "10,000+ companies formed globally",
          ].map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <a
          href="https://partnersps.doola.com/foreignllctax"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors text-sm"
        >
          Get Started with doola — 10% OFF →
        </a>
        <p className="text-xs text-green-700 text-center mt-2">Use code <span className="font-bold">FOREIGNLLC10</span> at checkout for 10% off</p>
      </div>

      {/* Firstbase — secondary option */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 mt-4">
        <h3 className="text-lg font-bold text-gray-900 mb-1">Firstbase</h3>
        <p className="text-sm text-gray-500 mb-4">
          Built for international founders. Handles LLC formation, EIN, registered agent, and U.S. address — all online.
        </p>
        <ul className="space-y-1.5 mb-5">
          {[
            "LLC formation in any U.S. state",
            "EIN application included",
            "Registered agent for 1 year",
            "U.S. mailing address",
            "Compliance calendar",
          ].map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
              <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
        <a
          href="https://get.firstbase.io/foreignllctax"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center py-3 border-2 border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors text-sm"
        >
          Visit Firstbase →
        </a>
      </div>

      <p className="text-xs text-gray-400 text-center mt-4">
        <Link href="/partners" className="text-blue-500 hover:underline">View all recommended services →</Link>
      </p>

      <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
        <p className="text-sm text-amber-800">
          <strong>Tip:</strong> Most foreign founders choose Delaware or Wyoming for LLC formation. Delaware has the most established business law; Wyoming has no state income tax and lower fees.
        </p>
      </div>
    </div>
  );
}

function Step2() {
  const items = [
    {
      title: "Articles of Organization",
      desc: "Your formation service files this with the state. It creates your LLC legally. Takes 1-5 business days depending on the state.",
    },
    {
      title: "EIN (Employer Identification Number)",
      desc: "Your LLC's tax ID from the IRS. Required for banking, hiring, and tax filing. Foreign owners must apply by mail or fax (takes 4-8 weeks).",
      faxTip: true,
    },
    {
      title: "Registered Agent",
      desc: "A U.S. person or company that receives legal mail on your LLC's behalf. Required in every state. Usually included with formation services.",
    },
    {
      title: "Operating Agreement",
      desc: "Internal document outlining ownership, profit sharing, and management. Not filed with the state but required by most banks.",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Register Your LLC</h2>
      <p className="text-gray-500 text-sm mb-6">What happens during the formation process.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item) => (
          <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            {item.faxTip && (
              <a
                href="https://ref.alohi.com/foreignllctax"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-teal-600 hover:text-teal-700"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2z" />
                </svg>
                Need to fax? Use Alohi Fax to send online →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Step3() {
  const banks = [
    { name: "Mercury", desc: "Popular with startups. No monthly fees. Accepts foreign-owned LLCs. Apply online with EIN + Articles of Organization." },
    { name: "Relay", desc: "Free business banking with multiple accounts. Good for separating operating funds from tax reserves." },
    { name: "Wise", desc: "Multi-currency account. Great if you receive payments in multiple currencies. Lower international transfer fees." },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Open a U.S. Bank Account</h2>
      <p className="text-gray-500 text-sm mb-6">
        You need a U.S. business bank account to receive payments and manage finances.
      </p>

      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">Online-Friendly Banks for Non-Residents</h3>
        <ul className="space-y-3 text-sm text-gray-600">
          {banks.map((b) => (
            <li key={b.name} className="flex items-start gap-2">
              <span className="font-semibold text-gray-800 w-20 flex-shrink-0">{b.name}</span>
              <span>{b.desc}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
        <p className="text-sm text-blue-800">
          <strong>What you need:</strong> EIN confirmation letter, Articles of Organization, Operating Agreement, valid passport, and proof of address. Some banks may require a short video call.
        </p>
      </div>
    </div>
  );
}

function Step4() {
  const providers = [
    { title: "Stripe", desc: "The most popular payment processor for online businesses. Supports 135+ currencies. Integrates with everything." },
    { title: "PayPal", desc: "Widely recognized. Good for international buyers who prefer PayPal checkout. Business accounts available for LLCs." },
    { title: "Shopify Payments", desc: "Built-in if you use Shopify. Powered by Stripe. No additional setup needed for e-commerce stores." },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Set Up Payments</h2>
      <p className="text-gray-500 text-sm mb-6">Accept payments from customers worldwide.</p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {providers.map((item) => (
          <div key={item.title} className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="text-sm font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Step5() {
  const forms = [
    { form: "Form 5472 + Pro Forma 1120", price: "$49", desc: "Required for every foreign-owned single-member LLC — even with zero income.", link: "/filer" },
    { form: "Form 1065 (Partnership)", price: "$199", desc: "Required if your LLC has 2+ members. Reports partnership income and deductions.", link: "/services/partnership-filing" },
    { form: "Form W-7 (ITIN)", price: "$99", desc: "ITIN application — needed if you don't have a Social Security Number.", link: "/services/itin-application" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Understand Your Tax Obligations</h2>
      <p className="text-gray-500 text-sm mb-6">
        This is where most foreign LLC owners get stuck — and where we help.
      </p>

      <div className="bg-white border-2 border-blue-600 rounded-2xl p-6 mb-4">
        <h3 className="text-lg font-bold text-gray-900 mb-4">What You Must File Every Year</h3>
        <div className="space-y-3 mb-6">
          {forms.map((item) => (
            <div key={item.form} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.999L13.732 4.001c-.77-1.333-2.694-1.333-3.464 0L3.34 16.001C2.57 17.334 3.532 19 5.072 19z" />
              </svg>
              <div>
                <Link href={item.link} className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                  {item.form} — {item.price}
                </Link>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/filer"
            className="flex-1 text-center py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Start Filing — $49
          </Link>
          <Link
            href="/tools/quick-tax-check"
            className="flex-1 text-center py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors text-sm"
          >
            Not Sure? Run the 5-Minute Check
          </Link>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-xl p-4">
        <p className="text-sm text-red-800">
          <strong>Deadline:</strong> Form 5472 is due April 15 (or the extended deadline if you file for an extension). Missing the deadline triggers an automatic <strong>$25,000 penalty</strong> per form, per year.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main wizard component                                              */
/* ------------------------------------------------------------------ */

const STEP_COMPONENTS = [Step1, Step2, Step3, Step4, Step5];

export function StartYourBusinessClient() {
  const [currentStep, setCurrentStep] = useState(1);

  const StepContent = STEP_COMPONENTS[currentStep - 1];

  const goNext = () => setCurrentStep((s) => Math.min(s + 1, 5));
  const goBack = () => setCurrentStep((s) => Math.max(s - 1, 1));

  return (
    <>
      <Header />
      <main className="flex flex-col" style={{ minHeight: "calc(100vh - 64px)" }}>
        {/* Hero bar */}
        <div className="bg-gradient-to-r from-blue-50 to-white border-b border-gray-100 px-6 py-5">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-1.5 mb-3">
              <span className="text-xs font-semibold text-blue-600">FREE GUIDE</span>
              <span className="text-xs text-gray-400">Step {currentStep} of 5</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              How to Start Your Foreign-Owned U.S. LLC
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              From choosing a formation service to filing your first tax return.
            </p>
          </div>
        </div>

        {/* Two-panel layout */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left panel: step content */}
          <div className="w-full lg:w-[55%] overflow-y-auto flex flex-col">
            <div className="flex-1 p-6 sm:p-8 max-w-2xl">
              <StepContent />
            </div>

            {/* Navigation buttons */}
            <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  onClick={goBack}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back
                </button>
              ) : (
                <div />
              )}

              {currentStep < 5 ? (
                <button
                  onClick={goNext}
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Next
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <Link
                  href="/filer"
                  className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Filing
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>

          {/* Right panel: flow chart */}
          <div className="hidden lg:flex lg:w-[45%] flex-col border-l border-gray-200 bg-gray-50 items-center justify-center">
            <GuideFlowChart currentStep={currentStep} onStepClick={setCurrentStep} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
