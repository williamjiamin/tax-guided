"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { EmailCaptureBanner } from "@/components/tools/EmailCaptureBanner";
import { useT } from "@/lib/i18n";

export function EinGuideClient() {
  const { t } = useT();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-violet-50/50 to-white">
        <div className="max-w-2xl mx-auto px-6 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-violet-100/80 text-violet-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              {t("einGuide.badge")}
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              {t("einGuide.title")}
            </h1>
            <p className="text-lg text-gray-500">
              {t("einGuide.subtitle")}
            </p>
          </div>

          {/* What is an EIN */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              {t("einGuide.whatIsEin")}
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              {t("einGuide.whatIsEinDesc")}
            </p>
          </div>

          {/* Do I need one? */}
          <div className="bg-amber-50 rounded-2xl border border-amber-200 p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-amber-900 mb-3">
              {t("einGuide.doINeed")}
            </h2>
            <p className="text-sm text-amber-800 leading-relaxed">
              {t("einGuide.doINeedDesc")}
            </p>
          </div>

          {/* How to Apply */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              {t("einGuide.howToApply")}
            </h2>

            <div className="space-y-4">
              {/* Method 1: Online */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t("einGuide.method1Title")}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {t("einGuide.method1Desc")}
                    </p>
                    <p className="text-xs text-amber-600 bg-amber-50 rounded-lg p-3">
                      {t("einGuide.method1Note")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Method 2: Fax */}
              <div className="bg-white rounded-2xl border-2 border-blue-200 shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t("einGuide.method2Title")}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {t("einGuide.method2Desc")}
                    </p>
                    <p className="text-sm font-mono bg-gray-50 rounded-lg p-3 text-gray-800">
                      {t("einGuide.method2Fax")}
                    </p>
                    {/* Alohi Fax recommendation */}
                    <div className="mt-3 bg-teal-50 border border-teal-200 rounded-lg p-3">
                      <p className="text-xs text-teal-800 leading-relaxed">
                        <span className="font-semibold">No fax machine?</span>{" "}
                        We recommend{" "}
                        <a
                          href="https://ref.alohi.com/foreignllctax"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-teal-700 underline hover:text-teal-900"
                        >
                          Alohi Fax
                        </a>{" "}
                        — send faxes to the IRS online from any device, with delivery confirmation. No phone line needed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Method 3: Mail */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-bold text-gray-600">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {t("einGuide.method3Title")}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {t("einGuide.method3Desc")}
                    </p>
                    <p className="text-xs font-mono bg-gray-50 rounded-lg p-3 text-gray-600">
                      {t("einGuide.method3Address")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What you'll need */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {t("einGuide.whatYouNeed")}
            </h2>
            <ul className="space-y-3">
              {(["need1", "need2", "need3", "need4", "need5"] as const).map(
                (key) => (
                  <li key={key} className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600">
                      {t(`einGuide.${key}`)}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Apply Now CTA */}
          <div className="text-center mb-10">
            <a
              href="https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-violet-600 text-white font-semibold rounded-lg hover:bg-violet-700 transition-colors text-[15px] shadow-lg shadow-violet-600/20"
            >
              {t("einGuide.applyNow")}
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* Don't have an LLC yet? */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-6">
            <h3 className="text-base font-bold text-indigo-900 mb-2">Don&apos;t have a U.S. LLC yet?</h3>
            <p className="text-sm text-indigo-700 leading-relaxed mb-4">
              Before applying for an EIN, you need a registered U.S. LLC. Our recommended formation partners handle everything — LLC registration, EIN application, registered agent, and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://partnersps.doola.com/foreignllctax"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
              >
                doola — 10% OFF Formation + Bookkeeping
                <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <a
                href="https://get.firstbase.io/foreignllctax"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Firstbase — LLC Formation
                <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Already have EIN */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
            <h3 className="text-lg font-bold text-emerald-800 mb-2">
              {t("einGuide.haveEin")}
            </h3>
            <p className="text-sm text-emerald-600 mb-6">
              {t("einGuide.haveEinDesc")}
            </p>
            <Link
              href="/filer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-[15px] shadow-lg shadow-blue-600/20"
            >
              {t("einGuide.startFiling")}
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

          <EmailCaptureBanner />
        </div>

      </main>

      <Footer />
    </div>
  );
}
