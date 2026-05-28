import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { query } from "@/lib/db";

const ADMIN_USER = process.env.ADMIN_USERNAME || "Ehann14";
const ADMIN_PASS = process.env.ADMIN_PASSWORD || "Hann11gg";
const JWT_SECRET = process.env.ADMIN_JWT_SECRET || "dev_admin_secret";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "8h" });
      return NextResponse.json({ token });
    }

    // fallback: check admins table
    const rows: any = await query(`SELECT * FROM admins WHERE username = ? AND password = ?`, [username, password]);
    if (rows && rows.length > 0) {
      const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "8h" });
      return NextResponse.json({ token });
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
