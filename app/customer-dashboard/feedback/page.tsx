"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Customer-dashboard/sidebar";
import FeedbackForm from "@/components/Customer-dashboard/Feedback/FeedbackForm";
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
