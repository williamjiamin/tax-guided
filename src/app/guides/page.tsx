import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Tax Guides — Comprehensive International Tax Education",
  description:
    "Browse 85+ expert-sourced guides covering IRS forms, international tax compliance, country-specific rules, transfer pricing, and business tax strategies.",
  alternates: {
    canonical: "/guides",
  },
};

const GUIDE_SECTIONS = [
  {
    title: "IRS Form Guides",
    guides: [
      { title: "Form 5472 Common Mistakes", href: "/guides/form-5472-common-mistakes", desc: "10 costly errors and how to avoid them" },
      { title: "Form 5472 Nuances", href: "/guides/form-5472-nuances", desc: "Deep dive into tricky form fields" },
      { title: "Form 5472 Amendment", href: "/guides/form-5472-amendment", desc: "How to correct a filed Form 5472" },
      { title: "How to Submit Form 5472", href: "/guides/how-to-submit-form-5472", desc: "Fax, mail, and submission tips" },
      { title: "Form 1065 Guide", href: "/guides/form-1065", desc: "Partnership return filing guide" },
      { title: "Form 1040-NR Guide", href: "/guides/form-1040-nr", desc: "Non-resident individual returns" },
      { title: "Form 1120-F Guide", href: "/guides/form-1120-f", desc: "Foreign corporation returns" },
      { title: "Form 1120 C-Corp Guide", href: "/guides/form-1120-c-corp", desc: "Corporate income tax returns" },
      { title: "Form 1042-S Guide", href: "/guides/form-1042-s", desc: "Foreign person withholding" },
      { title: "W-8BEN Brokerage Trap", href: "/guides/w8ben-brokerage-trap", desc: "Common brokerage withholding issues" },
      { title: "1040-NR + 5472 Combined", href: "/guides/1040nr-5472-combined", desc: "Filing both forms together" },
      { title: "ITIN and 1040-NR Connection", href: "/guides/itin-1040nr-connection", desc: "How ITIN relates to filing" },
      { title: "When to File 1040-NR", href: "/guides/when-1040-nr", desc: "Timing and requirements" },
      { title: "Protective Filing 1120-F", href: "/guides/protective-filing-1120f", desc: "Protective return strategies" },
      { title: "FBAR Guide", href: "/guides/fbar", desc: "Foreign bank account reporting" },
      { title: "Federal Supporting Statements", href: "/guides/federal-supporting-statements", desc: "Required attachments explained" },
    ],
  },
  {
    title: "Country Tax Guides",
    guides: [
      { title: "LLC Tax — Australia", href: "/guides/llc-tax-australia", desc: "Australian residents with U.S. LLCs" },
      { title: "LLC Tax — Brazil", href: "/guides/llc-tax-brazil", desc: "Brazilian residents with U.S. LLCs" },
      { title: "LLC Tax — Canada", href: "/guides/llc-tax-canada", desc: "Canadian residents with U.S. LLCs" },
      { title: "LLC Tax — China", href: "/guides/llc-tax-china", desc: "Chinese residents with U.S. LLCs" },
      { title: "LLC Tax — Germany", href: "/guides/llc-tax-germany", desc: "German residents with U.S. LLCs" },
      { title: "LLC Tax — India", href: "/guides/llc-tax-india", desc: "Indian residents with U.S. LLCs" },
      { title: "LLC Tax — Japan", href: "/guides/llc-tax-japan", desc: "Japanese residents with U.S. LLCs" },
      { title: "LLC Tax — Mexico", href: "/guides/llc-tax-mexico", desc: "Mexican residents with U.S. LLCs" },
      { title: "LLC Tax — South Korea", href: "/guides/llc-tax-south-korea", desc: "Korean residents with U.S. LLCs" },
      { title: "LLC Tax — UK", href: "/guides/llc-tax-uk", desc: "UK residents with U.S. LLCs" },
      { title: "IRS Country Codes", href: "/guides/irs-country-codes", desc: "Complete country code reference" },
    ],
  },
  {
    title: "International Wire Transfers",
    guides: [
      { title: "Transfer — Australia", href: "/guides/transfer-australia" },
      { title: "Transfer — Brazil", href: "/guides/transfer-brazil" },
      { title: "Transfer — Canada", href: "/guides/transfer-canada" },
      { title: "Transfer — China", href: "/guides/transfer-china" },
      { title: "Transfer — France", href: "/guides/transfer-france" },
      { title: "Transfer — Germany", href: "/guides/transfer-germany" },
      { title: "Transfer — Hong Kong", href: "/guides/transfer-hong-kong" },
      { title: "Transfer — India", href: "/guides/transfer-india" },
      { title: "Transfer — Japan", href: "/guides/transfer-japan" },
      { title: "Transfer — UK", href: "/guides/transfer-uk" },
      { title: "Transfer Pricing Guide", href: "/guides/transfer-pricing" },
    ],
  },
  {
    title: "Business & Compliance",
    guides: [
      { title: "Start Your Business", href: "/guides/start-your-business", desc: "Complete guide to forming a U.S. LLC" },
      { title: "Register a U.S. Company", href: "/guides/register-us-company", desc: "Step-by-step registration" },
      { title: "Foreign LLC Bookkeeping", href: "/guides/foreign-llc-bookkeeping", desc: "Record-keeping essentials" },
      { title: "BOI Report Guide", href: "/guides/boi-report", desc: "Beneficial ownership reporting" },
      { title: "Record Keeping for 5472", href: "/guides/record-keeping-5472", desc: "Documentation requirements" },
      { title: "Monthly Compliance Routine", href: "/guides/monthly-compliance-routine", desc: "Stay compliant year-round" },
      { title: "Filing Season Playbook", href: "/guides/filing-season-playbook", desc: "Tax season preparation" },
      { title: "DIY vs CPA", href: "/guides/diy-vs-cpa", desc: "When to hire a professional" },
      { title: "LLC Dissolution", href: "/guides/llc-dissolution", desc: "Closing your LLC properly" },
      { title: "Multiple LLCs", href: "/guides/multiple-llcs", desc: "Managing multiple entities" },
      { title: "Delaware Franchise Tax", href: "/guides/delaware-franchise-tax", desc: "Annual state requirements" },
      { title: "Wyoming Annual Report", href: "/guides/wyoming-annual-report", desc: "State filing obligations" },
    ],
  },
  {
    title: "Banking & Operations",
    guides: [
      { title: "U.S. Bank Account Guide", href: "/guides/us-bank-account", desc: "Opening a U.S. account remotely" },
      { title: "Mercury Bank Guide", href: "/guides/mercury-bank-guide", desc: "Mercury for foreign LLCs" },
      { title: "Stripe Setup Guide", href: "/guides/stripe-setup", desc: "Payment processing setup" },
      { title: "Stripe Account Tips", href: "/guides/stripe-account-tips", desc: "Optimization strategies" },
      { title: "U.S. Phone Number", href: "/guides/us-phone-number", desc: "Getting a U.S. number abroad" },
      { title: "Cross-Border Payments", href: "/guides/cross-border-payments", desc: "International payment methods" },
      { title: "Company to Personal Withdrawal", href: "/guides/company-to-personal-withdrawal", desc: "Moving money from LLC to you" },
      { title: "LLC Privacy Guide", href: "/guides/llc-privacy-guide", desc: "Protecting your information" },
    ],
  },
  {
    title: "Advanced Topics",
    guides: [
      { title: "Section 1446 Withholding", href: "/guides/section-1446", desc: "Partnership withholding rules" },
      { title: "USTB Risk Assessment", href: "/guides/ustb-risk", desc: "U.S. trade or business analysis" },
      { title: "Investment vs Business LLC", href: "/guides/investment-vs-business-llc", desc: "Choosing the right structure" },
      { title: "Best States for Foreign LLC", href: "/guides/best-states-foreign-llc", desc: "State-by-state comparison" },
      { title: "Green Card Tax Transition", href: "/guides/green-card-tax-transition", desc: "Tax changes on becoming a resident" },
      { title: "B1 Visa Tax Guide", href: "/guides/b1-visa", desc: "Business visitor tax obligations" },
      { title: "E2 Visa Tax Guide", href: "/guides/e2-visa", desc: "Treaty investor tax rules" },
    ],
  },
];

export default function GuidesIndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-navy-dark to-navy pt-16 pb-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Tax Guides</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              85+ expert-sourced guides covering IRS forms, international compliance, country-specific rules, and business strategies.
            </p>
          </div>
        </section>

        {/* Guide Sections */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            {GUIDE_SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                  {section.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {section.guides.map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="group flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      <div>
                        <span className="font-medium text-gray-900 group-hover:text-navy text-sm">{guide.title}</span>
                        {"desc" in guide && guide.desc && (
                          <span className="block text-xs text-gray-400 mt-0.5">{guide.desc}</span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-6 bg-navy">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Need to File Your Foreign LLC Taxes?</h2>
            <p className="text-gray-300 mb-6">
              Generate IRS Form 5472 + pro forma 1120 in 15 minutes with our guided filing tool.
            </p>
            <a
              href="https://foreignllctax.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold text-navy-dark px-8 py-3 rounded-xl font-bold hover:bg-gold-light transition-colors"
            >
              Visit ForeignLLCTax.com
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
