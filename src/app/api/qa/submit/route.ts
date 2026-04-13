import { getCloudflareContext } from "@opennextjs/cloudflare";
import { QA_CATEGORIES } from "@/lib/qa/qa-catalog";

type KV = {
  get: (key: string) => Promise<string | null>;
  put: (key: string, value: string, options?: { expirationTtl?: number }) => Promise<void>;
};

function getKV(envObj: Record<string, unknown>): KV | null {
  // Try SUBSCRIBERS namespace first, then fall back to SESSIONS
  for (const name of ["SUBSCRIBERS", "SESSIONS"]) {
    const kv = envObj[name] as KV | undefined;
    if (kv && typeof kv.get === "function") return kv;
  }
  return null;
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

const VALID_CATEGORIES = Object.keys(QA_CATEGORIES);

// POST: Submit a question for review (public endpoint — no auth required)
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    const title = sanitize(String(body.title || ""), 200);
    const questionBody = sanitize(String(body.body || ""), 5000);
    const category = String(body.category || "");
    const tagsRaw = body.tags;
    const authorName = sanitize(String(body.authorName || ""), 100);
    const authorEmail = sanitize(String(body.authorEmail || ""), 200);

    if (title.length < 10) {
      return Response.json(
        { error: "Question title must be at least 10 characters." },
        { status: 400 }
      );
    }
    if (questionBody.length < 20) {
      return Response.json(
        { error: "Question body must be at least 20 characters." },
        { status: 400 }
      );
    }
    if (!VALID_CATEGORIES.includes(category)) {
      return Response.json(
        { error: "Please select a valid category." },
        { status: 400 }
      );
    }

    // Parse and sanitize tags
    const tags: string[] = Array.isArray(tagsRaw)
      ? tagsRaw.map((t: unknown) => sanitize(String(t), 50)).filter(Boolean).slice(0, 5)
      : [];

    const kv = await resolveKV();
    if (!kv) {
      return Response.json(
        { error: "Service temporarily unavailable. Please try again later." },
        { status: 503 }
      );
    }

    // Create the pending question record
    const timestamp = Date.now();
    const id = `q-submit-${timestamp}-${Math.random().toString(36).slice(2, 8)}`;
    const question = {
      id,
      title,
      body: questionBody,
      category,
      tags,
      authorName: authorName || "Anonymous",
      authorEmail: authorEmail || "",
      submittedAt: new Date().toISOString(),
      status: "pending",
    };

    // Store in KV with 90-day expiration
    await kv.put(
      `qa:pending:${timestamp}`,
      JSON.stringify(question),
      { expirationTtl: 90 * 24 * 3600 }
    );

    // Send admin notification (non-critical)
    try {
      const resendKey = process.env.RESEND_API_KEY;
      if (resendKey) {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "TaxGuided <info@foreignllctax.com>",
            to: ["freequicknews@gmail.com"],
            subject: `[TaxGuided Q&A] New submission: ${title.slice(0, 60)}`,
            html: `<h2>New Community Question Submission</h2>
              <p><strong>Name:</strong> ${authorName || "Anonymous"}</p>
              <p><strong>Email:</strong> ${authorEmail || "Not provided"}</p>
              <p><strong>Category:</strong> ${category}</p>
              <p><strong>Title:</strong> ${title}</p>
              <p><strong>Body:</strong></p>
              <p>${questionBody.replace(/\n/g, "<br>")}</p>
              <p><strong>Tags:</strong> ${tags.join(", ") || "None"}</p>
              <hr>
              <p><a href="https://foreignllctax.com/dashboard">Review in Dashboard</a></p>`,
          }),
        });
      }
    } catch {
      /* email failure is non-critical */
    }

    return Response.json({
      success: true,
      message: "Your question has been submitted for review",
    });
  } catch (error) {
    console.error("Question submission error:", error);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
