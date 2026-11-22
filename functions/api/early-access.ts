// Cloudflare Pages Function for /api/early-access
// Target Architecture: Cloudflare Pages + Pages Functions + Cloudflare D1

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(colName?: string): Promise<T | null>;
  run<T = unknown>(): Promise<{ success: boolean; error?: string; results?: T[]; meta?: unknown }>;
  all<T = unknown>(): Promise<{ success: boolean; error?: string; results: T[]; meta?: unknown }>;
}

export interface D1Database {
  prepare(query: string): D1PreparedStatement;
  dump(): Promise<ArrayBuffer>;
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<{ success: boolean; results?: T[] }[]>;
  exec(query: string): Promise<{ count: number; duration: number }>;
}

export interface Env {
  DB?: D1Database;
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  TAXORYN_NOTIFICATION_EMAIL?: string;
}

export interface EarlyAccessPayload {
  fullName?: string;
  email?: string;
  firmName?: string;
  phone?: string;
  city?: string;
  practiceSize?: string;
  primaryInterest?: string;
  website_url?: string; // Honeypot field for bot defense
  idempotencyKey?: string;
  campaign?: {
    source?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    utmTerm?: string;
  };
}

export function sanitizeInput(str?: string): string {
  if (!str || typeof str !== "string") return "";
  return str.replace(/[<>]/g, "").trim().slice(0, 500);
}

