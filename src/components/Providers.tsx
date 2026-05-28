"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";

async function logVisit() {
  try {
    await fetch('/api/visits', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: window.location.pathname, referrer: document.referrer, userAgent: navigator.userAgent, ip: '' }),
    });
  } catch (err) {
    // ignore
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    logVisit();
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}
