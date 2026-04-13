"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { CountrySummary } from "@/lib/laws/types";

const FLAG_EMOJI: Record<string, string> = {
  US: "\uD83C\uDDFA\uD83C\uDDF8",
  CN: "\uD83C\uDDE8\uD83C\uDDF3",
  GB: "\uD83C\uDDEC\uD83C\uDDE7",
  DE: "\uD83C\uDDE9\uD83C\uDDEA",
  FR: "\uD83C\uDDEB\uD83C\uDDF7",
  JP: "\uD83C\uDDEF\uD83C\uDDF5",
  KR: "\uD83C\uDDF0\uD83C\uDDF7",
  IN: "\uD83C\uDDEE\uD83C\uDDF3",
  BR: "\uD83C\uDDE7\uD83C\uDDF7",
  CA: "\uD83C\uDDE8\uD83C\uDDE6",
  AU: "\uD83C\uDDE6\uD83C\uDDFA",
  SG: "\uD83C\uDDF8\uD83C\uDDEC",
  HK: "\uD83C\uDDED\uD83C\uDDF0",
  AE: "\uD83C\uDDE6\uD83C\uDDEA",
  IE: "\uD83C\uDDEE\uD83C\uDDEA",
  NL: "\uD83C\uDDF3\uD83C\uDDF1",
  CH: "\uD83C\uDDE8\uD83C\uDDED",
  MX: "\uD83C\uDDF2\uD83C\uDDFD",
  ID: "\uD83C\uDDEE\uD83C\uDDE9",
  EE: "\uD83C\uDDEA\uD83C\uDDEA",
};

interface Props {
  countries: CountrySummary[];
  totalEntries: number;
  totalAgencies: number;
}

export function LawsPageClient({
  countries,
  totalEntries,
  totalAgencies,
}: Props) {
  const [search, setSearch] = useState("");

  const filtered = countries.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-[#0a1628] text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Global Tax Law Database
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Browse official tax regulations, guidance, and forms from{" "}
              {countries.length} countries. Sourced directly from government tax
              authorities.
            </p>

            {/* Stats */}
            <div className="flex justify-center gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-[#c9a84c]">
                  {totalEntries}
                </div>
                <div className="text-sm text-gray-400">Total Entries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#c9a84c]">
                  {countries.length}
                </div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#c9a84c]">
                  {totalAgencies}
                </div>
                <div className="text-sm text-gray-400">Agencies</div>
              </div>
            </div>

            {/* Search */}
            <div className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search countries..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Country Grid */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 py-8">
              No countries match your search.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((country) => (
                <Link
                  key={country.code}
                  href={`/laws/${country.code.toLowerCase()}`}
                  className="group block bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-[#c9a84c] transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-3xl" role="img" aria-label={country.name}>
                      {FLAG_EMOJI[country.code] || country.code}
                    </span>
                    <div>
                      <span className="inline-block px-2 py-0.5 text-xs font-mono font-semibold bg-[#0a1628] text-white rounded mb-1">
                        {country.code}
                      </span>
                      <h2 className="text-lg font-bold text-gray-900 group-hover:text-[#c9a84c] transition-colors">
                        {country.name}
                      </h2>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    <span className="font-semibold text-[#0a1628]">
                      {country.entryCount}
                    </span>{" "}
                    {country.entryCount === 1 ? "entry" : "entries"}
                    {" | "}
                    <span className="font-semibold text-[#0a1628]">
                      {country.agencyCount}
                    </span>{" "}
                    {country.agencyCount === 1 ? "agency" : "agencies"}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {country.agencies.slice(0, 2).map((a) => (
                      <span
                        key={a}
                        className="inline-block px-2 py-0.5 text-xs bg-gray-100 text-gray-600 rounded-full truncate max-w-full"
                        title={a}
                      >
                        {a}
                      </span>
                    ))}
                    {country.agencies.length > 2 && (
                      <span className="inline-block px-2 py-0.5 text-xs bg-gray-100 text-gray-500 rounded-full">
                        +{country.agencies.length - 2} more
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
