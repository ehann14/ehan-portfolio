import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || "127.0.0.1",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "ehan_portfolio",
  port: Number(process.env.MYSQL_PORT || 3306),
  waitForConnections: true,
  connectionLimit: 10,
});

export async function query(sql: string, params?: any[]) {
  const [rows] = await pool.query(sql, params);
  return rows;
}

export async function ensureTables() {
  await query(`
    CREATE TABLE IF NOT EXISTS messages (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(191),
      email VARCHAR(191),
      subject VARCHAR(255),
      message TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS visits (
      id INT AUTO_INCREMENT PRIMARY KEY,
      path VARCHAR(255),
      ip VARCHAR(45),
      user_agent TEXT,
      referrer VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB;
  `);

  await query(`
    CREATE TABLE IF NOT EXISTS admins (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(100) UNIQUE,
      password VARCHAR(255)
    ) ENGINE=InnoDB;
  `);

  // ensure default admin exists (only when running locally)
  const admins: any = await query(`SELECT * FROM admins WHERE username = ?`, [
    "Ehann14",
  ]);
  if (!admins || (Array.isArray(admins) && admins.length === 0)) {
    await query(`INSERT IGNORE INTO admins (username, password) VALUES (?, ?)`, ["Ehann14", "Hann11gg"]);
  }
}

export default pool;
