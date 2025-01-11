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
    // console.error("Login Error:", error);

    if (error instanceof FirebaseError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
