import { NextResponse } from "next/server";
import { ensureTables, query } from "@/lib/db";

export async function POST(req: Request) {
  try {
    await ensureTables();
    const body = await req.json();
    const { name, email, subject, message } = body;
    if (!name || !email || !message) return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    await query(`INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)`, [name, email, subject || "", message]);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
