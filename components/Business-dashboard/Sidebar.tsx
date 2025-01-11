/*
"use client";

import { isActive } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaPersonRunning } from "react-icons/fa6";

function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    // Perform logout logic here (e.g., clearing auth tokens)
    console.log("User logged out");
    router.push("/login"); // Redirect to the login route
  };

  return (
    <aside className="w-64 bg-gray-100 p-6 border-r border-gray-200 flex flex-col h-screen">
      {/* Top Section =/}
      <div className="mb-40">
        <Link href="/business-dashboard">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">
              J
            </div>
            <div>
              <p className="font-semibold">June</p>
              <p className="text-sm text-gray-500">Dashboard</p>
            </div>
          </div>
        </Link>
        <nav className="space-y-4">
          <Link
            href="/business-dashboard/profile"
            className={`flex items-center gap-3 font-medium hover:text-blue-600 ${
              isActive("/business-dashboard/profile", pathname)
                ? "text-blue-600 bg-blue-100 p-2 rounded-2xl"
                : "hover:text-blue-600"
            }`}
          >
            <span>
              <IoPersonSharp size={25} />
            </span>
            <span className="text-sm">Profile Management</span>
          </Link>
          <Link
            href="/business-dashboard/services"
            className={`flex items-center gap-3 font-medium hover:text-blue-600 ${
              isActive("/business-dashboard/services", pathname)
                ? "text-blue-600 bg-blue-100 p-2 rounded-2xl"
                : "hover:text-blue-600"
            }`}
          >
            <span>
              <FaRegSquare size={25} />
            </span>
            <span className="text-sm">Services/Products</span>
          </Link>
          <Link
            href="/business-dashboard/awards"
            className={`flex items-center gap-3 font-medium hover:text-blue-600 ${
              isActive("/business-dashboard/awards", pathname)
                ? "text-blue-600 bg-blue-100 p-2 rounded-2xl"
                : "hover:text-blue-600"
            }`}
          >
            <span>
              <FaAward size={25} />
            </span>
            <span className="text-sm">Submit for Awards</span>
          </Link>
          <Link
            href="/business-dashboard/analytics"
            className={`flex items-center gap-3 font-medium hover:text-blue-600 ${
              isActive("/business-dashboard/analytics", pathname)
                ? "text-blue-600 bg-blue-100 p-2 rounded-2xl"
                : "hover:text-blue-600"
            }`}
          >
            <span>
              <SiGoogleanalytics size={25} />
            </span>
            <span className="text-sm">Insights & Analytics</span>
          </Link>
        </nav>
      </div>

      {/* Logout Button =/}
      <button
        title="Logout"
        onClick={handleLogout}
        className="w-full flex items-center justify-center p-3 text-sm font-medium text-gray-800 bg-gray-300 hover:text-blue-600 hover:bg-blue-100 rounded-md mt-8"
      >
        <span>
          <FaPersonRunning size={20} />
        </span>
        <span>
          <RiLogoutBoxRFill size={25} />
        </span>
      </button>
    </aside>
  );
}

export default Sidebar;
*/

/*
"use client";

import { isActive } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaRegSquare, FaPersonRunning } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { RiLogoutBoxRFill } from "react-icons/ri";
import Spinner from "@/components/Spinner";

function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  const handleLinkClick = (href: string) => {
    setIsLoading(true);
    startTransition(() => {
      router.push(href);
      setIsLoading(false);
    });
  };

  const handleLogout = () => {
    console.log("User logged out");
    router.push("/login");
  };

  return (
    <aside className="w-64 bg-gray-100 p-6 border-r border-gray-200 flex flex-col h-screen">
      <div className="mb-40">
        <Link href="/business-dashboard">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">
              J
            </div>
            <div>
              <p className="font-semibold">June</p>
              <p className="text-sm text-gray-500">Dashboard</p>
            </div>
          </div>
        </Link>
        <nav className="space-y-4">
          <button
            onClick={() => handleLinkClick("/business-dashboard/profile")}
            className={`flex items-center gap-3 font-medium hover:text-blue-600 ${
              isActive("/business-dashboard/profile", pathname)
                ? "text-blue-600 bg-blue-100 p-2 rounded-2xl"
                : "hover:text-blue-600"
            }`}
          >
            <IoPersonSharp size={25} />
            <span className="text-sm">Profile Management</span>
          </button>
          <button
            onClick={() => handleLinkClick("/business-dashboard/services")}
            className={`flex items-center gap-3 font-medium hover:text-blue-600 ${
              isActive("/business-dashboard/services", pathname)
                ? "text-blue-600 bg-blue-100 p-2 rounded-2xl"
                : "hover:text-blue-600"
            }`}
          >
            <FaRegSquare size={25} />
            <span className="text-sm">Services/Products</span>
          </button>
          <button
            onClick={() => handleLinkClick("/business-dashboard/awards")}
            className={`flex items-center gap-3 font-medium hover:text-blue-600 ${
              isActive("/business-dashboard/awards", pathname)
                ? "text-blue-600 bg-blue-100 p-2 rounded-2xl"
                : "hover:text-blue-600"
            }`}
          >
            <FaAward size={25} />
            <span className="text-sm">Submit for Awards</span>
          </button>
          <button
            onClick={() => handleLinkClick("/business-dashboard/analytics")}
            className={`flex items-center gap-3 font-medium hover:text-blue-600 ${
              isActive("/business-dashboard/analytics", pathname)
                ? "text-blue-600 bg-blue-100 p-2 rounded-2xl"
                : "hover:text-blue-600"
            }`}
          >
            <SiGoogleanalytics size={25} />
            <span className="text-sm">Insights & Analytics</span>
          </button>
        </nav>
      </div>

      {/* Loading Spinner =/}
      {(isPending || isLoading) && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/50">
          <Spinner />
        </div>
      )}

      {/* Logout Button =/}
      <button
        title="Logout"
        onClick={handleLogout}
        className="w-full flex items-center justify-center p-3 text-sm font-medium text-gray-800 bg-gray-300 hover:text-blue-600 hover:bg-blue-100 rounded-md mt-8"
      >
        <FaPersonRunning size={20} />
        <RiLogoutBoxRFill size={25} />
      </button>
    </aside>
  );
}

export default Sidebar;
*/

