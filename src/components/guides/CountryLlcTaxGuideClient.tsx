"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { COUNTRY_TAX_DATA, type CountryTaxData } from "@/lib/country-tax-data";

/* ------------------------------------------------------------------ */
/*  Shared sub-components                                              */
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
      className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0"
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

function InfoIcon() {
  return (
    <svg
      className="w-5 h-5 text-blue-500 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg
      className="w-5 h-5 text-amber-500 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Section components                                                 */
/* ------------------------------------------------------------------ */

function QuickSummary({ data }: { data: CountryTaxData }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-6">
      <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
        Quick Summary
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-start gap-2">
          {data.hasTreaty ? <CheckIcon /> : <XIcon />}
          <div>
            <p className="text-sm font-semibold text-gray-900">Tax Treaty</p>
            <p className="text-xs text-gray-500">
              {data.hasTreaty ? "Yes \u2014 treaty in effect" : "No treaty with the US"}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <InfoIcon />
          <div>
            <p className="text-sm font-semibold text-gray-900">ITIN</p>
            <p className="text-xs text-gray-500">Usually required</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          {data.e2Eligible ? <CheckIcon /> : <XIcon />}
          <div>
            <p className="text-sm font-semibold text-gray-900">E-2 Visa</p>
            <p className="text-xs text-gray-500">
              {data.e2Eligible ? "Eligible" : "Not eligible"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function USTaxObligations() {
  return (
    <section
      id="us-tax-obligations"
      className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-3">
        US Tax Obligations for Foreign-Owned LLCs
      </h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        Every foreign-owned single-member LLC that is treated as a disregarded
        entity must file the following with the IRS, regardless of whether the
        LLC earned any income:
      </p>
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-xl p-4">
          <h3 className="text-sm font-bold text-gray-900 mb-1">
            Form 5472 + Pro Forma Form 1120
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Reports transactions between the LLC and its foreign owner (e.g.,
            capital contributions, distributions, loans). Must be filed even if
            no reportable transactions occurred during the year. Penalty for
            failure to file: <strong>$25,000 per form</strong>.
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <h3 className="text-sm font-bold text-gray-900 mb-1">
            Deadline: April 15 (or extended to October 15)
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            The Form 5472 is due on the 15th day of the 4th month after the tax
            year ends (April 15 for calendar year filers). An automatic 6-month
            extension is available by filing Form 7004.
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <h3 className="text-sm font-bold text-gray-900 mb-1">
            EIN (Employer Identification Number)
          </h3>
          <p className="text-xs text-gray-600 leading-relaxed">
            Your LLC must have an EIN before filing. Apply using Form SS-4
            online, by fax, or by mail. Foreign owners without an SSN can apply
            by fax or use our{" "}
            <Link
              href="/filer/ss4"
              className="text-blue-600 hover:underline font-medium"
            >
              EIN application tool
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

function TreatyBenefits({ data }: { data: CountryTaxData }) {
  return (
    <section
      id="treaty-benefits"
      className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-3">
        Tax Treaty Benefits
      </h2>

      {data.hasTreaty ? (
        <>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            {data.treatySummary}
          </p>
          <div className="bg-indigo-50 rounded-xl p-4 mb-4">
            <h3 className="text-sm font-bold text-indigo-900 mb-3">
              Treaty Withholding Rates
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-lg font-bold text-indigo-700">
                  {data.dividendRate}
                </p>
                <p className="text-xs text-indigo-600">Dividends</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-indigo-700">
                  {data.interestRate}
                </p>
                <p className="text-xs text-indigo-600">Interest</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-indigo-700">
                  {data.royaltyRate}
                </p>
                <p className="text-xs text-indigo-600">Royalties</p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2 bg-blue-50 border border-blue-200 rounded-xl p-4">
            <InfoIcon />
            <p className="text-xs text-blue-800 leading-relaxed">
              Treaty rates apply to specific types of income. A single-member
              LLC that is disregarded for US tax purposes generally does not
              itself earn dividends, interest, or royalties in the traditional
              sense. However, these rates become relevant if the LLC elects
              corporate treatment or if you have other US-source income. Use
              our{" "}
              <Link
                href="/tools/treaty-lookup"
                className="text-blue-600 hover:underline font-medium"
              >
                Treaty Lookup Tool
              </Link>{" "}
              to explore the full treaty provisions.
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-4">
            <WarningIcon />
            <div>
              <p className="text-sm font-bold text-red-800 mb-1">
                No Tax Treaty with the United States
              </p>
              <p className="text-xs text-red-700 leading-relaxed">
                {data.treatySummary}
              </p>
            </div>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs text-amber-800 leading-relaxed">
              <strong>What this means for you:</strong> Without a treaty, any US
              source income (such as services performed in the US or income
              effectively connected with a US trade or business) may be taxed at
              the standard 30% withholding rate. You may also face double
              taxation if your home country taxes the same income. Professional
              tax advice from a CPA experienced with both US and {data.name}{" "}
              taxation is strongly recommended.
            </p>
          </div>
        </>
      )}
    </section>
  );
}

function ItinRequirements({ data }: { data: CountryTaxData }) {
  return (
    <section
      id="itin-requirements"
      className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-3">
        ITIN Requirements
      </h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {data.itinNeeded}
      </p>
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <h3 className="text-sm font-bold text-gray-900 mb-2">
          How to Apply for an ITIN
        </h3>
        <ol className="space-y-2">
          {[
            "Complete IRS Form W-7 with your tax return",
            "Provide original identification documents (passport) or certified copies",
            "Submit by mail to the IRS ITIN Operation, or through a Certifying Acceptance Agent (CAA)",
            "Processing typically takes 7\u201311 weeks",
          ].map((step, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-xs text-gray-600"
            >
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                {i + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>
      <Link
        href="/services/itin-application"
        className="inline-flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
      >
        Apply for an ITIN with our guided tool
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </section>
  );
}

function LocalTaxReporting({ data }: { data: CountryTaxData }) {
  return (
    <section
      id="local-reporting"
      className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-3">
        Local Tax Reporting in {data.name}
      </h2>
      <div className="flex items-start gap-2 mb-4">
        <span className="flex-shrink-0 bg-teal-100 text-teal-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          {data.localTaxAuthority}
        </span>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {data.localReporting}
      </p>
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <div className="flex items-start gap-2">
          <WarningIcon />
          <p className="text-xs text-amber-800 leading-relaxed">
            <strong>Important:</strong> Tax laws change frequently. The
            information above is for general guidance only. Always consult a
            qualified tax professional in {data.name} who is familiar with
            US LLC structures to ensure accurate reporting and compliance.
          </p>
        </div>
      </div>
    </section>
  );
}

function SpecialConsiderations({ data }: { data: CountryTaxData }) {
  return (
    <section
      id="special-considerations"
      className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-3">
        Special Considerations for {data.name} Residents
      </h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {data.specialNotes}
      </p>
      {data.e2Eligible && (
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-start gap-2">
            <CheckIcon />
            <p className="text-xs text-green-800 leading-relaxed">
              <strong>E-2 Treaty Investor Visa:</strong> As a {data.name}{" "}
              national, you are eligible for the E-2 visa, which allows you to
              live and work in the US to direct and develop your US business.
              This requires a substantial investment in the US enterprise.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

function CommonFormationStates({ data }: { data: CountryTaxData }) {
  const stateDetails: Record<string, { benefit: string }> = {
    Delaware: {
      benefit:
        "Most established business law in the US. Court of Chancery specializes in business disputes. No state income tax on out-of-state revenue. Privacy protections for owners.",
    },
    Wyoming: {
      benefit:
        "No state income tax. Lowest annual fees. Strong asset protection. No franchise tax. Lifetime proxy allowed.",
    },
    Florida: {
      benefit:
        "No state income tax on individuals. Large business community. Proximity to Latin America. Strong banking options.",
    },
    Texas: {
      benefit:
        "No state income tax on individuals. Large economy. Proximity to Mexico border. Franchise tax applies only above revenue threshold.",
    },
    "New Mexico": {
      benefit:
        "No annual report requirement. No publication requirement. Low fees. Proximity to Mexico border.",
    },
  };

  return (
    <section
      id="formation-states"
      className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-3">
        Common Formation States
      </h2>
      <p className="text-sm text-gray-600 leading-relaxed mb-4">
        {data.name} residents most commonly form their US LLC in the following
        states:
      </p>
      <div className="space-y-3">
        {data.commonStates.map((state) => (
          <div key={state} className="bg-gray-50 rounded-xl p-4">
            <h3 className="text-sm font-bold text-gray-900 mb-1">{state}</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              {stateDetails[state]?.benefit ?? ""}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTASection({ data }: { data: CountryTaxData }) {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl shadow-lg p-6 md:p-8 mb-6 text-white">
      <h2 className="text-xl font-bold mb-2">
        Ready to Get Started?
      </h2>
      <p className="text-sm text-indigo-100 mb-6">
        Whether you need to form a new LLC, get an EIN, or file your annual
        Form 5472, we have the tools to help {data.name} residents stay
        compliant.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        <Link
          href="/filer"
          className="flex items-center justify-center gap-2 py-3 bg-white text-indigo-700 font-medium rounded-lg hover:bg-indigo-50 transition-colors text-sm"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          File Form 5472
        </Link>
        <Link
          href="/filer/ss4"
          className="flex items-center justify-center gap-2 py-3 bg-white/20 text-white font-medium rounded-lg hover:bg-white/30 transition-colors text-sm border border-white/30"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
            />
          </svg>
          Apply for EIN (Form SS-4)
        </Link>
      </div>

      <div className="border-t border-indigo-500/50 pt-5">
        <p className="text-xs text-indigo-200 mb-4 font-semibold uppercase tracking-wide">
          Need to form a US LLC?
        </p>
        <div className="space-y-3">
          <a
            href="https://partnersps.doola.com/foreignllctax"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between py-3 px-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <div>
              <p className="text-sm font-semibold">doola</p>
              <p className="text-xs text-indigo-200">
                All-in-one LLC formation, EIN, bookkeeping, and tax filing
              </p>
            </div>
            <svg
              className="w-4 h-4 text-indigo-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
          <a
            href="https://get.firstbase.io/foreignllctax"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between py-3 px-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
          >
            <div>
              <p className="text-sm font-semibold">Firstbase</p>
              <p className="text-xs text-indigo-200">
                LLC formation, EIN, registered agent, and US address
              </p>
            </div>
            <svg
              className="w-4 h-4 text-indigo-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function RelatedGuides({ currentSlug }: { currentSlug: string }) {
  const allCountries = Object.values(COUNTRY_TAX_DATA);
  const otherCountries = allCountries.filter((c) => c.slug !== currentSlug);

  return (
    <section
      id="related-guides"
      className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6"
    >
      <h2 className="text-xl font-bold text-gray-900 mb-4">Related Guides</h2>

      <div className="mb-5">
        <Link
          href="/guides/start-your-business"
          className="flex items-center gap-3 p-3 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors"
        >
          <span className="text-2xl">🚀</span>
          <div>
            <p className="text-sm font-semibold text-indigo-900">
              How to Start a Foreign-Owned US LLC
            </p>
            <p className="text-xs text-indigo-600">
              Step-by-step guide from formation to tax compliance
            </p>
          </div>
        </Link>
      </div>

      <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-3">
        Other Country Guides
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {otherCountries.map((c) => (
          <Link
            key={c.slug}
            href={`/guides/llc-tax-${c.slug}`}
            className="flex items-center gap-2 p-2.5 rounded-lg border border-gray-100 hover:border-indigo-200 hover:bg-indigo-50 transition-colors"
          >
            <span className="text-lg">{c.flag}</span>
            <span className="text-xs font-medium text-gray-700">{c.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

interface CountryLlcTaxGuideClientProps {
  country: string;
  slug: string;
}

export function CountryLlcTaxGuideClient({
  country,
  slug,
}: CountryLlcTaxGuideClientProps) {
  const data = COUNTRY_TAX_DATA[slug];

  if (!data) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">Country guide not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const TOC = [
    { id: "us-tax-obligations", label: "US Tax Obligations" },
    { id: "treaty-benefits", label: "Tax Treaty Benefits" },
    { id: "itin-requirements", label: "ITIN Requirements" },
    { id: "local-reporting", label: `Local Tax Reporting (${data.name})` },
    { id: "special-considerations", label: "Special Considerations" },
    { id: "formation-states", label: "Common Formation States" },
    { id: "related-guides", label: "Related Guides" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-indigo-50/50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-100/80 text-indigo-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Country Tax Guide
            </div>
            <div className="text-5xl mb-4">{data.flag}</div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              US LLC Tax Guide for {data.name} Residents
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Everything {data.name} residents need to know about US LLC tax
              obligations, {data.hasTreaty ? "treaty benefits, " : ""}
              ITIN requirements, and compliance deadlines.
            </p>
          </div>

          {/* Quick Summary */}
          <QuickSummary data={data} />

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
                    className="text-sm text-indigo-600 hover:text-indigo-800 hover:underline"
                  >
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          <USTaxObligations />
          <TreatyBenefits data={data} />
          <ItinRequirements data={data} />
          <LocalTaxReporting data={data} />
          <SpecialConsiderations data={data} />
          <CommonFormationStates data={data} />

          {/* CTA */}
          <CTASection data={data} />

          {/* Related Guides */}
          <RelatedGuides currentSlug={slug} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
