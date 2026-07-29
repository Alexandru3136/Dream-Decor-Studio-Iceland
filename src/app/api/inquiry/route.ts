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
      console.error("Resend failed:", response.status, await response.text());
      return NextResponse.json({ ok: false, message: "Email delivery failed." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }
}
