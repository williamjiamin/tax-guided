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
/*  Treaty countries data                                              */
/* ------------------------------------------------------------------ */

const TREATY_COUNTRIES = {
  popular: [
    "Japan",
    "Germany",
    "United Kingdom",
    "France",
    "Australia",
    "South Korea",
    "Canada",
    "Italy",
    "Spain",
    "Netherlands",
    "Sweden",
    "Switzerland",
    "Austria",
    "Belgium",
    "Denmark",
    "Finland",
    "Norway",
    "Ireland",
    "New Zealand",
    "Turkey",
    "Mexico",
    "Argentina",
    "Colombia",
    "Philippines",
    "Thailand",
    "Taiwan",
  ],
  notEligible: [
    "China",
    "India",
    "Brazil",
    "Russia",
    "Vietnam",
    "Nigeria",
    "Indonesia",
  ],
};

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function E2VisaGuideClient() {
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
            <span className="text-gray-600">E-2 Visa</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Immigration Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              E-2 Treaty Investor Visa Guide for Foreign LLC Owners
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              The E-2 visa allows foreign nationals from treaty countries to
              live and work in the US by investing in a US business. Here&apos;s
              what LLC owners need to know.
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
                  making any visa or investment decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Key summary */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
            <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-3">
              E-2 Visa at a Glance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-blue-900">
              <div className="flex items-start gap-2">
                <CheckIcon />
                <span>
                  <strong>Purpose:</strong> Live and work in the US to manage
                  your investment
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon />
                <span>
                  <strong>Duration:</strong> 2-5 years, renewable indefinitely
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon />
                <span>
                  <strong>Investment:</strong> $100K-$200K typical (no legal
                  minimum)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckIcon />
                <span>
                  <strong>Family:</strong> Spouse and children under 21 included
                </span>
              </div>
              <div className="flex items-start gap-2">
                <XIcon />
                <span>
                  <strong>Green card:</strong> Does not lead directly to
                  permanent residency
                </span>
              </div>
              <div className="flex items-start gap-2">
                <XIcon />
                <span>
                  <strong>China/India:</strong> Not eligible (no E-2 treaty)
                </span>
              </div>
            </div>
          </div>

          {/* What is E-2 */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              What Is the E-2 Treaty Investor Visa?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The E-2 visa is a nonimmigrant visa that allows citizens of
              countries with which the US maintains a treaty of commerce to
              enter the US to invest in and manage a business. Unlike the B-1
              visa (which only allows short visits), the E-2 lets you
              actually live and work in the US.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Many foreign LLC owners use the E-2 as a pathway to eventually
              move to the US. You invest a substantial amount in your LLC
              (or a new US business), and in return you receive authorization
              to direct and develop that business from within the US.
            </p>
          </section>

          {/* Requirements */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              E-2 Visa Requirements
            </h2>

            <ol className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">
                    Citizen of a Treaty Country
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    You must be a citizen (not just a resident) of a country
                    that has a qualifying treaty of commerce and navigation
                    with the United States. See the treaty countries section
                    below for the full list.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">
                    Substantial Investment
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-2">
                    Your investment must be substantial relative to the total
                    cost of the business. There is no fixed minimum, but
                    immigration attorneys generally recommend:
                  </p>
                  <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                    <ul className="space-y-1.5 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <CheckIcon />
                        <strong>$100,000 - $200,000</strong> is the most common
                        investment range
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon />
                        Lower amounts ($50K-$80K) possible for service-based
                        businesses
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckIcon />
                        Higher amounts strengthen the application
                      </li>
                      <li className="flex items-start gap-2">
                        <XIcon />
                        Uncommitted funds (sitting in a bank account) do not
                        count
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">
                    Investment Must Be &quot;At Risk&quot;
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The funds must be irrevocably committed to the business.
                    Money in a bank account or escrow does not count. You must
                    have spent the investment on business assets, inventory,
                    equipment, leases, or operational costs.
                  </p>
                </div>
              </li>

              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">
                    Not a Marginal Enterprise
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The business must generate enough income to be more than
                    just a living for you and your family. It should create
                    jobs, contribute to the economy, or have significant
                    potential for growth. A business that only supports the
                    investor&apos;s personal expenses may be considered
                    &quot;marginal.&quot;
                  </p>
                </div>
              </li>
            </ol>
          </section>

          {/* Treaty countries */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Treaty Countries
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Only citizens of countries with an E-2 treaty with the US are
              eligible. Here are some of the most common treaty countries:
            </p>

            <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-4">
              <h3 className="text-sm font-bold text-green-800 mb-3">
                Common E-2 Treaty Countries
              </h3>
              <div className="flex flex-wrap gap-2">
                {TREATY_COUNTRIES.popular.map((country) => (
                  <span
                    key={country}
                    className="inline-block bg-white border border-green-200 text-green-800 text-xs px-3 py-1.5 rounded-full"
                  >
                    {country}
                  </span>
                ))}
              </div>
              <p className="text-xs text-green-700 mt-3 italic">
                This is not the complete list. See the{" "}
                <a
                  href="https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/fees/treaty.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-medium hover:text-green-900"
                >
                  US Department of State website
                </a>{" "}
                for the full list of treaty countries.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <h3 className="text-sm font-bold text-red-800 mb-3">
                Notable Countries WITHOUT an E-2 Treaty
              </h3>
              <div className="flex flex-wrap gap-2">
                {TREATY_COUNTRIES.notEligible.map((country) => (
                  <span
                    key={country}
                    className="inline-block bg-white border border-red-200 text-red-800 text-xs px-3 py-1.5 rounded-full"
                  >
                    {country}
                  </span>
                ))}
              </div>
              <p className="text-xs text-red-700 mt-3">
                Citizens of these countries cannot obtain an E-2 visa. They
                may want to explore other visa options such as the L-1
                (intracompany transfer) or EB-5 (immigrant investor).
              </p>
            </div>
          </section>

          {/* Advantages and limitations */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Advantages and Limitations
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <h3 className="text-sm font-bold text-green-800 uppercase tracking-wide mb-4">
                  Advantages
                </h3>
                <ul className="space-y-2.5 text-sm text-green-900">
                  {[
                    "Live and work legally in the United States",
                    "Direct and manage your business from the US",
                    "Bring your spouse and unmarried children under 21",
                    "Spouse can apply for work authorization (EAD)",
                    "Children can attend US schools",
                    "Renewable indefinitely (2-5 year increments)",
                    "No annual numerical cap (unlike H-1B)",
                    "Relatively fast processing compared to other visas",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckIcon />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                <h3 className="text-sm font-bold text-red-800 uppercase tracking-wide mb-4">
                  Limitations
                </h3>
                <ul className="space-y-2.5 text-sm text-red-900">
                  {[
                    "Does not lead directly to a green card",
                    "Must maintain the investment to keep the visa",
                    "Only available to citizens of treaty countries",
                    "Children age out at 21 (lose dependent status)",
                    "Cannot work for other employers (only your business)",
                    "Business must remain operational and non-marginal",
                    "Must intend to depart the US when status ends",
                    "Requires substantial upfront capital investment",
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

          {/* Tax implications */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Tax Implications of the E-2 Visa
            </h2>

            <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-5 mb-4">
              <h3 className="text-sm font-bold text-amber-800 mb-2">
                Critical Tax Change
              </h3>
              <p className="text-sm text-amber-700 leading-relaxed">
                Once you are on an E-2 visa and living in the US, you will
                likely meet the Substantial Presence Test and become a US tax
                resident. This fundamentally changes your tax obligations --
                your worldwide income becomes subject to US taxation, not just
                US-source income.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  Before E-2 (Non-Resident)
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    File Form 5472 + pro forma 1120 for your LLC
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    Only US-source income is taxed
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckIcon />
                    No self-employment tax on foreign income
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-2">
                  After E-2 (US Tax Resident)
                </h3>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <XIcon />
                    Worldwide income subject to US taxation
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    LLC income reported on Form 1040 (Schedule C)
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    Self-employment tax applies (15.3%)
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    Quarterly estimated tax payments required
                  </li>
                  <li className="flex items-start gap-2">
                    <XIcon />
                    FBAR and FATCA may apply for foreign bank accounts
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-4 leading-relaxed">
              This is one of the most significant transitions a foreign LLC
              owner can face. See our{" "}
              <Link
                href="/guides/green-card-tax-transition"
                className="text-blue-600 font-medium hover:text-blue-700 underline"
              >
                Green Card Tax Transition Guide
              </Link>{" "}
              for a detailed breakdown of what changes when you become a US
              tax resident.
            </p>
          </section>

          {/* How it relates to LLCs */}
          <section className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              How the E-2 Relates to Your LLC
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Your existing foreign-owned LLC can potentially serve as the
              basis for an E-2 visa application, provided it meets the
              investment and operational requirements.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  Using Your Existing LLC
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  If you already own a US LLC and have invested substantially
                  in it, you may be able to use it for your E-2 application.
                  The key is demonstrating that the investment is substantial,
                  at risk, and that the business is not marginal.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  Starting a New Business
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Many E-2 applicants form a new LLC specifically for the visa
                  application. This involves creating a detailed business plan,
                  making the investment, and beginning operations before or
                  concurrently with the visa application.
                </p>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  Franchise Options
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Purchasing a franchise is a popular E-2 strategy because it
                  provides a proven business model, which strengthens the visa
                  application. Investment amounts for franchises typically
                  range from $100K to $500K depending on the brand.
                </p>
              </div>
            </div>
          </section>

          {/* Formation CTA */}
          <section className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-6 md:p-8 mb-6 text-white">
            <h2 className="text-xl font-bold mb-2">
              Ready to Start Your US Business?
            </h2>
            <p className="text-sm text-indigo-100 mb-5 max-w-2xl">
              Whether you are applying for an E-2 visa or managing your LLC
              from abroad, the first step is proper formation and compliance.
              doola handles LLC formation, EIN, registered agent, and ongoing
              compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
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
              <Link
                href="/guides/start-your-business"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
              >
                Read the Formation Guide
              </Link>
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
                  title: "B-1 Business Visitor Visa Guide",
                  desc: "Short-term business visits to the US -- what's allowed and what's not.",
                  href: "/guides/b1-visa",
                },
                {
                  title: "Green Card Tax Transition Guide",
                  desc: "What changes when you become a US tax resident -- from Form 5472 to Form 1040.",
                  href: "/guides/green-card-tax-transition",
                },
                {
                  title: "ECI Filing Service",
                  desc: "If your US business generates Effectively Connected Income, we handle the filing.",
                  href: "/services/eci-filing",
                },
                {
                  title: "File Form 5472",
                  desc: "Required annual filing for foreign-owned LLCs. File before your tax status changes.",
                  href: "/filer",
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
