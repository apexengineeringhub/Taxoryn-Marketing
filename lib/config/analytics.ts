export interface AnalyticsConfig {
  enabled: boolean;
  /**
   * Analytics provider mode:
   * - "none": No analytics initialized or dispatched.
   * - "custom": Internal browser-event abstraction (`taxoryn_analytics` CustomEvent on `window`); no external server or third-party collector.
   * - "plausible": Self-hosted or cloud Plausible instance (requires measurementId, initialized only upon explicit consent).
   * - "google-analytics": Google Analytics 4 (requires measurementId, initialized only upon explicit consent).
   */
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
