/*
"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
// import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo =/}
        <div className="flex items-center space-x-2">
          <Link href={"/"}>
            <span className="text-lg font-bold">Votely</span>
          </Link>
        </div>

        {/* Desktop Menu =/}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/explore" className="hover:text-blue-600">
              Explore Businesses
            </Link>
          </li>
          <li>
            <Link href="/awards" className="hover:text-blue-600">
              Awards
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About Us
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons =/}
        <div className="hidden md:flex items-center space-x-4">
          <Button link="/signup" text="Join as a Business" variant="primary" />
          <Button link="/login" text="Sign In" variant="secondary" />
        </div>

        {/* Mobile Menu Button =/}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-xl">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu =/}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                href="/"
                className="block text-sm font-medium hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/explore"
                className="block text-sm font-medium hover:text-blue-600"
              >
                Explore Businesses
              </Link>
            </li>
            <li>
              <Link
                href="/awards"
                className="block text-sm font-medium hover:text-blue-600"
              >
                Awards
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-sm font-medium hover:text-blue-600"
              >
                About Us
              </Link>
            </li>
            <li>
              
              <Button
                link="/signup"
                text="Join as a Business"
                variant="secondary"
              />
            </li>
            <li>
              
              <Button link="/login" text="Sign In" variant="secondary" />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
*/

/*
"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Button from "./Button";
import { montserrat } from "@/lib/font";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo =/}
        <div className="flex items-center space-x-2">
          <Link href={"/"}>
            <span className={`text-lg font-bold ${montserrat.className}`}>
              Votely
            </span>
          </Link>
        </div>

        {/* Desktop Menu =/}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link href="/explore" className="hover:text-blue-600">
              Explore Businesses
            </Link>
          </li>
          <li>
            <Link href="/awards" className="hover:text-blue-600">
              Awards
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-600">
              About Us
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons =/}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            link="/signup/business"
            text="Join as a Business"
            variant="primary"
          />
          <Button
            link="/signup/customer"
            text="Join as a Customer"
            variant="secondary"
          />
        </div>

        {/* Mobile Menu Button =/}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-xl">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu =/}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className={`flex flex-col space-y-4 p-4 ${montserrat.className}`}>
            <li>
              <Link
                href="/"
                className="block text-sm font-medium hover:text-blue-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/explore"
                className="block text-sm font-medium hover:text-blue-600"
              >
                Explore Businesses
              </Link>
            </li>
            <li>
              <Link
                href="/awards"
                className="block text-sm font-medium hover:text-blue-600"
              >
                Awards
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block text-sm font-medium hover:text-blue-600"
              >
                About Us
              </Link>
            </li>
            <li>
              <Button
                link="/signup/business"
                text="Join as a Business"
                variant="primary"
              />
            </li>
            <li>
              <Button
                link="/signup/customer"
                text="Join as a Customer"
                variant="secondary"
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
*/

"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Button from "./Button";
import { montserrat, roboto } from "@/lib/font";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper function to check active route
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href={"/"}>
            <span className={`text-lg font-bold ${montserrat.className}`}>
              Votely
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex items-center space-x-6 text-sm font-medium ${roboto.className}`}
        >
          <li>
            <Link
              href="/"
              className={`${
                isActive("/")
                  ? "text-blue-600 underline underline-offset-4"
                  : "hover:text-blue-600"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/explore"
              className={`${
                isActive("/explore")
                  ? "text-blue-600 underline underline-offset-4"
                  : "hover:text-blue-600"
              }`}
            >
              Explore Businesses
            </Link>
          </li>
          <li>
            <Link
              href="/awards"
              className={`${
                isActive("/awards")
                  ? "text-blue-600 underline underline-offset-4"
                  : "hover:text-blue-600"
              }`}
            >
              Awards
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${
                isActive("/about")
                  ? "text-blue-600 underline underline-offset-4"
                  : "hover:text-blue-600"
              }`}
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            link="/signup/business"
            text="Join as a Business"
            variant="primary"
          />
          <Button
            link="/signup/customer"
            text="Join as a Customer"
            variant="secondary"
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-xl">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className={`flex flex-col space-y-4 p-4 ${roboto.className}`}>
            <li>
              <Link
                href="/"
                className={`${
                  isActive("/")
                    ? "text-blue-600 font-bold"
                    : "hover:text-blue-600"
                } block text-sm font-medium`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/explore"
                className={`${
                  isActive("/explore")
                    ? "text-blue-600 font-bold"
                    : "hover:text-blue-600"
                } block text-sm font-medium`}
              >
                Explore Businesses
              </Link>
            </li>
            <li>
              <Link
                href="/awards"
                className={`${
                  isActive("/awards")
                    ? "text-blue-600 font-bold"
                    : "hover:text-blue-600"
                } block text-sm font-medium`}
              >
                Awards
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  isActive("/about")
                    ? "text-blue-600 font-bold"
                    : "hover:text-blue-600"
                } block text-sm font-medium`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Button
                link="/signup/business"
                text="Join as a Business"
                variant="primary"
              />
            </li>
            <li>
              <Button
                link="/signup/customer"
                text="Join as a Customer"
                variant="secondary"
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
