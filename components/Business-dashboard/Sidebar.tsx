/*
"use client";

import { isActive } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import { FaRegSquare } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

// interface SidebarProps {
//   isActive?: (pathname: string) => boolean;
//   pathname?: string;
// }

function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-100 p-6 border-r border-gray-200">
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
    </aside>
  );
}

export default Sidebar;
*/

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
      {/* Top Section */}
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

      {/* Logout Button */}
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
