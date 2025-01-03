/*
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
*/

import { NextResponse } from "next/server";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { firebaseApp } from "@/firebase";

export async function POST(request: Request) {
  try {
    const {
      email,
      password,
      businessName,
      contactNumber,
      businessType,
      agreeToTerms,
    } = await request.json();

    console.log("Received data:", {
      email,
      businessName,
      contactNumber,
      businessType,
      agreeToTerms,
    });

    if (!agreeToTerms) {
      console.error("Terms not agreed to");
      return NextResponse.json(
        { error: "You must agree to the terms." },
        { status: 400 }
      );
    }

    const auth = getAuth(firebaseApp);
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    console.log("User created:", user.uid);

    const db = getFirestore(firebaseApp);
    await setDoc(doc(db, "businessUsers", user.uid), {
      businessName,
      contactNumber,
      businessType,
      email,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ message: "User registered successfully!" });
  } catch (error: any) {
    console.error("Signup error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
