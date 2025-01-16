"use client";

import { isActive } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { FaPersonRunning } from "react-icons/fa6";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { SiGooglehome } from "react-icons/si";
import { RiFileListLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { IoHelpCircleOutline } from "react-icons/io5";
import { TbSpeakerphone } from "react-icons/tb";
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
    setIsLoading(true);
    startTransition(() => {
      console.log("User logged out");
      router.push("/login");
      setIsLoading(false);
    });
  };

  return (
    <div>
      {/* User and Logout Section */}
      <div className="flex justify-between items-center bg-gray-100 p-4 sm:hidden">
        <button onClick={() => handleLinkClick("/customer-dashboard")}>
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">
              J
            </div>
            <div className="flex flex-col items-start">
              <p className="font-semibold">Ziha</p>
              <p className="text-sm text-gray-500">Dashboard</p>
            </div>
          </div>
        </button>
        <button
          title="Logout"
          onClick={handleLogout}
          className="text-gray-800 hover:text-blue-600 flex"
        >
          <FaPersonRunning size={20} />
          <RiLogoutBoxRFill size={25} />
        </button>
      </div>

      {/* Sidebar Content */}
      <aside className="hidden lg:flex w-64 bg-gray-100 p-6 border-r border-gray-200 flex-col h-screen">
        <div className="mb-40">
          <Link href="/customer-dashboard">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-10 h-10 bg-gray-300 rounded-full flex justify-center items-center">
                J
              </div>
              <div className="flex flex-col items-start">
                <p className="font-semibold text-start">Ziha</p>
                <p className="text-sm text-gray-500">Dashboard</p>
              </div>
            </div>
          </Link>
          <nav className="space-y-4 md:mb-40">
            {[
              {
                href: "/customer-dashboard",
                icon: SiGooglehome,
                label: "Home",
              },
              {
                href: "/customer-dashboard/list",
                icon: RiFileListLine,
                label: "My List",
              },
              {
                href: "/customer-dashboard/profile",
                icon: FaUser,
                label: "Profile",
              },
              {
                href: "/customer-dashboard/help",
                icon: IoHelpCircleOutline,
                label: "Help",
              },
              {
                href: "/customer-dashboard/feedback",
                icon: TbSpeakerphone,
                label: "Feedback",
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

          {/* Logout Button */}
          <button
            title="Logout"
            onClick={handleLogout}
            className="w-full hidden md:flex items-center justify-center p-3 text-sm font-medium text-gray-800 bg-gray-300 hover:text-blue-600 hover:bg-blue-100 rounded-md mt-8"
          >
            <FaPersonRunning size={20} />
            <RiLogoutBoxRFill size={25} />
          </button>
        </div>
      </aside>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed bottom-0 w-full bg-gray-100 px-4 py-3 flex items-center border-t border-gray-200 overflow-x-auto">
        <div className="flex gap-6 w-full overflow-x-auto snap-x snap-mandatory">
          {[
            { href: "/customer-dashboard", icon: SiGooglehome },
            { href: "/customer-dashboard/list", icon: RiFileListLine },
            { href: "/customer-dashboard/profile", icon: FaUser },
            { href: "/customer-dashboard/help", icon: IoHelpCircleOutline },
            { href: "/customer-dashboard/feedback", icon: TbSpeakerphone },
          ].map(({ href, icon: Icon }, index) => (
            <button
              key={index}
              onClick={() => handleLinkClick(href)}
              className={`flex-shrink-0 w-[20%] flex flex-col items-center justify-center snap-center transition-transform hover:scale-110 ${
                isActive(href, pathname) ? "text-blue-600" : "text-gray-700"
              }`}
            >
              <Icon size={28} />
            </button>
          ))}
        </div>
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
