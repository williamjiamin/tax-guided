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

  // Canonical hostname enforcement: 301 from www to bare for ALL paths.
  // The foreignllctax SEO post-mortem showed Google was wasting ~27% of
  // crawl budget on the duplicate www host when both served 200.
  // Putting this in middleware (not next.config redirects()) because
  // Next.js redirects() literally serves "/:path*" as the destination
  // string under OpenNext + Cloudflare Workers — the path placeholder
  // doesn't get substituted in the Location header.
  const host = request.headers.get("host") ?? "";
  if (host.startsWith("www.")) {
    const url = new URL(request.url);
    url.host = host.slice(4);
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
