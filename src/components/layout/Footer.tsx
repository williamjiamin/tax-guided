"use client";

import Link from "next/link";

export function Footer() {
  const guides = [
    { label: "All Guides", href: "/guides" },
    { label: "Start Your Business", href: "/guides/start-your-business" },
    { label: "Form 5472 Guide", href: "/guides/form-5472-common-mistakes" },
    { label: "Form 1065 Guide", href: "/guides/form-1065" },
    { label: "Form 1040-NR Guide", href: "/guides/form-1040-nr" },
    { label: "Form 1120-F Guide", href: "/guides/form-1120-f" },
    { label: "BOI Report Guide", href: "/guides/boi-report" },
  ];

  const tools = [
    { label: "Quick Tax Check", href: "/tools/quick-tax-check" },
    { label: "Calculators", href: "/calculators" },
    { label: "ECI Assessment", href: "/tools/eci-assessment" },
    { label: "Penalty Calculator", href: "/tools/penalty-calculator" },
    { label: "Tax Calendar", href: "/tools/tax-calendar" },
    { label: "Treaty Lookup", href: "/tools/treaty-lookup" },
    { label: "Entity Advisor", href: "/tools/entity-advisor" },
    { label: "Compliance Checklist", href: "/tools/compliance-checklist" },
    { label: "Cost Comparison", href: "/tools/cost-comparison" },
  ];

  const laws = [
    { label: "All Countries", href: "/laws" },
    { label: "Forms Library", href: "/forms" },
    { label: "State Taxes", href: "/states" },
    { label: "Treaties", href: "/treaties" },
    { label: "Statutes", href: "/statutes" },
    { label: "Case Law", href: "/case-law" },
    { label: "Historical Rates", href: "/historical" },
    { label: "Glossary", href: "/glossary" },
    { label: "Translations", href: "/translations" },
    { label: "Compliance Calendar", href: "/calendar" },
  ];

  const resources = [
    { label: "Learning Hub", href: "/learn" },
    { label: "Community Q&A", href: "/community" },
    { label: "All Q&A Threads (full index)", href: "/community/all" },
    { label: "Tax Quiz", href: "/quiz" },
    { label: "Industry Guides", href: "/industry" },
    { label: "Practitioner Directory", href: "/directory" },
    { label: "Translation Library", href: "/translations" },
  ];

  return (
    <footer className="bg-gray-900">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-gold rounded-lg flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-navy-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="font-bold text-white text-base tracking-wide">
                Tax<span className="text-gold">Guided</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Your complete guide to tax laws around the world. Expert-sourced, always up to date.
            </p>
            <p className="text-xs text-gray-500 mb-6">
              &copy; {new Date().getFullYear()} TaxGuided.com. All rights reserved.
            </p>

            {/* Cross-link to ForeignLLCTax */}
            <a
              href="https://foreignllctax.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-navy-light text-gold text-sm font-medium rounded-lg hover:bg-navy transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              File Your Taxes at ForeignLLCTax.com
            </a>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Guides</h3>
            <ul className="space-y-2.5">
              {guides.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Free Tools */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Free Tools</h3>
            <ul className="space-y-2.5">
              {tools.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tax Laws */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Tax Laws</h3>
            <ul className="space-y-2.5">
              {laws.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-2.5">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://www.irs.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  IRS.gov
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-sm text-gray-400 hover:text-white transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <p className="text-[10px] text-gray-500 max-w-3xl leading-relaxed">
            TaxGuided.com provides general tax education and information only. This is not tax advice, legal advice, or accounting advice.
            Always consult a qualified tax professional for your specific situation. Information sourced from IRS publications and official government resources.
          </p>
        </div>
      </div>
    </footer>
  );
}
