/*
import Sidebar from "@/components/Customer-dashboard/sidebar";
import React from "react";

function customerDashboardHelp() {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar =/}
        <Sidebar />

        {/* Main Content Area =/}
        <main className="flex-1 bg-white p-8">
          {/* Placeholder for dynamic content =/}
          <h1 className="text-2xl font-bold mb-6">Welcome to Help</h1>
          <p className="text-gray-600">
            Select an option from the sidebar to Home, List, Profile.
          </p>
        </main>
      </div>
    </div>
  );
}

export default customerDashboardHelp;
*/

"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Customer-dashboard/sidebar";
import { Accordion } from "@/components/Customer-dashboard/Help/Accordion";
import { SearchBar } from "@/components/Customer-dashboard/Help/SearchBar";
import { TfiEmail } from "react-icons/tfi";

const faqData = [
  {
    question: "How do I reset my password?",
    answer:
      "You can request a password reset email from the login page by clicking 'Forgot your password?' and following the instructions.",
  },
  {
    question: "How do I login to my account?",
    answer:
      "Enter your registered email and password on the login page and click 'Login'.",
  },
  {
    question: "How do I add a new payment method?",
    answer:
      "Go to the 'Payment Settings' section and add your preferred payment method.",
  },
  {
    question: "How do I change my subscription plan?",
    answer: "Visit the 'Subscription' page to modify your plan.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Navigate to the 'Subscription' section and click 'Cancel Subscription'.",
  },
];

const BusinessDashboardHelp: React.FC = () => {
  const [filteredFAQs, setFilteredFAQs] = useState(faqData);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSearch = (query: string) => {
    if (query.trim() === "") {
      setFilteredFAQs(faqData); // Reset to all FAQs
    } else {
      const results = faqData.filter((faq) =>
        faq.question.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredFAQs(results);
    }
  };

  const handleToggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto bg-white p-8">
          <h1 className="text-2xl font-bold mb-6">Welcome to Help Center</h1>
          <p className="text-blue-600 mb-6">
            Search for help topics or browse through the most common questions
            below.
          </p>

          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar
              placeholder="Search for help topics"
              onSearch={handleSearch}
            />
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFAQs.length > 0 ? (
              filteredFAQs.map((faq, index) => (
                <Accordion
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  index={index}
                  openIndex={openIndex}
                  toggleFAQ={() => handleToggleFAQ(index)}
                />
              ))
            ) : (
              <p className="text-gray-500 text-center">
                No results found. Please try a different search query.
              </p>
            )}
          </div>

          {/* Contact Us Button */}
          <div className="mt-8 text-center">
            <a
              href="mailto:support@votely.com"
              className="bg-blue-600 flex items-center justify-center gap-3 text-white px-6 py-3 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              <TfiEmail size={20} />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BusinessDashboardHelp;
