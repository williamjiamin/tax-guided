"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useLocale, useT, LOCALE_META, SUPPORTED_LOCALES } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";

const NAV_SECTIONS = [
  {
    id: "guides",
    label: "Guides",
    items: [
      { label: "All Guides", href: "/guides" },
      { label: "Start Your Business", href: "/guides/start-your-business" },
      { label: "Form 5472 Guide", href: "/guides/form-5472-common-mistakes" },
      { label: "Form 1065 Guide", href: "/guides/form-1065" },
      { label: "Form 1040-NR Guide", href: "/guides/form-1040-nr" },
      { label: "Form 1120-F Guide", href: "/guides/form-1120-f" },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      { label: "Quick Tax Check", href: "/tools/quick-tax-check" },
      { label: "Calculators", href: "/calculators" },
      { label: "ECI Assessment", href: "/tools/eci-assessment" },
      { label: "Penalty Calculator", href: "/tools/penalty-calculator" },
      { label: "Tax Calendar", href: "/tools/tax-calendar" },
      { label: "Treaty Lookup", href: "/tools/treaty-lookup" },
      { label: "Entity Advisor", href: "/tools/entity-advisor" },
    ],
  },
  {
    id: "laws",
    label: "Laws",
    items: [
      { label: "All Countries", href: "/laws" },
      { label: "Forms Library", href: "/forms" },
      { label: "State Taxes", href: "/states" },
      { label: "Treaties", href: "/treaties" },
      { label: "Statutes", href: "/statutes" },
      { label: "Case Law", href: "/case-law" },
      { label: "Historical Rates", href: "/historical" },
      { label: "Glossary", href: "/glossary" },
      { label: "Translations", href: "/translations" },
      { label: "Industry Guides", href: "/industry" },
      { label: "Directory", href: "/directory" },
      { label: "United States", href: "/laws/us" },
    ],
  },
];

export function Header() {
  const { t } = useT();
  const { locale, setLocale } = useLocale();
  const [langOpen, setLangOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!langOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [langOpen]);

  const toggleSection = (id: string) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  return (
    <header className="bg-navy border-b border-navy-light px-6 py-3 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
            <svg className="w-4.5 h-4.5 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="font-bold text-white text-base tracking-wide">Tax<span className="text-gold">Guided</span></span>
            <span className="text-xs text-gray-400 tracking-wide hidden sm:block">Tax Laws Around the World</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 text-sm">
          <Link
            href="/guides"
            className="bg-gold text-navy-dark px-4 py-2 rounded-lg hover:bg-gold-light font-medium text-sm transition-colors"
          >
            Explore Guides
          </Link>

          <Link href="/news" className="text-gray-300 hover:text-white transition-colors">
            News
          </Link>

          <Link href="/scenarios" className="text-gray-300 hover:text-white transition-colors">
            Scenarios
          </Link>

          <Link href="/compare" className="text-gray-300 hover:text-white transition-colors">
            Compare Countries
          </Link>

          <Link href="/tools/quick-tax-check" className="text-gray-300 hover:text-white transition-colors">
            Tools
          </Link>

          <Link href="/forms" className="text-gray-300 hover:text-white transition-colors">
            Forms
          </Link>

          <Link href="/treaties" className="text-gray-300 hover:text-white transition-colors">
            Treaties
          </Link>

          <Link href="/translations" className="text-gray-300 hover:text-white transition-colors">
            Translations
          </Link>

          <Link href="/community" className="text-gray-300 hover:text-white transition-colors">
            Community
          </Link>

          <a
            href="https://foreignllctax.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light transition-colors font-medium"
          >
            File Your Taxes &rarr;
          </a>

          {/* Language Switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-navy-light"
              aria-label="Change language"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span className="text-xs font-medium">{LOCALE_META[locale].nativeName}</span>
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {langOpen && (
              <div className="absolute right-0 top-full mt-1 w-48 bg-white border border-gray-200 rounded-xl shadow-xl py-1.5 z-50">
                {SUPPORTED_LOCALES.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => {
                      setLocale(loc as Locale);
                      setLangOpen(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-sm flex items-center justify-between hover:bg-gray-50 transition-colors ${
                      locale === loc ? "text-navy font-semibold bg-blue-50/50" : "text-gray-700"
                    }`}
                  >
                    <span>{LOCALE_META[loc as Locale].nativeName}</span>
                    <span className="text-[11px] text-gray-400">{LOCALE_META[loc as Locale].label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-300 hover:text-white"
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-navy-light mt-3 pt-3 pb-2 space-y-1">
          {/* CTA */}
          <Link
            href="/guides"
            onClick={() => setMobileOpen(false)}
            className="block mx-3 mb-3 text-center bg-gold text-navy-dark py-2.5 rounded-lg font-medium text-sm hover:bg-gold-light transition-colors"
          >
            Explore Guides
          </Link>

          {/* Sections */}
          {NAV_SECTIONS.map((section) => (
            <div key={section.id}>
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold text-gray-200 hover:bg-navy-light rounded-lg"
              >
                <span>{section.label}</span>
                <svg
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    expandedSection === section.id ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {expandedSection === section.id && (
                <div className="pl-3 space-y-0.5 mb-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2 text-sm text-gray-300 hover:bg-navy-light rounded-lg"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Direct links */}
          <div className="border-t border-navy-light mt-2 pt-2 space-y-1">
            <Link href="/learn" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-gray-300 hover:bg-navy-light rounded-lg">
              Learn
            </Link>
            <Link href="/community" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-gray-300 hover:bg-navy-light rounded-lg">
              Community Q&A
            </Link>
            <Link href="/quiz" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-gray-300 hover:bg-navy-light rounded-lg">
              Tax Quiz
            </Link>
            <a
              href="https://foreignllctax.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2 text-sm text-gold font-medium hover:bg-navy-light rounded-lg"
            >
              Need to file? Visit ForeignLLCTax.com &rarr;
            </a>
          </div>

          {/* Language pills */}
          <div className="border-t border-navy-light mt-2 pt-2 px-3">
            <p className="text-xs text-gray-400 mb-2">{t("langSwitcher.label")}</p>
            <div className="flex flex-wrap gap-1">
              {SUPPORTED_LOCALES.map((loc) => (
                <button
                  key={loc}
                  onClick={() => {
                    setLocale(loc as Locale);
                    setMobileOpen(false);
                  }}
                  className={`px-2.5 py-1 text-xs rounded-md ${
                    locale === loc ? "bg-gold text-navy-dark" : "bg-navy-light text-gray-300 hover:bg-navy-light/80"
                  }`}
                >
                  {LOCALE_META[loc as Locale].nativeName}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
