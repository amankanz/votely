/*
import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";

const InsightsAnalytics: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar =/}
        <Sidebar />

        {/* Main Content Area =/}
        <main className="flex-1 bg-white p-8">
          {/* Placeholder for dynamic content =/}
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
*/

"use client";

import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";
import OverviewSection from "@/components/Business-dashboard/Analytics/OverviewSection";
import MetricsSection from "@/components/Business-dashboard/Analytics/MetricsSection";
import TrendsSection from "@/components/Business-dashboard/Analytics/TrendsSection";
import StatsWrapper from "@/components/Business-dashboard/Analytics/Stats";
import CategoriesWrapper from "@/components/Business-dashboard/Analytics/Categories";
import ExportData from "@/components/Business-dashboard/Analytics/ExportData";

const InsightsAnalytics: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto bg-gray-50 p-8">
          {/* Section 1: Overview */}
          <OverviewSection />

          {/* Section 2: Metrics */}
          <MetricsSection />

          {/* Section 4: Stats */}
          <StatsWrapper />

          {/* Section 4: Trends */}
          <TrendsSection />

          {/* Section 5: Categories */}
          <CategoriesWrapper />

          {/* Section 6: Export Data */}
          <ExportData />
        </div>
      </main>
    </div>
  );
};

export default InsightsAnalytics;
