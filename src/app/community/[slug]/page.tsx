import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  QA_CATALOG,
  getQABySlug,
  getAllQASlugs,
  getQAsByCategory,
} from "@/lib/qa/qa-catalog";
import { QAThreadClient } from "@/components/community/QAThreadClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllQASlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const thread = getQABySlug(slug);

  if (!thread) {
    return { title: "Question Not Found" };
  }

  const { question } = thread;

  return {
    title: question.seoTitle,
    description: question.seoDescription,
    alternates: { canonical: `/community/${slug}` },
    openGraph: {
      title: question.seoTitle,
      description: question.seoDescription,
      url: `/community/${slug}`,
      type: "article",
    },
  };
}

export default async function CommunityThreadPage({ params }: Props) {
  const { slug } = await params;
  const thread = getQABySlug(slug);

  if (!thread) {
    notFound();
  }

  // Get related threads (same category, exclude current)
  const related = getQAsByCategory(thread.question.category)
    .filter((t) => t.question.id !== thread.question.id)
    .slice(0, 3);

  // JSON-LD structured data for Q&A page
  const answer = thread.answers[0];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: thread.question.title,
      text: thread.question.body,
      dateCreated: thread.question.postedAt,
      answerCount: thread.question.answerCount,
      ...(answer
        ? {
            acceptedAnswer: {
              "@type": "Answer",
              text: answer.articleContent.sections
                .map((s) => s.body)
                .join("\n\n")
                .slice(0, 500),
              dateCreated: answer.postedAt,
              author: {
                "@type": "Organization",
                name: "ForeignLLCTax",
                url: "https://foreignllctax.com",
              },
            },
          }
        : {}),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <QAThreadClient thread={thread} relatedThreads={related} />
    </>
  );
}
