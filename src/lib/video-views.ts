const FREE_VIEW_LIMIT = 3;
const STORAGE_KEY = "video-views-count";

export function getViewCount(): number {
  if (typeof window === "undefined") return 0;
  return parseInt(sessionStorage.getItem(STORAGE_KEY) || "0", 10);
}

export function incrementViewCount(): number {
  const count = getViewCount() + 1;
  sessionStorage.setItem(STORAGE_KEY, String(count));
  return count;
}

export function isViewLimitReached(): boolean {
  return getViewCount() >= FREE_VIEW_LIMIT;
}

export function getViewLimit(): number {
  return FREE_VIEW_LIMIT;
}

export function resetViewCount(): void {
  if (typeof window === "undefined") return;
  sessionStorage.removeItem(STORAGE_KEY);
}
