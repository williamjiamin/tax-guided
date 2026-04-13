"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { QuestionCard } from "./QuestionCard";
import { QA_CATEGORIES, type QACategory, type QAThread } from "@/lib/qa/qa-catalog";
import { Search, MessageSquarePlus, Users, BookOpen, Shield, Plus, X, AlertTriangle, CheckCircle2, Loader2 } from "lucide-react";

interface QAListClientProps {
  threads: (QAThread & { slug: string })[];
}

export function QAListClient({ threads }: QAListClientProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAskModal, setShowAskModal] = useState(false);

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
              Get answers to your tax questions from the TaxGuided community.
              Every answer includes official source citations and step-by-step guidance.
            </p>

            {/* Search bar + Ask button row */}
            <div className="max-w-xl mx-auto flex gap-3 items-center">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search questions (e.g., &quot;Form 5472 address&quot;, &quot;EIN foreign owner&quot;)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
                />
              </div>
              <button
                onClick={() => setShowAskModal(true)}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold shadow-sm transition-colors shrink-0"
                style={{ backgroundColor: "#D4A843", color: "#0B1A2B" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#C49A35")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#D4A843")}
              >
                <Plus className="w-4 h-4" />
                Ask a Question
              </button>
            </div>
          </div>
        </section>

        {/* Disclaimer banner */}
        <div className="bg-amber-50 border-b border-amber-200 px-6 py-3">
          <div className="max-w-4xl mx-auto flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <p className="text-xs text-amber-800 leading-relaxed">
              All answers on TaxGuided are community-contributed and for educational purposes only. This is not professional tax, legal, or accounting advice. Always consult a qualified professional for your specific situation.
            </p>
          </div>
        </div>

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
            <button
              onClick={() => setShowAskModal(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors"
              style={{ backgroundColor: "#0B1A2B" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#162D4A")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0B1A2B")}
            >
              <MessageSquarePlus className="w-4 h-4" />
              Ask a Question
            </button>
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

      {/* Ask a Question Modal */}
      {showAskModal && (
        <AskQuestionModal onClose={() => setShowAskModal(false)} />
      )}
    </div>
  );
}

// ======================== Ask a Question Modal ========================

function AskQuestionModal({ onClose }: { onClose: () => void }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorEmail, setAuthorEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const tags = tagsInput
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      const res = await fetch("/api/qa/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          body,
          category,
          tags,
          authorName,
          authorEmail,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setSuccess(true);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div
          className="sticky top-0 flex items-center justify-between px-6 py-4 border-b border-gray-100 rounded-t-2xl"
          style={{ backgroundColor: "#0B1A2B" }}
        >
          <h2 className="text-lg font-bold text-white">Ask a Question</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        {success ? (
          <div className="p-8 text-center">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Question Submitted!</h3>
            <p className="text-gray-500 mb-6 text-sm">
              Your question has been submitted for review. Our team will review it and post an answer as soon as possible.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg text-white text-sm font-medium transition-colors"
              style={{ backgroundColor: "#0B1A2B" }}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {error && (
              <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-700">
                {error}
              </div>
            )}

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Question Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., How do I file Form 5472 for my foreign-owned LLC?"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                minLength={10}
              />
              <p className="mt-1 text-xs text-gray-400">At least 10 characters</p>
            </div>

            {/* Body */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Question Details <span className="text-red-500">*</span>
              </label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Describe your question in detail. Include any relevant context about your situation..."
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                rows={4}
                required
                minLength={20}
              />
              <p className="mt-1 text-xs text-gray-400">At least 20 characters</p>
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                required
              >
                <option value="">Select a category...</option>
                {Object.entries(QA_CATEGORIES).map(([key, label]) => (
                  <option key={key} value={key}>
                    {label}
                  </option>
                ))}
              </select>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tags
              </label>
              <input
                type="text"
                value={tagsInput}
                onChange={(e) => setTagsInput(e.target.value)}
                placeholder="e.g., Form 5472, foreign-owned LLC, EIN (comma separated)"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="mt-1 text-xs text-gray-400">Separate tags with commas (optional)</p>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Display name (or leave blank for Anonymous)"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                value={authorEmail}
                onChange={(e) => setAuthorEmail(e.target.value)}
                placeholder="We'll notify you when your question is answered"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <p className="mt-1 text-xs text-gray-400">Optional — never shared publicly</p>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={submitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-colors disabled:opacity-60"
              style={{ backgroundColor: "#D4A843", color: "#0B1A2B" }}
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <MessageSquarePlus className="w-4 h-4" />
                  Submit Question
                </>
              )}
            </button>

            {/* Disclaimer */}
            <p className="text-[11px] text-gray-400 leading-relaxed text-center pt-1">
              Questions are reviewed before publishing. Answers are for educational purposes only — not professional tax advice.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
