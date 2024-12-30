/*
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
        {/* Logo =/}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Votely
        </Link>

        {/* Desktop Menu =/}
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

        {/* Call-to-Action Buttons =/}
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

        {/* Mobile Menu Toggle =/}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu =/}
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
*/

"use client";

import { useState } from "react";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <Image src="/logo.png" alt="Votely Logo" width={30} height={30} /> */}
          <Link href={"/"}>
            <span className="text-lg font-bold">Votely</span>
          </Link>
        </div>

        <div className="flex justify-between">
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6 text-sm font-medium mr-4">
            <li>
              <a href="#" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Awards
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Dashboard
              </a>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hover:bg-[#E8EDF5] rounded-full p-4 flex items-center justify-center">
              <FiSearch className="text-xl cursor-pointer text-blue-600" />
            </div>
            <div className="cursor-pointer w-8 h-8 rounded-full overflow-hidden border border-gray-300">
              <Image
                src="/cryce.jpeg"
                alt="cryce"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
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
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <a
                href="#"
                className="block text-sm font-medium hover:text-blue-600"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-sm font-medium hover:text-blue-600"
              >
                Awards
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-sm font-medium hover:text-blue-600"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-sm font-medium hover:text-blue-600"
              >
                Dashboard
              </a>
            </li>
            <li className="flex items-center space-x-2 mt-4">
              <div className="hidden md:flex items-center space-x-4">
                <div className="hover:bg-[#E8EDF5] rounded-full p-4 flex items-center justify-center">
                  <FiSearch className="text-xl cursor-pointer text-blue-600" />
                </div>
                <div className="cursor-pointer w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                  <Image
                    src="/cryce.jpeg"
                    alt="cryce"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
