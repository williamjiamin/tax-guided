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
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function B1VisaGuideClient() {
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
            <span className="text-gray-600">B-1 Visa</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Immigration Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              B-1 Business Visitor Visa Guide for Foreign LLC Owners
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Can you visit the US to manage your LLC? Understand what the B-1
              visa allows, what it doesn&apos;t, and the tax implications of
              your US visits.
            </p>
          </div>

          {/* Disclaimer banner */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-5 mb-10">
            <div className="flex items-start gap-3">
              <svg
                className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.999L13.732 4.001c-.77-1.333-2.694-1.333-3.464 0L3.34 16.001C2.57 17.334 3.532 19 5.072 19z"
                />
              </svg>
              <div>
                <h2 className="text-sm font-bold text-red-800 mb-1">
                  Immigration Disclaimer
                </h2>
                <p className="text-sm text-red-700 leading-relaxed">
                  This is general information only, not immigration or legal
                  advice. Immigration law is complex and fact-specific. Consult
                  an immigration attorney for your specific situation before
                  making any travel or visa decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Key summary */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
            <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex items-start gap-2">
                <CheckIcon />
                Owning a US LLC does NOT automatically give you the right to
                work in the US
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                B-1 allows business meetings, contract signing, and conferences
              </li>
              <li className="flex items-start gap-2">
                <XIcon />
                B-1 does NOT allow working, earning US-source income, or
                day-to-day management
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Visa Waiver Program (ESTA) available for citizens of 40+
                countries
              </li>
            </ul>
          </div>

          {/* What is B-1 */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              What Is the B-1 Business Visitor Visa?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The B-1 visa is a nonimmigrant visa that allows foreign nationals
              to enter the United States temporarily for business activities.
              It is NOT a work visa -- it is specifically for business visitors
              who maintain their employment and income outside the US.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              For foreign LLC owners, the B-1 can be used to visit the US for
              specific business purposes related to your LLC, but you cannot
              use it to work in the US or manage day-to-day operations from
              US soil.
            </p>
          </section>

          {/* What's allowed vs not */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              What You Can and Cannot Do on a B-1 Visa
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Allowed */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-4">
                  Allowed on B-1
                </h3>
                <ul className="space-y-2.5 text-sm text-green-900">
                  {[
                    "Attending business meetings and consultations",
                    "Negotiating contracts and deals",
                    "Signing contracts on behalf of your LLC",
                    "Attending conferences, trade shows, and seminars",
                    "Consulting with business associates or partners",
                    "Conducting market research",
                    "Participating in short-term training sessions",
                    "Settling an estate or handling litigation",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not allowed */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="text-sm font-bold text-red-800 uppercase tracking-wide mb-4">
                  NOT Allowed on B-1
                </h3>
                <ul className="space-y-2.5 text-sm text-red-900">
                  {[
                    "Working for a US employer or your own LLC",
                    "Earning US-source income or wages",
                    "Managing day-to-day business operations",
                    "Providing services to US clients in person",
                    "Being employed in any capacity in the US",
                    "Operating a business from a US location",
                    "Taking a position that would be filled by a US worker",
                    "Staying longer than 6 months per visit",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <XIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Duration and process */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Duration and Application Process
            </h2>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  Maximum Stay
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Up to 6 months per visit. Extensions are possible but not
                  guaranteed. Frequent long stays may raise scrutiny at the
                  border -- immigration officers may question whether you are
                  actually working in the US.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  B-1 Visa Application
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Apply at your local US embassy or consulate. You will need to
                  complete Form DS-160, pay the application fee ($185), and
                  attend a visa interview. Bring documentation showing the
                  purpose of your trip, ties to your home country, and
                  financial ability to support your visit.
                </p>
              </div>
            </div>

            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Application Steps
            </h3>
            <ol className="space-y-4">
              {[
                {
                  step: 1,
                  title: "Complete Form DS-160 Online",
                  desc: "The Online Nonimmigrant Visa Application available on the US Department of State website.",
                },
                {
                  step: 2,
                  title: "Pay the Visa Fee",
                  desc: "The B-1/B-2 visa application fee is $185 (non-refundable). Payment methods vary by country.",
                },
                {
                  step: 3,
                  title: "Schedule Your Interview",
                  desc: "Book an appointment at your nearest US embassy or consulate. Wait times vary significantly by location.",
                },
                {
                  step: 4,
                  title: "Attend the Interview",
                  desc: "Bring your passport, DS-160 confirmation, fee receipt, photo, and supporting documents showing the business purpose of your trip.",
                },
                {
                  step: 5,
                  title: "Receive Your Visa",
                  desc: "If approved, your passport will be returned with the B-1 visa stamp. Processing typically takes a few days to a few weeks.",
                },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Visa Waiver Program */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Visa Waiver Program (ESTA)
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Citizens of 40+ countries can visit the US for business purposes
              without a B-1 visa by using the Visa Waiver Program (VWP) with
              an approved ESTA (Electronic System for Travel Authorization).
            </p>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 mb-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                ESTA Key Facts
              </h3>
              <ul className="space-y-1.5 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Maximum stay: 90 days per visit (shorter than B-1)
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Valid for 2 years or until passport expires
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Application fee: $21 (much less than B-1 visa)
                </li>
                <li className="flex items-start gap-2">
                  <CheckIcon />
                  Apply online -- no embassy visit needed
                </li>
                <li className="flex items-start gap-2">
                  <XIcon />
                  Cannot extend or change status while in the US
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-2">
                Eligible Countries Include
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Australia, Austria, Belgium, Czech Republic, Denmark, Estonia,
                Finland, France, Germany, Greece, Hungary, Iceland, Ireland,
                Italy, Japan, South Korea, Latvia, Lithuania, Luxembourg,
                Netherlands, New Zealand, Norway, Poland, Portugal, Singapore,
                Slovakia, Slovenia, Spain, Sweden, Switzerland, Taiwan, United
                Kingdom, and others.
              </p>
              <p className="text-sm text-gray-500 mt-2 italic">
                Notable exclusions: China, India, Brazil, Russia, and most
                African and Middle Eastern countries require a B-1 visa.
              </p>
            </div>
          </section>

          {/* Tax implications */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Tax Implications of US Visits
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Your physical presence in the US has significant tax implications.
              Even on a B-1 visa, spending too many days in the US can trigger
              tax obligations.
            </p>

            <div className="space-y-4">
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-amber-800 mb-2">
                  Substantial Presence Test
                </h3>
                <p className="text-sm text-amber-700 leading-relaxed">
                  If you spend 183 or more days in the US in a calendar year
                  (or a weighted average over 3 years), you may be considered
                  a US tax resident under the Substantial Presence Test. This
                  would subject your worldwide income to US taxation. Count
                  your days carefully.
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-amber-800 mb-2">
                  Effectively Connected Income (ECI) Risk
                </h3>
                <p className="text-sm text-amber-700 leading-relaxed">
                  If you conduct business activities in the US that generate
                  income, that income may be classified as Effectively
                  Connected Income (ECI), which is subject to US income tax at
                  graduated rates. This applies regardless of your visa status.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  Recommended Precautions
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Keep a detailed log of your US travel days
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Stay well below the 183-day threshold
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Document the purpose of each US visit
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Consult a tax professional about treaty benefits
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Important reminder */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Important: LLC Ownership vs. Work Authorization
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <p className="text-sm text-blue-800 leading-relaxed mb-3">
                A common misconception: owning a US LLC does NOT give you
                the right to work in or immigrate to the United States. Your
                LLC is a separate legal entity. You, as the owner, still need
                proper visa authorization to enter and work in the US.
              </p>
              <p className="text-sm text-blue-800 leading-relaxed">
                Most foreign LLC owners manage their businesses entirely from
                abroad. The B-1 visa only allows short-term business visits,
                not ongoing work. If you want to live and work in the US, you
                will need a different visa category (such as the{" "}
                <Link
                  href="/guides/e2-visa"
                  className="font-semibold underline hover:text-blue-900"
                >
                  E-2 Treaty Investor Visa
                </Link>
                ).
              </p>
            </div>
          </section>

          {/* Related resources */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Related Resources
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "E-2 Treaty Investor Visa Guide",
                  desc: "Want to live and work in the US? The E-2 visa may be an option for LLC owners from treaty countries.",
                  href: "/guides/e2-visa",
                },
                {
                  title: "ECI Filing Service",
                  desc: "If your US visits create Effectively Connected Income, we can help you file the right forms.",
                  href: "/services/eci-filing",
                },
                {
                  title: "File Form 5472",
                  desc: "Required annual filing for every foreign-owned single-member LLC -- regardless of visa status.",
                  href: "/filer",
                },
                {
                  title: "Start Your Foreign-Owned LLC",
                  desc: "Step-by-step guide to forming and running your US LLC from abroad.",
                  href: "/guides/start-your-business",
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
