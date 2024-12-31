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
