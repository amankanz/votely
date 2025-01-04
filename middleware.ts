/*
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  const protectedPaths = ["/business-dashboard", "/customer-dashboard"];

  if (protectedPaths.includes(pathname)) {
    if (!token) {
      // Redirect if no token is found
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      const response = await fetch(new URL("/api/auth/verify-token", req.url), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        return NextResponse.redirect(new URL("/login", req.url));
      }

      const { decodedToken } = await response.json();

      if (
        pathname === "/business-dashboard" &&
        decodedToken.userType !== "Business"
      ) {
        return NextResponse.redirect(new URL("/login", req.url));
      }

      if (
        pathname === "/customer-dashboard" &&
        decodedToken.userType !== "Customer"
      ) {
        return NextResponse.redirect(new URL("/login", req.url));
      }

      return NextResponse.next();
    } catch (error) {
      console.error("Middleware token verification failed:", error);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/business-dashboard", "/customer-dashboard"],
};
*/

import { NextRequest, NextResponse } from "next/server";
import { adminAuth } from "@/firebaseAdmin";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  console.log("Middleware Token:", token); // Debugging
  console.log("Requested Path:", pathname); // Debugging

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    console.log("Decoded Token:", decodedToken); // Debugging

    if (
      pathname === "/business-dashboard" &&
      decodedToken.userType !== "Business"
    ) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } catch (error) {
    console.error("Middleware Token Verification Failed:", error);
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// Apply middleware only to these routes
export const config = {
  matcher: ["/business-dashboard"],
};
