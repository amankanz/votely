/*
import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";

const BusinessDashboard: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar =/}
      <Sidebar />

      {/* Main Content Area =/}
      <main className="flex-1 bg-white p-8">
        {/* Placeholder for dynamic content =/}
        <h1 className="text-2xl font-bold mb-6">Welcome to Your Dashboard</h1>
        <p className="text-gray-600">
          Select an option from the sidebar to manage your business profile,
          services, awards, or view analytics.
        </p>
      </main>
    </div>
  );
};

export default BusinessDashboard;
*/

/*
"use client";

import Sidebar from "@/components/Business-dashboard/Sidebar";
import { FaAward, FaRegSquare } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { SiGoogleanalytics } from "react-icons/si";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { IoIosEye } from "react-icons/io";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const BusinessDashboard: React.FC = () => {
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

  // Static data placeholders
  const metrics = {
    profileCompletion: "60%",
    viewsThisWeek: 40,
    clicksThisWeek: 100,
  };

  const notifications = [
    {
      id: "1",
      title: "Profile completion",
      description: "You have 3 tasks to complete",
      // icon: "📝",
    },
    {
      id: "2",
      title: "Upgrade your plan",
      description: "Complete your profile to unlock more features",
      // icon: "🔑",
    },
    {
      id: "3",
      title: "Awards",
      description: "Submit for award",
      // icon: "🏆",
    },
  ];

  const recentActivities = [
    {
      id: "1",
      title: "View profile",
      description: "Viewed 10 times this week",
      icon: "👁️",
    },
    {
      id: "2",
      title: "View profile",
      description: "Viewed 10 times this week",
      icon: "👁️",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Sidebar =/}
      <Sidebar />

      {/* Main Content =/}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Welcome Section =/}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Hi, June</h1>
          <p className="text-blue-600 mt-1">
            Complete your profile, manage your services, and view insights.
          </p>
        </div>

        {/* Key Metrics Section =/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {Object.entries(metrics).map(([key, value]) => (
            <div
              key={key}
              className="bg-white shadow rounded-lg p-4 text-center border-[1px] border-blue-300"
            >
              <h2 className="text-2xl font-bold">{value}</h2>
              <p className="text-blue-500 mt-2 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Access Section =/}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Quick access
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                label: "Manage Profile",
                icon: IoPersonSharp,
                desc: "Add or Edit your profile details",
                href: "/business-dashboard/profile",
              },
              {
                label: "Manage Services/Products",
                icon: FaRegSquare,
                desc: "Add or Edit your services/products",
                href: "/business-dashboard/services",
              },
              {
                label: "View Insights & Analytics",
                icon: SiGoogleanalytics,
                desc: "See details analytics of your profile",
                href: "/business-dashboard/analytics",
              },
              {
                label: "View Awards",
                icon: FaAward,
                desc: "View all available awards",
                href: "/business-dashboard/awards",
              },
              {
                label: "Manage Subscription Plan",
                icon: FaRegCreditCard,
                desc: "Upgrade, downgrade, or cancel your plan",
                href: "/business-dashboard/subscription",
              },
            ].map(({ icon: Icon, label, desc, href }) => (
              <button
                key={label}
                onClick={() => handleLinkClick(href)}
                className="bg-white shadow border-[1px] border-blue-300 rounded-lg p-4 flex flex-col items-center lg:items-start justify-center text-gray-700 hover:bg-blue-50 transition gap-y-4"
              >
                <span>
                  <Icon size={25} />
                </span>
                <span className="text-start font-bold">{label}</span>
                <span className="text-blue-500 text-wrap text-start">
                  {desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Notifications Section =/}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Notifications
          </h2>
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="bg-white shadow rounded-lg p-4 flex items-center"
              >
                <span className="text-gray-500 text-2xl flex-shrink-0 mr-4 bg-blue-200 w-8 h-8 flex items-center justify-center rounded-md">
                  {/* {notification.icon} =/}

                  <IoNotifications size={20} />
                </span>
                <div>
                  <p className="font-medium text-gray-700">
                    {notification.title}
                  </p>
                  <p className="text-sm text-blue-500">
                    {notification.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Activity Section =/}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <ul className="space-y-4">
            {recentActivities.map((activity) => (
              <li
                key={activity.id}
                className="bg-white shadow rounded-lg p-4 flex items-center"
              >
                <span className="text-gray-500 text-2xl flex-shrink-0 mr-4 bg-blue-200 w-8 h-8 flex items-center justify-center rounded-md">
                  {/* {notification.icon} =/}

                  <IoIosEye size={20} />
                </span>
                <div>
                  <p className="font-medium text-gray-700">{activity.title}</p>
                  <p className="text-sm text-blue-500">
                    {activity.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Loading Spinner =/}
        {(isPending || isLoading) && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50">
            <Spinner />
          </div>
        )}
      </main>
    </div>
  );
};

export default BusinessDashboard;
*/

