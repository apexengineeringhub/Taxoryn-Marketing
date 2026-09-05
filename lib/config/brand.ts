/**
 * Taxoryn Design System Tokens
 * Source of truth for brand colors, typography, and visual assets.
 */
export const brandTokens = {
  colors: {
    primaryNavy: "#082E5B",
    darkNavy: "#07152B",
    obsidian: "#070C1A",
    primaryTeal: "#00D1A3",
    tealDark: "#00B388",
    emerald: "#059669",
    cyan: "#0EA5E9",
    lightCyan: "#38BDF8",
    background: "#F8FAFC",
    white: "#FFFFFF",
    primaryText: "#0F172A",
    secondaryText: "#475569",
    mutedText: "#64748B",
    border: "#E2E8F0",
    strongBorder: "#CBD5E1",
    warning: "#D97706",
    error: "#DC2626",
  },
  typography: {
    fontFamily: "Inter, system-ui, -apple-system, sans-serif",
  },
  assets: {
    logo: "/brand/logo.svg",
    logoSymbol: "/brand/logo-symbol.svg",
    favicon: "/brand/favicon.svg",
  },
} as const;
