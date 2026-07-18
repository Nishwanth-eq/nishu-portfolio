import { NextResponse } from "next/server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body.name, 80);
    const email = clean(body.email, 160);
    const message = clean(body.message, 4000);
    const company = clean(body.company, 120);

    // Silently accept bot submissions that fill the hidden honeypot field.
    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (name.length < 2 || !EMAIL_PATTERN.test(email) || message.length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid name, email, and message." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || "bonagirinishwanth@gmail.com";
    const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    if (!apiKey) {
      return NextResponse.json(
        { error: "The contact service is not configured yet." },
        { status: 503 },
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `Portfolio enquiry from ${name}`,
        text: `${message}\n\nFrom: ${name}\nEmail: ${email}`,
        html: `<h2>New portfolio enquiry</h2><p>${safeMessage}</p><hr /><p><strong>From:</strong> ${safeName}<br /><strong>Email:</strong> ${safeEmail}</p>`,
      }),
    });

    if (!response.ok) {
      console.error("Resend contact request failed", response.status, await response.text());
      return NextResponse.json(
        { error: "The message could not be sent. Please try again or use the email link." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact request failed", error);
    return NextResponse.json(
      { error: "The message could not be sent. Please try again." },
      { status: 500 },
    );
  }
}
