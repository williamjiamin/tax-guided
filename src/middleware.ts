import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const runtime = "experimental-edge";

const BLOCKED_BOT_PATTERN =
  /GPTBot|ChatGPT-User|CCBot|anthropic-ai|Claude-Web|Bytespider|Diffbot/i;

function applySecurityHeaders(response: NextResponse): void {
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Robots-Tag", "noai, noimageai");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
}

export async function middleware(request: NextRequest): Promise<NextResponse | Response> {
  const { pathname } = request.nextUrl;
  const isApiRoute = pathname.startsWith("/api");

  // Bot blocking on API routes
  if (isApiRoute) {
    const ua = request.headers.get("user-agent") ?? "";
    if (BLOCKED_BOT_PATTERN.test(ua)) {
      return Response.json(
        { error: "Automated access to API endpoints is not permitted. Visit https://taxguided.com to use our service." },
        {
          status: 403,
          headers: {
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "X-Robots-Tag": "noai, noimageai",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
    }
  }

  // Googlebot detection for community + learn content
  const ua = isApiRoute ? "" : (request.headers.get("user-agent") ?? "");
  const isSearchBot = /Googlebot|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot/i.test(ua);

  const response = NextResponse.next();
  if (isSearchBot && (pathname.startsWith("/community") || pathname.startsWith("/learn"))) {
    response.headers.set("x-is-search-bot", "true");
  }
  applySecurityHeaders(response);
  return response;
}

export const config = {
  matcher: ["/api/:path*", "/community/:path*", "/learn/:path*"],
};
