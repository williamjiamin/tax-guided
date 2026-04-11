"use client";

import { useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import {
  checkAnonAccess,
  recordAnonView,
  getAnonViewCount,
  type PaywallAccess,
  ANON_LIMIT,
  FREE_USER_LIMIT,
} from "@/lib/qa/paywall";
import { Lock, UserPlus, Crown, ArrowRight, X } from "lucide-react";

interface PaywallGateProps {
  slug: string;
  children: ReactNode;
  /** If user is logged in, pass their info */
  user?: { email: string; isMember: boolean; viewCount: number } | null;
}

export function PaywallGate({ slug, children, user }: PaywallGateProps) {
  const [access, setAccess] = useState<PaywallAccess>("full");
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (user) {
      // Logged-in user
      if (user.isMember) {
        setAccess("full");
      } else if (user.viewCount >= FREE_USER_LIMIT) {
        setAccess("subscribe");
      } else {
        setAccess("full");
      }
    } else {
      // Anonymous user
      const result = checkAnonAccess(slug);
      if (result === "full") {
        recordAnonView(slug);
      }
      setAccess(result);
    }
  }, [slug, user]);

  // Full access — render content normally
  if (access === "full" || dismissed) {
    return <>{children}</>;
  }

  // Gated — show partial content with overlay
  const remaining = user
    ? Math.max(0, FREE_USER_LIMIT - user.viewCount)
    : Math.max(0, ANON_LIMIT - getAnonViewCount());

  return (
    <div className="relative">
      {/* Show partial content (blurred) */}
      <div className="max-h-[600px] overflow-hidden relative">
        {children}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>

      {/* Paywall overlay */}
      <div className="relative -mt-32 pt-32 bg-gradient-to-b from-white/80 to-white">
        <div className="max-w-lg mx-auto text-center px-6 py-12">
          {access === "register" ? (
            <>
              <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mx-auto mb-6">
                <UserPlus className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Create a free account to keep reading
              </h3>
              <p className="text-gray-500 mb-2">
                You&apos;ve viewed {ANON_LIMIT} free Q&A threads.
                Register for free to continue reading.
              </p>
              <p className="text-sm text-gray-400 mb-8">
                Free accounts get access to {FREE_USER_LIMIT} articles. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  <UserPlus className="w-4 h-4" />
                  Sign Up Free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white text-gray-700 font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  Already have an account? Sign In
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="w-16 h-16 rounded-full bg-amber-50 flex items-center justify-center mx-auto mb-6">
                <Crown className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Unlock unlimited access
              </h3>
              <p className="text-gray-500 mb-2">
                You&apos;ve reached your free article limit.
                Become a member for unlimited access to all content.
              </p>
              <p className="text-sm text-gray-400 mb-6">
                One CPA consultation costs $200+. Get unlimited expert answers for $9.99/month.
              </p>

              {/* Value props */}
              <div className="bg-gray-50 rounded-xl p-5 mb-8 text-left">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                  Membership includes:
                </p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    Unlimited Q&A community access
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    Full video walkthrough library (200+ videos)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    All expert tax guides & articles
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    Submit your own tax questions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</span>
                    Priority support from ForeignLLCTax
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/pricing?from=community"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
                >
                  <Crown className="w-4 h-4" />
                  Become a Member — $9.99/mo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
