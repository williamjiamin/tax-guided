// Metered paywall for Q&A community + learn content
// Unregistered: 5 free views → register wall
// Registered free: 20 total views → subscribe wall
// Members ($9.99/mo): unlimited

const ANON_LIMIT = 5;
const FREE_USER_LIMIT = 20;
const COOKIE_NAME = "content_views";

export type PaywallAccess = "full" | "register" | "subscribe";

// ─── Client-side (anonymous users) ───────────────────────────────

export function getAnonViewedSlugs(): string[] {
  if (typeof document === "undefined") return [];
  const cookie = document.cookie
    .split("; ")
    .find((c) => c.startsWith(`${COOKIE_NAME}=`));
  if (!cookie) return [];
  try {
    return JSON.parse(decodeURIComponent(cookie.split("=")[1]));
  } catch {
    return [];
  }
}

export function recordAnonView(slug: string): void {
  if (typeof document === "undefined") return;
  const viewed = getAnonViewedSlugs();
  if (!viewed.includes(slug)) {
    viewed.push(slug);
    // Cookie expires in 30 days
    const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(viewed))}; path=/; expires=${expires}; SameSite=Lax`;
  }
}

export function getAnonViewCount(): number {
  return getAnonViewedSlugs().length;
}

export function checkAnonAccess(slug: string): PaywallAccess {
  const viewed = getAnonViewedSlugs();
  // If already viewed this slug, always allow re-access
  if (viewed.includes(slug)) return "full";
  // If under limit, allow
  if (viewed.length < ANON_LIMIT) return "full";
  // Over limit → must register
  return "register";
}

// ─── Server-side helpers (for registered users via API) ──────────

export function checkRegisteredAccess(
  viewedCount: number,
  isMember: boolean,
): PaywallAccess {
  if (isMember) return "full";
  if (viewedCount < FREE_USER_LIMIT) return "full";
  return "subscribe";
}

export { ANON_LIMIT, FREE_USER_LIMIT };
