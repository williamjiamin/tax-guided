"use client";

import { useState } from "react";
import Link from "next/link";
import { useT } from "@/lib/i18n";
import type { VideoEntry } from "@/lib/learn/video-catalog";

interface LearnFilterProps {
  videos: VideoEntry[];
  categories: Record<string, string>;
}

export function LearnFilter({ videos, categories }: LearnFilterProps) {
  const [active, setActive] = useState<string | null>(null);
  const { t } = useT();

  const filtered = active
    ? videos.filter((v) => v.category === active)
    : videos;

  // Group filtered videos by category
  const grouped = new Map<string, VideoEntry[]>();
  for (const v of filtered) {
    const list = grouped.get(v.category) || [];
    list.push(v);
    grouped.set(v.category, list);
  }

  return (
    <>
      {/* Category Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        <button
          onClick={() => setActive(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            active === null
              ? "bg-blue-600 text-white shadow-sm"
              : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          {t("learn.allTopics")}
        </button>
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActive(active === key ? null : key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              active === key
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Results count */}
      <p className="text-sm text-gray-400 mb-8 text-center">
        {active
          ? t("learn.articlesInCategory", {
              count: String(filtered.length),
              category: categories[active],
            })
          : t("learn.articlesInAll", { count: String(filtered.length) })}
      </p>

      {/* Grouped article grid */}
      {Array.from(grouped.entries()).map(([categoryKey, categoryVideos]) => (
        <section key={categoryKey} className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">
            {categories[categoryKey] || categoryKey}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {categoryVideos.map((video) => {
              const isVideo = video.contentType === "video";
              const isQA = video.contentType === "qa";
              return (
              <Link
                key={video.id}
                href={`/learn/${video.slug}`}
                className="group rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-md hover:border-gray-200 transition-all"
              >
                {/* Thumbnail — YouTube image for videos, styled placeholder for articles/QA */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4 bg-gray-100">
                  {isVideo ? (
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.seoTitle}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className={`w-full h-full flex flex-col items-center justify-center px-6 text-center ${isQA ? "bg-gradient-to-br from-amber-600 to-orange-700" : "bg-gradient-to-br from-blue-600 to-indigo-700"}`}>
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2.5 ${isQA ? "bg-white/20" : "bg-white/20"}`}>
                        {isQA ? (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        )}
                      </div>
                      <p className="text-white/90 text-xs font-semibold leading-tight line-clamp-2">{video.title}</p>
                      <span className={`mt-2 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${isQA ? "bg-amber-500/30 text-amber-100" : "bg-blue-500/30 text-blue-100"}`}>
                        {isQA ? "Q&A Guide" : "Article"}
                      </span>
                    </div>
                  )}
                  <span className="absolute bottom-2 right-2 bg-black/75 text-white text-xs font-medium px-2 py-0.5 rounded">
                    {video.duration}
                  </span>
                </div>

                {/* Badges: category + content type */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {categories[video.category] || video.category}
                  </span>
                  {!isVideo && (
                    <span className={`inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${isQA ? "text-amber-700 bg-amber-50" : "text-indigo-600 bg-indigo-50"}`}>
                      {isQA ? "Q&A" : "Article"}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-[15px] font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                  {video.seoTitle}
                </h3>

                {/* Duration / read time */}
                <div className="flex items-center gap-1.5 mt-3 text-xs text-gray-400">
                  {isVideo ? (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )}
                  <span>
                    {isVideo
                      ? t("learn.videoGuide", { duration: video.duration })
                      : video.duration}
                  </span>
                </div>
              </Link>
              );
            })}
          </div>
        </section>
      ))}

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">{t("learn.noArticles")}</p>
          <button
            onClick={() => setActive(null)}
            className="mt-4 text-blue-600 font-medium hover:underline"
          >
            {t("learn.viewAllArticles")}
          </button>
        </div>
      )}
    </>
  );
}
