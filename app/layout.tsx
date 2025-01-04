/*
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { montserrat } from "@/lib/font";

export const metadata: Metadata = {
  title: "Votely",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = (
    <header>
      <Navbar />
    </header>
  );

  const footer = <Footer />;

  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
*/

/*
"use client";

import type { Metadata } from "next";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { montserrat } from "@/lib/font";

export const metadata: Metadata = {
  title: "Votely",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const validateToken = async () => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      if (!token) {
        if (pathname === "/business-dashboard") {
          router.push("/login");
        }
        return;
      }

      try {
        const response = await fetch("/api/auth/verify-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        if (!response.ok) {
          router.push("/login");
        }
      } catch (error) {
        console.error("Token validation failed:", error);
        router.push("/login");
      }
    };

    validateToken();
  }, [router, pathname]);

  const header = (
    <header>
      <Navbar />
    </header>
  );

  const footer = <Footer />;

  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
*/

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { montserrat } from "@/lib/font";
// import AuthValidator from "@/components/AuthValidator";

export const metadata: Metadata = {
  title: "Votely",
  description:
    "Discover and recognize outstanding businesses driving innovation and customer satisfaction.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
