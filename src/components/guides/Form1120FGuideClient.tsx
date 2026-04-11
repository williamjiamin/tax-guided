"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useT } from "@/lib/i18n";

export function Form1120FGuideClient() {
  const { t } = useT();

  const TOC = [
    { id: "what-is-form-1120-f", label: t("guide1120f.tocWhatIs") },
    { id: "who-must-file", label: t("guide1120f.tocWhoMustFile") },
    { id: "eci-taxation", label: t("guide1120f.tocEciTaxation") },
    { id: "branch-profits-tax", label: t("guide1120f.tocBranchProfitsTax") },
    { id: "key-sections", label: t("guide1120f.tocKeySections") },
    { id: "timely-filing-rule", label: t("guide1120f.tocTimelyFiling") },
    { id: "filing-deadline", label: t("guide1120f.tocFilingDeadline") },
    { id: "treaty-positions", label: t("guide1120f.tocTreatyPositions") },
    { id: "vs-form-1120", label: t("guide1120f.tocVsForm1120") },
    { id: "disregarded-entity", label: t("guide1120f.tocDisregardedEntity") },
    { id: "common-mistakes", label: t("guide1120f.tocCommonMistakes") },
    { id: "related-tools", label: t("guide1120f.tocRelatedTools") },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-purple-50/50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100/80 text-purple-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              {t("guide1120f.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {t("guide1120f.heroTitle")}
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {t("guide1120f.heroDesc")}
            </p>
          </div>

          {/* Table of Contents */}
          <nav className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
              {t("guide1120f.tocTitle")}
            </h2>
            <ol className="space-y-1.5">
              {TOC.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-purple-600 hover:text-purple-800 hover:underline"
                  >
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* What Is Form 1120-F? */}
          <section id="what-is-form-1120-f" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1120f.whatIsTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1120f.whatIsP1")}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("guide1120f.whatIsP2")}
            </p>
          </section>

          {/* Who Must File? */}
          <section id="who-must-file" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1120f.whoMustFileTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1120f.whoMustFileIntro")}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li>{t("guide1120f.whoMustFileItem1")}</li>
              <li>{t("guide1120f.whoMustFileItem2")}</li>
              <li>{t("guide1120f.whoMustFileItem3")}</li>
              <li>{t("guide1120f.whoMustFileItem4")}</li>
              <li>{t("guide1120f.whoMustFileItem5")}</li>
              <li>{t("guide1120f.whoMustFileItem6")}</li>
            </ul>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">{t("guide1120f.whoMustFileTip")}</span> {t("guide1120f.whoMustFileTipText")}
              </p>
            </div>
          </section>

          {/* ECI Taxation */}
          <section id="eci-taxation" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1120f.eciTaxationTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1120f.eciTaxationIntro")}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li>{t("guide1120f.eciDeduction1")}</li>
              <li>{t("guide1120f.eciDeduction2")}</li>
              <li>{t("guide1120f.eciDeduction3")}</li>
              <li>{t("guide1120f.eciDeduction4")}</li>
              <li>{t("guide1120f.eciDeduction5")}</li>
              <li>{t("guide1120f.eciDeduction6")}</li>
            </ul>
          </section>

          {/* Branch Profits Tax */}
          <section id="branch-profits-tax" className="bg-amber-50 rounded-2xl border border-amber-200 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-amber-900 mb-3">
              {t("guide1120f.branchProfitsTaxTitle")}
            </h2>
            <p className="text-sm text-amber-800 leading-relaxed mb-3">
              {t("guide1120f.branchProfitsTaxP1")}
            </p>
            <p className="text-sm text-amber-800 leading-relaxed mb-3">
              {t("guide1120f.branchProfitsTaxP2")}
            </p>
            <p className="text-sm text-amber-800 leading-relaxed">
              {t("guide1120f.branchProfitsTaxP3")}
            </p>
          </section>

          {/* Key Sections */}
          <section id="key-sections" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1120f.keySectionsTitle")}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{t("guide1120f.keySection1Title")}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("guide1120f.keySection1Desc")}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{t("guide1120f.keySection2Title")}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("guide1120f.keySection2Desc")}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{t("guide1120f.keySection3Title")}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("guide1120f.keySection3Desc")}
                </p>
              </div>
            </div>
          </section>

          {/* Timely Filing Rule */}
          <section id="timely-filing-rule" className="bg-amber-50 rounded-2xl border border-amber-200 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-amber-900 mb-3">
              {t("guide1120f.timelyFilingTitle")}
            </h2>
            <p className="text-sm text-amber-800 leading-relaxed mb-3">
              {t("guide1120f.timelyFilingP1")}
            </p>
            <p className="text-sm text-amber-800 leading-relaxed mb-3">
              {t("guide1120f.timelyFilingP2")}
            </p>
            <p className="text-sm text-amber-800 leading-relaxed font-semibold">
              {t("guide1120f.timelyFilingP3")}
            </p>
          </section>

          {/* Filing Deadline */}
          <section id="filing-deadline" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1120f.filingDeadlineTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1120f.filingDeadlineIntro")}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li>{t("guide1120f.filingDeadlineApril")}</li>
              <li>{t("guide1120f.filingDeadlineJune")}</li>
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              {t("guide1120f.filingDeadlineExtension")}
            </p>
          </section>

          {/* Treaty Positions */}
          <section id="treaty-positions" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1120f.treatyPositionsTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1120f.treatyPositionsDesc")}
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <span className="font-semibold">{t("guide1120f.treatyPositionsWarning")}</span> {t("guide1120f.treatyPositionsWarningText")}
              </p>
            </div>
          </section>

          {/* Form 1120-F vs 1120 */}
          <section id="vs-form-1120" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1120f.vsForm1120Title")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1120f.vsForm1120Intro")}
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">{t("guide1120f.tableFeature")}</th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">{t("guide1120f.tableForm1120")}</th>
                    <th className="text-left py-2 font-semibold text-gray-900">{t("guide1120f.tableForm1120F")}</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">{t("guide1120f.tableFiledBy")}</td>
                    <td className="py-2 pr-4">{t("guide1120f.tableFiledBy1120")}</td>
                    <td className="py-2">{t("guide1120f.tableFiledBy1120F")}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">{t("guide1120f.tableIncome")}</td>
                    <td className="py-2 pr-4">{t("guide1120f.tableIncome1120")}</td>
                    <td className="py-2">{t("guide1120f.tableIncome1120F")}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">{t("guide1120f.tableBranchTax")}</td>
                    <td className="py-2 pr-4">{t("guide1120f.tableBranchTax1120")}</td>
                    <td className="py-2">{t("guide1120f.tableBranchTax1120F")}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">{t("guide1120f.tableTimelyFiling")}</td>
                    <td className="py-2 pr-4">{t("guide1120f.tableTimelyFiling1120")}</td>
                    <td className="py-2">{t("guide1120f.tableTimelyFiling1120F")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">{t("guide1120f.tableInterest")}</td>
                    <td className="py-2 pr-4">{t("guide1120f.tableInterest1120")}</td>
                    <td className="py-2">{t("guide1120f.tableInterest1120F")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Disregarded Entity */}
          <section id="disregarded-entity" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1120f.disregardedEntityTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1120f.disregardedEntityP1")}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("guide1120f.disregardedEntityP2")}
            </p>
          </section>

          {/* Common Mistakes */}
          <section id="common-mistakes" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1120f.commonMistakesTitle")}
            </h2>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2.5 ml-2">
              <li>
                <strong>{t("guide1120f.mistake1")}</strong> {t("guide1120f.mistake1Desc")}
              </li>
              <li>
                <strong>{t("guide1120f.mistake2")}</strong> {t("guide1120f.mistake2Desc")}
              </li>
              <li>
                <strong>{t("guide1120f.mistake3")}</strong> {t("guide1120f.mistake3Desc")}
              </li>
              <li>
                <strong>{t("guide1120f.mistake4")}</strong> {t("guide1120f.mistake4Desc")}
              </li>
              <li>
                <strong>{t("guide1120f.mistake5")}</strong> {t("guide1120f.mistake5Desc")}
              </li>
            </ol>
          </section>

          {/* Related Tools */}
          <section id="related-tools" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {t("guide1120f.relatedToolsTitle")}
            </h2>
            <div className="grid gap-3 sm:grid-cols-3">
              <Link
                href="/tools/eci-assessment"
                className="block rounded-xl border border-gray-200 p-4 hover:border-purple-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">{t("guide1120f.toolEciAssessment")}</h3>
                <p className="text-xs text-gray-500 mt-1">{t("guide1120f.toolEciAssessmentDesc")}</p>
              </Link>
              <Link
                href="/tools/entity-advisor"
                className="block rounded-xl border border-gray-200 p-4 hover:border-purple-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">{t("guide1120f.toolEntityAdvisor")}</h3>
                <p className="text-xs text-gray-500 mt-1">{t("guide1120f.toolEntityAdvisorDesc")}</p>
              </Link>
              <Link
                href="/tools/forms-wizard"
                className="block rounded-xl border border-gray-200 p-4 hover:border-purple-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">{t("guide1120f.toolFormsWizard")}</h3>
                <p className="text-xs text-gray-500 mt-1">{t("guide1120f.toolFormsWizardDesc")}</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              {t("guide1120f.ctaTitle")}
            </h2>
            <p className="text-sm text-purple-100 mb-6 max-w-lg mx-auto">
              {t("guide1120f.ctaDesc")}
            </p>
            <Link
              href="/services/eci-filing"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-purple-700 font-semibold rounded-lg hover:bg-purple-50 transition-colors text-[15px] shadow-lg"
            >
              {t("guide1120f.ctaButton")}
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
