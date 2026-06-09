import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    ok: true,
    message: "Inquiry received. Connect this route to email delivery when ready.",
    inquiry: body
  });
}
