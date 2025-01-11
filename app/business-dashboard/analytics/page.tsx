import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";

const InsightsAnalytics: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="flex-1 bg-white p-8">
          {/* Placeholder for dynamic content */}
          <h1 className="text-2xl font-bold mb-6">
            Welcome to Submit for Insights & Analytics Area
          </h1>
          <p className="text-gray-600">
            Select an option from the sidebar to manage your business profile,
            or services.
          </p>
        </main>
      </div>
    </div>
  );
};

export default InsightsAnalytics;
