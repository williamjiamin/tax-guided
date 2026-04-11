"use client";

import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  COUNTRY_TRANSFER_DATA,
  type CountryTransferData,
} from "@/lib/transfer-data";

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg className="w-5 h-5 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function DollarIcon() {
  return (
    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

interface Props {
  country: string;
  slug: string;
}

export function CountryTransferGuideClient({ country, slug }: Props) {
  const data: CountryTransferData | undefined = COUNTRY_TRANSFER_DATA[slug];

  if (!data) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-gray-500">Transfer guide for {country} coming soon.</p>
        </main>
        <Footer />
      </div>
    );
  }

  const TOC = [
    { id: "overview", label: "Overview" },
    { id: "best-methods", label: "Best Transfer Methods" },
    { id: "fees-comparison", label: "Fees & Speed Comparison" },
    { id: "regulations", label: "Regulations & Requirements" },
    { id: "pitfalls", label: "Common Pitfalls" },
    { id: "tax-implications", label: "Tax Implications" },
    { id: "tips", label: "Pro Tips" },
    { id: "fbar", label: "FBAR & Reporting" },
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
            <Link href="/guides" className="hover:text-gray-600">Guides</Link>
            <span>/</span>
            <span className="text-gray-600">Transfer to {data.name}</span>
          </nav>

          {/* Hero */}
          <div className="mb-10">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full mb-4">
              {data.flag} International Transfer
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              How to Transfer Money from Your US LLC to {data.name}
            </h1>
            <p className="text-base text-gray-600 leading-relaxed">
              Complete guide to sending money from your US business bank account to {data.name} ({data.currencyCode}).
              Compare fees, speeds, and regulations for {data.name}-bound transfers.
            </p>
          </div>

          {/* Quick Facts */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
            <h2 className="text-sm font-bold text-blue-900 mb-3">Quick Facts</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-blue-600 font-semibold block">Currency</span>
                <span className="text-gray-800">{data.currency} ({data.currencyCode})</span>
              </div>
              <div>
                <span className="text-blue-600 font-semibold block">Bank Wire Fee</span>
                <span className="text-gray-800">{data.bankWireFee}</span>
              </div>
              <div>
                <span className="text-blue-600 font-semibold block">Typical Speed</span>
                <span className="text-gray-800">{data.typicalSpeed}</span>
              </div>
              <div>
                <span className="text-blue-600 font-semibold block">Best Method</span>
                <span className="text-gray-800">{data.methods[0]?.name || "Wise"}</span>
              </div>
            </div>
          </div>

          {/* TOC */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-10">
            <h2 className="text-sm font-bold text-gray-800 mb-3">In This Guide</h2>
            <ol className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs">
              {TOC.map((item, i) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                    {i + 1}. {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>

          {/* Overview */}
          <section id="overview" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Overview</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              If you own a US LLC and need to transfer money to {data.name}, you have several options ranging from
              traditional bank wires to modern fintech services. The best choice depends on the transfer amount,
              urgency, and whether you prioritize low fees or fast delivery.
            </p>
            {data.specialNotes && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                <div className="flex gap-2">
                  <WarningIcon />
                  <div>
                    <p className="text-xs font-semibold text-amber-800 mb-1">Important Note for {data.name}</p>
                    <p className="text-xs text-amber-700 leading-relaxed">{data.specialNotes}</p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Best Transfer Methods */}
          <section id="best-methods" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Best Transfer Methods</h2>
            <div className="space-y-4">
              {data.methods.map((method, i) => (
                <div key={method.name} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {i === 0 && (
                        <span className="px-2 py-0.5 bg-green-100 text-green-800 text-[10px] font-bold rounded-full">
                          RECOMMENDED
                        </span>
                      )}
                      <h3 className="text-sm font-bold text-gray-900">{method.name}</h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mb-3 text-xs">
                    <div>
                      <span className="text-gray-500 block">Fees</span>
                      <span className="text-gray-800 font-medium">{method.fees}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Speed</span>
                      <span className="text-gray-800 font-medium">{method.speed}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block">Exchange Rate</span>
                      <span className="text-gray-800 font-medium">{method.exchangeRate}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{method.notes}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Fees Comparison Table */}
          <section id="fees-comparison" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Fees & Speed Comparison</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-xs border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold text-gray-700">Service</th>
                    <th className="px-3 py-2 text-left font-semibold text-gray-700">Fees</th>
                    <th className="px-3 py-2 text-left font-semibold text-gray-700">Speed</th>
                    <th className="px-3 py-2 text-left font-semibold text-gray-700">FX Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {data.methods.map((method, i) => (
                    <tr key={method.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                      <td className="px-3 py-2 font-medium text-gray-800">{method.name}</td>
                      <td className="px-3 py-2 text-gray-600">{method.fees}</td>
                      <td className="px-3 py-2 text-gray-600">{method.speed}</td>
                      <td className="px-3 py-2 text-gray-600">{method.exchangeRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Regulations */}
          <section id="regulations" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Regulations & Requirements</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              When transferring money to {data.name}, be aware of these regulatory requirements:
            </p>
            <ul className="space-y-2">
              {data.regulations.map((reg, i) => (
                <li key={i} className="flex gap-2 text-xs text-gray-600">
                  <InfoIcon />
                  <span className="leading-relaxed">{reg}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Pitfalls */}
          <section id="pitfalls" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Common Pitfalls to Avoid</h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <ul className="space-y-3">
                {data.pitfalls.map((pitfall, i) => (
                  <li key={i} className="flex gap-2 text-xs text-red-800">
                    <WarningIcon />
                    <span className="leading-relaxed">{pitfall}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Tax Implications */}
          <section id="tax-implications" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Tax Implications</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Transferring money from your US LLC to {data.name} has important tax considerations on both sides:
            </p>
            <ul className="space-y-2">
              {data.taxImplications.map((impl, i) => (
                <li key={i} className="flex gap-2 text-xs text-gray-600">
                  <DollarIcon />
                  <span className="leading-relaxed">{impl}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Pro Tips */}
          <section id="tips" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Pro Tips for Transferring to {data.name}</h2>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <ul className="space-y-3">
                {data.tips.map((tip, i) => (
                  <li key={i} className="flex gap-2 text-xs text-green-900">
                    <CheckIcon />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* FBAR Section */}
          <section id="fbar" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-3">FBAR & US Reporting Requirements</h2>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 space-y-3">
              <p className="text-xs text-blue-900 leading-relaxed">
                <strong>FBAR (FinCEN Form 114):</strong> If you have foreign bank accounts (including in {data.name})
                with an aggregate balance exceeding $10,000 at any time during the year, you must file an FBAR by April 15
                (automatic extension to October 15).
              </p>
              <p className="text-xs text-blue-900 leading-relaxed">
                <strong>FATCA (Form 8938):</strong> If your foreign financial assets exceed $50,000 at year-end
                (or $75,000 at any time), you must report them on Form 8938 with your tax return.
              </p>
              <p className="text-xs text-blue-900 leading-relaxed">
                <strong>Form 5472:</strong> Your foreign-owned LLC must file Form 5472 annually to report transactions
                with foreign related parties, including transfers to your account in {data.name}.
              </p>
            </div>
          </section>

          {/* Next Steps */}
          <section id="next-steps" className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Next Steps</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/filer"
                className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-bold text-gray-900 mb-1">File Form 5472</h3>
                <p className="text-xs text-gray-500">
                  Report your LLC&apos;s transactions with foreign owners. Required annually.
                </p>
              </Link>
              <Link
                href="/guides/fbar"
                className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-bold text-gray-900 mb-1">FBAR Guide</h3>
                <p className="text-xs text-gray-500">
                  Learn about foreign bank account reporting requirements.
                </p>
              </Link>
              <Link
                href="/guides/us-bank-account"
                className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-bold text-gray-900 mb-1">Open a US Bank Account</h3>
                <p className="text-xs text-gray-500">
                  Guide to opening a US business bank account for your foreign LLC.
                </p>
              </Link>
              <Link
                href={`/guides/llc-tax-${slug === "south-korea" ? "south-korea" : slug}`}
                className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all"
              >
                <h3 className="text-sm font-bold text-gray-900 mb-1">{data.name} LLC Tax Guide</h3>
                <p className="text-xs text-gray-500">
                  Complete tax guide for {data.name} residents who own a US LLC.
                </p>
              </Link>
            </div>
          </section>

          {/* Email CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white text-center">
            <h2 className="text-lg font-bold mb-2">Get Tax Filing Reminders</h2>
            <p className="text-xs text-blue-100 mb-4">
              Never miss a deadline. Get reminders for Form 5472, FBAR, and other filing deadlines.
            </p>
            <Link
              href="/tools/deadline-reminder"
              className="inline-block px-5 py-2.5 bg-white text-blue-700 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Set Up Reminders
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
