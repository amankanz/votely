import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const pathname = req.nextUrl.pathname;

  const protectedPaths = ["/business-dashboard", "/customer-dashboard"];

  if (protectedPaths.includes(pathname)) {
    if (!token) {
      // Redirect to login if no token is present
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      // Verify token via API
      const response = await fetch(new URL("/api/auth/verify-token", req.url), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        return NextResponse.redirect(new URL("/login", req.url));
      }

      const { decodedToken } = await response.json();

      // User type validation
      if (
        pathname === "/business-dashboard" &&
        decodedToken.userType !== "Business"
      ) {
        // Redirect to the correct dashboard if userType mismatch
        return NextResponse.redirect(new URL("/customer-dashboard", req.url));
      }

      if (
        pathname === "/customer-dashboard" &&
        decodedToken.userType !== "Customer"
      ) {
        // Redirect to the correct dashboard if userType mismatch
        return NextResponse.redirect(new URL("/business-dashboard", req.url));
      }
      console.log("Decoded Token:", decodedToken);

      // User is authorized
      return NextResponse.next();
    } catch (error) {
      console.error("Middleware token verification failed:", error);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Proceed for non-protected paths
  return NextResponse.next();
}

export const config = {
  matcher: ["/business-dashboard", "/customer-dashboard"],
};
