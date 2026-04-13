"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { CountryCatalog, EntryCategory } from "@/lib/laws/types";

const CATEGORY_LABELS: Record<EntryCategory, string> = {
  "law-and-guidance": "Law & Guidance",
  forms: "Forms",
  policy: "Policy",
  regulation: "Regulation",
};

const CATEGORY_COLORS: Record<EntryCategory, string> = {
  "law-and-guidance": "bg-blue-100 text-blue-800",
  forms: "bg-green-100 text-green-800",
  policy: "bg-purple-100 text-purple-800",
  regulation: "bg-amber-100 text-amber-800",
};

interface Props {
  catalog: CountryCatalog;
}

export function CountryLawsClient({ catalog }: Props) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const categories = useMemo(() => {
    const set = new Set(catalog.entries.map((e) => e.category));
    return Array.from(set).sort();
  }, [catalog.entries]);

  const filtered = useMemo(() => {
    return catalog.entries.filter((entry) => {
      const matchesSearch =
        search === "" ||
        entry.title.toLowerCase().includes(search.toLowerCase()) ||
        entry.summary.toLowerCase().includes(search.toLowerCase()) ||
        entry.agency.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" || entry.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [catalog.entries, search, categoryFilter]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-[#0a1628] text-white py-12">
          <div className="max-w-6xl mx-auto px-4">
            <Link
              href="/laws"
              className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-[#c9a84c] transition-colors mb-4"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              All Countries
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {catalog.countryName}
            </h1>
            <p className="text-gray-300">
              {catalog.totalEntries}{" "}
              {catalog.totalEntries === 1 ? "entry" : "entries"} from{" "}
              {catalog.agencies.length}{" "}
              {catalog.agencies.length === 1 ? "agency" : "agencies"}
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Agencies */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              Tax Agencies
            </h2>
            <div className="flex flex-wrap gap-3">
              {catalog.agencies.map((agency) => (
                <a
                  key={agency.id}
                  href={agency.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-[#c9a84c] hover:shadow transition-all text-sm"
                >
                  <span className="font-semibold text-[#0a1628]">
                    {agency.name}
                  </span>
                  <svg
                    className="w-3.5 h-3.5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="text"
              placeholder="Search entries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent"
            />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#c9a84c] focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {CATEGORY_LABELS[cat as EntryCategory] || cat}
                </option>
              ))}
            </select>
          </div>

          {/* Entries table */}
          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 py-12">
              No entries match your search.
            </p>
          ) : (
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Title
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">
                        Date
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                        Agency
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Source
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {filtered.map((entry) => (
                      <tr
                        key={entry.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-3">
                          <div className="font-medium text-gray-900 text-sm">
                            {entry.title}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                            {entry.summary}
                          </div>
                          <div className="text-xs text-gray-400 mt-0.5 md:hidden">
                            {entry.publishedDate}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap hidden md:table-cell">
                          {entry.publishedDate}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 hidden lg:table-cell">
                          {entry.agency}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full ${
                              CATEGORY_COLORS[
                                entry.category as EntryCategory
                              ] || "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {CATEGORY_LABELS[
                              entry.category as EntryCategory
                            ] || entry.category}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <a
                            href={entry.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-sm text-[#c9a84c] hover:text-[#b08f3a] font-medium"
                          >
                            View
                            <svg
                              className="w-3.5 h-3.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <p className="text-xs text-gray-400 mt-6 text-center">
            Last updated: {new Date(catalog.lastUpdated).toLocaleDateString()}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
