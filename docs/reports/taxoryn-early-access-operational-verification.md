# Taxoryn Marketing — Early Access Operational Verification & Reliability Assessment

**Document Reference:** `REL-EA-2026-01`  
**Date:** November 22, 2026  
**Auditor:** Senior Release Architect  
**Target Component:** Early Access Form & Backend Integration  
**Files Audited:**
- Edge Function: `functions/api/early-access.ts`
- Client Form: `components/marketing/EarlyAccessForm.tsx`
- Form Actions: `app/early-access/page.tsx`
**Status:** Audit Complete — High-Risk Defect Identified  

---

## 1. Executive Summary

This assessment provides an in-depth forensic inspection of the Early Access registration workflow across client-side UX, input validation, network delivery, edge function execution, and data persistence.

### Critical Finding (P0 Blocker — "Silent Black Hole" Failure Mode):
The current edge function implementation at `functions/api/early-access.ts` **does not persist submissions anywhere** (no database, no KV store, no queue, no logging). Furthermore, when `RESEND_API_KEY` is absent or when the Resend email API throws an error, the function **catches the error and returns HTTP 200 `{ success: true }` to the browser**.

As a result:
- Prospective practitioners who submit the Early Access form will see a reassuring green confirmation message: *"Thank you for your interest. Your early access request has been received."*
- In reality, **zero records are saved and zero emails are sent**. The high-intent lead is permanently lost without any alert or trace.

This design presents an unacceptable business risk for a commercial SaaS launch and must be remediated prior to public promotion.

---

## 2. Forensic Code Inspection

### 2.1 Persistence Analysis
Line-by-line inspection of `functions/api/early-access.ts` confirms:
- **Database Storage:** None. There are no imports or bindings for Cloudflare D1, PostgreSQL, MongoDB, or Prisma.
- **Key-Value Storage:** None. Cloudflare Workers KV is neither bound nor queried.
- **Message Queues:** None. Cloudflare Queues or external webhooks are absent.
- **Audit Logging:** In the event of an email dispatch failure, only `console.error("Early Access notification dispatch failed:", emailError)` is printed to the transient edge runtime console. The applicant's name, email, firm, and phone are never recorded.

### 2.2 The "Silent Black Hole" Failure Path
Inspection of lines 79–120 in `functions/api/early-access.ts` reveals the exact mechanism:

```typescript
// 2. Email Delivery via Resend (if configured)
const resendApiKey = context.env.RESEND_API_KEY;
if (resendApiKey) {
  try {
    await fetch("https://api.resend.com/emails", { ... });
  } catch (emailError) {
    // Catches network/API errors but suppresses failure!
    console.error("Early Access notification dispatch failed:", emailError);
  }
}

// Regardless of whether resendApiKey exists or whether fetch threw an error:
return new Response(
  JSON.stringify({
    success: true,
    message: "Thank you for your interest. Your early access request has been received.",
    data: { email, receivedAt },
  }),
  { status: 200, headers: { "Content-Type": "application/json" } }
);
```

**Consequences:**
1. **Unconfigured Environment:** If `RESEND_API_KEY` is not populated in Cloudflare Pages dashboard, submissions silently disappear.
2. **Provider Outage:** If Resend is down, rate-limited, or returns HTTP 429/500, submissions silently disappear.
3. **Invalid Email Authentication:** If domain SPF/DKIM or Resend sender identity is unverified, submissions silently disappear.

### 2.3 Input Validation & Sanitization Posture
The function performs the following client and server checks:
- `fullName`: Strips `<>` characters via `sanitizeInput()`, trims, limits to 500 chars. Fails with HTTP 400 if empty.
- `email`: Regex check `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`. Fails with HTTP 400 if invalid.
- `firmName`: Required string check. Fails with HTTP 400 if empty.
- `phone`: Optional. If present, verified against `/^[+]?[\d\s-]{8,15}$/`.
- `practiceSize` & `primaryInterest`: Falls back to default string descriptions if empty.

### 2.4 Abuse Prevention & Bot Defense
- **Rate Limiting:** `NULL`. There is no IP-based rate limiting or submission throttling.
- **Honeypot:** `NULL`. There is no hidden anti-bot field in `EarlyAccessForm.tsx`.
- **CAPTCHA / Challenge:** `NULL`. Cloudflare Turnstile is not integrated.
- **Vulnerability:** A basic automated script can flood the endpoint with hundreds of synthetic requests per minute, exhausting Resend API quotas or cluttering staff inboxes.

### 2.5 Privacy & PII Handling
- **Client-Side Telemetry:** `EarlyAccessForm.tsx` cleanly strips PII before emitting analytics events. `TEST 6` in `test/run-tests.mjs` verifies that names, emails, phone numbers, and firm names are excluded from telemetry payloads.
- **Server Response:** The edge function echoes `{ data: { email, receivedAt } }` in the HTTP 200 JSON body.

---

## 3. Safe Synthetic Testing & Probing

Probing of the live `/api/early-access` endpoints across production infrastructure:

1. **`https://taxoryn.com/api/early-access` (Vercel):**
   - Probe: `curl -X OPTIONS -IL https://taxoryn.com/api/early-access`
   - Response: `HTTP 204 No Content`, `Allow: OPTIONS, POST`.
   - Probe: `curl -X GET -IL https://taxoryn.com/api/early-access`
   - Response: `HTTP 405 Method Not Allowed`.
   - *Finding:* Vercel is serving a legacy Next.js API route from 30+ days ago.
2. **`https://taxoryn-marketing.pages.dev/api/early-access` (Cloudflare Pages):**
   - Probe: `curl -X OPTIONS -IL https://taxoryn-marketing.pages.dev/api/early-access`
   - Response: `HTTP 405 Method Not Allowed`.
   - *Finding:* The Cloudflare Pages function exports `onRequestPost`, but does not implement `onRequestOptions`.

---

## 4. Architectural Remediation Plan

To transform Early Access into an enterprise-grade lead capture pipeline:

### Recommendation 1: Cloudflare D1 Lead Persistence (Primary Storage)
Store all submissions in a serverless relational database (Cloudflare D1) before attempting outbound email dispatch:
```sql
CREATE TABLE early_access_leads (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  firm_name TEXT NOT NULL,
  phone TEXT,
  city TEXT,
  practice_size TEXT,
  primary_interest TEXT,
  utm_source TEXT,
  created_at TEXT NOT NULL,
  delivered INTEGER DEFAULT 0
);
```

### Recommendation 2: Two-Phase Commit Pattern
1. Write lead to D1 storage with `delivered = 0`.
2. Attempt dispatch via Resend.
3. If Resend succeeds, update `delivered = 1`.
4. If Resend fails, log the error, but the lead remains safely preserved in D1 for daily administrative export.

### Recommendation 3: Fail-Visible Error Reporting
If both storage and Resend fail, return HTTP 500 so the frontend can instruct the applicant:
*"We are experiencing high registration volume. Please email info@taxoryn.com directly or try again in a few moments."*

### Recommendation 4: Cloudflare Turnstile & Honeypot
- Add a hidden `website_url` honeypot field to `EarlyAccessForm.tsx`. If populated, discard silently.
- Embed a Cloudflare Turnstile widget for invisible bot defense.
