import { NextResponse } from "next/server";

const KEY = "presence:lastSeen";

// Free persistent store: Upstash Redis (free tier, no card) — set env vars
// UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN when deploying.
// Locally, falls back to a JSON file in the project root.
async function getLastSeen(): Promise<number | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (url && token) {
    try {
      const res = await fetch(`${url}/get/${KEY}`, {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });
      const json = await res.json();
      return json.result ? Number(json.result) : null;
    } catch {
      return null;
    }
  }

  try {
    const fs = await import("fs/promises");
    const raw = await fs.readFile(".presence.json", "utf-8");
    return JSON.parse(raw).lastSeen ?? null;
  } catch {
    return null;
  }
}

async function setLastSeen(ts: number): Promise<void> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (url && token) {
    try {
      await fetch(`${url}/set/${KEY}/${ts}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch {
      // ignore write failures
    }
    return;
  }

  try {
    const fs = await import("fs/promises");
    await fs.writeFile(".presence.json", JSON.stringify({ lastSeen: ts }));
  } catch {
    // ignore write failures (read-only fs in production without KV)
  }
}

export async function GET() {
  const lastSeen = await getLastSeen();
  return NextResponse.json({ lastSeen });
}

export async function POST(request: Request) {
  try {
    const { ts } = await request.json();
    if (typeof ts === "number") {
      const existing = await getLastSeen();
      if (!existing || ts > existing) {
        await setLastSeen(ts);
      }
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