export async function onRequestGet() {
  return new Response(
    JSON.stringify({ success: false, error: "Method not allowed. Use POST." }),
    { status: 405, headers: { "Content-Type": "application/json", Allow: "POST" } }
  );
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const body: EarlyAccessPayload = await context.request.json().catch(() => ({}));

    // 0. Honeypot check: If the hidden honeypot website_url is filled, silently discard bot submission
    if (body.website_url && typeof body.website_url === "string" && body.website_url.trim().length > 0) {
      return new Response(
        JSON.stringify({
          success: true,
          message: "Thank you for your interest. Your early access request has been received.",
          data: { email: sanitizeInput(body.email), receivedAt: new Date().toISOString() },
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }

    const fullName = sanitizeInput(body.fullName);
    const email = sanitizeInput(body.email);
    const normalizedEmail = email.toLowerCase().trim();
    const firmName = sanitizeInput(body.firmName);
    const phone = sanitizeInput(body.phone);
    const city = sanitizeInput(body.city);
    const practiceSize = sanitizeInput(body.practiceSize) || "Not specified";
    const primaryInterest = sanitizeInput(body.primaryInterest) || "All Practice Management Modules";
    const utmSource = sanitizeInput(body.campaign?.utmSource || body.campaign?.source);
    const utmMedium = sanitizeInput(body.campaign?.utmMedium);
    const utmCampaign = sanitizeInput(body.campaign?.utmCampaign);
    const utmContent = sanitizeInput(body.campaign?.utmContent);
    const utmTerm = sanitizeInput(body.campaign?.utmTerm);

    // 1. Validation
    if (!fullName) {
      return new Response(
        JSON.stringify({ success: false, error: "Full name is required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "A valid email address is required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (!firmName) {
      return new Response(
        JSON.stringify({ success: false, error: "Firm or practice name is required." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    if (phone) {
      const phoneRegex = /^[+]?[\d\s-]{8,15}$/;
      if (!phoneRegex.test(phone.replace(/\s+/g, ""))) {
        return new Response(
          JSON.stringify({ success: false, error: "Invalid phone number format." }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    const receivedAt = new Date().toISOString();
    const leadUuid = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `lead_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
    const idempotencyKey = sanitizeInput(body.idempotencyKey) || `${normalizedEmail}_${receivedAt.slice(0, 10)}`;

    let leadRecordId: number | null = null;
    let isDuplicate = false;

    // 2. Persistent Storage via Cloudflare D1 (if DB binding is present)
    if (context.env.DB) {
      try {
        // Deduplication check: verify if identical idempotency key exists
        const existing = await context.env.DB.prepare(
          "SELECT id, lead_uuid, status FROM early_access_leads WHERE idempotency_key = ? LIMIT 1"
        ).bind(idempotencyKey).first<{ id: number; lead_uuid: string; status: string }>();

        if (existing) {
          isDuplicate = true;
          leadRecordId = existing.id;
        } else {
          const insertResult = await context.env.DB.prepare(`
            INSERT INTO early_access_leads (
              lead_uuid, full_name, email, normalized_email, firm_name, phone, city,
              practice_size, primary_interest, utm_source, utm_medium, utm_campaign,
              utm_content, utm_term, idempotency_key, status, notification_attempts, created_at, updated_at
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'NEW', 0, ?, ?)
          `).bind(
            leadUuid, fullName, email, normalizedEmail, firmName, phone, city,
            practiceSize, primaryInterest, utmSource, utmMedium, utmCampaign,
            utmContent, utmTerm, idempotencyKey, receivedAt, receivedAt
          ).run();

          if (!insertResult.success && insertResult.error) {
            throw new Error(`D1 insert error: ${insertResult.error}`);
          }
        }
      } catch (dbError) {
        console.error("Early Access D1 database persistence error:", dbError);
        // If DB is configured but fails, fail explicitly. No false success!
        return new Response(
          JSON.stringify({
            success: false,
            error: "Unable to record early access request at this time. Please try again.",
          }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
      }
    }

    // 3. Email Notification via Resend (Only dispatch if NOT a duplicate submission)
    const resendApiKey = context.env.RESEND_API_KEY;
    if (resendApiKey && !isDuplicate) {
      try {
        const emailSubject = `New Early Access Request: ${firmName} (${fullName})`;
        const emailHtml = `
          <h2>New Taxoryn Early Access Application</h2>
          <p><strong>Lead UUID:</strong> ${leadUuid}</p>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Work Email:</strong> ${email}</p>
          <p><strong>Firm / Practice:</strong> ${firmName}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>City / Location:</strong> ${city || "Not provided"}</p>
          <p><strong>Practice Size:</strong> ${practiceSize}</p>
          <p><strong>Primary Interest:</strong> ${primaryInterest}</p>
          <hr />
          <p><small>Submitted at ${receivedAt} via Cloudflare Pages Function (D1 Verified)</small></p>
        `;

        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
            "Idempotency-Key": `taxoryn-${leadUuid}-1`,
          },
          body: JSON.stringify({
            from: context.env.RESEND_FROM_EMAIL || "Taxoryn <notifications@taxoryn.com>",
            to: [context.env.TAXORYN_NOTIFICATION_EMAIL || "info@taxoryn.com"],
            subject: emailSubject,
            html: emailHtml,
          }),
        });

        if (resendRes.ok) {
          const resendData = await resendRes.json().catch(() => ({})) as { id?: string };
          if (context.env.DB && leadUuid) {
            await context.env.DB.prepare(`
              UPDATE early_access_leads 
              SET status = 'NOTIFIED', 
                  notified_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now'),
                  resend_message_id = ?,
                  notification_attempts = notification_attempts + 1,
                  updated_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
              WHERE lead_uuid = ?
            `).bind(resendData.id || "delivered", leadUuid).run().catch(() => {});
          }
        } else {
          const errText = await resendRes.text().catch(() => "Unknown error");
          console.error("Resend delivery failed with status", resendRes.status, errText);
          if (context.env.DB && leadUuid) {
            await context.env.DB.prepare(`
              UPDATE early_access_leads 
              SET status = 'PENDING_RETRY', 
                  last_notification_error = ?,
                  notification_attempts = notification_attempts + 1,
                  updated_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
              WHERE lead_uuid = ?
            `).bind(`HTTP ${resendRes.status}: ${errText.slice(0, 200)}`, leadUuid).run().catch(() => {});
          }
        }
      } catch (emailError) {
        console.error("Early Access notification dispatch failed:", emailError);
        if (context.env.DB && leadUuid) {
          await context.env.DB.prepare(`
            UPDATE early_access_leads 
            SET status = 'PENDING_RETRY', 
                last_notification_error = ?,
                notification_attempts = notification_attempts + 1,
                updated_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
            WHERE lead_uuid = ?
          `).bind(emailError instanceof Error ? emailError.message.slice(0, 200) : "Network error", leadUuid).run().catch(() => {});
        }
      }
    } else if (!resendApiKey && context.env.DB && !isDuplicate) {
      // If RESEND_API_KEY is not configured, flag lead as PENDING_RETRY in D1 so it is never lost
      await context.env.DB.prepare(`
        UPDATE early_access_leads 
        SET status = 'PENDING_RETRY', 
            last_notification_error = 'RESEND_API_KEY not configured',
            updated_at = strftime('%Y-%m-%dT%H:%M:%SZ', 'now')
        WHERE lead_uuid = ?
      `).bind(leadUuid).run().catch(() => {});
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your interest. Your early access request has been received.",
        data: { email, receivedAt, leadId: leadUuid },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Early Access API error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Unable to process early access request at this time. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
