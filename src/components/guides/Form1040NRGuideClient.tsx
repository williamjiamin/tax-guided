"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useT } from "@/lib/i18n";

export function Form1040NRGuideClient() {
  const { t } = useT();

  const TOC = [
    { id: "what-is-form-1040-nr", label: t("guide1040nr.tocWhatIs") },
    { id: "who-must-file", label: t("guide1040nr.tocWhoMustFile") },
    { id: "eci-vs-fdap", label: t("guide1040nr.tocEciVsFdap") },
    { id: "key-schedules", label: t("guide1040nr.tocKeySchedules") },
    { id: "deductions", label: t("guide1040nr.tocDeductions") },
    { id: "tax-rates", label: t("guide1040nr.tocTaxRates") },
    { id: "filing-deadlines", label: t("guide1040nr.tocFilingDeadlines") },
    { id: "estimated-payments", label: t("guide1040nr.tocEstimatedPayments") },
    { id: "form-w8eci", label: t("guide1040nr.tocFormW8eci") },
    { id: "self-employment-tax", label: t("guide1040nr.tocSelfEmployment") },
    { id: "treaty-positions", label: t("guide1040nr.tocTreatyPositions") },
    { id: "common-mistakes", label: t("guide1040nr.tocCommonMistakes") },
    { id: "related-tools", label: t("guide1040nr.tocRelatedTools") },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-green-50/50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100/80 text-green-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              {t("guide1040nr.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {t("guide1040nr.heroTitle")}
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {t("guide1040nr.heroDesc")}
            </p>
          </div>

          {/* Table of Contents */}
          <nav className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
              {t("guide1040nr.tocTitle")}
            </h2>
            <ol className="space-y-1.5">
              {TOC.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-green-600 hover:text-green-800 hover:underline"
                  >
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* What Is Form 1040-NR? */}
          <section id="what-is-form-1040-nr" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1040nr.whatIsTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1040nr.whatIsP1")}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("guide1040nr.whatIsP2")}
            </p>
          </section>

          {/* Who Must File? */}
          <section id="who-must-file" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1040nr.whoMustFileTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1040nr.whoMustFileIntro")}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li>{t("guide1040nr.whoMustFileItem1")}</li>
              <li>{t("guide1040nr.whoMustFileItem2")}</li>
              <li>{t("guide1040nr.whoMustFileItem3")}</li>
              <li>{t("guide1040nr.whoMustFileItem4")}</li>
              <li>{t("guide1040nr.whoMustFileItem5")}</li>
            </ul>
          </section>

          {/* ECI vs FDAP */}
          <section id="eci-vs-fdap" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1040nr.eciVsFdapTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1040nr.eciVsFdapIntro")}
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">{t("guide1040nr.eciTitle")}</h3>
                <p className="text-xs text-green-800 leading-relaxed">
                  {t("guide1040nr.eciDesc")}
                </p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-blue-900 mb-2">{t("guide1040nr.fdapTitle")}</h3>
                <p className="text-xs text-blue-800 leading-relaxed">
                  {t("guide1040nr.fdapDesc")}
                </p>
              </div>
            </div>
          </section>

          {/* Key Schedules */}
          <section id="key-schedules" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1040nr.keySchedulesTitle")}
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{t("guide1040nr.scheduleNecTitle")}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("guide1040nr.scheduleNecDesc")}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{t("guide1040nr.scheduleOiTitle")}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("guide1040nr.scheduleOiDesc")}
                </p>
              </div>
            </div>
          </section>

          {/* Deductions */}
          <section id="deductions" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1040nr.deductionsTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1040nr.deductionsIntro")}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li>{t("guide1040nr.deductionItem1")}</li>
              <li>{t("guide1040nr.deductionItem2")}</li>
              <li>{t("guide1040nr.deductionItem3")}</li>
              <li>{t("guide1040nr.deductionItem4")}</li>
              <li>{t("guide1040nr.deductionItem5")}</li>
            </ul>
            <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <span className="font-semibold">{t("guide1040nr.deductionsWarning")}</span> {t("guide1040nr.deductionsWarningText")}
              </p>
            </div>
          </section>

          {/* Tax Rates */}
          <section id="tax-rates" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1040nr.taxRatesTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1040nr.taxRatesEci")}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("guide1040nr.taxRatesFdap")}
            </p>
          </section>

          {/* Filing Deadlines */}
          <section id="filing-deadlines" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1040nr.filingDeadlinesTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1040nr.filingDeadlinesIntro")}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li>{t("guide1040nr.filingDeadlineApril")}</li>
              <li>{t("guide1040nr.filingDeadlineJune")}</li>
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              {t("guide1040nr.filingDeadlineExtension")}
            </p>
          </section>

          {/* Estimated Payments */}
          <section id="estimated-payments" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1040nr.estimatedPaymentsTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1040nr.estimatedPaymentsIntro")}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
              {["April 15", "June 15", "September 15", "January 15"].map((date) => (
                <div key={date} className="text-center bg-green-50 border border-green-200 rounded-xl p-3">
                  <p className="text-sm font-semibold text-green-900">{date}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              {t("guide1040nr.estimatedPaymentsNote")}
            </p>
          </section>

          {/* Form W-8ECI */}
          <section id="form-w8eci" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1040nr.formW8eciTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("guide1040nr.formW8eciDesc")}
            </p>
          </section>

          {/* Self-Employment Tax */}
          <section id="self-employment-tax" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1040nr.selfEmploymentTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("guide1040nr.selfEmploymentDesc")}
            </p>
          </section>

          {/* Treaty-Based Positions */}
          <section id="treaty-positions" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1040nr.treatyPositionsTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1040nr.treatyPositionsDesc")}
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <span className="font-semibold">{t("guide1040nr.treatyPositionsWarning")}</span> {t("guide1040nr.treatyPositionsWarningText")}
              </p>
            </div>
          </section>

          {/* Common Mistakes */}
          <section id="common-mistakes" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1040nr.commonMistakesTitle")}
            </h2>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2.5 ml-2">
              <li>
                <strong>{t("guide1040nr.mistake1")}</strong> {t("guide1040nr.mistake1Desc")}
              </li>
              <li>
                <strong>{t("guide1040nr.mistake2")}</strong> {t("guide1040nr.mistake2Desc")}
              </li>
              <li>
                <strong>{t("guide1040nr.mistake3")}</strong> {t("guide1040nr.mistake3Desc")}
              </li>
              <li>
                <strong>{t("guide1040nr.mistake4")}</strong> {t("guide1040nr.mistake4Desc")}
              </li>
              <li>
                <strong>{t("guide1040nr.mistake5")}</strong> {t("guide1040nr.mistake5Desc")}
              </li>
            </ol>
          </section>

          {/* Related Tools */}
          <section id="related-tools" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {t("guide1040nr.relatedToolsTitle")}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <Link
                href="/tools/eci-assessment"
                className="block rounded-xl border border-gray-200 p-4 hover:border-green-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">{t("guide1040nr.toolEciAssessment")}</h3>
                <p className="text-xs text-gray-500 mt-1">{t("guide1040nr.toolEciAssessmentDesc")}</p>
              </Link>
              <Link
                href="/tools/forms-wizard"
                className="block rounded-xl border border-gray-200 p-4 hover:border-green-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">{t("guide1040nr.toolFormsWizard")}</h3>
                <p className="text-xs text-gray-500 mt-1">{t("guide1040nr.toolFormsWizardDesc")}</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              {t("guide1040nr.ctaTitle")}
            </h2>
            <p className="text-sm text-green-100 mb-6 max-w-lg mx-auto">
              {t("guide1040nr.ctaDesc")}
            </p>
            <Link
              href="/services/eci-filing"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-green-700 font-semibold rounded-lg hover:bg-green-50 transition-colors text-[15px] shadow-lg"
            >
              {t("guide1040nr.ctaButton")}
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
