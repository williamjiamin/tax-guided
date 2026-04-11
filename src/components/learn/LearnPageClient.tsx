"use client";

import Link from "next/link";
import { useT } from "@/lib/i18n";
import { LearnFilter } from "@/components/learn/LearnFilter";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { VideoEntry } from "@/lib/learn/video-catalog";

interface LearnPageClientProps {
  videos: VideoEntry[];
  categories: Record<string, string>;
  youtubeChannel: { name: string; url: string; totalVideos: number };
  spotifyPodcast: { name: string; url: string; rating: string };
}

export function LearnPageClient({
  videos,
  categories,
  youtubeChannel,
  spotifyPodcast,
}: LearnPageClientProps) {
  const { t } = useT();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50/80 to-white pt-16 pb-12 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-blue-700 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide uppercase mb-8">
              <span>{t("learn.freeResources")}</span>
              <span className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-[10px]">
                {t("learn.videosCount", { count: String(videos.length) })}
              </span>
            </div>
            <h1 className="text-[2.75rem] md:text-[3.5rem] font-extrabold text-gray-900 mb-5 leading-[1.1] tracking-tight">
              {t("learn.title")}
            </h1>
            <p className="text-xl md:text-2xl text-blue-600 font-semibold mb-6 tracking-tight">
              {t("learn.subtitle")}
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed">
              {t("learn.description")}
            </p>
          </div>
        </section>

        {/* Podcast & YouTube promo strip */}
        <section className="py-6 px-6 border-y border-gray-100 bg-gray-50/50">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={youtubeChannel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-red-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">
                  {youtubeChannel.name}
                </span>
                <span className="text-xs text-gray-400">
                  {t("learn.videosOnYoutube", {
                    count: String(youtubeChannel.totalVideos),
                  })}
                </span>
              </div>
            </a>

            <span className="hidden sm:block text-gray-200">|</span>

            <a
              href={spotifyPodcast.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-green-600"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">
                  {spotifyPodcast.name}
                </span>
                <span className="text-xs text-gray-400">
                  {t("learn.ratingOnSpotify", {
                    rating: spotifyPodcast.rating,
                  })}
                </span>
              </div>
            </a>
          </div>
        </section>

        {/* Articles with Filter */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <LearnFilter
              videos={videos}
              categories={categories}
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              {t("learn.readyToFile")}
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              {t("learn.readyToFileDesc")}
            </p>
            <Link
              href="/filer"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors text-[15px]"
            >
              {t("learn.startFilingNow")}
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
        </section>
      </main>

      <Footer />
    </div>
  );
}
