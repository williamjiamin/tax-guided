import { getCloudflareContext } from "@opennextjs/cloudflare";

type KV = {
  get: (key: string) => Promise<string | null>;
  put: (key: string, value: string, options?: { expirationTtl?: number }) => Promise<void>;
  list: (options: { prefix: string; limit?: number }) => Promise<{ keys: { name: string }[] }>;
};

function getSessionToken(request: Request): string | null {
  const cookie = request.headers.get("cookie") || "";
  const match = cookie.match(/(?:^|;\s*)session=([^;]+)/);
  return match ? match[1] : null;
}

function getKV(envObj: Record<string, unknown>): KV | null {
  const kv = envObj.SESSIONS as KV | undefined;
  return kv && typeof kv.get === "function" ? kv : null;
}

async function resolveKV(): Promise<KV | null> {
  let kv = getKV(process.env as unknown as Record<string, unknown>);
  if (kv) return kv;
  try {
    const cfCtx = await getCloudflareContext({ async: true });
    kv = getKV(cfCtx.env as Record<string, unknown>);
  } catch { /* not in CF */ }
  return kv;
}

// Sanitize user input — strip HTML tags, trim, limit length
function sanitize(text: string, maxLen: number): string {
  return text
    .replace(/<[^>]*>/g, "")
    .replace(/&[^;]+;/g, "")
    .trim()
    .slice(0, maxLen);
}

const CATEGORIES = [
  "form-5472", "form-1120", "ein-itin", "compliance",
  "entity-setup", "filing-process", "international",
];

// POST: Submit a new question (requires auth + membership)
export async function POST(request: Request) {
  try {
    const token = getSessionToken(request);
    if (!token) {
      return Response.json({ error: "Authentication required. Please sign in." }, { status: 401 });
    }

    const kv = await resolveKV();
    if (!kv) {
      return Response.json({ error: "Service temporarily unavailable." }, { status: 503 });
    }

    // Verify session
    const sessionData = await kv.get(`session:${token}`);
    if (!sessionData) {
      return Response.json({ error: "Session expired. Please sign in again." }, { status: 401 });
    }
    const session = JSON.parse(sessionData);
    const email = session.email;

    // Check membership (look up user record)
    const userData = await kv.get(`user:${email}`);
    if (userData) {
      const user = JSON.parse(userData);
      if (user.subscriptionTier !== "membership" || user.subscriptionStatus !== "active") {
        return Response.json({ error: "Membership required to submit questions. Subscribe at /pricing." }, { status: 403 });
      }
    } else {
      return Response.json({ error: "Membership required to submit questions." }, { status: 403 });
    }

    // Rate limit: max 3 questions per day per user
    const today = new Date().toISOString().slice(0, 10);
    const rlKey = `qa:ratelimit:${email}:${today}`;
    const rlData = await kv.get(rlKey);
    const rlCount = rlData ? parseInt(rlData, 10) : 0;
    if (rlCount >= 3) {
      return Response.json({ error: "You can submit up to 3 questions per day. Please try again tomorrow." }, { status: 429 });
    }

    // Parse and validate input
    const body = await request.json();
    const title = sanitize(String(body.title || ""), 200);
    const questionBody = sanitize(String(body.body || ""), 5000);
    const category = String(body.category || "");

    if (title.length < 10) {
      return Response.json({ error: "Question title must be at least 10 characters." }, { status: 400 });
    }
    if (questionBody.length < 50) {
      return Response.json({ error: "Question body must be at least 50 characters." }, { status: 400 });
    }
    if (!CATEGORIES.includes(category)) {
      return Response.json({ error: "Invalid category." }, { status: 400 });
    }

    // Create question record
    const id = `q-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
    const question = {
      id,
      title,
      body: questionBody,
      category,
      authorEmail: email,
      postedAt: new Date().toISOString(),
      status: "pending",
    };

    // Store in KV
    await kv.put(`qa:pending:${id}`, JSON.stringify(question), { expirationTtl: 90 * 24 * 3600 }); // 90 days

    // Increment rate limit
    await kv.put(rlKey, String(rlCount + 1), { expirationTtl: 2 * 24 * 3600 }); // 2 days

    // Send admin notification email
    try {
      const resendKey = process.env.RESEND_API_KEY;
      if (resendKey) {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
          body: JSON.stringify({
            from: "ForeignLLCTax <info@foreignllctax.com>",
            to: ["freequicknews@gmail.com"],
            subject: `[Q&A] New question: ${title.slice(0, 60)}`,
            html: `<h2>New Community Question</h2><p><strong>From:</strong> ${email}</p><p><strong>Category:</strong> ${category}</p><p><strong>Title:</strong> ${title}</p><p><strong>Body:</strong></p><p>${questionBody.replace(/\n/g, "<br>")}</p><p><a href="https://foreignllctax.com/dashboard">Review in Dashboard</a></p>`,
          }),
        });
      }
    } catch { /* email failure is non-critical */ }

    return Response.json({ success: true, questionId: id });
  } catch (error) {
    console.error("Question submission error:", error);
    return Response.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
