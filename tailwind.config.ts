import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: "#082E5B",
            light: "#0D4282",
            dark: "#07152B",
            obsidian: "#070C1A",
          },
          teal: {
            DEFAULT: "#00D1A3",
            light: "#00FFC2",
            dark: "#00B388",
            subtle: "rgba(0, 209, 163, 0.12)",
          },
          emerald: {
            DEFAULT: "#059669",
            dark: "#046A4E",
          },
          cyan: {
            DEFAULT: "#0EA5E9",
            light: "#38BDF8",
          },
          bg: "#F8FAFC",
          text: {
            primary: "#0F172A",
            secondary: "#475569",
            muted: "#64748B",
          },
          border: {
            DEFAULT: "#E2E8F0",
            strong: "#CBD5E1",
          },
          warning: "#D97706",
          error: "#DC2626",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "Noto Sans Devanagari",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
        card: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
        elevated: "0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -4px rgba(0, 0, 0, 0.06)",
        "glow-teal": "0 0 25px -5px rgba(0, 209, 163, 0.3)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(180deg, #F8FAFC 0%, #EDF2F7 100%)",
        "navy-gradient": "linear-gradient(145deg, #082E5B 0%, #07152B 50%, #070C1A 100%)",
      },
      maxWidth: {
        "marketing-content": "1240px",
      },
      spacing: {
        "marketing-xs": "8px",
        "marketing-sm": "16px",
        "marketing-md": "24px",
        "marketing-lg": "32px",
        "marketing-xl": "48px",
        "marketing-2xl": "56px",
        "marketing-3xl": "80px",
        "marketing-4xl": "96px",
      },
      borderRadius: {
        "marketing-sm": "8px",
        "marketing-btn": "12px",
        "marketing-card": "18px",
        "marketing-cta": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
