export async function POST(request: Request) {
  try {
    const { email, source } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return Response.json({ error: "Invalid email" }, { status: 400 });
    }

    const kv = (process.env as Record<string, unknown>).SUBSCRIBERS as
      | { get: (key: string) => Promise<string | null>; put: (key: string, value: string) => Promise<void> }
      | undefined;

    const record = JSON.stringify({
      email,
      source: source || "taxguided",
      subscribedAt: new Date().toISOString(),
    });

    if (kv && typeof kv.put === "function") {
      await kv.put(email, record);
    } else {
      console.log(`[SUBSCRIBE] KV unavailable — ${record}`);
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return Response.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
