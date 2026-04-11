import { FEED_ITEMS, FEED_FETCHED_AT } from "@/lib/regulations/feed-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const jurisdiction = searchParams.get("jurisdiction");

  let items = FEED_ITEMS;
  if (jurisdiction && (jurisdiction === "US" || jurisdiction === "CN")) {
    items = items.filter((item) => item.jurisdiction === jurisdiction);
  }

  const sorted = [...items].sort((a, b) => b.publishedDate.localeCompare(a.publishedDate));

  return Response.json({
    items: sorted,
    fetchedAt: FEED_FETCHED_AT,
    totalItems: sorted.length,
  });
}
