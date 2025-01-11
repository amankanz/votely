"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Button from "./Button";
import { montserrat, roboto } from "@/lib/font";
import { isActive } from "@/lib/utils";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
          className={`hidden lg:flex items-center space-x-6 text-sm font-medium ${roboto.className}`}
        >
          <li>
            <Link
              href="/"
              className={`${
                isActive("/", pathname)
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
                isActive("/explore", pathname)
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
                isActive("/awards", pathname)
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
                isActive("/about", pathname)
                  ? "text-blue-600 underline underline-offset-4"
                  : "hover:text-blue-600"
              }`}
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
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
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-xl">
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <ul className={`flex flex-col space-y-4 p-4 ${roboto.className}`}>
            <li>
              <Link
                href="/"
                className={`${
                  isActive("/", pathname)
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
                  isActive("/explore", pathname)
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
                  isActive("/awards", pathname)
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
                  isActive("/about", pathname)
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
