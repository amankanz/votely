/*
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
        {/* Logo =/}
        <div className="flex items-center space-x-2">
          {/* <Image src="/logo.png" alt="Votely Logo" width={30} height={30} /> =/}
          <Link href={"/"}>
            <span className="text-lg font-bold">Votely</span>
          </Link>
        </div>

        <div className="flex justify-between">
          {/* Desktop Menu =/}
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

          {/* Right Icons =/}
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
*/

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
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href={"/"}>
            <span className="text-lg font-bold">Votely</span>
          </Link>
        </div>

        {/* Desktop Menu */}
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

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button text="Join as a Business" variant="primary" />
          <Button text="Sign In" variant="secondary" />
          {/* <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100">
            Sign In
          </button> */}
          {/* <div className="hover:bg-[#E8EDF5] rounded-full p-2 flex items-center justify-center">
            <FiSearch className="text-xl cursor-pointer text-blue-600" />
          </div> */}
          {/* <div className="cursor-pointer w-8 h-8 rounded-full overflow-hidden border border-gray-300">
            <Image
              src="/cryce.jpeg"
              alt="User Profile"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div> */}
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
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Join as a Business
              </button>
            </li>
            <li>
              <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-100">
                Sign In
              </button>
            </li>
            <li className="flex items-center space-x-4 mt-4">
              {/* <div className="hover:bg-[#E8EDF5] rounded-full p-2 flex items-center justify-center">
                <FiSearch className="text-xl cursor-pointer text-blue-600" />
              </div> */}
              <div className="cursor-pointer w-8 h-8 rounded-full overflow-hidden border border-gray-300">
                {/* <Image
                  src="/cryce.jpeg"
                  alt="User Profile"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
