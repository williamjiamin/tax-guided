"use client";

import { useState } from "react";
import type { RegulationItem } from "@/lib/regulations/types";

const JURISDICTION_FILTERS = [
  { id: "all", label: "All Updates" },
  { id: "US", label: "United States" },
  { id: "CN", label: "China" },
] as const;

function JurisdictionBadge({ jurisdiction }: { jurisdiction: "US" | "CN" }) {
  return jurisdiction === "US" ? (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700">
      US
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-700">
      CN
    </span>
  );
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

export function RegulationFeedClient({ items }: { items: RegulationItem[] }) {
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? items : items.filter((i) => i.jurisdiction === filter);
  const sorted = [...filtered].sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));

  return (
    <div>
      {/* Filters */}
      <div className="flex gap-2 mb-8">
        {JURISDICTION_FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              filter === f.id
                ? "bg-navy text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {f.label}
            {f.id !== "all" && (
              <span className="ml-1.5 text-xs opacity-70">
                ({items.filter((i) => i.jurisdiction === f.id).length})
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="space-y-4">
        {sorted.length === 0 ? (
          <p className="text-gray-400 text-center py-12">No regulation updates available.</p>
        ) : (
          sorted.map((item) => (
            <a
              key={item.id}
              href={item.officialSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-5 rounded-xl border border-gray-200 hover:border-gold hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <JurisdictionBadge jurisdiction={item.jurisdiction} />
                    <span className="text-xs text-gray-400">{item.sourceName}</span>
                    <span className="text-xs text-gray-300">|</span>
                    <span className="text-xs text-gray-400">{formatDate(item.publishedDate)}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-navy transition-colors mb-1.5 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">{item.summary}</p>
                </div>
                <svg className="w-5 h-5 text-gray-300 group-hover:text-gold flex-shrink-0 mt-1 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          ))
        )}
      </div>

      {/* Source attribution */}
      <div className="mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-xs text-gray-400">
          Data sourced directly from official government publications.
          All links point to original source documents on IRS.gov and chinatax.gov.cn.
        </p>
      </div>
    </div>
  );
}
