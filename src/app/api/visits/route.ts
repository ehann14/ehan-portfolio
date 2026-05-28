import { NextResponse } from "next/server";
import { ensureTables, query } from "@/lib/db";

export async function POST(req: Request) {
  try {
    await ensureTables();
    const body = await req.json();
    const { path, referrer, userAgent, ip } = body;
    await query(`INSERT INTO visits (path, ip, user_agent, referrer) VALUES (?, ?, ?, ?)`, [path || "/", ip || "", userAgent || "", referrer || ""]);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
