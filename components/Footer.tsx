import React from "react";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Column 1: About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Votely</h3>
          <p className="text-sm leading-relaxed">
            Empowering customers and celebrating excellence across industries
            with verified reviews and prestigious awards.
          </p>
        </div>

        {/* Column 2: Quick Links */}
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

        {/* Column 3: Contact */}
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

      {/* Bottom Section */}
      <div className="border-t border-blue-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Votely. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
