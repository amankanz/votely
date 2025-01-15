/*
import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";

const BusinessDashboard: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar =/}
      <Sidebar />

      {/* Main Content Area =/}
      <main className="flex-1 bg-white p-8">
        <h1 className="text-2xl font-bold mb-6">Welcome to Feedback page</h1>
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
import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";

const BusinessDashboardFeedback: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar =/}
      <Sidebar />

      {/* Main Content Area =/}
      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto bg-white p-8">
          <h1 className="text-2xl font-bold mb-6">Help us improve</h1>
          <form className="space-y-6 bg-gray-50 p-6 rounded-lg shadow">
            {/* Rating Section =/}
            <div>
              <h2 className="text-lg font-medium mb-4">
                How would you rate the Votely platform?
              </h2>
              <div className="space-y-2">
                {[
                  "1 - Not useful at all",
                  "2 - Slightly useful",
                  "3 - Moderately useful",
                  "4 - Very useful",
                  "5 - Extremely useful",
                ].map((option, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="radio"
                      id={`rating-${index}`}
                      name="rating"
                      value={index + 1}
                      className="h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-400"
                    />
                    <label
                      htmlFor={`rating-${index}`}
                      className="ml-3 text-gray-700"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggestions Box =/}
            <div>
              <h2 className="text-lg font-medium mb-2">Additional Feedback</h2>
              <textarea
                rows={4}
                placeholder="Please share any additional feedback here"
                className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Follow-Up Checkbox =/}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="follow-up"
                name="follow-up"
                className="h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-400"
              />
              <label htmlFor="follow-up" className="ml-3 text-gray-700">
                Yes, I’d like to be contacted for follow-up
              </label>
            </div>

            {/* Feature Request Section =/}
            <div>
              <h2 className="text-lg font-medium mb-4">
                Which of the following features would you like to see added to
                the platform?
              </h2>
              {[
                "Feature Voting",
                "Business Analytics",
                "Customizable Awards",
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`feature-${index}`}
                    name={`feature-${index}`}
                    className="h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-400"
                  />
                  <label
                    htmlFor={`feature-${index}`}
                    className="ml-3 text-gray-700"
                  >
                    {feature}
                  </label>
                </div>
              ))}
            </div>

            {/* Submit Button =/}
            <button
              type="submit"
              className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition"
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default BusinessDashboardFeedback;
*/

/*
"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";
import FeedbackForm from "@/components/Business-dashboard/Feedback/FeedbackForm";

const BusinessDashboardFeedback: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar =/}
      <Sidebar />

      {/* Main Content Area =/}
      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto bg-white p-8">
          {!isSubmitted ? (
            <>
              <h1 className="text-2xl font-bold mb-6">Help Us Improve 🎉</h1>
              <FeedbackForm onSubmit={() => setIsSubmitted(true)} />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h2 className="text-2xl font-bold mb-4">Thank You! 🙏</h2>
              <p className="text-gray-700">
                We appreciate your feedback and will use it to improve the
                platform.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default BusinessDashboardFeedback;
*/

"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";
import FeedbackForm from "@/components/Business-dashboard/Feedback/FeedbackForm";
import { IoMdArrowRoundBack } from "react-icons/io";

const BusinessDashboardFeedback: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto bg-white p-8">
          {!isSubmitted ? (
            <>
              <h1 className="text-2xl font-bold mb-6">Help Us Improve 🎉</h1>
              <FeedbackForm onSubmit={() => setIsSubmitted(true)} />
            </>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <h2 className="text-2xl font-bold">Thank You! 🙏</h2>
              <p className="text-gray-700">
                We appreciate your feedback and will use it to improve the
                platform.
              </p>
              <button
                className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
                onClick={() => setIsSubmitted(false)}
              >
                <span>
                  <IoMdArrowRoundBack size={20} />
                </span>
                <span>Go back</span>
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default BusinessDashboardFeedback;
