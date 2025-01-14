/*
import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";

const Awards: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar =/}
        <Sidebar />

        {/* Main Content Area =/}
        <main className="flex-1 bg-white p-8">
          {/* Placeholder for dynamic content =/}
          <h1 className="text-2xl font-bold mb-6">
            Welcome to Submit for Awards Area
          </h1>
          <p className="text-gray-600">
            Select an option from the sidebar to manage your business profile,
            services, or view analytics.
          </p>
        </main>
      </div>
    </div>
  );
};

export default Awards;
*/

/*
import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";
import EligibilityBar from "@/components/Business-dashboard/awards/EligibilityBar";
import AwardGrid from "@/components/Business-dashboard/awards/AwardGrid";
import { mockAwards } from "@/lib/mockAwards";

const Awards: React.FC = () => {
  const progress = 35; // Mock progress value, dynamic data can replace this later

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar =/}
      <Sidebar />

      {/* Main Content Area =/}
      <main className="flex-1 bg-white p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-4">Apply for Relevant Awards</h1>
        <p className="text-gray-600 mb-6">
          Improve your award eligibility by engaging with your customers. The
          more you engage, the more likely you#&39;ll be eligible for these
          awards.
        </p>

        {/* Eligibility Progress =/}
        <EligibilityBar progress={progress} />

        {/* Award Cards Section =/}
        <h2 className="text-xl font-semibold mt-8 mb-4">Apply Now</h2>
        <AwardGrid awards={mockAwards} />
      </main>
    </div>
  );
};

export default Awards;
*/

/*

"use client";

import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";
import EligibilityMetrics from "@/components/Business-dashboard/Awards/EligibilityMetrics";
import ApplicationForm from "@/components/Business-dashboard/Awards/SubmissionHistory";
import AwardHistory from "@/components/Business-dashboard/Awards/AwardHistory";
import InteractionInsights from "@/components/Business-dashboard/Awards/InteractionInsights";

const Awards: React.FC = () => {
  // Mock data for the components
  const eligibilityMetricsData = {
    totalVotes: 150,
    avgRating: 4.5,
    totalReviews: 80,
    votesNeeded: 50,
  };

  const awardHistoryData = [
    { id: 1, category: "Top Rated", status: "won", year: 2023 },
    { id: 2, category: "Best of the Year", status: "pending", year: 2023 },
    {
      id: 3,
      category: "Excellence in Service Delivery",
      status: "not won",
      year: 2022,
    },
  ];

  const interactionInsightsData = {
    topProduct: "Premium Sofa Set",
    topCustomer: "John Doe",
    engagementTrends: [
      "Increase in 5-star ratings by 20%",
      "50 new reviews this month",
      "Customer interactions up by 15%",
    ],
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar =/}
        <Sidebar />

        {/* Main Content Area =/}
        <main className="flex-1 bg-white p-8">
          <h1 className="text-2xl font-bold mb-6">Apply for Relevant Awards</h1>

          {/* Eligibility Metrics =/}
          <EligibilityMetrics {...eligibilityMetricsData} />

          {/* Application Form =/}
          <div className="mt-8">
            <ApplicationForm
              awardCategory="Best of the Year"
              businessName="ABC Furniture"
              onSubmit={(comment) => {
                console.log("Application submitted with comment:", comment);
              }}
            />
          </div>

          {/* Award History & Status =/}
          <div className="mt-8">
            <AwardHistory history={awardHistoryData} />
          </div>

          {/* Customer Interaction Insights =/}
          <div className="mt-8">
            <InteractionInsights {...interactionInsightsData} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Awards;
*/

import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";
import EligibilityMetrics from "@/components/Business-dashboard/Awards/EligibilityMetrics";
import AwardCategories from "@/components/Business-dashboard/Awards/AwardCategories";
import SubmissionHistory from "@/components/Business-dashboard/Awards/SubmissionHistory";

const Awards: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6 sm:p-6">
          <h1 className="text-2xl font-bold mb-4">Awards</h1>

          {/* Eligibility Overview */}
          <section className="mb-8">
            <EligibilityMetrics />
          </section>

          {/* Award Categories */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Available Awards</h2>
            <AwardCategories />
          </section>

          {/* Submission History */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Your Submissions</h2>
            <SubmissionHistory />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Awards;
