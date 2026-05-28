import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { query } from "@/lib/db";

const JWT_SECRET = process.env.ADMIN_JWT_SECRET || "dev_admin_secret";

function verifyAuth(req: Request) {
  const auth = req.headers.get("authorization") || "";
  if (!auth.startsWith("Bearer ")) return null;
  const token = auth.replace("Bearer ", "");
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (err) {
    return null;
  }
}

export async function GET(req: Request) {
  const user = verifyAuth(req);
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const totalVisits: any = await query(`SELECT COUNT(*) as count FROM visits`);
    const uniqueIPs: any = await query(`SELECT COUNT(DISTINCT ip) as count FROM visits`);
    const last24: any = await query(`SELECT COUNT(*) as count FROM visits WHERE created_at >= DATE_SUB(NOW(), INTERVAL 1 DAY)`);

    // daily counts for last 7 days (including today)
    const dailyRows: any = await query(`
      SELECT DATE(created_at) as day, COUNT(*) as count
      FROM visits
      WHERE created_at >= DATE_SUB(CURDATE(), INTERVAL 6 DAY)
      GROUP BY DATE(created_at)
      ORDER BY day ASC
    `);

    // build array for last 7 days
    const days: any[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = d.toISOString().slice(0, 10);
      const found = dailyRows.find((r: any) => (r.day + "") === key);
      days.push({ day: key, count: found ? Number(found.count) : 0 });
    }

    return NextResponse.json({
      totalVisits: totalVisits[0]?.count || 0,
      uniqueIPs: uniqueIPs[0]?.count || 0,
      last24: last24[0]?.count || 0,
      daily: days,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
