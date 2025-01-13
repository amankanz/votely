import React from "react";

/*
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: About =/}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Votely</h3>
          <p className="text-sm leading-relaxed">
            Empowering customers and celebrating excellence across industries
            with verified reviews and prestigious awards.
          </p>
        </div>

        {/* Column 2: Quick Links =/}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/awards" className="hover:text-blue-300">
                Awards
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-300">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/subscription" className="hover:text-blue-300">
                Subscription Plans
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact =/}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:support@votely.com"
                className="hover:text-blue-300"
              >
                support@votely.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-blue-300">
                +1 (234) 567-890
              </a>
            </li>
            <li>
              Follow us:
              <span className="ml-2 space-x-2">
                <a href="#" className="hover:text-blue-300">
                  Facebook
                </a>
                <a href="#" className="hover:text-blue-300">
                  Twitter
                </a>
                <a href="#" className="hover:text-blue-300">
                  LinkedIn
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section =/}
      <div className="border-t border-blue-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Votely. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
*/

import { CiFacebook } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io5";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-500 py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link href="/about" className="hover:text-blue-600">
            About Us
          </Link>
          <Link href="/awards" className="hover:text-blue-600">
            Awards
          </Link>
          <Link
            href="/business-dashboard/subscription"
            className="hover:text-blue-600"
          >
            Subscription Plans
          </Link>
          <Link href="/developers" className="hover:text-blue-600">
            Developers
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-6 text-lg">
          <Link href="#" aria-label="Twitter" className="hover:text-blue-600">
            {/* <i className="fab fa-twitter"></i> */}
            <RiTwitterXFill />
          </Link>
          <Link href="#" aria-label="Facebook" className="hover:text-blue-600">
            {/* <i className="fab fa-facebook"></i> */}
            <CiFacebook />
          </Link>
          <Link href="#" aria-label="Instagram" className="hover:text-blue-600">
            {/* <i className="fab fa-instagram"></i> */}
            <IoLogoInstagram />
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Votely. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
