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
        display: ["var(--font-display)"],
        text: ["var(--font-text)"],
      },
      colors: {
        paper: "var(--paper)",
        raised: "var(--raised)",
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
          faint: "var(--ink-faint)",
        },
        rule: {
          DEFAULT: "var(--rule)",
          strong: "var(--rule-strong)",
        },
        ochre: {
          DEFAULT: "var(--ochre)",
          soft: "var(--ochre-soft)",
        },
      },
      maxWidth: {
        measure: "62ch",
        shell: "74rem",
      },
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "3px",
      },
    },
  },
  plugins: [],
};

export default config;