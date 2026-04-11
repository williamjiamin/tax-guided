"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0"
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
      className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function Itin1040NrConnectionGuideClient() {
  const TOC = [
    { id: "chicken-egg", label: "The Chicken-and-Egg Problem" },
    { id: "when-itin", label: "When You Need an ITIN for 1040-NR" },
    { id: "not-for-5472", label: "ITIN Is NOT Needed for Form 5472 Alone" },
    { id: "form-w7", label: "How to Apply: Form W-7" },
    { id: "three-ways", label: "Three Ways to Submit" },
    { id: "timeline", label: "Timeline and What to Expect" },
    { id: "common-mistakes", label: "Common ITIN Mistakes" },
    { id: "help", label: "ForeignLLCTax.com Can Help" },
    { id: "coming-soon", label: "Coming Soon: Combined Filing" },
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
            <span className="text-gray-600">ITIN + 1040-NR</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100/80 text-green-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Step-by-Step Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              ITIN and Form 1040-NR: How to Get Your Tax ID When Filing as a Nonresident
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              You need an ITIN to file Form 1040-NR, but to get an ITIN you need to file a tax
              return. Here is how to solve that circular problem — step by step.
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
                You apply for an ITIN and file Form 1040-NR at the same time — they go in the same envelope
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Use Form W-7 to apply for your ITIN and attach your completed 1040-NR
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                You do NOT need an ITIN if you only file Form 5472 — that uses a reference ID number
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Processing takes 7-11 weeks; use a Certified Acceptance Agent to avoid mailing your passport
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

          {/* Section 1: The Chicken-and-Egg Problem */}
          <section id="chicken-egg" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              The Chicken-and-Egg Problem
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              To file Form 1040-NR (the US tax return for nonresident aliens), you need a tax
              identification number — either a Social Security Number (SSN) or an Individual
              Taxpayer Identification Number (ITIN). Most foreign LLC owners who are nonresidents
              do not have an SSN, and are not eligible for one.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              So you need an ITIN. But here is the catch: to get an ITIN, the IRS requires you to
              submit your application with a federal tax return. You cannot apply for an ITIN by
              itself without attaching a return.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
              <h3 className="text-sm font-semibold text-green-800 mb-2">
                The Solution: Apply Simultaneously
              </h3>
              <p className="text-sm text-green-800 leading-relaxed">
                You submit your ITIN application (Form W-7) and your completed Form 1040-NR
                together in the same package. The IRS processes the W-7 first, assigns your ITIN,
                and then processes your 1040-NR using the newly assigned number. Everything goes
                in one envelope to one address.
              </p>
            </div>
          </section>

          {/* Section 2: When You Need an ITIN for 1040-NR */}
          <section id="when-itin" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              When You Need an ITIN for 1040-NR
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Not every foreign LLC owner needs an ITIN. You need one specifically when you are
              required to file Form 1040-NR. Here are the scenarios:
            </p>
            <div className="space-y-3 mb-4">
              {[
                {
                  title: "You are a nonresident alien filing Form 1040-NR",
                  desc: "The 1040-NR is the individual income tax return for nonresidents. If you must file it, you need a taxpayer ID.",
                },
                {
                  title: "You don't have and aren't eligible for an SSN",
                  desc: "SSNs are only available to individuals authorized to work in the US. If you do not have work authorization, an ITIN is your only option.",
                },
                {
                  title: "Your LLC is engaged in US trade or business (ECI)",
                  desc: "If your LLC earns effectively connected income, you are required to file 1040-NR to report that income and pay tax on it.",
                },
                {
                  title: "You received US-source FDAP income with insufficient withholding",
                  desc: "If you received fixed, determinable, annual, or periodical income (interest, dividends, rents, royalties) from US sources and need to reconcile withholding, you file 1040-NR.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start gap-2 mb-1">
                    <CheckIcon />
                    <h3 className="text-sm font-semibold text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600 ml-6">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <div className="flex items-start gap-2">
                <WarningIcon />
                <p className="text-sm text-amber-800">
                  <strong>Important:</strong> You do NOT need an ITIN just for filing Form 5472.
                  The Form 5472 (information return for foreign-owned LLCs) uses a reference ID
                  number, not an ITIN. See the next section for details.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: ITIN Is NOT Needed for Form 5472 Alone */}
          <section id="not-for-5472" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              ITIN Is NOT Needed for Form 5472 Alone
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              This is one of the most common points of confusion. Here is the distinction:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-800 mb-2">Form 5472 Only</h3>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Uses a reference ID number
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Attached to a pro-forma Form 1120
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    No ITIN required
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Filed when LLC has no US trade or business
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-blue-800 mb-2">Form 1040-NR</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Requires SSN or ITIN
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Individual income tax return
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    ITIN applied for via Form W-7
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Filed when LLC has ECI or FDAP income
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              If your LLC has no ECI and you only file Form 5472 + pro-forma 1120, you use a
              reference ID number on the 5472. No ITIN application needed. You only need an
              ITIN when filing Form 1040-NR as an individual.
            </p>
          </section>

          {/* Section 4: How to Apply: Form W-7 */}
          <section id="form-w7" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              How to Apply: Form W-7
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The ITIN application is Form W-7 (Application for IRS Individual Taxpayer
              Identification Number). Here is what you need to assemble:
            </p>
            {[
              { step: "1", title: "Complete Form W-7", desc: "Fill out the W-7 with your personal information, reason for applying (check box (a) — Nonresident alien filing a US tax return), and your foreign address." },
              { step: "2", title: "Prepare your completed Form 1040-NR", desc: "Your 1040-NR must be fully completed. The IRS will reject a W-7 without a valid tax return. Write 'Applied For' where the SSN/ITIN would go." },
              { step: "3", title: "Gather identity documents", desc: "You need your passport — either the original or a certified copy from the issuing agency. The IRS does not accept notarized copies. A passport is the only standalone ID document accepted." },
              { step: "4", title: "Mail everything together", desc: "Send W-7, 1040-NR, and identity documents to: IRS ITIN Operation, P.O. Box 149342, Austin, TX 78714-9342. Use a trackable shipping method." },
            ].map((item) => (
              <div key={item.step} className="bg-gray-50 rounded-xl p-4 mb-3">
                <div className="flex items-start gap-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-600 text-white text-xs font-bold flex-shrink-0">{item.step}</span>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Section 5: Three Ways to Submit */}
          <section id="three-ways" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Three Ways to Submit
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The IRS offers three methods for submitting your W-7 application. Each has
              trade-offs in cost, convenience, and risk:
            </p>
            {[
              {
                title: "Option 1: Mail",
                tag: "Most Common",
                highlighted: false,
                desc: "Send your W-7 + completed 1040-NR + certified passport copy by mail to the IRS ITIN Operation in Austin, TX. This is the method most applicants use.",
                pros: ["No appointment needed", "Can be done from anywhere in the world"],
                cons: ["Processing takes 7-11 weeks", "Risk of passport loss in mail (use certified copy)"],
              },
              {
                title: "Option 2: IRS Taxpayer Assistance Center",
                tag: "In Person",
                highlighted: false,
                desc: "Visit a designated IRS Taxpayer Assistance Center in person with your original passport. The IRS agent verifies your identity on the spot, so you do not have to mail your passport.",
                pros: ["Keep your passport — identity verified in person", "Application errors can be corrected on the spot"],
                cons: ["Must be physically present in the US", "Only available at select IRS offices — appointment required"],
              },
              {
                title: "Option 3: Certified Acceptance Agent (CAA)",
                tag: "Recommended",
                highlighted: true,
                desc: "A Certified Acceptance Agent is a third party authorized by the IRS to verify your identity documents. They certify your passport so you never have to mail the original. CAAs can be located worldwide.",
                pros: ["Keep your passport — CAA certifies a copy", "Available internationally — no US trip required", "CAA can review your W-7 for errors before submission"],
                cons: ["Costs $50-200 for the CAA service fee"],
              },
            ].map((opt) => (
              <div
                key={opt.title}
                className={`rounded-xl p-5 border ${opt.highlighted ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"} mb-4`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-sm font-bold ${opt.highlighted ? "text-green-900" : "text-gray-900"}`}>{opt.title}</h3>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${opt.highlighted ? "text-green-700 bg-green-200" : "text-gray-500 bg-gray-200"}`}>{opt.tag}</span>
                </div>
                <p className={`text-sm leading-relaxed mb-3 ${opt.highlighted ? "text-green-800" : "text-gray-600"}`}>{opt.desc}</p>
                <div className="space-y-1.5 text-sm">
                  {opt.pros.map((p) => (
                    <div key={p} className="flex items-start gap-2 text-green-700"><CheckIcon /><span>{p}</span></div>
                  ))}
                  {opt.cons.map((c) => (
                    <div key={c} className={`flex items-start gap-2 ${opt.highlighted ? "text-amber-600" : "text-red-600"}`}>
                      {opt.highlighted ? <WarningIcon /> : <XIcon />}<span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Section 6: Timeline and What to Expect */}
          <section id="timeline" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Timeline and What to Expect
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              After the IRS receives your W-7 package, here is what happens:
            </p>
            {[
              { label: "Processing Time", value: "7-11 weeks", desc: "During peak season (January-April), processing may take longer. The IRS does not provide status updates by phone during this period." },
              { label: "ITIN Format", value: "9XX-XX-XXXX", desc: "Your ITIN will begin with digit 9 and have a 7 or 8 in the fourth position. It looks similar to an SSN but is distinctly formatted." },
              { label: "Notification", value: "IRS letter (CP565)", desc: "You will receive a letter with your assigned ITIN. Keep this letter — it is your official record of the number." },
              { label: "Tax Return Processing", value: "After ITIN assignment", desc: "The 1040-NR you attached will be processed after your ITIN is assigned. You do not need to refile the return separately." },
              { label: "Renewal", value: "Every 3 years if unused", desc: "If you do not use your ITIN on a federal tax return for three consecutive years, it expires. Renew by filing a new W-7." },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-4 mb-3">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-semibold text-gray-900">{item.label}</h3>
                  <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded-full">{item.value}</span>
                </div>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </section>

          {/* Section 7: Common ITIN Mistakes */}
          <section id="common-mistakes" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Common ITIN Mistakes
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              These are the errors we see most frequently with ITIN applications. Avoiding them
              can save you weeks of delay and potential rejection:
            </p>
            {[
              { mistake: "Mailing your original passport", why: "The IRS may hold your passport for 7-11 weeks during processing. If lost in transit, replacing a foreign passport is expensive and time-consuming. Use a Certified Acceptance Agent instead." },
              { mistake: "Submitting W-7 without a tax return", why: "A standalone W-7 will be rejected. The IRS requires a completed federal tax return (Form 1040-NR) attached to every W-7 application." },
              { mistake: "Using an expired ITIN from a previous year", why: "ITINs expire if not used on a return for three consecutive years. You must renew by submitting a new W-7 before filing. Filing with an expired ITIN will delay your return." },
              { mistake: "Applying for an ITIN when you only need Form 5472", why: "If your LLC has no US trade or business and you only file Form 5472 + pro-forma 1120, you do not need an ITIN at all. The 5472 uses a reference ID number." },
              { mistake: "Using notarized passport copies instead of certified copies", why: "The IRS does not accept notarized copies. Your passport copy must be certified by the issuing agency or verified by a Certified Acceptance Agent." },
              { mistake: "Not signing the W-7 or the 1040-NR", why: "Both forms must be signed and dated. An unsigned application is treated as incomplete and will be returned without processing." },
            ].map((item) => (
              <div key={item.mistake} className="bg-red-50 border border-red-200 rounded-xl p-4 mb-3">
                <div className="flex items-start gap-2 mb-1">
                  <XIcon />
                  <h3 className="text-sm font-semibold text-red-800">{item.mistake}</h3>
                </div>
                <p className="text-sm text-red-700 ml-6">{item.why}</p>
              </div>
            ))}
          </section>

          {/* Section 8: ForeignLLCTax.com Can Help */}
          <section id="help" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              ForeignLLCTax.com Can Help
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Whether you need an ITIN or just your annual Form 5472, we have guided filers:
            </p>
            <div className="space-y-4">
              {/* Green CTA - ITIN Filer */}
              <Link
                href="/filer/itin"
                className="block bg-green-50 border-2 border-green-300 rounded-xl p-5 hover:border-green-400 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-green-800 mb-1">
                      Need a W-7 / ITIN Application?
                    </h3>
                    <p className="text-sm text-green-700">
                      Use our guided ITIN filer to prepare your Form W-7 with step-by-step
                      instructions. We generate IRS-ready PDFs you can submit.
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-green-600 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>

              {/* Blue CTA - Form 5472 Filer */}
              <Link
                href="/filer"
                className="block bg-blue-50 border-2 border-blue-300 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-blue-800 mb-1">
                      Only Filing Form 5472? You Don't Need an ITIN
                    </h3>
                    <p className="text-sm text-blue-700">
                      If your LLC has no US trade or business, file your Form 5472 + pro-forma
                      1120 for $49. No ITIN, no W-7, no passport copies needed.
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </Link>
            </div>
          </section>

          {/* Section 9: Coming Soon */}
          <section id="coming-soon" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Coming Soon: Combined ITIN + 1040-NR + 5472 Filing
            </h2>
            <div className="bg-amber-50 border-2 border-amber-300 rounded-xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <h3 className="text-base font-bold text-amber-800 mb-1">
                    One Workflow for Everything
                  </h3>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    We are building a single workflow that handles your ITIN application (W-7),
                    1040-NR, and Form 5472 all in one place. Answer the questions once and we
                    generate every document you need.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2.5 rounded-lg border border-amber-300 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                />
                <button
                  type="button"
                  className="px-6 py-2.5 bg-amber-600 text-white text-sm font-semibold rounded-lg hover:bg-amber-700 transition-colors whitespace-nowrap"
                >
                  Notify Me
                </button>
              </div>
              <p className="text-xs text-amber-600 mt-2">
                No spam. We will only email you when the combined filer launches.
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
