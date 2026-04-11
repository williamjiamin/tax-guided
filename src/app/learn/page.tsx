import type { Metadata } from "next";
import {
  getUniqueVideos,
  CATEGORIES,
  YOUTUBE_CHANNEL,
  SPOTIFY_PODCAST,
} from "@/lib/learn/video-catalog";
import { LearnPageClient } from "@/components/learn/LearnPageClient";

export const metadata: Metadata = {
  title: "Tax Education Hub — Free Video Guides on U.S. Tax Topics",
  description:
    "Free video guides and articles on U.S. tax topics — from IRS forms to filing strategies. Learn about Form 5472, Form 1120, foreign income reporting, and more.",
  openGraph: {
    title: "Tax Education Hub — Free Video Guides on U.S. Tax Topics",
    description:
      "Free video guides and articles on U.S. tax topics. Learn about Form 5472, Form 1120, and filing strategies for foreign-owned LLCs.",
    url: "https://foreignllctax.com/learn",
    type: "website",
  },
  alternates: {
    canonical: "/learn",
  },
};

export default function LearnPage() {
  const videos = getUniqueVideos();

  return (
    <LearnPageClient
      videos={videos}
      categories={CATEGORIES as unknown as Record<string, string>}
      youtubeChannel={YOUTUBE_CHANNEL}
      spotifyPodcast={SPOTIFY_PODCAST}
    />
  );
}