"use client";

import Sidebar from "@/components/Business-dashboard/Sidebar";
import { FaAward, FaRegSquare } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { SiGoogleanalytics } from "react-icons/si";
import { FaRegCreditCard } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { IoIosEye } from "react-icons/io";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const BusinessDashboard: React.FC = () => {
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

  // Static data placeholders
  const metrics = {
    profileCompletion: 60,
    viewsThisWeek: 40,
    clicksThisWeek: 100,
  };

  const notifications = [
    {
      id: "1",
      title: "Profile completion",
      description: "You have 3 tasks to complete",
    },
    {
      id: "2",
      title: "Upgrade your plan",
      description: "Complete your profile to unlock more features",
    },
    {
      id: "3",
      title: "Awards",
      description: "Submit for award",
    },
  ];

  const recentActivities = [
    {
      id: "1",
      title: "View profile",
      description: "Viewed 10 times this week",
      icon: "👁️",
    },
    {
      id: "2",
      title: "View profile",
      description: "Viewed 10 times this week",
      icon: "👁️",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Welcome Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">👋 Hi, June</h1>
          <p className="text-blue-600 mt-1">
            Complete your profile, manage your services, and view insights.
          </p>
        </div>

        {/* Key Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {Object.entries(metrics).map(([key, value]) => (
            <div
              key={key}
              className="bg-white shadow rounded-lg p-4 text-center border-[1px] border-blue-300"
            >
              <h2 className="text-2xl font-bold">
                {value == 60 ? `${value}%` : value}
              </h2>
              <p className="text-blue-500 mt-2 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </p>
            </div>
          ))}
        </div>

        {/* Complete Profile Button */}
        {metrics.profileCompletion < 100 && (
          <div className="flex justify-center lg:justify-start mb-6">
            <button
              onClick={() => handleLinkClick("/business-dashboard/profile")}
              className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Complete Profile
            </button>
          </div>
        )}

        {/* Quick Access Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Quick access
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                label: "Manage Profile",
                icon: IoPersonSharp,
                desc: "Add or Edit your profile details",
                href: "/business-dashboard/profile",
              },
              {
                label: "Manage Services/Products",
                icon: FaRegSquare,
                desc: "Add or Edit your services/products",
                href: "/business-dashboard/services",
              },
              {
                label: "View Insights & Analytics",
                icon: SiGoogleanalytics,
                desc: "See details analytics of your profile",
                href: "/business-dashboard/analytics",
              },
              {
                label: "View Awards",
                icon: FaAward,
                desc: "View all available awards",
                href: "/business-dashboard/awards",
              },
              {
                label: "Manage Subscription Plan",
                icon: FaRegCreditCard,
                desc: "Upgrade, downgrade, or cancel your plan",
                href: "/business-dashboard/subscription",
              },
            ].map(({ icon: Icon, label, desc, href }) => (
              <button
                key={label}
                onClick={() => handleLinkClick(href)}
                className="bg-white shadow border-[1px] border-blue-300 rounded-lg p-4 flex flex-col items-center lg:items-start justify-center text-gray-700 hover:bg-blue-50 transition gap-y-4"
              >
                <span>
                  <Icon size={25} />
                </span>
                <span className="text-start font-bold">{label}</span>
                <span className="text-blue-500 text-wrap text-start">
                  {desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Notifications Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Notifications
          </h2>
          <ul className="space-y-4">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className="bg-white shadow rounded-lg p-4 flex items-center"
              >
                <span className="text-gray-500 text-2xl flex-shrink-0 mr-4 bg-blue-200 w-8 h-8 flex items-center justify-center rounded-md">
                  {/* {notification.icon} */}

                  <IoNotifications size={20} />
                </span>
                <div>
                  <p className="font-medium text-gray-700">
                    {notification.title}
                  </p>
                  <p className="text-sm text-blue-500">
                    {notification.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Recent Activity Section */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Recent Activity
          </h2>
          <ul className="space-y-4">
            {recentActivities.map((activity) => (
              <li
                key={activity.id}
                className="bg-white shadow rounded-lg p-4 flex items-center"
              >
                <span className="text-gray-500 text-2xl flex-shrink-0 mr-4 bg-blue-200 w-8 h-8 flex items-center justify-center rounded-md">
                  {/* {notification.icon} */}

                  <IoIosEye size={20} />
                </span>
                <div>
                  <p className="font-medium text-gray-700">{activity.title}</p>
                  <p className="text-sm text-blue-500">
                    {activity.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Loading Spinner */}
        {(isPending || isLoading) && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/50">
            <Spinner />
          </div>
        )}
      </main>
    </div>
  );
};

export default BusinessDashboard;
