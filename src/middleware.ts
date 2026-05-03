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

  // Canonical URL enforcement. GSC found 3 "Duplicate without user-selected
  // canonical" pages on the homepage alone:
  //   - https://taxguided.com/  (canonical)
  //   - http://www.taxguided.com/
  //   - http://taxguided.com/
  // taxguided.com is on a Cloudflare Workers custom domain (not a regular
  // CF zone) so there is no "Always Use HTTPS" toggle. We do both the
  // www → bare AND the http → https redirect here in one place.
  const host = request.headers.get("host") ?? "";
  // Cloudflare sets x-forwarded-proto to "http" or "https". Fall back to
  // the URL's protocol when the header isn't present (local dev).
  const proto =
    request.headers.get("x-forwarded-proto") ??
    new URL(request.url).protocol.replace(":", "");

  if (host.startsWith("www.") || proto === "http") {
    const targetHost = host.startsWith("www.") ? host.slice(4) : host;
    const url = new URL(request.url);
    url.protocol = "https:";
    url.host = targetHost;
    return NextResponse.redirect(url.toString(), 301);
  }

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

// Match everything except Next.js static asset paths so the www → bare
// redirect fires across the whole site. Static asset URLs (`/_next/...`,
// fonts, images) skip middleware to keep the asset CDN fast.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff|woff2|ttf|css|js|map)).*)",
  ],
};
