"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { trackPageView } from "@/lib/analytics";

function AnalyticsTrackerContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;

    // Extract non-sensitive campaign parameters
    const utm_source = searchParams?.get("utm_source") || searchParams?.get("source") || undefined;
    const utm_medium = searchParams?.get("utm_medium") || undefined;
    const utm_campaign = searchParams?.get("utm_campaign") || undefined;
    const utm_content = searchParams?.get("utm_content") || undefined;
    const utm_term = searchParams?.get("utm_term") || undefined;

    trackPageView({
      path: pathname,
      title: typeof document !== "undefined" ? document.title : "",
      referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
    });
  }, [pathname, searchParams]);

  return null;
}

export function AnalyticsTracker() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTrackerContent />
    </Suspense>
  );
}
