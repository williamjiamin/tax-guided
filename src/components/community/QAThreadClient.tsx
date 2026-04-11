"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import {
  getAvatarColor,
  getInitials,
  type QAThread,
  QA_CATEGORIES,
} from "@/lib/qa/qa-catalog";
import { QuestionCard } from "./QuestionCard";
import { PaywallGate } from "./PaywallGate";
import {
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Eye,
  BookOpen,
  ChevronRight,
} from "lucide-react";

interface QAThreadClientProps {
  thread: QAThread & { slug: string };
  relatedThreads: (QAThread & { slug: string })[];
}

export function QAThreadClient({ thread, relatedThreads }: QAThreadClientProps) {
  const { question, answers } = thread;
  const answer = answers[0]; // Primary answer
  const qColor = getAvatarColor(question.author.avatarSeed);
  const qInitials = getInitials(question.author.displayName);

  // Fetch user session for paywall check
  const [user, setUser] = useState<{ email: string; isMember: boolean; viewCount: number } | null>(null);
  const [userLoaded, setUserLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/auth/session")
      .then((r) => r.json())
      .then((data) => {
        if (data.user) {
          setUser({
            email: data.user.email,
            isMember: data.user.subscriptionTier === "membership" && data.user.subscriptionStatus === "active",
            viewCount: data.user.contentViewCount || 0,
          });
        }
        setUserLoaded(true);
      })
      .catch(() => setUserLoaded(true));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-gray-50/70 border-b border-gray-100 px-6 py-3">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-gray-600">Home</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/community" className="hover:text-gray-600">Community</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-gray-600 truncate max-w-xs">{question.title}</span>
            </nav>
          </div>
        </div>

        <div className="px-6 py-10">
          <div className="max-w-4xl mx-auto">

            {/* ============= QUESTION ============= */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
              {/* Badges */}
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                  {QA_CATEGORIES[question.category as keyof typeof QA_CATEGORIES] || question.category}
                </span>
                {question.status === "answered" && (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
                    <CheckCircle2 className="w-3 h-3" />
                    Answered
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                {question.title}
              </h1>

              {/* Author + meta */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ backgroundColor: qColor }}
                >
                  {qInitials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">
                      {question.author.displayName}
                    </span>
                    {question.author.badge && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-gray-100 text-gray-500 uppercase">
                        {question.author.badge.replace("-", " ")}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>
                      {new Date(question.postedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" /> {question.viewCount.toLocaleString()} views
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" /> {question.answerCount} answer{question.answerCount !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {question.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs bg-gray-50 text-gray-500 border border-gray-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Question body */}
              <div className="prose prose-gray prose-sm max-w-none">
                {question.body.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed mb-3 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* ============= ANSWER (paywalled) ============= */}
            {answer && userLoaded && (
              <PaywallGate slug={thread.slug} user={user}>
              <div className="bg-white rounded-xl border-2 border-green-200 p-6 mb-8">
                {/* Answer header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                    RT
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900">
                        {answer.author.displayName}
                      </span>
                      {answer.author.isOfficial && (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white uppercase">
                          <CheckCircle2 className="w-3 h-3" />
                          Tax Pro
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-400">
                      Answered {new Date(answer.postedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                </div>

                {/* Floating video player */}
                {answer.videoId && (
                  <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                    <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                      <iframe
                        className="absolute inset-0 w-full h-full"
                        src={`https://www.youtube.com/embed/${answer.videoId}`}
                        title="Video answer"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                {/* Article sections */}
                <div className="space-y-6">
                  {answer.articleContent.sections.map((section, i) => (
                    <div key={i}>
                      <h2 className="text-xl font-bold text-gray-900 mb-3">
                        {section.heading}
                      </h2>
                      <div className="space-y-3">
                        {section.body.split("\n\n").map((para, j) => (
                          <p key={j} className="text-gray-700 leading-relaxed text-[15px]">
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Key takeaways */}
                {answer.articleContent.keyTakeaways.length > 0 && (
                  <div className="mt-8 bg-blue-50 rounded-lg p-5">
                    <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Key Takeaways
                    </h3>
                    <ul className="space-y-2">
                      {answer.articleContent.keyTakeaways.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-blue-600 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Sources */}
                {answer.sources.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
                      IRS Sources & References
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {answer.sources.map((source, i) => (
                        <a
                          key={i}
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors border border-gray-100"
                        >
                          {source.label}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              </PaywallGate>
            )}

            {/* ============= RELATED Q&As ============= */}
            {relatedThreads.length > 0 && (
              <div className="mt-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Related Questions
                </h2>
                <div className="space-y-4">
                  {relatedThreads.map((rt) => (
                    <QuestionCard key={rt.question.id} thread={rt} />
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 text-center bg-gradient-to-b from-blue-50/50 to-white rounded-xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Have a similar question?
              </h3>
              <p className="text-gray-500 mb-6 text-sm">
                ForeignLLCTax members get expert answers with IRS citations.
                One CPA consultation costs $200+. Full access is $9.99/month.
              </p>
              <Link
                href="/pricing?from=community"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Become a Member — $9.99/mo
              </Link>
            </div>

            {/* Disclaimer */}
            <div className="mt-8 bg-gray-50 rounded-lg p-5 border border-gray-100">
              <p className="text-xs text-gray-400 leading-relaxed">
                <strong className="text-gray-500">Disclaimer:</strong> All content on ForeignLLCTax.com is created by a tax professional and is provided for general educational and informational purposes only. It does not constitute tax, legal, or accounting advice, and should not be relied upon as such. Every tax situation is different — for advice specific to your circumstances, please consult a licensed CPA, Enrolled Agent, or tax attorney. By using this website, purchasing a subscription, or accessing any tools or services, you acknowledge that no client-professional relationship is established between you and ForeignLLCTax.com or its operators. This website is not affiliated with the IRS.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
