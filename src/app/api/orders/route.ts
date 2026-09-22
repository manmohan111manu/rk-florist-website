import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const items = Array.isArray(body.items) ? body.items : [];
    const total = Number(body.total ?? 0);

    if (!items.length) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    const supabase = getSupabase();
    if (!supabase) {
      return NextResponse.json({ error: "Database is not configured." }, { status: 503 });
    }

    const { error } = await supabase.from("orders").insert({
      items,
      total,
      status: "placed",
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
