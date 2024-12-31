/*
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/firebase";
import { getAuth } from "firebase-admin/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token");

  const protectedPaths = ["/business-dashboard", "/customer-dashboard"];
  const pathname = req.nextUrl.pathname;

  if (protectedPaths.includes(pathname)) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      await getAuth().verifyIdToken(token.value);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/business-dashboard", "/customer-dashboard"],
};
*/

/*
import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "firebase-admin/auth";
import { initializeApp, getApps, cert } from "firebase-admin/app";

// Ensure Firebase Admin SDK is initialized
if (getApps().length === 0) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // Access token from cookies
  const pathname = req.nextUrl.pathname;

  const protectedPaths = ["/business-dashboard", "/customer-dashboard"];

  if (protectedPaths.includes(pathname)) {
    if (!token) {
      // Redirect if no token is found
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      // Verify token with Firebase Admin SDK
      const decodedToken = await getAuth().verifyIdToken(token);

      // Optionally, check custom claims (e.g., user role)
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
      console.error("Token verification failed:", error);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

// Match specific routes for middleware
export const config = {
  matcher: ["/business-dashboard", "/customer-dashboard"],
};
*/

import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "firebase-admin/auth";
import { initializeApp, getApps, cert, App } from "firebase-admin/app";

// Ensure Firebase Admin SDK is initialized
if (getApps().length === 0) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
}

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value; // Access token from cookies
  const pathname = req.nextUrl.pathname;

  const protectedPaths = ["/business-dashboard", "/customer-dashboard"];

  if (protectedPaths.includes(pathname)) {
    if (!token) {
      // Redirect if no token is found
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      // Verify token with Firebase Admin SDK
      const decodedToken = await getAuth().verifyIdToken(token);

      // Optionally, check custom claims (e.g., user role)
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
      console.error("Token verification failed:", error);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

// Match specific routes for middleware
export const config = {
  matcher: ["/business-dashboard", "/customer-dashboard"],
};
