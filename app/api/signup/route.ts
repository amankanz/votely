/*
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

    if (!agreeToTerms) {
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

    const db = getFirestore(firebaseApp);
    await setDoc(doc(db, "businessUsers", user.uid), {
      businessName,
      contactNumber,
      businessType,
      email,
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "User registered successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Failed to sign up. Please try again later." },
      { status: 500 }
    );
  }
}
*/

/*

import { adminAuth } from "@/firebaseAdmin";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password, userType } = await req.json();

    const userCredential = await adminAuth.createUser({
      email,
      password,
    });

    const token = await adminAuth.createCustomToken(userCredential.uid, {
      userType,
    });

    const response = NextResponse.json({ success: true });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
    });

    console.log("Signup successful, token set in cookie");

    return response;
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Failed to sign up" }, { status: 500 });
  }
}
*/

/*
import { NextRequest, NextResponse } from "next/server";
import { AuthValidator } from "@/lib/AuthValidator";
import { db } from "@/firebase"; // Assuming Firebase integration

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

    // Firebase Authentication (or replace with your auth logic)
    const userCredential = await db
      .auth()
      .createUserWithEmailAndPassword(email, password);

    // Store business info in the database
    await db
      .firestore()
      .collection("businesses")
      .doc(userCredential.user.uid)
      .set({
        email,
        businessName,
        contactNumber,
        businessType,
        agreeToTerms,
        createdAt: new Date(),
      });

    return NextResponse.json(
      { message: "Signup successful!", redirectTo: "/business-dashboard" },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Signup Error:", error.message);
    return NextResponse.json(
      { error: error.message || "Internal Server Error" },
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
      collection(firestore, "businesses"),
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
