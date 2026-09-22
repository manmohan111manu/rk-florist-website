import { NextResponse, NextRequest } from "next/server";

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const SESSION_COOKIE = "rk_admin_session";

export async function setSession(res: NextResponse) {
  // In a real app, use a signed JWT or secure random token
  const token = Buffer.from(`${ADMIN_USERNAME}:${Date.now()}`).toString("base64");
  res.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 day
  });
}

export async function getSession(req: NextRequest) {
  const token = req.cookies.get(SESSION_COOKIE)?.value;
  if (!token) return null;
  // Simple validation (in production, verify signature)
  try {
    const decoded = Buffer.from(token, "base64").toString("utf-8");
    const [username] = decoded.split(":");
    return username === ADMIN_USERNAME ? { username } : null;
  } catch {
    return null;
  }
}

export async function requireSession(req: NextRequest) {
  const session = await getSession(req);
  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }
  return null;
}

export async function clearSession(res: NextResponse) {
  res.cookies.set(SESSION_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
}