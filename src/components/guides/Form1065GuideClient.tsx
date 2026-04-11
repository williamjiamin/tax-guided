"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useT } from "@/lib/i18n";

export function Form1065GuideClient() {
  const { t } = useT();

  const TOC = [
    { id: "what-is-form-1065", label: t("guide1065.tocWhatIs") },
    { id: "who-must-file", label: t("guide1065.tocWhoMustFile") },
    { id: "key-sections", label: t("guide1065.tocKeySections") },
    { id: "schedule-k1", label: t("guide1065.tocScheduleK1") },
    { id: "schedule-k3", label: t("guide1065.tocScheduleK3") },
    { id: "filing-deadline", label: t("guide1065.tocFilingDeadline") },
    { id: "penalties", label: t("guide1065.tocPenalties") },
    { id: "e-filing", label: t("guide1065.tocEfiling") },
    { id: "common-mistakes", label: t("guide1065.tocCommonMistakes") },
    { id: "related-tools", label: t("guide1065.tocRelatedTools") },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              {t("guide1065.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {t("guide1065.heroTitle")}
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              {t("guide1065.heroDesc")}
            </p>
          </div>

          {/* Table of Contents */}
          <nav className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
              {t("guide1065.tocTitle")}
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

          {/* What Is Form 1065? */}
          <section id="what-is-form-1065" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1065.whatIsTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1065.whatIsP1")}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("guide1065.whatIsP2")}
            </p>
          </section>

          {/* Who Must File? */}
          <section id="who-must-file" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1065.whoMustFileTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1065.whoMustFileIntro")}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li>{t("guide1065.whoMustFileItem1")}</li>
              <li>{t("guide1065.whoMustFileItem2")}</li>
              <li>{t("guide1065.whoMustFileItem3")}</li>
              <li>{t("guide1065.whoMustFileItem4")}</li>
            </ul>
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">{t("guide1065.whoMustFileTip")}</span> {t("guide1065.whoMustFileTipText")}
              </p>
            </div>
          </section>

          {/* Key Sections of the Form */}
          <section id="key-sections" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1065.keySectionsTitle")}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{t("guide1065.keySection1Title")}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("guide1065.keySection1Desc")}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{t("guide1065.keySection2Title")}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("guide1065.keySection2Desc")}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{t("guide1065.keySection3Title")}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("guide1065.keySection3Desc")}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{t("guide1065.keySection4Title")}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("guide1065.keySection4Desc")}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{t("guide1065.keySection5Title")}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t("guide1065.keySection5Desc")}
                </p>
              </div>
            </div>
          </section>

          {/* Schedule K-1 Explained */}
          <section id="schedule-k1" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1065.k1Title")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1065.k1P1")}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("guide1065.k1P2")}
            </p>
          </section>

          {/* Schedule K-3 */}
          <section id="schedule-k3" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1065.k3Title")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1065.k3Desc")}
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <span className="font-semibold">{t("guide1065.k3Warning")}</span> {t("guide1065.k3WarningText")}
              </p>
            </div>
          </section>

          {/* Filing Deadline */}
          <section id="filing-deadline" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1065.deadlineTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              {t("guide1065.deadlineP1")}
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("guide1065.deadlineP2")}
            </p>
          </section>

          {/* Penalties */}
          <section id="penalties" className="bg-amber-50 rounded-2xl border border-amber-200 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-amber-900 mb-3">
              {t("guide1065.penaltiesTitle")}
            </h2>
            <p className="text-sm text-amber-800 leading-relaxed mb-3">
              {t("guide1065.penaltiesP1")}
            </p>
            <p className="text-sm text-amber-800 leading-relaxed">
              {t("guide1065.penaltiesP2")}
            </p>
          </section>

          {/* E-Filing */}
          <section id="e-filing" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1065.efilingTitle")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("guide1065.efilingDesc")}
            </p>
          </section>

          {/* Common Mistakes */}
          <section id="common-mistakes" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("guide1065.commonMistakesTitle")}
            </h2>
            <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2.5 ml-2">
              <li>
                <strong>{t("guide1065.mistake1")}</strong> {t("guide1065.mistake1Desc")}
              </li>
              <li>
                <strong>{t("guide1065.mistake2")}</strong> {t("guide1065.mistake2Desc")}
              </li>
              <li>
                <strong>{t("guide1065.mistake3")}</strong> {t("guide1065.mistake3Desc")}
              </li>
              <li>
                <strong>{t("guide1065.mistake4")}</strong> {t("guide1065.mistake4Desc")}
              </li>
              <li>
                <strong>{t("guide1065.mistake5")}</strong> {t("guide1065.mistake5Desc")}
              </li>
            </ol>
          </section>

          {/* Related Tools */}
          <section id="related-tools" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {t("guide1065.relatedToolsTitle")}
            </h2>
            <div className="grid gap-3 sm:grid-cols-3">
              <Link
                href="/tools/forms-wizard"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">{t("guide1065.toolFormsWizard")}</h3>
                <p className="text-xs text-gray-500 mt-1">{t("guide1065.toolFormsWizardDesc")}</p>
              </Link>
              <Link
                href="/tools/withholding-calculator"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">{t("guide1065.toolWithholdingCalc")}</h3>
                <p className="text-xs text-gray-500 mt-1">{t("guide1065.toolWithholdingCalcDesc")}</p>
              </Link>
              <Link
                href="/tools/entity-advisor"
                className="block rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
              >
                <h3 className="text-sm font-semibold text-gray-900">{t("guide1065.toolEntityAdvisor")}</h3>
                <p className="text-xs text-gray-500 mt-1">{t("guide1065.toolEntityAdvisorDesc")}</p>
              </Link>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-white mb-3">
              {t("guide1065.ctaTitle")}
            </h2>
            <p className="text-sm text-blue-100 mb-6 max-w-lg mx-auto">
              {t("guide1065.ctaDesc")}
            </p>
            <Link
              href="/services/partnership-filing"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors text-[15px] shadow-lg"
            >
              {t("guide1065.ctaButton")}
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
