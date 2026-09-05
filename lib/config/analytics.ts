export interface AnalyticsConfig {
  enabled: boolean;
  provider: "custom" | "none" | "plausible" | "google-analytics";
  debug: boolean;
  measurementId?: string;
}

export const analyticsConfig: AnalyticsConfig = {
  // Disabled by default in development unless explicitly enabled via environment variable
  enabled: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true",
  provider: (process.env.NEXT_PUBLIC_ANALYTICS_PROVIDER as AnalyticsConfig["provider"]) || "custom",
  debug: process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true",
  measurementId: process.env.NEXT_PUBLIC_ANALYTICS_ID || undefined,
};
