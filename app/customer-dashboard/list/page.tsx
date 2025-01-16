import Sidebar from "@/components/Customer-dashboard/sidebar";
import React from "react";

function customerDashboardList() {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 bg-white p-8">
          {/* Placeholder for dynamic content */}
          <h1 className="text-2xl font-bold mb-6">Welcome to List</h1>
          <p className="text-gray-600">
            Select an option from the sidebar to Home, Profile, Help
          </p>
        </main>
      </div>
    </div>
  );
}

export default customerDashboardList;
