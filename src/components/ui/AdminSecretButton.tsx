"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminSecretButton() {
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ position: "fixed", right: 16, bottom: 16, zIndex: 9999 }}>
      <Link
        href="/admin"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        aria-label="Admin"
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            background: "rgba(0,0,0,0.04)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            transition: "opacity 150ms, background 150ms",
            opacity: visible ? 0.98 : 0.04,
            cursor: "pointer",
          }}
        >
          <span style={{ fontWeight: 800, color: visible ? "white" : "transparent" }}>F</span>
        </div>
      </Link>
    </div>
  );
}
