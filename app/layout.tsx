/*
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { roboto } from "@/lib/font";
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
      <body className={`${roboto.className} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
*/

/*
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { roboto } from "@/lib/font";
import Spinner from "@/components/Spinner";
import { useNavigation } from "@/context/NavigationContext";
// import AuthValidator from "@/components/AuthValidator";

export const metadata: Metadata = {
  title: "Votely",
  description:
    "Discover and recognize outstanding businesses driving innovation and customer satisfaction.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { isNavigating } = useNavigation();

  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {/* Global Spinner =/}
        {isNavigating ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white/70 z-50">
            <Spinner />
          </div>
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
*/

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { roboto } from "@/lib/font";
import NavigationHandler from "@/components/NavigationHandler";
import { NavigationProvider } from "@/context/NavigationContext";

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
      <body className={`${roboto.className} antialiased`}>
        <NavigationProvider>
          <NavigationHandler>
            <Navbar />
            {children}
            <Footer />
          </NavigationHandler>
        </NavigationProvider>
      </body>
    </html>
  );
}
