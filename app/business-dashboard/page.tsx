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

import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";

const BusinessDashboard: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 bg-white p-8">
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
