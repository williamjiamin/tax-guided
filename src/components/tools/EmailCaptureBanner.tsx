"use client";

import { useState } from "react";

interface EmailCaptureBannerProps {
  title?: string;
  subtitle?: string;
  successTitle?: string;
  successSubtitle?: string;
  ctaLabel?: string;
  source?: string;
}

export function EmailCaptureBanner({
  title = "Get Tax Updates & Insights",
  subtitle = "Join thousands who stay on top of global tax changes. No spam, unsubscribe anytime.",
  successTitle = "You're subscribed!",
  successSubtitle = "We'll send you tax law updates, deadline reminders, and educational insights.",
  ctaLabel = "Subscribe",
  source = "tool-page",
}: EmailCaptureBannerProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });
      if (!res.ok) throw new Error("Failed to subscribe");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="mt-10 bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center">
        <div className="text-3xl mb-2">&#10003;</div>
        <h3 className="text-lg font-bold text-emerald-800 mb-1">{successTitle}</h3>
        <p className="text-sm text-emerald-600">
          {successSubtitle}
        </p>
      </div>
    );
  }

  return (
    <div className="mt-10 bg-blue-50 border border-blue-200 rounded-2xl p-6">
      <div className="text-center mb-4">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="flex-1 px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white"
        />
        <button
          type="submit"
          className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors text-sm whitespace-nowrap"
        >
          {ctaLabel}
        </button>
      </form>
      {error && <p className="text-xs text-red-500 text-center mt-2">{error}</p>}
      <p className="text-[10px] text-gray-400 text-center mt-3">
        We respect your privacy. No spam, ever.
      </p>
    </div>
  );
}
