/*
import { adminAuth } from "@/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const token = body.token;

  if (!token) {
    return NextResponse.json({ error: "Missing token" }, { status: 400 });
  }

  try {
    const decodedToken = await adminAuth.verifyIdToken(token);
    return NextResponse.json({ decodedToken }, { status: 200 });
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
*/

/*
import { adminAuth } from "@/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const token = body.token;

    if (!token) {
      return NextResponse.json({ error: "Missing token" }, { status: 400 });
    }

    const decodedToken = await adminAuth.verifyIdToken(token);
    console.log("Decoded Token:", decodedToken); // Debugging

    return NextResponse.json({ decodedToken }, { status: 200 });
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
*/

import { adminAuth } from "@/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json({ error: "Missing token" }, { status: 400 });
    }

    const decodedToken = await adminAuth.verifyIdToken(token);
    return NextResponse.json({ decodedToken }, { status: 200 });
  } catch (error) {
    console.error("Token verification failed:", error);
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}
