"use client";

import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ALL_TAX_SYSTEMS, TAX_SYSTEMS_BY_CODE } from "@/lib/tax-data";
import type { TaxSystem, TaxBracket } from "@/lib/tax-data";

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const MAX_COUNTRIES = 3;
const DEFAULT_CODES = ["US", "GB", "SG"];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function formatCurrency(amount: number, symbol: string) {
  return `${symbol}${amount.toLocaleString()}`;
}

function gridColsClass(count: number) {
  if (count === 3) return "grid-cols-1 md:grid-cols-3";
  return "grid-cols-1 md:grid-cols-2";
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

function CountrySelector({
  selected,
  onToggle,
}: {
  selected: string[];
  onToggle: (code: string) => void;
}) {
  const [maxMsg, setMaxMsg] = useState(false);

  function handleClick(code: string) {
    if (selected.includes(code)) {
      if (selected.length <= 1) return; // keep at least 1
      onToggle(code);
    } else if (selected.length >= MAX_COUNTRIES) {
      setMaxMsg(true);
      setTimeout(() => setMaxMsg(false), 2500);
    } else {
      onToggle(code);
    }
  }

  return (
    <div className="text-center">
      <p className="text-sm text-gray-400 mb-4">
        Select 2-3 countries to compare (click to toggle)
      </p>
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        {ALL_TAX_SYSTEMS.map((sys) => {
          const active = selected.includes(sys.countryCode);
          return (
            <button
              key={sys.countryCode}
              onClick={() => handleClick(sys.countryCode)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-150 border ${
                active
                  ? "bg-gold text-navy border-gold shadow-md shadow-gold/20"
                  : "bg-navy-light/40 text-gray-400 border-gray-600 hover:border-gold/50 hover:text-gray-200"
              }`}
            >
              {sys.countryCode}
            </button>
          );
        })}
      </div>
      {maxMsg && (
        <p className="text-xs text-gold mt-3 animate-pulse">
          Maximum {MAX_COUNTRIES} countries. Deselect one first.
        </p>
      )}
    </div>
  );
}

function BracketTable({
  brackets,
  symbol,
}: {
  brackets: TaxBracket[];
  symbol: string;
}) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-gray-200">
          <th className="text-left py-2 pr-3 font-semibold text-gray-700">
            Income range
          </th>
          <th className="text-right py-2 font-semibold text-gray-700">Rate</th>
        </tr>
      </thead>
      <tbody>
        {brackets.map((b, i) => (
          <tr key={i} className="border-b border-gray-100 last:border-0">
            <td className="py-2 pr-3 text-gray-600">
              {b.max
                ? `${formatCurrency(b.min, symbol)} - ${formatCurrency(b.max, symbol)}`
                : `Over ${formatCurrency(b.min, symbol)}`}
            </td>
            <td className="py-2 text-right font-medium text-gray-900">
              {b.rate}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function ComparisonRow({
  label,
  countries,
  getValue,
  getDetail,
}: {
  label: string;
  countries: TaxSystem[];
  getValue: (sys: TaxSystem) => string;
  getDetail?: (sys: TaxSystem) => string | undefined;
}) {
  return (
    <div
      className={`grid gap-4 py-6 border-b border-gray-100 last:border-0 ${
        countries.length === 3
          ? "grid-cols-1 md:grid-cols-[180px_1fr_1fr_1fr]"
          : "grid-cols-1 md:grid-cols-[200px_1fr_1fr]"
      }`}
    >
      <div className="font-bold text-gray-900 text-sm md:pt-0.5">{label}</div>
      {countries.map((sys) => {
        const detail = getDetail?.(sys);
        return (
          <div key={sys.countryCode}>
            <p className="text-lg font-semibold text-navy">{getValue(sys)}</p>
            {detail && (
              <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                {detail}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ComparePage() {
  const [selectedCodes, setSelectedCodes] = useState<string[]>(DEFAULT_CODES);

  useEffect(() => {
    document.title =
      "Multi-Country Tax Comparison | TaxGuided.com";
  }, []);

  function toggleCountry(code: string) {
    setSelectedCodes((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code],
    );
  }

  const countries = selectedCodes
    .map((c) => TAX_SYSTEMS_BY_CODE[c])
    .filter(Boolean);

  const colCount = countries.length;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero + Selector */}
        <section className="bg-gradient-to-b from-navy-dark to-navy pt-20 pb-10 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-navy-light/60 text-gold px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase mb-8 border border-gold/20">
              <span>Tax System Comparison</span>
            </div>
            <h1 className="text-[2.5rem] md:text-[3.25rem] font-extrabold text-white mb-5 leading-[1.1] tracking-tight">
              {countries.map((c) => c.country).join(" vs ")}
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
              Compare corporate rates, individual brackets, capital gains, VAT,
              withholding, and key features across up to {MAX_COUNTRIES}{" "}
              countries side by side.
            </p>

            <CountrySelector
              selected={selectedCodes}
              onToggle={toggleCountry}
            />
          </div>
        </section>

        {/* Country headers */}
        <section className="bg-gray-50/50 border-b border-gray-100 py-6 px-6">
          <div
            className={`max-w-5xl mx-auto grid gap-4 ${
              colCount === 3
                ? "grid-cols-1 md:grid-cols-[180px_1fr_1fr_1fr]"
                : "grid-cols-1 md:grid-cols-[200px_1fr_1fr]"
            }`}
          >
            <div className="hidden md:block" />
            {countries.map((sys) => (
              <div key={sys.countryCode} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {sys.countryCode}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{sys.country}</p>
                  <a
                    href={sys.taxAuthorityUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold-dark hover:underline"
                  >
                    {sys.taxAuthority}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Comparison rows */}
        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <ComparisonRow
              label="Corporate rate"
              countries={countries}
              getValue={(s) => s.corporateRate}
              getDetail={(s) => s.corporateDetails}
            />
            <ComparisonRow
              label="Capital gains"
              countries={countries}
              getValue={(s) => s.capitalGainsRate}
              getDetail={(s) => s.capitalGainsDetails}
            />
            <ComparisonRow
              label="VAT / Sales tax"
              countries={countries}
              getValue={(s) => s.vatOrSalesTax}
              getDetail={(s) => s.vatDetails}
            />
            <ComparisonRow
              label="Social security"
              countries={countries}
              getValue={(s) => s.socialSecurity}
              getDetail={(s) => s.socialSecurityDetails}
            />
            <ComparisonRow
              label="Filing deadline"
              countries={countries}
              getValue={(s) => s.filingDeadline}
            />
          </div>
        </section>

        {/* Individual brackets */}
        <section className="py-10 px-6 bg-gray-50/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
              Individual income tax brackets
            </h2>

            <div className={`grid gap-8 ${gridColsClass(colCount)}`}>
              {countries.map((sys) => (
                <div
                  key={sys.countryCode}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center text-white font-bold text-xs">
                      {sys.countryCode}
                    </span>
                    <h3 className="font-bold text-gray-900">
                      {sys.country} ({sys.currencySymbol})
                    </h3>
                  </div>
                  <BracketTable
                    brackets={sys.individualBrackets}
                    symbol={sys.currencySymbol}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Withholding rates */}
        <section className="py-10 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
              Withholding tax rates (non-residents)
            </h2>

            <div className="bg-white border border-gray-200 rounded-xl overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left py-3 px-4 font-semibold">Type</th>
                    {countries.map((sys) => (
                      <th
                        key={sys.countryCode}
                        className="text-center py-3 px-4 font-semibold"
                      >
                        {sys.country}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {(["dividends", "interest", "royalties"] as const).map(
                    (type) => (
                      <tr
                        key={type}
                        className="border-b border-gray-100 last:border-0"
                      >
                        <td className="py-3 px-4 font-medium text-gray-700 capitalize">
                          {type}
                        </td>
                        {countries.map((sys) => (
                          <td
                            key={sys.countryCode}
                            className="py-3 px-4 text-center text-gray-600"
                          >
                            {sys.withholding[type]}
                          </td>
                        ))}
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key features */}
        <section className="py-10 px-6 bg-gray-50/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-8">
              Key features
            </h2>

            <div className={`grid gap-8 ${gridColsClass(colCount)}`}>
              {countries.map((sys) => (
                <div
                  key={sys.countryCode}
                  className="bg-white border border-gray-200 rounded-xl p-6"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center text-white font-bold text-xs">
                      {sys.countryCode}
                    </span>
                    <h3 className="font-bold text-gray-900">{sys.country}</h3>
                  </div>
                  <ul className="space-y-3">
                    {sys.keyFeatures.map((feature, i) => (
                      <li key={i} className="flex gap-2.5 text-sm">
                        <span className="text-gold mt-0.5 flex-shrink-0">
                          <CheckIcon />
                        </span>
                        <span className="text-gray-600 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="py-8 px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs text-gray-400 leading-relaxed text-center">
              This comparison is for educational purposes only and reflects
              general federal-level tax rules. Tax laws change frequently and may
              vary by jurisdiction. Consult a qualified tax professional for
              advice specific to your situation.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
