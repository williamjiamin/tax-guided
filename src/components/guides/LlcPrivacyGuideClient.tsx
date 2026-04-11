"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function LlcPrivacyGuideClient() {
  const TOC = [
    { id: "why-privacy", label: "Why Privacy Matters for Foreign LLC Owners" },
    { id: "state-privacy", label: "State-Level Privacy: Wyoming vs New Mexico" },
    { id: "registered-agent", label: "Using a Registered Agent for Privacy" },
    { id: "ein-not-ssn", label: "EIN Instead of SSN" },
    { id: "domain-privacy", label: "Anonymous Domain Registration" },
    { id: "banking-privacy", label: "Privacy-Focused Banking" },
    { id: "address-privacy", label: "Keeping Your Personal Address Off Filings" },
    { id: "boi-reporting", label: "BOI Reporting and Privacy" },
    { id: "limits", label: "Understanding the Limits" },
    { id: "next-steps", label: "Next Steps" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 bg-gradient-to-b from-blue-50/50 to-white">
        <div className="max-w-3xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
            <Link href="/" className="hover:text-gray-600">Home</Link>
            <span>/</span>
            <Link href="/guides/start-your-business" className="hover:text-gray-600">Guides</Link>
            <span>/</span>
            <span className="text-gray-600">LLC Privacy</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gray-200/80 text-gray-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Privacy Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              How to Maximize Privacy for Your Foreign-Owned LLC
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Legitimate strategies to protect your personal information while staying fully
              compliant with US federal and state requirements.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-gray-100 border border-gray-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-sm text-gray-900">
              <li className="flex items-start gap-2">
                <CheckIcon />
                Wyoming and New Mexico offer the strongest state-level privacy protections
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                A registered agent shields your personal address from public records
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Your EIN serves as your LLC&apos;s tax ID — no SSN needed for business activities
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Privacy is about reducing unnecessary exposure, not hiding from the IRS
              </li>
            </ul>
          </div>

          {/* Table of Contents */}
          <nav className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 mb-8">
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
              In This Guide
            </h2>
            <ol className="space-y-1.5">
              {TOC.map((item, i) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-sm text-blue-600 hover:text-blue-800 hover:underline">
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Why Privacy */}
          <section id="why-privacy" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why Privacy Matters for Foreign LLC Owners
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Privacy for a foreign-owned LLC is not about hiding from authorities — it is about
              controlling who can access your personal information through public records. When you
              form an LLC, certain information becomes part of the public record depending on the
              state. This information can be accessed by anyone: competitors, data brokers,
              marketers, or malicious actors.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              For international business owners, privacy is also an asset protection strategy.
              Keeping your personal identity separate from your business entity reduces the risk
              of targeted lawsuits, social engineering attacks, and unwanted solicitation.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Important distinction:</strong> Privacy from the public is different from
                transparency with the IRS. You must always provide accurate information to the
                IRS on your tax filings. The strategies in this guide reduce your public exposure
                while maintaining full compliance.
              </p>
            </div>
          </section>

          {/* State Privacy */}
          <section id="state-privacy" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              State-Level Privacy: Wyoming vs New Mexico
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              The two best states for LLC privacy are Wyoming and New Mexico. Both keep member
              and manager names off public records.
            </p>
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Wyoming</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>Member and manager names are not on the Articles of Organization</li>
                  <li>Annual report does not list member names publicly</li>
                  <li>Only the registered agent address appears on public record</li>
                  <li>Lifetime proxy allows a nominee to file on your behalf</li>
                  <li>No state income tax returns that could expose owner information</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">New Mexico</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>No member or manager names on the Articles of Organization</li>
                  <li>No annual report requirement at all — less paperwork, less exposure</li>
                  <li>Cheapest state to maintain ($0 annual fees)</li>
                  <li>Minimal public information about the LLC available online</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mt-3">
              By contrast, states like Florida, California, and New York require member/manager
              names on formation documents, making them poor choices for privacy-conscious owners.
              See our{" "}
              <Link href="/guides/best-states-foreign-llc" className="text-blue-600 hover:underline">
                state comparison guide
              </Link>
              {" "}for a full breakdown.
            </p>
          </section>

          {/* Registered Agent */}
          <section id="registered-agent" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Using a Registered Agent for Privacy
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Every LLC must have a registered agent with a physical address in the state of
              formation. This address appears on all public filings. By using a professional
              registered agent service, you keep your personal address off the public record.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">What a registered agent does</h3>
                <p className="text-sm text-gray-600">
                  Receives legal documents (service of process), state correspondence, and IRS
                  notices on behalf of your LLC. Their address appears on your Articles of
                  Organization instead of your personal address.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Cost</h3>
                <p className="text-sm text-gray-600">
                  Professional registered agent services typically cost $50-150/year. Many formation
                  services include the first year free. This is one of the cheapest and most effective
                  privacy measures available.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Privacy benefit</h3>
                <p className="text-sm text-gray-600">
                  Anyone searching your LLC on the state&apos;s business registry will see the
                  registered agent&apos;s address, not your home address. This is entirely standard
                  and legal — most businesses use registered agents.
                </p>
              </div>
            </div>
          </section>

          {/* EIN */}
          <section id="ein-not-ssn" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              EIN Instead of SSN
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              As a non-resident LLC owner, you likely do not have a Social Security Number (SSN).
              Your LLC&apos;s EIN (Employer Identification Number) serves as its tax identification
              number for all business purposes.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-3">
              <li>Use your EIN on W-9 forms (when clients ask for your tax ID)</li>
              <li>Use your EIN for bank account applications</li>
              <li>Use your EIN on all IRS filings (Form 5472, Form 1120)</li>
              <li>Never share your personal ITIN (if you have one) when the LLC&apos;s EIN is what is being requested</li>
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> Some platforms (like certain payment processors) may request
                an SSN for the business owner. In most cases, you can provide your ITIN or explain
                that as a non-resident, you have an EIN only. If a platform insists on an SSN and
                you do not have one, it may not be the right platform for your business.
              </p>
            </div>
          </section>

          {/* Domain Privacy */}
          <section id="domain-privacy" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Anonymous Domain Registration
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              When you register a domain name for your LLC&apos;s website, WHOIS records can expose
              the registrant&apos;s name, address, phone number, and email. This is another vector
              for personal information leakage.
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Enable WHOIS privacy</h3>
                <p className="text-sm text-gray-600">
                  Most domain registrars (Cloudflare, Namecheap, Google Domains) offer free WHOIS
                  privacy protection. This replaces your personal information with the registrar&apos;s
                  proxy contact details. Enable this on every domain you register.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Register under the LLC</h3>
                <p className="text-sm text-gray-600">
                  Register domains in the LLC&apos;s name rather than your personal name. Even with
                  WHOIS privacy, the underlying registration should belong to the business entity.
                  Use the LLC&apos;s address (registered agent address) and a business email address.
                </p>
              </div>
            </div>
          </section>

          {/* Banking Privacy */}
          <section id="banking-privacy" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Privacy-Focused Banking
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Your bank account information is not public, but how you interact with your bank
              can affect your privacy posture:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-3">
              <li>Open a business bank account in the LLC&apos;s name (not your personal name)</li>
              <li>Use the LLC&apos;s EIN for the account, not your personal tax ID</li>
              <li>Use the registered agent&apos;s address or a virtual business address for banking correspondence</li>
              <li>Keep business and personal banking completely separate</li>
              <li>Use a business email address for banking communications (not a personal Gmail)</li>
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed">
              Online banks like Mercury and Relay are particularly good for foreign LLC owners
              because they do not require an in-person visit and can process applications using
              your LLC&apos;s formation documents. See our{" "}
              <Link href="/guides/us-bank-account" className="text-blue-600 hover:underline">
                US bank account guide
              </Link>
              {" "}for detailed recommendations.
            </p>
          </section>

          {/* Address Privacy */}
          <section id="address-privacy" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Keeping Your Personal Address Off Filings
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Your personal foreign address does appear on Form 5472 (Part II — 25% Foreign
              Shareholder section). Unlike state filings, IRS tax returns are not public records.
              However, it is still good practice to minimize address exposure:
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">LLC&apos;s address</h3>
                <p className="text-sm text-gray-600">
                  Use your registered agent&apos;s address as the LLC&apos;s principal office address on
                  Form 1120 and Form 5472 Part I. This is standard practice and the IRS accepts it.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Your personal address</h3>
                <p className="text-sm text-gray-600">
                  You must provide your actual foreign address on Form 5472 Part II. This is an
                  IRS requirement and cannot be avoided. However, IRS filings are not public
                  records — this information is only accessible to the IRS.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">State filings</h3>
                <p className="text-sm text-gray-600">
                  In privacy-friendly states (Wyoming, New Mexico), your personal address does not
                  appear on any public state filings. Only the registered agent address is public.
                </p>
              </div>
            </div>
          </section>

          {/* BOI Reporting */}
          <section id="boi-reporting" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              BOI Reporting and Privacy
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The Beneficial Ownership Information (BOI) report, required by FinCEN under the
              Corporate Transparency Act, collects the names, addresses, dates of birth, and
              identification documents of all beneficial owners. This information is stored in
              a federal database but is not publicly accessible.
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-3">
              <li>BOI data is stored in a secure, non-public FinCEN database</li>
              <li>Only authorized government agencies and financial institutions can access it</li>
              <li>It is not available through public records searches</li>
              <li>You must still file accurately — providing false information carries criminal penalties</li>
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed">
              While BOI reporting does require submitting personal identification, it does not
              compromise your public privacy. The information goes to FinCEN, not to a public
              registry. See our{" "}
              <Link href="/guides/boi-report" className="text-blue-600 hover:underline">
                BOI report guide
              </Link>
              {" "}for filing details.
            </p>
          </section>

          {/* Limits */}
          <section id="limits" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Understanding the Limits
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Privacy has legitimate limits. Here is what you cannot do:
            </p>
            <div className="space-y-3">
              {[
                { item: "You cannot hide your identity from the IRS", desc: "Form 5472 requires your name, address, and country of residence. Tax filings are confidential (not public), but the IRS must know who you are." },
                { item: "You cannot use a nominee to file with the IRS on your behalf", desc: "While Wyoming allows nominee managers for state filings, the IRS requires the actual beneficial owner to be identified on Form 5472." },
                { item: "You cannot avoid BOI reporting", desc: "Most LLCs must file Beneficial Ownership Information with FinCEN. This is a federal requirement that applies regardless of state privacy laws." },
                { item: "You cannot use privacy to evade taxes", desc: "Privacy strategies are about reducing public exposure of personal information. Using them to hide income or evade tax obligations is illegal." },
              ].map((item) => (
                <div key={item.item} className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-amber-900 mb-1">{item.item}</h3>
                  <p className="text-sm text-amber-800">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Next Steps
            </h2>
            <div className="space-y-2">
              {[
                { text: "Compare Wyoming, Delaware, and New Mexico", href: "/guides/best-states-foreign-llc" },
                { text: "Open a privacy-friendly US bank account", href: "/guides/us-bank-account" },
                { text: "File your BOI report", href: "/guides/boi-report" },
                { text: "Start your Form 5472 filing ($49)", href: "/filer" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
                >
                  <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  {item.text}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
