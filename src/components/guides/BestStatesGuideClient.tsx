"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/* ------------------------------------------------------------------ */
/*  Shared icon                                                        */
/* ------------------------------------------------------------------ */

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  State comparison data                                              */
/* ------------------------------------------------------------------ */

const STATES = [
  {
    name: "Wyoming",
    formationCost: "$100",
    annualFee: "$60/year",
    franchiseTax: "None",
    privacy: "Excellent",
    foreignOwnerFriendly: "Excellent",
    registeredAgent: "Required",
    highlight: true,
    notes:
      "No state income tax, no franchise tax, no public disclosure of member names. The strongest privacy protections of any US state. Most affordable long-term option for foreign owners.",
  },
  {
    name: "Delaware",
    formationCost: "$90",
    annualFee: "$300/year",
    franchiseTax: "$300/year (flat fee for LLCs)",
    privacy: "Good",
    foreignOwnerFriendly: "Good",
    registeredAgent: "Required",
    highlight: false,
    notes:
      "Famous for corporations, but the $300 annual franchise tax makes it expensive for LLCs. Court of Chancery is a plus for complex business disputes. Member names not on public record.",
  },
  {
    name: "New Mexico",
    formationCost: "$50",
    annualFee: "$0",
    franchiseTax: "None",
    privacy: "Excellent",
    foreignOwnerFriendly: "Good",
    registeredAgent: "Required",
    highlight: false,
    notes:
      "Cheapest state to form and maintain an LLC. No annual report or fee. Strong privacy — no member/manager names on public record. Less well-known, so some banks may be less familiar with NM LLCs.",
  },
];

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export function BestStatesGuideClient() {
  const TOC = [
    { id: "why-state-matters", label: "Why Your State Choice Matters" },
    { id: "comparison", label: "Side-by-Side Comparison" },
    { id: "wyoming", label: "Wyoming — The Top Choice" },
    { id: "delaware", label: "Delaware — The Corporate Favorite" },
    { id: "new-mexico", label: "New Mexico — The Budget Option" },
    { id: "other-states", label: "What About Other States?" },
    { id: "recommendation", label: "Our Recommendation" },
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
            <span className="text-gray-600">Best States for Foreign LLC</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Formation Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Best US States for a Foreign-Owned LLC in 2026
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Wyoming, Delaware, or New Mexico? We compare the three most popular states
              for foreign-owned LLC formation on cost, privacy, and ease of use.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-blue-800 uppercase tracking-wide mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-sm text-blue-900">
              <li className="flex items-start gap-2">
                <CheckIcon />
                Wyoming is the best overall choice for most foreign-owned LLCs
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Delaware&apos;s $300/year franchise tax makes it expensive for simple LLCs
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                New Mexico is the cheapest option with $0 annual fees
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                All three states offer strong privacy — no public member disclosure
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

          {/* Why State Matters */}
          <section id="why-state-matters" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why Your State Choice Matters
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              As a non-resident forming a US LLC, you can choose any state regardless of where your
              business operates. Since most foreign-owned LLCs operate entirely outside the US, you
              are essentially shopping for the best regulatory environment. The state you choose
              affects three things directly:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-4">
              <li><strong>Cost</strong> — Formation fees, annual reports, and franchise taxes vary dramatically</li>
              <li><strong>Privacy</strong> — Some states publish member/manager names publicly; others do not</li>
              <li><strong>Simplicity</strong> — Annual compliance requirements differ by state</li>
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed">
              Your state choice does not affect your federal tax obligations. Every foreign-owned LLC
              must file Form 5472 with the IRS regardless of where it is formed. State choice is about
              ongoing costs and privacy.
            </p>
          </section>

          {/* Comparison Table */}
          <section id="comparison" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Side-by-Side Comparison
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Here is how Wyoming, Delaware, and New Mexico stack up on the factors that matter most
              to foreign LLC owners.
            </p>

            {/* Desktop table */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Factor</th>
                    {STATES.map((s) => (
                      <th key={s.name} className={`text-left py-3 px-3 font-semibold ${s.highlight ? "text-blue-700" : "text-gray-700"}`}>
                        {s.name} {s.highlight && <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full ml-1">Recommended</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { label: "Formation Cost", key: "formationCost" as const },
                    { label: "Annual Fee", key: "annualFee" as const },
                    { label: "Franchise Tax", key: "franchiseTax" as const },
                    { label: "Privacy", key: "privacy" as const },
                    { label: "Foreign Owner Friendly", key: "foreignOwnerFriendly" as const },
                  ].map((row) => (
                    <tr key={row.label} className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium text-gray-800">{row.label}</td>
                      {STATES.map((s) => (
                        <td key={s.name} className={`py-3 px-3 text-gray-600 ${s.highlight ? "bg-blue-50/50" : ""}`}>
                          {s[row.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-4">
              {STATES.map((s) => (
                <div key={s.name} className={`rounded-xl border p-4 ${s.highlight ? "border-blue-300 bg-blue-50/50" : "border-gray-200"}`}>
                  <h3 className="text-sm font-bold text-gray-900 mb-2">
                    {s.name} {s.highlight && <span className="text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded-full ml-1">Recommended</span>}
                  </h3>
                  <div className="space-y-1 text-sm">
                    <p><span className="text-gray-500">Formation:</span> <span className="text-gray-800">{s.formationCost}</span></p>
                    <p><span className="text-gray-500">Annual Fee:</span> <span className="text-gray-800">{s.annualFee}</span></p>
                    <p><span className="text-gray-500">Franchise Tax:</span> <span className="text-gray-800">{s.franchiseTax}</span></p>
                    <p><span className="text-gray-500">Privacy:</span> <span className="text-gray-800">{s.privacy}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Wyoming */}
          <section id="wyoming" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Wyoming — The Top Choice for Foreign Owners
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Wyoming has earned its reputation as the gold standard for foreign-owned LLCs, and
              for good reason. The state was the first in the US to create the LLC entity type back
              in 1977, and it has continued to refine its business-friendly legislation ever since.
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Advantages</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>No state income tax on LLC earnings</li>
                  <li>No franchise tax — just a $60 annual report fee</li>
                  <li>Member and manager names are not public record</li>
                  <li>Strong asset protection with charging order protections</li>
                  <li>No requirement for members to be US residents</li>
                  <li>Lifetime proxy allows a nominee to manage filings</li>
                  <li>Simple annual report — can be filed online in minutes</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-amber-900 mb-2">Considerations</h3>
                <ul className="list-disc list-inside text-sm text-amber-800 space-y-1 ml-2">
                  <li>Not as prestigious as Delaware for investor-funded companies</li>
                  <li>Registered agent required (typically $50-150/year)</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              For a single-member foreign-owned LLC that primarily provides services or sells digital
              products, Wyoming is almost always the optimal choice. The total annual cost is roughly
              $110-210 (annual report + registered agent), which is the lowest of any mainstream
              formation state.
            </p>
          </section>

          {/* Delaware */}
          <section id="delaware" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Delaware — The Corporate Favorite
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Delaware is the most famous incorporation state in the US, home to over 60% of Fortune
              500 companies. However, its advantages are primarily designed for C-Corporations raising
              venture capital, not for single-member LLCs owned by non-residents.
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Advantages</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>Court of Chancery — specialized business court with experienced judges</li>
                  <li>Well-established case law for business disputes</li>
                  <li>Recognized and trusted worldwide by investors and banks</li>
                  <li>No state income tax on out-of-state income</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-red-900 mb-2">Drawbacks for Foreign LLCs</h3>
                <ul className="list-disc list-inside text-sm text-red-800 space-y-1 ml-2">
                  <li>$300/year franchise tax — regardless of revenue</li>
                  <li>Total annual cost: ~$450-550 (franchise tax + registered agent)</li>
                  <li>Court of Chancery advantage is irrelevant for most small LLCs</li>
                  <li>No additional privacy over Wyoming</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              If you are planning to raise venture capital or bring on US-based investors, Delaware
              makes sense. For a straightforward foreign-owned LLC, you are paying an extra $240/year
              compared to Wyoming with no meaningful advantage.
            </p>
          </section>

          {/* New Mexico */}
          <section id="new-mexico" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              New Mexico — The Budget Option
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              New Mexico offers the most cost-effective LLC formation in the country. With a $50
              formation fee and zero annual fees, it is the cheapest state to maintain an LLC
              long-term.
            </p>
            <div className="space-y-3 mb-4">
              <div className="bg-green-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-green-900 mb-2">Advantages</h3>
                <ul className="list-disc list-inside text-sm text-green-800 space-y-1 ml-2">
                  <li>Lowest formation cost — just $50</li>
                  <li>No annual report requirement</li>
                  <li>No annual fee or franchise tax</li>
                  <li>Strong privacy — no member disclosure on public filings</li>
                  <li>Only ongoing cost is your registered agent</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-amber-900 mb-2">Considerations</h3>
                <ul className="list-disc list-inside text-sm text-amber-800 space-y-1 ml-2">
                  <li>Less well-known — some banks or payment processors may be less familiar</li>
                  <li>No annual report means less oversight (could be a positive or negative)</li>
                  <li>Fewer formation service providers specialize in NM</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              New Mexico is an excellent choice if your primary goal is minimizing costs. The only
              ongoing expense is your registered agent ($50-100/year). However, if you plan to open
              a US bank account, Wyoming&apos;s stronger reputation may make the process smoother.
            </p>
          </section>

          {/* Other States */}
          <section id="other-states" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What About Other States?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              You may see Florida, Texas, or Nevada mentioned in some guides. Here is why they are
              generally not ideal for foreign-owned LLCs:
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Florida</h3>
                <p className="text-sm text-gray-600">
                  $125 formation + $138.75 annual report. Member names are public record. No
                  significant advantage over Wyoming.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Nevada</h3>
                <p className="text-sm text-gray-600">
                  $425 formation + $350 annual fee + $200 business license. Expensive with no
                  meaningful benefit over Wyoming for foreign owners.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Texas</h3>
                <p className="text-sm text-gray-600">
                  $300 formation fee. Has a franchise tax (though most small LLCs fall below the
                  threshold). No privacy advantage.
                </p>
              </div>
            </div>
          </section>

          {/* Recommendation */}
          <section id="recommendation" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Our Recommendation
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
              <p className="text-sm text-blue-900 leading-relaxed">
                <strong>For most foreign-owned LLCs, we recommend Wyoming.</strong> It offers the
                best combination of low cost, strong privacy, excellent asset protection, and
                widespread recognition. Banks, payment processors, and service providers are all
                very familiar with Wyoming LLCs.
              </p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Choose <strong>Delaware</strong> only if you plan to raise venture capital or need
              the Court of Chancery for complex business disputes.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Choose <strong>New Mexico</strong> if minimizing ongoing costs is your absolute
              priority and you do not need to open a US bank account immediately.
            </p>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Next Steps
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Once you have decided on your state, you need a formation service to file your Articles
              of Organization and provide a registered agent. We recommend these trusted providers:
            </p>
            <div className="space-y-3 mb-4">
              <a
                href="https://get.firstbase.io/foreignllctax"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl p-4 transition-colors"
              >
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Firstbase</h3>
                <p className="text-sm text-gray-600">
                  All-in-one formation package including registered agent, EIN application,
                  operating agreement, and US business address. Popular with international
                  founders.
                </p>
              </a>
              <a
                href="https://partnersps.doola.com/foreignllctax"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl p-4 transition-colors"
              >
                <h3 className="text-sm font-semibold text-gray-900 mb-1">doola</h3>
                <p className="text-sm text-gray-600">
                  Formation, EIN, registered agent, bookkeeping, and compliance in one platform.
                  Excellent option if you want ongoing support beyond formation.
                </p>
              </a>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              After formation, your next steps are:
            </p>
            <div className="space-y-2">
              {[
                { text: "Get your EIN from the IRS", href: "/filer/ss4" },
                { text: "Open a US bank account", href: "/guides/us-bank-account" },
                { text: "Set up basic bookkeeping", href: "/guides/foreign-llc-bookkeeping" },
                { text: "File your first Form 5472", href: "/filer" },
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
