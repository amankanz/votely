/*
import { NextResponse } from "next/server";
import { auth } from "@/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    return NextResponse.json({ message: "Login successful!", user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
*/

/*
import { NextResponse } from "next/server";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export async function POST(request: Request) {
  const { email, password, userType } = await request.json();

  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    return NextResponse.json({
      message: "Login successful!",
      userType,
      accessToken: await user.getIdToken(),
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
*/

/*
import { NextResponse } from "next/server";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "@firebase/util";

export async function POST(request: Request) {
  const { email, password, userType } = await request.json();

  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    return NextResponse.json({
      message: "Login successful!",
      userType,
      accessToken: await user.getIdToken(),
    });
  } catch (error) {
    if (error instanceof FirebaseError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Handle unexpected errors
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
*/

/*
import { NextResponse } from "next/server";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth as getAdminAuth } from "firebase-admin/auth"; // Import Admin SDK
import { FirebaseError } from "@firebase/util";

export async function POST(request: Request) {
  const { email, password, userType } = await request.json();

  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Add userType to Firebase Admin custom claims
    const adminAuth = getAdminAuth();
    await adminAuth.setCustomUserClaims(user.uid, { userType });

    return NextResponse.json({
      message: "Login successful!",
      userType,
      accessToken: await user.getIdToken(true), // Force refresh token to include claims
    });
  } catch (error) {
    if (error instanceof FirebaseError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    // Handle unexpected errors
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
*/

/*
import { NextResponse } from "next/server";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth as getAdminAuth } from "firebase-admin/auth";
import { FirebaseError } from "@firebase/util";

export async function POST(request: Request) {
  try {
    const { email, password, userType } = await request.json();

    // ✅ Validate inputs
    if (!email || !password || !userType) {
      return NextResponse.json(
        { error: "Email, password, and user type are required." },
        { status: 400 }
      );
    }

    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // ✅ Check Admin SDK initialization
    const adminAuth = getAdminAuth();
    if (!adminAuth) {
      throw new Error("Firebase Admin SDK not initialized.");
    }

    // ✅ Add custom claims for userType
    await adminAuth.setCustomUserClaims(user.uid, { userType });

    return NextResponse.json({
      message: "Login successful!",
      userType,
      accessToken: await user.getIdToken(true),
    });
  } catch (error) {
    console.error("Login Error:", error);

    if (error instanceof FirebaseError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
*/

import { NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { adminAuth } from "@/lib/firebaseAdmin";
import { FirebaseError } from "@firebase/util";

export async function POST(request: Request) {
  try {
    const { email, password, userType } = await request.json();

    // ✅ Validate inputs
    if (!email || !password || !userType) {
      return NextResponse.json(
        { error: "Email, password, and user type are required." },
        { status: 400 }
      );
    }

    // ✅ Authenticate using client-side auth
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // ✅ Set custom claims using Admin SDK
    await adminAuth.setCustomUserClaims(user.uid, { userType });

    return NextResponse.json({
      message: "Login successful!",
      userType,
      accessToken: await user.getIdToken(true),
    });
  } catch (error) {
    console.error("Login Error:", error);

    if (error instanceof FirebaseError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
