import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ALLOWED_IPS = ["152.58.31.160", "::ffff:127.0.0.1"];

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/editor")) {
    const ip =
      request.ip ||
      request.headers.get("x-forwarded-for")?.split(",")[0] || // For Vercel or proxies
      request.headers.get("x-real-ip"); // fallback

    if (!ALLOWED_IPS.includes(ip)) {
      return new NextResponse("Forbidden: Your IP is not allowed", {
        status: 403,
      });
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/editor/:path*",
};
