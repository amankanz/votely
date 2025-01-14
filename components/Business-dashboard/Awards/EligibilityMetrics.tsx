/*
import React from "react";

const EligibilityMetrics: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Your Award Eligibility</h2>
      <div className="space-y-3">
        <div>
          <p className="text-sm text-gray-600">Customer Votes Received</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-500 h-2.5 rounded-full"
              style={{ width: "75%" }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">75/100 votes</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Average Rating</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-green-500 h-2.5 rounded-full"
              style={{ width: "85%" }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            4.2/5 (minimum 4.0 needed)
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Number of Reviews</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-yellow-500 h-2.5 rounded-full"
              style={{ width: "50%" }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1">10/20 reviews</p>
        </div>
      </div>
    </div>
  );
};

export default EligibilityMetrics;
*/

import React from "react";

interface Metric {
  title: string;
  value: number | string;
}

interface ProgressBar {
  label: string;
  progress: number; // e.g., 50 means 50%
  goal: string;
}

const EligibilityMetrics: React.FC = () => {
  // Mock data for metrics
  const metrics: Metric[] = [
    { title: "Applications submitted", value: 10 },
    { title: "Awards won", value: 5 },
    { title: "Application success rate", value: "50%" },
  ];

  // Mock data for progress bars
  const progressBars: ProgressBar[] = [
    { label: "Customer Votes Received", progress: 75, goal: "75/100 votes" },
    {
      label: "Average Rating",
      progress: 85,
      goal: "4.2/5 (minimum 4.0 needed)",
    },
    { label: "Number of Reviews", progress: 50, goal: "10/20 reviews" },
  ];

  return (
    <div className="space-y-6">
      {/* Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white shadow-md rounded-lg p-4 border border-gray-200"
          >
            <span className="text-lg font-semibold text-gray-800">
              {metric.value}
            </span>
            <span className="text-sm text-gray-500">{metric.title}</span>
          </div>
        ))}
      </div>

      {/* Eligibility Overview Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Eligibility Overview
        </h3>
        <div className="space-y-4">
          {progressBars.map((progressBar, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between text-sm text-gray-500">
                <span>{progressBar.label}</span>
                <span>{progressBar.goal}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${progressBar.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EligibilityMetrics;
