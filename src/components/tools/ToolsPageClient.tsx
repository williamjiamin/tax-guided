"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";
import { TOOL_CATEGORIES } from "@/lib/nav-data";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  assessments: (
    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    </div>
  ),
  calculators: (
    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    </div>
  ),
  guides: (
    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    </div>
  ),
};

export function ToolsPageClient() {
  const { t } = useT();

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-200 rounded-full px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-blue-600">100% FREE</span>
              <span className="text-xs text-gray-400">No account needed</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t("nav.toolsPageTitle")}
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              {t("nav.toolsPageSubtitle")}
            </p>
          </div>
        </section>

        {/* Tool categories */}
        {TOOL_CATEGORIES.map((cat) => (
          <section key={cat.id} className="py-12 border-b border-gray-100 last:border-b-0">
            <div className="max-w-5xl mx-auto px-6">
              <div className="flex items-center gap-3 mb-8">
                {CATEGORY_ICONS[cat.id]}
                <h2 className="text-xl font-bold text-gray-900">
                  {t(cat.labelKey)}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group block bg-white border border-gray-200 rounded-xl p-5 hover:shadow-lg hover:border-blue-200 transition-all"
                  >
                    <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors mb-1">
                      {t(item.labelKey)}
                      {item.badge && (
                        <span className="ml-2 text-[10px] font-semibold bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {t(item.descKey)}
                    </p>
                    <div className="mt-3 text-xs text-blue-600 font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Try it free
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              {t("nav.startFilingCta")}
            </h2>
            <p className="text-gray-400 mb-6">
              Guided step-by-step filing for Form 5472 + pro forma 1120. No account needed.
            </p>
            <Link
              href="/filer"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              {t("header.startFiling")}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
