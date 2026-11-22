# Taxoryn Phase 2 — Early Access End-to-End Acceptance & Retention Analysis

**Author:** Senior Cloud Platform Engineer  
**Repository:** `D:\Projects\Taxoryn-Marketing`  
**Branch:** `prod_demo`  
**Date:** 2026-11-22 (Updated)  
**Status:** **BLOCKED (Remote Acceptance Pending Cloudflare Authentication; Local Validated)**

---

## 1. Early Access End-to-End Acceptance Test Matrix

The Early Access API edge handler ([functions/api/early-access.ts](file:///d:/Projects/Taxoryn-Marketing/functions/api/early-access.ts)) and SQLite D1 persistence layer ([d1/schema.sql](file:///d:/Projects/Taxoryn-Marketing/d1/schema.sql)) remain fully verified through local synthetic harness simulation ([test/synthetic-d1-test.mjs](file:///d:/Projects/Taxoryn-Marketing/test/synthetic-d1-test.mjs)).

| Test Case | Scenario / Payload | Expected Behavior | Verification Status |
| :--- | :--- | :--- | :--- |
| **TC-01: Valid Submission** | Synthetic lead with name, email, firm, role, practice size | Inserted into D1 with status `NEW` or `NOTIFIED`; HTTP 200 returned | **LOCAL PASSED** / Remote Pending Auth |
| **TC-02: Invalid Submission** | Missing email or malformed email string | Rejected with HTTP 400; zero database insertion | **LOCAL PASSED** / Remote Pending Auth |
| **TC-03: HTTP Method Enforcement** | `GET /api/early-access` | Returns HTTP 405 Method Not Allowed with `Allow: POST, OPTIONS` | **LOCAL PASSED** / Remote Pending Auth |
| **TC-04: Bot Honeypot Defense** | Payload with hidden `website_url` populated | Returns HTTP 200 spoof response; zero lead stored in D1 | **LOCAL PASSED** / Remote Pending Auth |
| **TC-05: Idempotent Deduplication** | Repeated submission with identical payload within 24h | Idempotency key collision caught; returns original receipt without duplicate email | **LOCAL PASSED** / Remote Pending Auth |
| **TC-06: Downstream Outage Resilience** | `RESEND_API_KEY` missing or invalid | Lead is safely persisted in D1 with status `PENDING_RETRY`; HTTP 200 returned to user | **LOCAL PASSED** / Remote Pending Auth |
| **TC-07: Upstream Rate Limiting (HTTP 429)** | Downstream email API returns HTTP 429 | Lead status set to `PENDING_RETRY`, `notification_attempts` incremented, `last_error` logged | **LOCAL PASSED** / Remote Pending Auth |
| **TC-08: Notification Success** | Resend API returns HTTP 200 with `id` | Lead status updated to `NOTIFIED`, `notification_sent_at` timestamp recorded | **LOCAL PASSED** / Remote Pending Auth |
| **TC-09: Scheduled Retry Worker** | Cron trigger processes `PENDING_RETRY` rows | Retry worker queries `WHERE status = 'PENDING_RETRY' AND notification_attempts < 5` | **LOCAL VALIDATED** / Remote Pending Auth |
| **TC-10: Concurrency / Anti-Duplicate Locks** | Concurrent retry attempts on same lead row | Atomic SQLite row lock (`UPDATE ... WHERE status = 'PENDING_RETRY' AND notification_attempts = ?`) prevents duplicate emails | **LOCAL VALIDATED** / Remote Pending Auth |

---

## 2. Updated Retention Policy Standard (Step 4 Resolution)

Per the latest executive directive:
1. **Provisional 90-Day Operational Retention Approved:**
   - Active leads collected during early access are retained for 90 days from creation for operational triage and invite processing.
   - Initial schema default:
     ```sql
     retention_expires_at TEXT DEFAULT (datetime('now', '+90 days'))
     ```
2. **Exclusion of Claimed 180-Day Statutory Mandate:**
   - The 180-day retention mandate previously referenced is explicitly removed from automated enforcement.
   - Retention of consent records remains decoupled and configurable pending formal legal review.
3. **Preview Testing Invariant:**
   - **No records will be deleted during preview testing.** All synthetic testing records remain intact for manual audit unless explicitly flushed via test-specific cleanup scripts.
