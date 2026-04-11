"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuestionCard } from "./QuestionCard";
import { QA_CATEGORIES, type QACategory, type QAThread } from "@/lib/qa/qa-catalog";
import { Search, MessageSquarePlus, Users, BookOpen, Shield } from "lucide-react";

interface QAListClientProps {
  threads: (QAThread & { slug: string })[];
}

export function QAListClient({ threads }: QAListClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = threads.filter((t) => {
    const matchesCategory = !activeCategory || t.question.category === activeCategory;
    const matchesSearch =
      !searchQuery ||
      t.question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.question.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Sort: featured first, then by date
  const sorted = [...filtered].sort((a, b) => {
    if (a.question.isFeatured && !b.question.isFeatured) return -1;
    if (!a.question.isFeatured && b.question.isFeatured) return 1;
    return new Date(b.question.postedAt).getTime() - new Date(a.question.postedAt).getTime();
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-blue-50/80 to-white px-6 pt-16 pb-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Tax Q&A Community
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
              Real Tax Questions, Expert Answers
            </h1>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
              Get answers to your foreign-owned LLC tax questions from ForeignLLCTax.
              Every answer includes IRS source citations and step-by-step guidance.
            </p>

            {/* Search bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions (e.g., &quot;Form 5472 address&quot;, &quot;EIN foreign owner&quot;)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <div className="border-b border-gray-100 bg-white px-6 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-blue-500" />
                <strong className="text-gray-900">{threads.length}</strong> questions
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-green-500" />
                <strong className="text-gray-900">{threads.filter((t) => t.question.status === "answered").length}</strong> answered
              </span>
            </div>
            <Link
              href="/pricing?from=community"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <MessageSquarePlus className="w-4 h-4" />
              Ask a Question
            </Link>
          </div>
        </div>

        {/* Category filters */}
        <div className="px-6 py-6 bg-gray-50/50">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === null
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                All Topics
              </button>
              {Object.entries(QA_CATEGORIES).map(([key, label]) => {
                const count = threads.filter((t) => t.question.category === key).length;
                if (count === 0) return null;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCategory(activeCategory === key ? null : key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === key
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    {label} ({count})
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Question list */}
        <section className="px-6 py-8">
          <div className="max-w-4xl mx-auto">
            {sorted.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No questions found matching your search.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {sorted.map((thread) => (
                  <QuestionCard key={thread.question.id} thread={thread} />
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-gradient-to-b from-white to-blue-50/50 px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Have a tax question?
            </h2>
            <p className="text-gray-500 mb-8">
              ForeignLLCTax members can submit questions and get expert answers
              with IRS source citations. Join the community for $9.99/month.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing?from=community"
                className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Become a Member — $9.99/mo
              </Link>
              <Link
                href="/learn"
                className="px-6 py-3 rounded-lg bg-white text-gray-700 font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Browse Free Articles
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
