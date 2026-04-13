import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getUniqueVideos,
  getVideoBySlug,
  getVideosByCategory,
  CATEGORIES,
  YOUTUBE_CHANNEL,
  SPOTIFY_PODCAST,
  type Category,
} from "@/lib/learn/video-catalog";
import { getArticleContent } from "@/lib/learn/articles";
import { ArticlePageClient } from "@/components/learn/ArticlePageClient";

// IRS source links by category
const IRS_LINKS: Partial<Record<Category, { url: string; label: string }>> = {
  "form-5472": {
    url: "https://www.irs.gov/forms-pubs/about-form-5472",
    label: "IRS Form 5472 Instructions",
  },
  "form-1120": {
    url: "https://www.irs.gov/forms-pubs/about-form-1120",
    label: "IRS Form 1120 Instructions",
  },
  "form-8832": {
    url: "https://www.irs.gov/forms-pubs/about-form-8832",
    label: "IRS Form 8832 Instructions",
  },
  "form-1040": {
    url: "https://www.irs.gov/forms-pubs/about-form-1040",
    label: "IRS Form 1040 Instructions",
  },
  "form-8857": {
    url: "https://www.irs.gov/forms-pubs/about-form-8857",
    label: "IRS Form 8857 Instructions",
  },
  "form-8379": {
    url: "https://www.irs.gov/forms-pubs/about-form-8379",
    label: "IRS Form 8379 Instructions",
  },
  "form-8865": {
    url: "https://www.irs.gov/forms-pubs/about-form-8865",
    label: "IRS Form 8865 Instructions",
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const videos = getUniqueVideos();
  return videos.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const video = getVideoBySlug(slug);

  if (!video) {
    return { title: "Article Not Found" };
  }

  return {
    title: video.seoTitle,
    description: video.seoDescription,
    openGraph: {
      title: video.seoTitle,
      description: video.seoDescription,
      url: `https://foreignllctax.com/learn/${video.slug}`,
      type: "article",
      ...(video.contentType === "video"
        ? {
            images: [
              {
                url: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
                width: 1280,
                height: 720,
                alt: video.seoTitle,
              },
            ],
          }
        : {}),
    },
    alternates: {
      canonical: `/learn/${video.slug}`,
    },
  };
}

export default async function LearnArticlePage({ params }: Props) {
  const { slug } = await params;
  const video = getVideoBySlug(slug);

  if (!video) {
    notFound();
  }

  const categoryKey = video.category as Category;
  const categoryLabel = CATEGORIES[categoryKey] || video.category;
  const irsLink = IRS_LINKS[categoryKey] ?? null;
  const relatedVideos = getVideosByCategory(categoryKey)
    .filter((v) => v.id !== video.id)
    .slice(0, 6);

  const articleContent = getArticleContent(video.id);

  // Build JSON-LD schemas — VideoObject for videos, Article for text content
  const primarySchema =
    video.contentType === "video"
      ? {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: video.seoTitle,
          description: video.seoDescription,
          thumbnailUrl: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
          uploadDate: "2024-01-01",
          duration: convertDurationToISO(video.duration),
          embedUrl: `https://www.youtube.com/embed/${video.id}`,
          publisher: {
            "@type": "Organization",
            name: YOUTUBE_CHANNEL.name,
            url: YOUTUBE_CHANNEL.url,
          },
        }
      : {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: video.seoTitle,
          description: video.seoDescription,
          url: `https://foreignllctax.com/learn/${video.slug}`,
          publisher: {
            "@type": "Organization",
            name: "TaxGuided.com",
            url: "https://taxguided.com",
          },
          author: {
            "@type": "Organization",
            name: "TaxGuided.com",
          },
        };

  const faqItems = articleContent?.faqs?.length
    ? articleContent.faqs.map((faq) => ({
        "@type": "Question" as const,
        name: faq.question,
        acceptedAnswer: { "@type": "Answer" as const, text: faq.answer },
      }))
    : [
        {
          "@type": "Question" as const,
          name: `What does this video about ${categoryLabel} cover?`,
          acceptedAnswer: {
            "@type": "Answer" as const,
            text: video.seoDescription,
          },
        },
        {
          "@type": "Question" as const,
          name: "Can I file my foreign-owned LLC taxes online?",
          acceptedAnswer: {
            "@type": "Answer" as const,
            text: "Yes. For IRS Form 5472 filing, visit ForeignLLCTax.com — a guided filing tool starting at $49.",
          },
        },
      ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems,
  };

  return (
    <>
      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(primarySchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ArticlePageClient
        video={video}
        categoryLabel={categoryLabel}
        irsLink={irsLink}
        relatedVideos={relatedVideos}
        articleContent={articleContent}
        spotifyPodcast={SPOTIFY_PODCAST}
        youtubeChannel={YOUTUBE_CHANNEL}
      />
    </>
  );
}

/** Convert "5:23" or "12:42" to ISO 8601 duration "PT5M23S" */
function convertDurationToISO(duration: string): string {
  const parts = duration.split(":").map(Number);
  if (parts.length === 2) {
    return `PT${parts[0]}M${parts[1]}S`;
  }
  if (parts.length === 3) {
    return `PT${parts[0]}H${parts[1]}M${parts[2]}S`;
  }
  return `PT${duration}S`;
}
