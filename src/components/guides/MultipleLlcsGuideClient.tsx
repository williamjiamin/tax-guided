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

export function MultipleLlcsGuideClient() {
  const TOC = [
    { id: "why-multiple", label: "Why Have Multiple LLCs?" },
    { id: "separate-everything", label: "The Golden Rule: Separate Everything" },
    { id: "eins", label: "Separate EINs" },
    { id: "bookkeeping", label: "Separate Bookkeeping" },
    { id: "filings", label: "Separate Tax Filings" },
    { id: "shared-resources", label: "Shared Resources" },
    { id: "state-considerations", label: "State-by-State Considerations" },
    { id: "organizing-system", label: "Your Organizational System" },
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
            <span className="text-gray-600">Multiple LLCs</span>
          </nav>

          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-100/80 text-indigo-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-6">
              Advanced Guide
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Managing Multiple US LLCs as a Non-Resident
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              A simple system for keeping multiple entities organized, compliant, and separate.
              More LLCs means more filings — here is how to manage them without losing your mind.
            </p>
          </div>

          {/* Key Takeaways */}
          <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-6 mb-8">
            <h2 className="text-sm font-bold text-indigo-800 uppercase tracking-wide mb-3">
              Key Takeaways
            </h2>
            <ul className="space-y-2 text-sm text-indigo-900">
              <li className="flex items-start gap-2">
                <CheckIcon />
                Each LLC needs its own EIN, bank account, and bookkeeping
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Each LLC requires a separate Form 5472 + Form 1120 filing
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                You can share a registered agent across multiple LLCs to save costs
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                Inter-company transactions between your LLCs are reportable on Form 5472
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

          {/* Why Multiple */}
          <section id="why-multiple" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Why Have Multiple LLCs?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Non-resident business owners commonly form multiple US LLCs for several reasons:
            </p>
            <div className="space-y-3">
              {[
                { title: "Liability separation", desc: "Different business lines carry different risks. A SaaS product and an e-commerce store should not share the same legal entity — if one faces a lawsuit, the other is protected." },
                { title: "Different business models", desc: "A consulting business and an Amazon FBA store have very different operational needs. Separate LLCs keep finances and compliance clean." },
                { title: "Partnership structures", desc: "One business may have partners while another is solely owned. Each ownership structure requires its own entity." },
                { title: "Client requirements", desc: "Some clients or platforms require a dedicated entity for contractual or invoicing reasons." },
                { title: "Asset protection", desc: "Holding real estate or intellectual property in a separate LLC isolates those assets from operational business risk." },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 rounded-xl p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Separate Everything */}
          <section id="separate-everything" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              The Golden Rule: Separate Everything
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The most common mistake with multiple LLCs is commingling — mixing the finances,
              operations, or records of different entities. Commingling destroys the liability
              protection that separate LLCs provide and creates a nightmare at tax time.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-3">
              <p className="text-sm text-red-800">
                <strong>Critical:</strong> If the IRS or a court determines that your LLCs are
                not truly separate entities (same bank account, same books, interchangeable use
                of funds), they can &quot;pierce the corporate veil&quot; and treat them as a
                single entity. This eliminates the liability protection.
              </p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              The rule is simple: each LLC should operate as if it does not know the others exist.
              Separate bank account, separate bookkeeping, separate tax filings, and documented
              arm&apos;s-length terms for any inter-company transactions.
            </p>
          </section>

          {/* Separate EINs */}
          <section id="eins" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Separate EINs
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Each LLC must have its own unique EIN (Employer Identification Number). You cannot
              share an EIN between entities. When applying for multiple EINs:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-3">
              <li>Each LLC needs a separate SS-4 application</li>
              <li>Foreign owners must apply by mail or fax (one application per entity)</li>
              <li>The IRS limits online EIN applications to one per responsible party per day, but this does not apply to fax/mail applications</li>
              <li>Keep each EIN confirmation letter (CP 575) in the corresponding LLC&apos;s file</li>
            </ul>
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm text-green-800">
                <strong>Our SS-4 filer</strong> can generate separate SS-4 applications for each
                of your LLCs.{" "}
                <Link href="/filer/ss4" className="underline hover:text-green-900">
                  Start an EIN application here.
                </Link>
              </p>
            </div>
          </section>

          {/* Separate Bookkeeping */}
          <section id="bookkeeping" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Separate Bookkeeping
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Each LLC needs its own set of books. This means:
            </p>
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Separate bank accounts</h3>
                <p className="text-sm text-gray-600">
                  Each LLC should have its own business bank account. Never pay LLC A&apos;s expenses
                  from LLC B&apos;s bank account. If money needs to move between entities, document it
                  as a formal inter-company transaction.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Separate ledgers</h3>
                <p className="text-sm text-gray-600">
                  Maintain a separate bookkeeping spreadsheet or accounting file for each LLC.
                  If using a spreadsheet, use separate tabs or separate files. If using accounting
                  software, set up each LLC as a distinct company.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">Separate receipt folders</h3>
                <p className="text-sm text-gray-600">
                  Create a folder structure for each LLC: LLC-A/2025/, LLC-B/2025/, etc. Never
                  store receipts in a shared folder — confusion at tax time is guaranteed.
                </p>
              </div>
            </div>
          </section>

          {/* Separate Filings */}
          <section id="filings" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Separate Tax Filings
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Each foreign-owned single-member LLC requires its own Form 5472 + pro-forma Form 1120
              filing. If you have three LLCs, you must file three separate returns. There is no
              consolidated filing option for disregarded entities.
            </p>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Number of LLCs</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Forms Required</th>
                    <th className="text-left py-3 px-3 font-semibold text-gray-700">Filing Cost (with our filer)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { llcs: "1 LLC", forms: "1x Form 5472 + 1x Form 1120", cost: "$49" },
                    { llcs: "2 LLCs", forms: "2x Form 5472 + 2x Form 1120", cost: "$98" },
                    { llcs: "3 LLCs", forms: "3x Form 5472 + 3x Form 1120", cost: "$147" },
                    { llcs: "5 LLCs", forms: "5x Form 5472 + 5x Form 1120", cost: "$245" },
                  ].map((row) => (
                    <tr key={row.llcs} className="border-b border-gray-100">
                      <td className="py-3 px-3 font-medium text-gray-800">{row.llcs}</td>
                      <td className="py-3 px-3 text-gray-600">{row.forms}</td>
                      <td className="py-3 px-3 text-gray-600">{row.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Inter-company transactions:</strong> If LLC A pays LLC B for services, both
                LLCs must report this transaction. LLC A reports the payment on its Form 5472,
                and LLC B reports the receipt on its Form 5472. These must be arm&apos;s-length
                transactions.
              </p>
            </div>
          </section>

          {/* Shared Resources */}
          <section id="shared-resources" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              What Can Be Shared
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              While finances and filings must be separate, some resources can be shared to reduce
              costs:
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { item: "Registered agent", shared: true, note: "Most agents offer multi-entity discounts" },
                { item: "Formation state", shared: true, note: "All LLCs can be in the same state" },
                { item: "Cloud storage account", shared: true, note: "Use separate folders per entity" },
                { item: "Accounting software license", shared: true, note: "Set up separate companies within the software" },
                { item: "Bank account", shared: false, note: "Each LLC must have its own account" },
                { item: "EIN", shared: false, note: "Each LLC requires a unique EIN" },
                { item: "Tax filings", shared: false, note: "Each LLC files separately" },
                { item: "Operating agreement", shared: false, note: "Each LLC needs its own" },
              ].map((item) => (
                <div key={item.item} className={`rounded-xl p-3 ${item.shared ? "bg-green-50 border border-green-100" : "bg-red-50 border border-red-100"}`}>
                  <div className="flex items-center gap-2 mb-1">
                    {item.shared ? (
                      <CheckIcon />
                    ) : (
                      <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                    <span className="text-sm font-semibold text-gray-900">{item.item}</span>
                  </div>
                  <p className="text-xs text-gray-600 ml-6">{item.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* State Considerations */}
          <section id="state-considerations" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              State-by-State Considerations
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              You do not need to form all your LLCs in the same state. Here are some considerations:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2 mb-3">
              <li><strong>Same state:</strong> Simpler to manage. One registered agent, one set of state compliance rules. Wyoming is a solid choice for all entities.</li>
              <li><strong>Different states:</strong> May make sense if different LLCs have different needs (e.g., one needs Delaware&apos;s court system for investor relations).</li>
              <li><strong>Annual fee multiplication:</strong> Remember that annual state fees multiply. Three Wyoming LLCs cost $180/year in annual reports alone ($60 each). Three Delaware LLCs cost $900/year in franchise taxes ($300 each).</li>
            </ul>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm text-blue-800">
                <strong>Recommendation:</strong> Unless you have a specific reason to use different
                states, form all your LLCs in{" "}
                <Link href="/guides/best-states-foreign-llc" className="underline hover:text-blue-900">
                  Wyoming
                </Link>
                . It keeps state compliance simple and costs low.
              </p>
            </div>
          </section>

          {/* Organizing System */}
          <section id="organizing-system" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Your Organizational System
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Here is a proven system for keeping multiple LLCs organized:
            </p>
            <div className="bg-gray-50 rounded-xl p-4 font-mono text-sm text-gray-700 mb-4">
              <p>Business/</p>
              <p className="ml-4">LLC-Alpha/</p>
              <p className="ml-8">formation-docs/ (Articles, Operating Agreement, EIN letter)</p>
              <p className="ml-8">2025/</p>
              <p className="ml-12">bank-statements/</p>
              <p className="ml-12">receipts/ (01-Jan through 12-Dec)</p>
              <p className="ml-12">bookkeeping.xlsx</p>
              <p className="ml-12">tax-filing/</p>
              <p className="ml-4">LLC-Beta/</p>
              <p className="ml-8">formation-docs/</p>
              <p className="ml-8">2025/</p>
              <p className="ml-12">... (same structure)</p>
              <p className="ml-4">Shared/</p>
              <p className="ml-8">registered-agent-docs/</p>
              <p className="ml-8">compliance-calendar.xlsx</p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Create a master compliance calendar that tracks deadlines for all entities in one
              view. Include:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1.5 ml-2">
              <li>Federal filing deadline (April 15) for each LLC</li>
              <li>State annual report due date for each LLC</li>
              <li>Registered agent renewal date</li>
              <li>Bank account review dates</li>
              <li>Monthly bookkeeping dates for each entity</li>
            </ul>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">
              Next Steps
            </h2>
            <div className="space-y-2">
              {[
                { text: "Set up bookkeeping for each LLC", href: "/guides/foreign-llc-bookkeeping" },
                { text: "Establish a monthly compliance routine", href: "/guides/monthly-compliance-routine" },
                { text: "Compare the best states for your LLCs", href: "/guides/best-states-foreign-llc" },
                { text: "File Form 5472 for each LLC ($49 per entity)", href: "/filer" },
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
