import { getCloudflareContext } from "@opennextjs/cloudflare";

type KV = {
  get: (key: string) => Promise<string | null>;
  put: (key: string, value: string, options?: { expirationTtl?: number }) => Promise<void>;
  delete: (key: string) => Promise<void>;
  list: (options: { prefix: string; limit?: number; cursor?: string }) => Promise<{
    keys: { name: string }[];
    list_complete: boolean;
    cursor?: string;
  }>;
};

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

function checkAdmin(request: Request): boolean {
  const secret = request.headers.get("x-admin-secret");
  const adminSecret = process.env.ADMIN_SECRET;
  return !!secret && !!adminSecret && secret === adminSecret;
}

// GET: List pending questions
export async function GET(request: Request) {
  if (!checkAdmin(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const kv = await resolveKV();
  if (!kv) {
    return Response.json({ error: "KV unavailable" }, { status: 503 });
  }

  const result = await kv.list({ prefix: "qa:pending:", limit: 50 });
  const questions = [];

  for (const key of result.keys) {
    const data = await kv.get(key.name);
    if (data) {
      questions.push(JSON.parse(data));
    }
  }

  // Sort by date descending
  questions.sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());

  return Response.json({ questions, total: questions.length });
}

// PATCH: Approve or reject a question
export async function PATCH(request: Request) {
  if (!checkAdmin(request)) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const kv = await resolveKV();
  if (!kv) {
    return Response.json({ error: "KV unavailable" }, { status: 503 });
  }

  const body = await request.json();
  const { questionId, action } = body as { questionId?: string; action?: string };

  if (!questionId || !["approve", "reject"].includes(action || "")) {
    return Response.json({ error: "questionId and action (approve|reject) required" }, { status: 400 });
  }

  const key = `qa:pending:${questionId}`;
  const data = await kv.get(key);
  if (!data) {
    return Response.json({ error: "Question not found" }, { status: 404 });
  }

  const question = JSON.parse(data);

  if (action === "reject") {
    await kv.delete(key);
    return Response.json({ success: true, action: "rejected", questionId });
  }

  // Approve: move to approved namespace
  question.status = "approved";
  question.approvedAt = new Date().toISOString();
  await kv.put(`qa:approved:${questionId}`, JSON.stringify(question), { expirationTtl: 365 * 24 * 3600 });
  await kv.delete(key);

  return Response.json({ success: true, action: "approved", questionId });
}
