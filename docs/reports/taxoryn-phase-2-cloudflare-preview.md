# Taxoryn Phase 2 — Cloudflare Preview & Remote Infrastructure Report

**Author:** Senior Cloud Platform Engineer  
**Repository:** `D:\Projects\Taxoryn-Marketing`  
**Branch:** `prod_demo`  
**Date:** 2026-11-22 (Updated 19:55 IST)  
**Status:** **BLOCKED (Remote Cloudflare Authentication Unverified in Execution Context)**

---

## 1. Authentication Verification (Step 1 Re-Check)

Following the user notification of interactive authentication, `npx wrangler whoami` was executed immediately:

```bash
$ npx.cmd wrangler whoami
 ⛅️ wrangler 4.166.0
────────────────────
Getting User settings...
You are not authenticated. Please run `wrangler login`.
To deploy without logging in, run a command like `wrangler deploy --temporary` to use a temporary preview account.
```

Subsequent attempt to inspect existing Cloudflare Pages projects via `npx wrangler pages project list` produced the following diagnostic:

```bash
$ npx.cmd wrangler pages project list
 ⛅️ wrangler 4.166.0
────────────────────
X [ERROR] In a non-interactive environment, it's necessary to set a CLOUDFLARE_API_TOKEN environment variable for wrangler to work. Please go to https://developers.cloudflare.com/fundamentals/api/get-started/create-token/ for instructions on how to create an api token, and assign its value to CLOUDFLARE_API_TOKEN.
```

### Forensic Root Cause Analysis
1. **OAuth Callback Interruption:** When `wrangler login` is triggered interactively in Windows, it spawns a local listener on `http://localhost:8976/oauth/callback`. If the local terminal session was closed before the browser redirected back to localhost, or if Windows Firewall blocked port 8976, the authorization token was never saved to `%APPDATA%\xdg.config\.wrangler\config\default.toml`.
2. **Environment Variable Scope:** If authentication was completed by setting `CLOUDFLARE_API_TOKEN` in a separate command prompt or shell window, environment variables in Windows are scoped to that specific process and do not propagate to sibling sessions unless written to the Windows User Environment table via `[System.Environment]::SetEnvironmentVariable('CLOUDFLARE_API_TOKEN', '...', 'User')`.
3. **Execution Safety Protocol Enforced:**
   Per mandatory instruction:
   > *"Stop if authentication, project ownership, permissions or resource configuration cannot be verified."*
   > *"Never request or expose API tokens in reports."*

---

## 2. Retention Policy Configuration (Updated per User Direction)

In strict accordance with the updated directive:
- **Provisional Operational Retention:** 90-day operational retention approved for early access triage.
- **Statutory Consent Claim:** The previously claimed 180-day statutory consent requirement is **excluded** pending corporate legal review.
- **Configurability:** Consent-evidence retention is decoupled and parameterized:
  - Default: `retention_expires_at TEXT DEFAULT (datetime('now', '+90 days'))`.
  - Configurable retention window via application settings without hardcoding 180 days.
- **Preview Testing Invariant:** Zero record deletion during preview testing.

---

## 3. Remote Preview Infrastructure Plan (Awaiting Credential Availability)

Once the execution environment has valid credentials, the following steps are queued:
1. `npx wrangler pages project list` — verify `taxoryn-marketing` project ownership.
2. `npx wrangler d1 create taxoryn-leads-preview-db` — provision isolated preview D1 instance.
3. `npx wrangler d1 execute taxoryn-leads-preview-db --remote --file=d1/schema.sql` — apply schema.
4. Bind `DB` to the preview project in `wrangler.toml`.
5. Deploy `out/` to Cloudflare Pages preview.
6. Execute synthetic end-to-end acceptance tests.

---

## 4. Current Phase 2 Status

**BLOCKED:** Cloudflare credentials cannot be verified in the CLI execution environment.
