/*
import { NextRequest, NextResponse } from "next/server";
import { AuthValidator } from "@/lib/AuthValidator";
import { auth, firestore } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    const {
      email,
      password,
      businessName,
      contactNumber,
      businessType,
      agreeToTerms,
    } = await req.json();

    // Validation
    if (
      !email ||
      !password ||
      !businessName ||
      !contactNumber ||
      !businessType ||
      !agreeToTerms
    ) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!AuthValidator.isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    // Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Store business info in the database
    const userRef = doc(
      collection(firestore, "businessUsers"),
      userCredential.user.uid
    );
    await setDoc(userRef, {
      email,
      businessName,
      contactNumber,
      businessType,
      agreeToTerms,
      password,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Signup successful!", redirectTo: "/business-dashboard" },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Signup Error:", (error as Error).message);
    return NextResponse.json(
      { error: (error as Error).message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
*/

import { NextRequest, NextResponse } from "next/server";
import { AuthValidator } from "@/lib/AuthValidator";
import { auth, firestore } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";

export async function POST(req: NextRequest) {
  try {
    const {
      email,
      password,
      businessName,
      contactNumber,
      businessType,
      agreeToTerms,
    } = await req.json();

    // Validation
    if (
      !email ||
      !password ||
      !businessName ||
      !contactNumber ||
      !businessType ||
      !agreeToTerms
    ) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!AuthValidator.isValidEmail(email)) {
      return NextResponse.json(
        { error: "Invalid email format." },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters long." },
        { status: 400 }
      );
    }

    // Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Store business info in the database
    const userRef = doc(
      collection(firestore, "businessUsers"),
      userCredential.user.uid
    );
    await setDoc(userRef, {
      email,
      businessName,
      contactNumber,
      businessType,
      agreeToTerms,
      password,
      createdAt: new Date(),
    });

    return NextResponse.json(
      { message: "Signup successful!", redirectTo: "/business-dashboard" },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Signup Error:", (error as Error).message);
    return NextResponse.json(
      { error: (error as Error).message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
