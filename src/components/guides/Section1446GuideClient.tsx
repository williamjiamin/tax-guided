"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useT } from "@/lib/i18n";

export function Section1446GuideClient() {
  const { t } = useT();

  const TOC = [
    { id: "what-is-section-1446", label: t("guide1446.tocWhatIs") },
    { id: "when-does-it-apply", label: t("guide1446.tocWhenApplies") },
    { id: "withholding-rates", label: t("guide1446.tocWithholdingRates") },
    { id: "quarterly-payments", label: t("guide1446.tocQuarterlyPayments") },
    { id: "annual-return", label: t("guide1446.tocAnnualReturn") },
    { id: "partner-statements", label: t("guide1446.tocPartnerStatements") },
    { id: "form-8804-c", label: t("guide1446.tocForm8804c") },
    { id: "no-distribution-rule", label: t("guide1446.tocNoDistribution") },
    { id: "penalties", label: t("guide1446.tocPenalties") },
    { id: "interaction-with-1065", label: t("guide1446.tocInteraction1065") },
    { id: "claiming-credit", label: t("guide1446.tocClaimingCredit") },
    { id: "tin-requirements", label: t("guide1446.tocTinRequirements") },
    { id: "related-tools", label: t("guide1446.tocRelatedTools") },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-teal-50/50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-teal-100/80 text-teal-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              {t("guide1446.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {t("guide1446.heroTitle")}
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {t("guide1446.heroDesc")}
            </p>
          </div>

          {/* Table of Contents */}
          <nav className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
              {t("guide1446.tocTitle")}
            </h2>
            <ol className="space-y-1.5">
              {TOC.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-teal-600 hover:text-teal-800 hover:underline"
                  >
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* What Is Section 1446? */}
          <section id="what-is-section-1446" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1446.whatIsTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1446.whatIsP1")}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("guide1446.whatIsP2")}
            </p>
          </section>

          {/* When Does It Apply? */}
          <section id="when-does-it-apply" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1446.whenAppliesTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1446.whenAppliesIntro")}
            </p>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li>{t("guide1446.whenAppliesItem1")}</li>
              <li>{t("guide1446.whenAppliesItem2")}</li>
            </ol>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">{t("guide1446.whenAppliesTip")}</span> {t("guide1446.whenAppliesTipText")}
              </p>
            </div>
          </section>

          {/* Withholding Rates */}
          <section id="withholding-rates" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1446.withholdingRatesTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {t("guide1446.withholdingRatesIntro")}
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-teal-700">{t("guide1446.rate37")}</p>
                <p className="text-sm text-teal-800 mt-1">{t("guide1446.rate37Label")}</p>
                <p className="text-xs text-teal-600 mt-1">{t("guide1446.rate37Sub")}</p>
              </div>
              <div className="bg-teal-50 border border-teal-200 rounded-xl p-4 text-center">
                <p className="text-3xl font-bold text-teal-700">{t("guide1446.rate21")}</p>
                <p className="text-sm text-teal-800 mt-1">{t("guide1446.rate21Label")}</p>
                <p className="text-xs text-teal-600 mt-1">{t("guide1446.rate21Sub")}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-4">
              {t("guide1446.withholdingRatesNote")}
            </p>
          </section>

          {/* Quarterly Payments */}
          <section id="quarterly-payments" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1446.quarterlyTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              {t("guide1446.quarterlyIntro")}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { q: "Q1", date: "April 15" },
                { q: "Q2", date: "June 15" },
                { q: "Q3", date: "September 15" },
                { q: "Q4", date: "December 15" },
              ].map(({ q, date }) => (
                <div key={q} className="text-center bg-teal-50 border border-teal-200 rounded-xl p-3">
                  <p className="text-xs font-semibold text-teal-600 uppercase">{q}</p>
                  <p className="text-sm font-bold text-teal-900 mt-1">{date}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-4">
              {t("guide1446.quarterlyNote")}
            </p>
          </section>

          {/* Annual Return */}
          <section id="annual-return" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1446.annualReturnTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("guide1446.annualReturnDesc")}
            </p>
          </section>

          {/* Partner Statements */}
          <section id="partner-statements" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1446.partnerStatementsTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("guide1446.partnerStatementsDesc")}
            </p>
          </section>

          {/* Form 8804-C */}
          <section id="form-8804-c" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1446.form8804cTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1446.form8804cP1")}
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <span className="font-semibold">{t("guide1446.form8804cWarning")}</span> {t("guide1446.form8804cWarningText")}
              </p>
            </div>
          </section>

          {/* No Distribution Rule */}
          <section id="no-distribution-rule" className="bg-amber-50 rounded-2xl border border-amber-200 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-amber-900 mb-3">
              {t("guide1446.noDistributionTitle")}
            </h2>
            <p className="text-sm text-amber-800 leading-relaxed">
              {t("guide1446.noDistributionDesc")}
            </p>
          </section>

          {/* Penalties */}
          <section id="penalties" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1446.penaltiesTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1446.penaltiesIntro")}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li>{t("guide1446.penaltyItem1")}</li>
              <li>{t("guide1446.penaltyItem2")}</li>
              <li>{t("guide1446.penaltyItem3")}</li>
              <li>{t("guide1446.penaltyItem4")}</li>
            </ul>
          </section>

          {/* Interaction with Form 1065 */}
          <section id="interaction-with-1065" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1446.interaction1065Title")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("guide1446.interaction1065Desc")}
            </p>
          </section>

          {/* Claiming Credit */}
          <section id="claiming-credit" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1446.claimingCreditTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1446.claimingCreditIntro")}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li>{t("guide1446.claimingCreditItem1")}</li>
              <li>{t("guide1446.claimingCreditItem2")}</li>
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              {t("guide1446.claimingCreditNote")}
            </p>
          </section>

          {/* TIN Requirements */}
          <section id="tin-requirements" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1446.tinTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1446.tinP1")}
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">{t("guide1446.tinTip")}</span> {t("guide1446.tinTipText")}
              </p>
            </div>
          </section>

          {/* Related Tools */}
          <section id="related-tools" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {t("guide1446.relatedToolsTitle")}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/tools/withholding-calculator"
                className="block rounded-xl border border-gray-200 p-4 hover:border-teal-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">{t("guide1446.toolWithholdingCalc")}</h3>
                <p className="text-xs text-gray-500 mt-1">{t("guide1446.toolWithholdingCalcDesc")}</p>
              </Link>
              <Link
                href="/tools/forms-wizard"
                className="block rounded-xl border border-gray-200 p-4 hover:border-teal-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">{t("guide1446.toolFormsWizard")}</h3>
                <p className="text-xs text-gray-500 mt-1">{t("guide1446.toolFormsWizardDesc")}</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              {t("guide1446.ctaTitle")}
            </h2>
            <p className="text-sm text-teal-100 mb-6 max-w-lg mx-auto">
              {t("guide1446.ctaDesc")}
            </p>
            <Link
              href="/tools/withholding-calculator"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-teal-700 font-semibold rounded-lg hover:bg-teal-50 transition-colors text-[15px] shadow-lg"
            >
              {t("guide1446.ctaButton")}
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
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
