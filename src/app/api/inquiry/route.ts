import { NextResponse } from "next/server";

const destinationEmail = "dreamdecor.iceland@gmail.com";

function clean(value: unknown, maxLength = 1000) {
  return String(value ?? "").trim().slice(0, maxLength);
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
    const raw = await request.json();

    if (clean(raw.company)) {
      return NextResponse.json({ ok: true });
    }

    const inquiry = {
      name: clean(raw.name, 120),
      email: clean(raw.email, 180),
      phone: clean(raw.phone, 80),
      eventType: clean(raw.eventType, 120),
      date: clean(raw.date, 40),
      location: clean(raw.location, 160),
      guests: clean(raw.guests, 20),
      budget: clean(raw.budget, 80),
      contactMethod: clean(raw.contactMethod, 80),
      support: clean(raw.support, 120),
      mood: clean(raw.mood, 240),
      message: clean(raw.message, 3000),
      language: clean(raw.language, 10)
    };

    if (!inquiry.name || !inquiry.email || !inquiry.phone || !inquiry.eventType || !inquiry.message) {
      return NextResponse.json({ ok: false, message: "Missing required fields." }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const resendFrom = process.env.RESEND_FROM_EMAIL;

    if (!resendApiKey || !resendFrom) {
      console.error("Set RESEND_API_KEY and RESEND_FROM_EMAIL to enable inquiry delivery.");
      return NextResponse.json(
        { ok: false, message: "Email delivery is not configured." },
        { status: 503 }
      );
    }

    const fields = [
      ["Name", inquiry.name],
      ["Email", inquiry.email],
      ["Phone", inquiry.phone],
      ["Preferred contact", inquiry.contactMethod],
      ["Event", inquiry.eventType],
      ["Date", inquiry.date || "-"],
      ["Location", inquiry.location || "-"],
      ["Guests", inquiry.guests || "-"],
      ["Budget", inquiry.budget || "-"],
      ["Support", inquiry.support || "-"],
      ["Mood", inquiry.mood || "-"],
      ["Language", inquiry.language.toUpperCase() || "EN"],
      ["Message", inquiry.message]
    ];

    const html = `
      <div style="font-family:Arial,sans-serif;max-width:680px;margin:auto;color:#111827">
        <h1 style="color:#07162b">New Dream Decor inquiry</h1>
        <table style="width:100%;border-collapse:collapse">
          ${fields
            .map(
              ([label, value]) => `
                <tr>
                  <th style="padding:10px;border:1px solid #d1d5db;text-align:left;background:#f5f1e7">${escapeHtml(label)}</th>
                  <td style="padding:10px;border:1px solid #d1d5db;white-space:pre-wrap">${escapeHtml(value)}</td>
                </tr>`
            )
            .join("")}
        </table>
      </div>`;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: resendFrom,
        to: [destinationEmail],
        reply_to: inquiry.email,
        subject: `New ${inquiry.eventType} inquiry from ${inquiry.name}`,
        html
      })
    });

    if (!response.ok) {
      // Backup trail: even if email delivery fails, the lead is captured in server logs.
      console.error(
        "Resend failed:",
        response.status,
        await response.text(),
        "LEAD:",
        JSON.stringify(inquiry)
      );
      return NextResponse.json({ ok: false, message: "Email delivery failed." }, { status: 502 });
    }

    // Permanent backup trail for every captured lead (visible in server logs).
    console.log("LEAD received:", JSON.stringify(inquiry));

    // Best-effort auto-reply to the customer. Never fail the request if this errors.
    await sendAutoReply(inquiry, resendApiKey, resendFrom).catch((error) => {
      console.error("Auto-reply failed (non-blocking):", error);
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }
}

type Inquiry = {
  name: string;
  email: string;
  eventType: string;
  language: string;
};

async function sendAutoReply(inquiry: Inquiry, apiKey: string, from: string) {
  const isIcelandic = inquiry.language.toLowerCase() === "is";
  const firstName = inquiry.name.split(" ")[0] || inquiry.name;

  const subject = isIcelandic
    ? "Takk fyrir fyrirspurnina – Dream Decor Studio Iceland"
    : "Thank you for your inquiry – Dream Decor Studio Iceland";

  const greeting = isIcelandic ? `Hæ ${firstName},` : `Hi ${firstName},`;
  const body = isIcelandic
    ? "Takk fyrir að hafa samband við Dream Decor Studio Iceland. Við höfum móttekið fyrirspurnina þína og höfum samband innan eins virks dags til að ræða næstu skref."
    : "Thank you for reaching out to Dream Decor Studio Iceland. We have received your inquiry and will contact you within one business day to discuss the next steps.";
  const summaryLabel = isIcelandic ? "Tegund viðburðar" : "Event type";
  const signoff = isIcelandic ? "Hlökkum til, Dream Decor teymið" : "Warm regards, The Dream Decor team";

  const html = `
    <div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#111827;line-height:1.6">
      <h2 style="color:#07162b">Dream Decor Studio Iceland</h2>
      <p>${escapeHtml(greeting)}</p>
      <p>${escapeHtml(body)}</p>
      <p style="color:#6b7280"><strong>${escapeHtml(summaryLabel)}:</strong> ${escapeHtml(inquiry.eventType)}</p>
      <p>${escapeHtml(signoff)}</p>
    </div>`;

  const reply = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from,
      to: [inquiry.email],
      reply_to: destinationEmail,
      subject,
      html
    })
  });

  if (!reply.ok) {
    throw new Error(`Auto-reply status ${reply.status}: ${await reply.text()}`);
  }
}
