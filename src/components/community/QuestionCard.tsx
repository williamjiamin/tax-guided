"use client";

import Link from "next/link";
import { getAvatarColor, getInitials, type QAThread } from "@/lib/qa/qa-catalog";
import { MessageCircle, Eye, CheckCircle2, Clock } from "lucide-react";

interface QuestionCardProps {
  thread: QAThread & { slug: string };
}

export function QuestionCard({ thread }: QuestionCardProps) {
  const { question } = thread;
  const color = getAvatarColor(question.author.avatarSeed);
  const initials = getInitials(question.author.displayName);
  const isAnswered = question.status === "answered";

  return (
    <Link
      href={`/community/${thread.slug}`}
      className="block bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 p-5 group"
    >
      {/* Category + Status badges */}
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
          {question.category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
        </span>
        {isAnswered ? (
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
            <CheckCircle2 className="w-3 h-3" />
            Answered
          </span>
        ) : (
          <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700">
            <Clock className="w-3 h-3" />
            Pending
          </span>
        )}
        {question.isFeatured && (
          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
            Featured
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
        {question.title}
      </h3>

      {/* Body preview */}
      <p className="text-sm text-gray-500 line-clamp-2 mb-4">
        {question.body}
      </p>

      {/* Footer: author + stats */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: color }}
          >
            {initials}
          </div>
          <span className="text-xs text-gray-400">
            {question.author.displayName}
          </span>
          <span className="text-xs text-gray-300">·</span>
          <span className="text-xs text-gray-400">
            {new Date(question.postedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            {question.viewCount.toLocaleString()}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="w-3.5 h-3.5" />
            {question.answerCount}
          </span>
        </div>
      </div>
    </Link>
  );
}
