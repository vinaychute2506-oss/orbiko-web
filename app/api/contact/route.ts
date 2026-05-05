import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "admin@orbiko.com";
const FROM_DOMAIN = process.env.FROM_EMAIL_DOMAIN ?? "orbiko.com";

// ─── Email format validator ────────────────────────────────────────────────────
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function POST(req: NextRequest) {
  try {
    if (!resend) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }
    const body = await req.json();
    const { firstName, lastName, email, service, message } = body;

    // ── Validation ─────────────────────────────────────────────────────────────
    const errors: string[] = [];
    if (!firstName?.trim()) errors.push("First name is required.");
    if (!lastName?.trim()) errors.push("Last name is required.");
    if (!email?.trim()) errors.push("Email is required.");
    else if (!isValidEmail(email)) errors.push("Please enter a valid email address.");
    if (!message?.trim()) errors.push("Message is required.");

    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(" ") }, { status: 400 });
    }

    const fullName = `${firstName.trim()} ${lastName.trim()}`;
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();
    const cleanService = service?.trim() || "Not specified";

    // ── Send confirmation to user ──────────────────────────────────────────────
    await resend.emails.send({
      from: `Orbiko <noreply@${FROM_DOMAIN}>`,
      to: cleanEmail,
      subject: "We received your message — Orbiko",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #1a1c1e; color: #f0ede8; padding: 48px 40px;">
          <h1 style="font-size: 28px; font-weight: 600; color: #f0ede8; margin-bottom: 8px;">
            Thank you, ${firstName.trim()}.
          </h1>
          <p style="color: #c8993a; font-size: 12px; text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 32px;">
            Orbiko — Premium Architecture & Design
          </p>
          <p style="color: #8a8784; line-height: 1.8; margin-bottom: 24px;">
            We've received your enquiry and one of our team members will be in touch with you shortly.
          </p>
          <div style="border-left: 2px solid #c8993a; padding-left: 20px; margin: 32px 0;">
            <p style="color: #f0ede8; margin: 0 0 8px;"><strong>Service:</strong> ${cleanService}</p>
            <p style="color: #8a8784; margin: 0; font-size: 14px; line-height: 1.6;">"${cleanMessage}"</p>
          </div>
        </div>
      `,
    });

    // ── Send notification to admin ─────────────────────────────────────────────
    await resend.emails.send({
      from: `Orbiko Website <noreply@${FROM_DOMAIN}>`,
      to: ADMIN_EMAIL,
      subject: `New enquiry from ${fullName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9;">
          <h2 style="color: #1a1c1e; margin-bottom: 24px;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 10px 0; color: #666; width: 140px; border-bottom: 1px solid #eee;">Name</td><td style="padding: 10px 0; font-weight: 600; border-bottom: 1px solid #eee;">${fullName}</td></tr>
            <tr><td style="padding: 10px 0; color: #666; border-bottom: 1px solid #eee;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #eee;">${cleanEmail}</td></tr>
            <tr><td style="padding: 10px 0; color: #666; vertical-align: top;">Message</td><td style="padding: 10px 0; line-height: 1.8;">${cleanMessage}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
