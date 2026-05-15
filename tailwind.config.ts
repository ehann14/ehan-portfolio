import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        dark: {
          bg: "#080B10",
          surface: "#0D1117",
          card: "#111827",
          border: "#1F2937",
          muted: "#374151",
        },
        light: {
          bg: "#F8FAFC",
          surface: "#FFFFFF",
          card: "#F1F5F9",
          border: "#E2E8F0",
          muted: "#CBD5E1",
        },
        accent: {
          blue: "#3B82F6",
          cyan: "#06B6D4",
          indigo: "#6366F1",
          glow: "#1D4ED8",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.7s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-gradient": "radial-gradient(at 40% 20%, hsla(215,100%,56%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,0.05) 0px, transparent 50%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        "glow-blue": "0 0 30px rgba(59, 130, 246, 0.15)",
        "glow-cyan": "0 0 30px rgba(6, 182, 212, 0.15)",
        "card-dark": "0 4px 32px rgba(0,0,0,0.4)",
        "card-light": "0 4px 32px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
