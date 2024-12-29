"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Votely
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
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
          <li>
            <Link href="/dashboard" className="hover:text-blue-600">
              Dashboard
            </Link>
          </li>
        </ul>

        {/* Call-to-Action Buttons */}
        <div className="hidden md:flex gap-4">
          <Link
            href="/login"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-md">
          <ul className="flex flex-col items-center gap-4 py-4">
            <li>
              <Link href="/" onClick={toggleMenu} className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link href="/awards" onClick={toggleMenu} className="block py-2">
                Awards
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={toggleMenu} className="block py-2">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                onClick={toggleMenu}
                className="block py-2"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/login"
                onClick={toggleMenu}
                className="block py-2 text-blue-600"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                onClick={toggleMenu}
                className="block py-2 bg-blue-600 text-white rounded-md px-4"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
