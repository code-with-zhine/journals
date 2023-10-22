import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/" || path === "/admin/dashboard";

  const token = request.cookies.get("token")?.value || "";

  console.log("token", token);
  console.log("path", isPublicPath);

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/admin/dashboard", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/admin/dashboard", "/admin/auth/signin", "/admin/auth/signup"],
};
