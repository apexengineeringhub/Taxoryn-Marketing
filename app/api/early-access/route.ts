import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/config/site";

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

/**
 * Sanitizes input string to prevent injection or invalid characters.
 */
function sanitizeInput(str?: string): string {
  if (!str || typeof str !== "string") return "";
  return str
    .replace(/[<>]/g, "") // strip dangerous html brackets
    .trim()
    .slice(0, 500); // enforce maximum length
}

/**
 * Handles Early Access application submissions via HTTP POST.
 */
export async function POST(request: NextRequest) {
  try {
    const body: EarlyAccessPayload = await request.json().catch(() => ({}));

    const fullName = sanitizeInput(body.fullName);
    const email = sanitizeInput(body.email);
    const firmName = sanitizeInput(body.firmName);
    const phone = sanitizeInput(body.phone);
    const city = sanitizeInput(body.city);
    const practiceSize = sanitizeInput(body.practiceSize) || "Not specified";
    const primaryInterest = sanitizeInput(body.primaryInterest) || "All Practice Management Modules";

    // 1. Validation
    if (!fullName) {
      return NextResponse.json(
        { success: false, error: "Full name is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!firmName) {
      return NextResponse.json(
        { success: false, error: "Firm or practice name is required." },
        { status: 400 }
      );
    }

    if (phone) {
      const phoneRegex = /^[+]?[\d\s-]{8,15}$/;
      if (!phoneRegex.test(phone.replace(/\s+/g, ""))) {
        return NextResponse.json(
          { success: false, error: "Invalid phone number format." },
          { status: 400 }
        );
      }
    }

    const submissionData = {
      fullName,
      email,
      firmName,
      phone: phone || null,
      city: city || null,
      practiceSize,
      primaryInterest,
      campaign: body.campaign || {},
      receivedAt: new Date().toISOString(),
    };

    // 2. Email Notification Delivery via Resend (if configured)
    const resendApiKey = process.env.RESEND_API_KEY;
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
          <p><small>Submitted at ${submissionData.receivedAt} via Taxoryn Early Access API</small></p>
        `;

        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM_EMAIL || "Taxoryn <notifications@taxoryn.com>",
            to: [process.env.TAXORYN_NOTIFICATION_EMAIL || siteConfig.supportEmail],
            subject: emailSubject,
            html: emailHtml,
          }),
        });
      } catch (emailError) {
        // Log error safely on backend without exposing secrets to frontend
        console.error("Early Access notification dispatch failed:", emailError);
      }
    }

    // 3. Return clean success response
    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your interest. Your early access request has been received.",
        data: {
          email,
          receivedAt: submissionData.receivedAt,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Early Access API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Unable to process early access request at this time. Please try again later.",
      },
      { status: 500 }
    );
  }
}
