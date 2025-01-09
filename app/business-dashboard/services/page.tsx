import Sidebar from "@/components/Business-dashboard/Sidebar";
import React from "react";

const Services: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 bg-white p-8">
        {/* Placeholder for dynamic content */}
        <h1 className="text-2xl font-bold mb-6">
          Welcome to Your Services/Products Area
        </h1>
        <p className="text-gray-600">
          Select an option from the sidebar to manage your business profile,
          awards, or view analytics.
        </p>
      </main>
    </div>
  );
};

export default Services;
