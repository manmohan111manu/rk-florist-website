import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const eventDate = String(body.eventDate ?? "").trim();
    const eventType = String(body.eventType ?? "").trim();
    const guestCount = Number(body.guestCount);
    const budget = String(body.budget ?? "").trim();
    const theme = String(body.theme ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !email || !phone || !eventDate || !eventType || !guestCount) {
      return NextResponse.json({ error: "Please fill all required fields." }, { status: 400 });
    }

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ error: "Database is not configured." }, { status: 503 });
    }

    const { error } = await supabase.from("quote_requests").insert({
      name,
      email,
      phone,
      event_date: eventDate,
      event_type: eventType,
      guest_count: guestCount,
      budget: budget || null,
      theme: theme || null,
      message: message || null,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
