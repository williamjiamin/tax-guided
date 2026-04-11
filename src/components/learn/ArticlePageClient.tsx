"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useT, useLocale } from "@/lib/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { ArticleContent } from "@/lib/learn/articles";
import type { VideoEntry, Category } from "@/lib/learn/video-catalog";
import { loadTranslatedArticle } from "@/lib/learn/article-translations";

interface ArticlePageClientProps {
  video: VideoEntry;
  categoryLabel: string;
  irsLink: { url: string; label: string } | null;
  relatedVideos: VideoEntry[];
  articleContent: ArticleContent | null;
  spotifyPodcast: { name: string; url: string; rating: string };
  youtubeChannel: { name: string; url: string; totalVideos: number };
}

export function ArticlePageClient({
  video,
  categoryLabel,
  irsLink,
  relatedVideos,
  articleContent,
  spotifyPodcast,
  youtubeChannel,
}: ArticlePageClientProps) {
  const { t } = useT();
  const { locale } = useLocale();
  const [translatedArticle, setTranslatedArticle] =
    useState<ArticleContent | null>(articleContent);

  // Load translated article when locale changes
  useEffect(() => {
    if (locale === "en" || !articleContent) {
      setTranslatedArticle(articleContent);
      return;
    }
    let cancelled = false;
    loadTranslatedArticle(video.id, locale, articleContent).then((result) => {
      if (!cancelled) setTranslatedArticle(result);
    });
    return () => {
      cancelled = true;
    };
  }, [locale, video.id, articleContent]);

  const article = translatedArticle;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-50/70 border-b border-gray-100 px-6 py-3">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-gray-600">
                {t("article.home")}
              </Link>
              <span>/</span>
              <Link href="/learn" className="hover:text-gray-600">
                {t("article.learn")}
              </Link>
              <span>/</span>
              <span className="text-gray-600 truncate max-w-xs">
                {video.seoTitle}
              </span>
            </nav>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full mb-4">
                {categoryLabel}
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 leading-tight">
                {video.seoTitle}
              </h1>
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  {video.contentType === "video" ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  )}
                  {video.duration}
                </span>
                {video.contentType === "video" && (
                  <span>
                    {t("article.by")}{" "}
                    <a
                      href={youtubeChannel.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {youtubeChannel.name}
                    </a>
                  </span>
                )}
                {video.contentType !== "video" && (
                  <span className={`inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${video.contentType === "qa" ? "text-amber-700 bg-amber-50" : "text-indigo-600 bg-indigo-50"}`}>
                    {video.contentType === "qa" ? "Q&A Guide" : "Article"}
                  </span>
                )}
              </div>
            </div>

            {/* YouTube Embed — only for video content */}
            {video.contentType === "video" && (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 bg-gray-100 shadow-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.seoTitle}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            )}

            {/* Article Content */}
            {article ? (
              <div className="mb-10">
                {/* Key Takeaways */}
                {article.keyTakeaways.length > 0 && (
                  <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-6 mb-8">
                    <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      {t("article.keyTakeaways")}
                    </h2>
                    <ul className="space-y-2">
                      {article.keyTakeaways.map((takeaway, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-[15px] text-gray-700"
                        >
                          <svg
                            className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {takeaway}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Article Sections */}
                {article.sections.map((section, i) => (
                  <div key={i} className="mb-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                      {section.heading}
                    </h2>
                    {section.body.split("\n\n").map((para, j) => (
                      <p
                        key={j}
                        className="text-[15px] text-gray-600 leading-relaxed mb-4"
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="prose prose-gray max-w-none mb-10">
                <p className="text-lg text-gray-600 leading-relaxed">
                  {video.seoDescription}
                </p>
              </div>
            )}

            {/* Tags */}
            {video.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {video.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className={`grid ${video.contentType === "video" ? "md:grid-cols-3" : irsLink ? "md:grid-cols-2" : "md:grid-cols-1"} gap-6 mb-12`}>
              {/* IRS Source Link */}
              {irsLink && (
                <a
                  href={irsLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-gray-100 p-6 hover:shadow-sm transition-shadow group"
                >
                  <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center mb-3">
                    <svg
                      className="w-4.5 h-4.5 text-red-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    {irsLink.label}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {t("article.officialIrsSource")}
                  </p>
                </a>
              )}

              {/* Spotify & YouTube — only for video content */}
              {video.contentType === "video" && (
                <>
                  <a
                    href={spotifyPodcast.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-gray-100 p-6 hover:shadow-sm transition-shadow group"
                  >
                    <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {t("article.listenOnSpotify")}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {spotifyPodcast.name} — {spotifyPodcast.rating} rating
                    </p>
                  </a>

                  <a
                    href={youtubeChannel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl border border-gray-100 p-6 hover:shadow-sm transition-shadow group"
                  >
                    <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {t("article.watchOnYoutube")}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {youtubeChannel.name} — {youtubeChannel.totalVideos} videos
                    </p>
                  </a>
                </>
              )}

              {/* Filing service CTA for article/QA content */}
              {video.contentType !== "video" && (
                <a
                  href="/consultation"
                  className="rounded-2xl border border-gray-100 p-6 hover:shadow-sm transition-shadow group"
                >
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4.5 h-4.5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                    Need Help Filing?
                  </h3>
                  <p className="text-xs text-gray-400">
                    Book a consultation with a CPA
                  </p>
                </a>
              )}
            </div>

            {/* File Your Taxes CTA */}
            <div className="rounded-2xl border-2 border-blue-600 bg-blue-50/50 p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {t("article.fileYourLlc")}
                  </h3>
                  <p className="text-[15px] text-gray-600 leading-relaxed">
                    {t("article.fileYourLlcDesc")}
                  </p>
                </div>
                <Link
                  href="/filer"
                  className="inline-flex items-center justify-center px-7 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-[15px] shadow-lg shadow-blue-600/20 whitespace-nowrap"
                >
                  {t("article.startFiling")}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Related Articles */}
            {relatedVideos.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-6">
                  {t("article.moreOn", { category: categoryLabel })}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {relatedVideos.map((related) => (
                    <Link
                      key={related.id}
                      href={`/learn/${related.slug}`}
                      className="group rounded-2xl border border-gray-100 bg-white p-5 hover:shadow-md hover:border-gray-200 transition-all"
                    >
                      <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-3 bg-gray-100">
                        {related.contentType === "video" ? (
                          <img
                            src={`https://img.youtube.com/vi/${related.id}/mqdefault.jpg`}
                            alt={related.seoTitle}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        ) : (
                          <div className={`w-full h-full flex flex-col items-center justify-center px-4 text-center ${related.contentType === "qa" ? "bg-gradient-to-br from-amber-600 to-orange-700" : "bg-gradient-to-br from-blue-600 to-indigo-700"}`}>
                            <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mb-1.5">
                              {related.contentType === "qa" ? (
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                              ) : (
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                              )}
                            </div>
                            <p className="text-white/90 text-[10px] font-semibold leading-tight line-clamp-2">{related.title}</p>
                          </div>
                        )}
                        <span className="absolute bottom-2 right-2 bg-black/75 text-white text-xs font-medium px-2 py-0.5 rounded">
                          {related.duration}
                        </span>
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                        {related.seoTitle}
                      </h3>
                    </Link>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Link
                    href="/learn"
                    className="text-blue-600 font-medium text-sm hover:underline"
                  >
                    {t("article.viewAllArticles")}
                  </Link>
                </div>
              </section>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
