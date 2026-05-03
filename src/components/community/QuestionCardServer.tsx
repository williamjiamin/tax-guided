// Server-rendered question card. Uses plain <a> for guaranteed initial-HTML
// link presence, since the foreignllctax SEO post-mortem showed Next.js <Link>
// inside a "use client" component is what hides cards from Googlebot's first crawl.

import { getAvatarColor, getInitials, type QAThread } from "@/lib/qa/qa-catalog";

interface Props {
  thread: QAThread & { slug: string };
}

export function QuestionCardServer({ thread }: Props) {
  const { question } = thread;
  const color = getAvatarColor(question.author.avatarSeed);
  const initials = getInitials(question.author.displayName);
  const isAnswered = question.status === "answered";

  return (
    <a
      href={`/community/${thread.slug}`}
      className="block bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 p-5 group"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
          {question.category.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())}
        </span>
        {isAnswered ? (
          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
            Answered
          </span>
        ) : (
          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700">
            Pending
          </span>
        )}
        {question.isFeatured && (
          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700">
            Featured
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
        {question.title}
      </h3>

      <p className="text-sm text-gray-500 line-clamp-2 mb-4">{question.body}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: color }}
          >
            {initials}
          </div>
          <span className="text-xs text-gray-600">{question.author.displayName}</span>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span>{question.viewCount.toLocaleString()} views</span>
          <span>{question.answerCount} answers</span>
        </div>
      </div>
    </a>
  );
}
