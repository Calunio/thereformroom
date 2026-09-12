import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { hasLaunched, shouldShowPreLaunchGate } from "@/app/lib/prelaunch-gate";

/**
 * Pre-Launch-Gate: Auf thereformroom.de / www nur das Overlay,
 * bis zum Launch (12.09.2026, 20:00:30 Europe/Berlin).
 * Danach volle Website — ohne extra Env-Switch.
 * Netlify-Preview und localhost bleiben uneingeschränkt.
 *
 * Sofort live: NEXT_PUBLIC_PRELAUNCH_GATE=false
 */

const PASSTHROUGH_PREFIXES = ["/_next/", "/api/", "/prelaunch"];

const PASSTHROUGH_EXACT = new Set([
  "/impressum",
  "/datenschutz",
  "/agb",
  "/preise",
  "/newsletter/bestaetigt",
  "/opening",
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
]);

function isStaticAsset(pathname: string): boolean {
  return /\.(?:ico|png|jpg|jpeg|webp|svg|gif|txt|xml|woff2?|css|js|map)$/i.test(pathname);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (hasLaunched() && pathname === "/prelaunch") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const host =
    request.headers.get("x-forwarded-host") || request.headers.get("host") || "";

  if (!shouldShowPreLaunchGate(host)) {
    return NextResponse.next();
  }

  if (
    PASSTHROUGH_PREFIXES.some((p) => pathname.startsWith(p)) ||
    PASSTHROUGH_EXACT.has(pathname) ||
    isStaticAsset(pathname)
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/prelaunch";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
