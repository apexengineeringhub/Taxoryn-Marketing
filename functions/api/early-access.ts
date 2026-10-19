// Cloudflare Pages Function for /api/early-access
interface Env {
  RESEND_API_KEY?: string;
  RESEND_FROM_EMAIL?: string;
  TAXORYN_NOTIFICATION_EMAIL?: string;
}

interface EarlyAccessPayload {
  fullName?: string;
  email?: string;
  firmName?: string;
  phone?: string;
  city?: string;
  practiceSize?: string;
  primaryInterest?: string;
  campaign?: {
    source?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    utmTerm?: string;
  };
}

function sanitizeInput(str?: string): string {
  if (!str || typeof str !== "string") return "";
  return str.replace(/[<>]/g, "").trim().slice(0, 500);
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const body: EarlyAccessPayload = await context.request.json().catch(() => ({}));

    const fullName = sanitizeInput(body.fullName);
    const email = sanitizeInput(body.email);
    const firmName = sanitizeInput(body.firmName);
    const phone = sanitizeInput(body.phone);
    const city = sanitizeInput(body.city);
    const practiceSize = sanitizeInput(body.practiceSize) || "Not specified";
    const primaryInterest = sanitizeInput(body.primaryInterest) || "All Practice Management Modules";

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

    // 2. Email Delivery via Resend (if configured)
    const resendApiKey = context.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const emailSubject = `New Early Access Request: ${firmName} (${fullName})`;
        const emailHtml = `
          <h2>New Taxoryn Early Access Application</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Work Email:</strong> ${email}</p>
          <p><strong>Firm / Practice:</strong> ${firmName}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>City / Location:</strong> ${city || "Not provided"}</p>
          <p><strong>Practice Size:</strong> ${practiceSize}</p>
          <p><strong>Primary Interest:</strong> ${primaryInterest}</p>
          <hr />
          <p><small>Submitted at ${receivedAt} via Cloudflare Pages Function</small></p>
        `;

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: context.env.RESEND_FROM_EMAIL || "Taxoryn <notifications@taxoryn.com>",
            to: [context.env.TAXORYN_NOTIFICATION_EMAIL || "info@taxoryn.com"],
            subject: emailSubject,
            html: emailHtml,
          }),
        });
      } catch (emailError) {
        console.error("Early Access notification dispatch failed:", emailError);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you for your interest. Your early access request has been received.",
        data: { email, receivedAt },
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
