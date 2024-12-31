/*
import { NextResponse } from "next/server";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    return NextResponse.json({ message: "User created successfully!", user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
*/

import { NextResponse } from "next/server";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { firebaseApp } from "@/firebase"; // Firebase config file

export async function POST(request: Request) {
  const {
    email,
    password,
    businessName,
    contactNumber,
    businessType,
    agreeToTerms,
  } = await request.json();

  if (!agreeToTerms) {
    return NextResponse.json(
      { error: "You must agree to the terms." },
      { status: 400 }
    );
  }

  try {
    const auth = getAuth(firebaseApp);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // Save extra user info in Firestore
    const db = getFirestore(firebaseApp);
    await setDoc(doc(db, "businessUsers", user.uid), {
      businessName,
      contactNumber,
      businessType,
      email,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "User registered successfully!" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
