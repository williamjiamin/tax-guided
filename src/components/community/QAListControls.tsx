"use client";

// Client-only filter overlay. When the filter is empty, it just renders
// `children` (the server-rendered cards), so Googlebot's first crawl always
// sees real <a href> links. When the user types a query, the client component
// switches to its own filtered list.

import { useState, type ReactNode } from "react";
import Link from "next/link";
import {
  getAvatarColor,
  getInitials,
  type QAThread,
} from "@/lib/qa/qa-catalog";
import { Search } from "lucide-react";

interface Props {
  allThreads: (QAThread & { slug: string })[];
  children: ReactNode;
}

export function QAListControls({ allThreads, children }: Props) {
  const [searchQuery, setSearchQuery] = useState("");
  const isFiltering = searchQuery.trim().length > 0;

  const filtered = isFiltering
    ? allThreads.filter((t) => {
        const q = searchQuery.toLowerCase();
        return (
          t.question.title.toLowerCase().includes(q) ||
          t.question.tags.some((tag) => tag.toLowerCase().includes(q))
        );
      })
    : [];

  return (
    <>
      {/* Search box */}
      <div className="mb-6">
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="search"
            placeholder={`Search ${allThreads.length.toLocaleString()} threads...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {isFiltering ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.length === 0 ? (
            <p className="col-span-full text-center text-gray-500 py-12">
              No matches for &ldquo;{searchQuery}&rdquo;.
            </p>
          ) : (
            filtered.slice(0, 60).map((thread) => {
              const color = getAvatarColor(thread.question.author.avatarSeed);
              const initials = getInitials(thread.question.author.displayName);
              return (
                <Link
                  key={thread.question.id}
                  href={`/community/${thread.slug}`}
                  className="block bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all p-5"
                >
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {thread.question.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                    {thread.question.body}
                  </p>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                      style={{ backgroundColor: color }}
                    >
                      {initials}
                    </div>
                    <span className="text-xs text-gray-600">
                      {thread.question.author.displayName}
                    </span>
                  </div>
                </Link>
              );
            })
          )}
        </div>
      ) : (
        children
      )}
    </>
  );
}
