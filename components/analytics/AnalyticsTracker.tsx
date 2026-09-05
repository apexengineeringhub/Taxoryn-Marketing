"use client";

import { useEffect, Suspense, useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  trackPageView,
  getAnalyticsConsent,
  initAnalyticsProvider,
} from "@/lib/analytics";

function AnalyticsTrackerContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleTrack = useCallback(() => {
    if (!pathname) return;
    if (!getAnalyticsConsent()) return;

    // Initialize provider if needed upon explicit consent
    initAnalyticsProvider();

    // Extract non-sensitive campaign parameters safely
    const utm_source =
      searchParams?.get("utm_source") || searchParams?.get("source") || undefined;
    const utm_medium = searchParams?.get("utm_medium") || undefined;
    const utm_campaign = searchParams?.get("utm_campaign") || undefined;
    const utm_content = searchParams?.get("utm_content") || undefined;
    const utm_term = searchParams?.get("utm_term") || undefined;

    trackPageView({
      path: pathname,
      title: typeof document !== "undefined" ? document.title : "",
      referrer:
        typeof document !== "undefined" ? document.referrer || undefined : undefined,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
    });
  }, [pathname, searchParams]);

  useEffect(() => {
    handleTrack();
  }, [handleTrack]);

  useEffect(() => {
    const handleConsentChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ state: string }>;
      if (customEvent.detail?.state === "granted") {
        handleTrack();
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("taxoryn_consent_changed", handleConsentChange);
      return () => {
        window.removeEventListener(
          "taxoryn_consent_changed",
          handleConsentChange
        );
      };
    }
  }, [handleTrack]);

  return null;
}

export function AnalyticsTracker() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTrackerContent />
    </Suspense>
  );
}
