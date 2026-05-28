import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { query } from "@/lib/db";

const ADMIN_USER = "Ehann14";
const ADMIN_PASS = "Hann11gg";
const JWT_SECRET = process.env.ADMIN_JWT_SECRET || "dev_admin_secret";

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();
    const normalizedUsername = username?.toLowerCase?.();
    const expectedUsername = ADMIN_USER.toLowerCase();

    if (normalizedUsername === expectedUsername && password === ADMIN_PASS) {
      const token = jwt.sign({ username: ADMIN_USER }, JWT_SECRET, { expiresIn: "8h" });
      return NextResponse.json({ token });
    }

    // fallback: check admins table
    const rows: any = await query(`SELECT * FROM admins WHERE LOWER(username) = ? AND password = ?`, [normalizedUsername, password]);
    if (rows && rows.length > 0) {
      const token = jwt.sign({ username: rows[0].username }, JWT_SECRET, { expiresIn: "8h" });
      return NextResponse.json({ token });
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