"use client";

import { isActive } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { RiLogoutBoxRFill } from "react-icons/ri";
import Spinner from "@/components/Spinner";

function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(false);

  const handleLinkClick = (href: string) => {
    setIsLoading(true);
    startTransition(() => {
      router.push(href);
      setIsLoading(false);
    });
  };

  const handleLogout = () => {
    console.log("User logged out");
    router.push("/login");
  };

  return (
    <div>
      {/* User and Logout Section */}
      <div className="flex justify-between items-center bg-gray-100 p-4 sm:hidden">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">
            J
          </div>
          <div>
            <p className="font-semibold">June</p>
            <p className="text-sm text-gray-500">Dashboard</p>
          </div>
        </div>
        <button
          title="Logout"
          onClick={handleLogout}
          className="text-gray-800 hover:text-blue-600"
        >
          <RiLogoutBoxRFill size={25} />
        </button>
      </div>

      {/* Sidebar Content */}
      <aside className="hidden sm:flex w-64 bg-gray-100 p-6 border-r border-gray-200 flex-col h-screen">
        <div className="mb-40">
          <Link href="/business-dashboard">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">
                J
              </div>
              <div>
                <p className="font-semibold">June</p>
                <p className="text-sm text-gray-500">Dashboard</p>
              </div>
            </div>
          </Link>
          <nav className="space-y-4">
            {[
              {
                href: "/business-dashboard/profile",
                icon: IoPersonSharp,
                label: "Profile",
              },
              {
                href: "/business-dashboard/services",
                icon: FaRegSquare,
                label: "Services",
              },
              {
                href: "/business-dashboard/awards",
                icon: FaAward,
                label: "Awards",
              },
              {
                href: "/business-dashboard/analytics",
                icon: SiGoogleanalytics,
                label: "Analytics",
              },
            ].map(({ href, icon: Icon, label }) => (
              <button
                key={href}
                onClick={() => handleLinkClick(href)}
                className={`flex items-center gap-3 font-medium hover:text-blue-600 ${
                  isActive(href, pathname)
                    ? "text-blue-600 bg-blue-100 p-2 rounded-2xl"
                    : "hover:text-blue-600"
                }`}
              >
                <Icon size={25} />
                <span className="text-sm">{label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Navigation */}
      <nav className="sm:hidden fixed bottom-0 w-full bg-gray-100 p-4 flex justify-around items-center border-t border-gray-200">
        {[
          { href: "/business-dashboard/profile", icon: IoPersonSharp },
          { href: "/business-dashboard/services", icon: FaRegSquare },
          { href: "/business-dashboard/awards", icon: FaAward },
          { href: "/business-dashboard/analytics", icon: SiGoogleanalytics },
        ].map(({ href, icon: Icon }) => (
          <button
            key={href}
            onClick={() => handleLinkClick(href)}
            className={`hover:text-blue-600 ${
              isActive(href, pathname) ? "text-blue-600" : "text-gray-800"
            }`}
          >
            <Icon size={25} />
          </button>
        ))}
      </nav>

      {/* Loading Spinner */}
      {(isPending || isLoading) && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/50">
          <Spinner />
        </div>
      )}
    </div>
  );
}

export default Sidebar;
