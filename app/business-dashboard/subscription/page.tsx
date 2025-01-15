/*
import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";

const BusinessDashboard: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar =/}
        <Sidebar />

        {/* Main Content Area =/}
        <main className="flex-1 bg-white p-8">
          <h1 className="text-2xl font-bold mb-6">
            Welcome to Your Subscription plan
          </h1>
          <p className="text-gray-600">
            Select an option from the sidebar to manage your business profile,
            services, awards, or view analytics.
          </p>
        </main>
      </div>
    </div>
  );
};

export default BusinessDashboard;
*/

/*
import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";

const SubscriptionPage: React.FC = () => {
  const plans = [
    {
      name: "Free",
      price: "$0/mo",
      benefits: [
        "Basic business profile",
        "1 category listing",
        "Limited visibility",
      ],
      current: true,
    },
    {
      name: "Starter",
      price: "$10/mo",
      benefits: [
        "Enhanced business profile",
        "Up to 3 category listings",
        "Improved visibility",
      ],
      current: false,
    },
    {
      name: "Professional",
      price: "$20/mo",
      benefits: [
        "Comprehensive business profile",
        "Unlimited category listings",
        "Maximum visibility",
        "Priority support",
      ],
      current: false,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar =/}
        <Sidebar />

        {/* Main Content Area =/}
        <main className="flex-1 bg-gray-50 p-8">
          <h1 className="text-2xl font-bold mb-6">Manage Your Subscription</h1>
          <p className="text-gray-600 mb-8">
            Choose the best plan for your business to maximize visibility and
            recognition.
          </p>

          {/* Subscription Plans =/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`border rounded-lg p-6 ${
                  plan.current
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <h2 className="text-xl font-semibold">{plan.name}</h2>
                <p className="text-3xl font-bold mt-4">{plan.price}</p>
                <ul className="mt-4 text-gray-700 space-y-2">
                  {plan.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="material-icons text-green-500 mr-2">
                        check_circle
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 px-4 py-2 rounded text-white w-full ${
                    plan.current
                      ? "bg-blue-500 cursor-not-allowed"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                  disabled={plan.current}
                >
                  {plan.current ? "Current Plan" : "Switch Plan"}
                </button>
              </div>
            ))}
          </div>

          {/* Payment Method =/}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <div className="flex justify-between items-center border p-4 rounded-lg bg-white">
              <div>
                <p className="text-gray-800 font-medium">Visa **** 4242</p>
                <p className="text-gray-500">Expires 12/24</p>
              </div>
              <button className="px-4 py-2 rounded text-white bg-gray-800 hover:bg-gray-700">
                Update
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SubscriptionPage;
*/

/*
import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";

const SubscriptionPage: React.FC = () => {
  const plans = [
    {
      name: "Free",
      price: "$0/mo",
      description: "Start with basic tools to list your business.",
      features: [
        "Basic business profile",
        "1 category listing",
        "Limited visibility",
      ],
      isCurrent: true,
    },
    {
      name: "Monthly",
      price: "$30/mo",
      description: "Access advanced features to grow your reach.",
      features: [
        "Enhanced business profile",
        "Up to 3 category listings",
        "Improved visibility",
        "Analytics reports",
      ],
      isCurrent: false,
    },
    {
      name: "Annual",
      price: "$300/year",
      description: "Maximize your business exposure with premium tools.",
      features: [
        "Comprehensive business profile",
        "Unlimited category listings",
        "Premium visibility",
        "Priority support",
        "Featured homepage listings",
        "Custom badges (e.g., Top Rated)",
      ],
      isCurrent: false,
    },
  ];

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar =/}
        <Sidebar />

        {/* Main Content =/}
        <main className="flex-1 bg-gray-50 p-8">
          <h1 className="text-2xl font-bold mb-6">Manage Your Subscription</h1>
          <p className="text-gray-600 mb-8">
            Upgrade your plan to unlock advanced tools and maximize your
            business reach on Votely.
          </p>

          {/* Subscription Plans =/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`border rounded-lg p-6 ${
                  plan.isCurrent
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {plan.name}
                </h2>
                <p className="text-3xl font-bold mt-4">{plan.price}</p>
                <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
                <ul className="mt-4 text-gray-700 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="material-icons text-green-500 mr-2">
                        check_circle
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 px-4 py-2 rounded text-white w-full ${
                    plan.isCurrent
                      ? "bg-blue-500 cursor-not-allowed"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                  disabled={plan.isCurrent}
                >
                  {plan.isCurrent ? "Current Plan" : "Switch Plan"}
                </button>
              </div>
            ))}
          </div>

          {/* Payment Method =/}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <div className="flex justify-between items-center border p-4 rounded-lg bg-white">
              <div>
                <p className="text-gray-800 font-medium">Visa **** 4242</p>
                <p className="text-gray-500">Expires 12/24</p>
              </div>
              <button className="px-4 py-2 rounded text-white bg-gray-800 hover:bg-gray-700">
                Update
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SubscriptionPage;
*/

/*
"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";

const plans = [
  {
    id: "free",
    name: "Free",
    price: "$0/mo",
    description: "Basic tools to list your business.",
    features: [
      "Basic business profile",
      "1 category listing",
      "Limited visibility",
    ],
  },
  {
    id: "monthly",
    name: "Monthly",
    price: "$30/mo",
    description: "Advanced features to grow your reach.",
    features: [
      "Enhanced business profile",
      "Up to 3 category listings",
      "Improved visibility",
      "Analytics reports",
    ],
  },
  {
    id: "annual",
    name: "Annual",
    price: "$300/year",
    description: "Premium tools to maximize exposure.",
    features: [
      "Comprehensive business profile",
      "Unlimited category listings",
      "Premium visibility",
      "Priority support",
      "Featured homepage listings",
      "Custom badges (e.g., Top Rated)",
    ],
  },
];

const SubscriptionPage: React.FC = () => {
  const [currentPlan, setCurrentPlan] = useState("free");
  const [paymentMethod, setPaymentMethod] = useState({
    card: "Visa **** 4242",
    expiry: "12/24",
  });

  const handlePlanChange = (planId: string) => {
    setCurrentPlan(planId);
    alert(`Plan switched to ${planId.toUpperCase()}!`); // Placeholder action
  };

  const handleUpdatePayment = () => {
    alert("Redirecting to payment update page..."); // Placeholder action
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar =/}
        <Sidebar />

        {/* Main Content =/}
        <main className="flex-1 bg-gray-50 p-8">
          <h1 className="text-2xl font-bold mb-6">Manage Your Subscription</h1>
          <p className="text-gray-600 mb-8">
            Upgrade your plan to unlock advanced tools and maximize your
            business reach on Votely.
          </p>

          {/* Subscription Plans =/}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`border rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg ${
                  currentPlan === plan.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {plan.name}
                </h2>
                <p className="text-3xl font-bold mt-4">{plan.price}</p>
                <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
                <ul className="mt-4 text-gray-700 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="material-icons text-green-500 mr-2">
                        check_circle
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 px-4 py-2 rounded text-white w-full transition-all duration-300 ${
                    currentPlan === plan.id
                      ? "bg-blue-500 cursor-not-allowed"
                      : "bg-gray-800 hover:bg-gray-700"
                  }`}
                  onClick={() => handlePlanChange(plan.id)}
                  disabled={currentPlan === plan.id}
                >
                  {currentPlan === plan.id ? "Current Plan" : "Switch Plan"}
                </button>
              </div>
            ))}
          </div>

          {/* Payment Method =/}
          <div className="mt-12">
            <h2 className="text-xl font-bold mb-4">Payment Method</h2>
            <div className="flex justify-between items-center border p-4 rounded-lg bg-white">
              <div>
                <p className="text-gray-800 font-medium">
                  {paymentMethod.card}
                </p>
                <p className="text-gray-500">Expires {paymentMethod.expiry}</p>
              </div>
              <button
                className="px-4 py-2 rounded text-white bg-gray-800 hover:bg-gray-700"
                onClick={handleUpdatePayment}
              >
                Update
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SubscriptionPage;
*/

"use client";

import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";
import PaymentMethod from "@/components/Business-dashboard/Subscription/PaymentMethod";
import SubPlans from "@/components/Business-dashboard/Subscription/SubPlans";

const SubscriptionPage: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <Sidebar />

      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto bg-gray-50 p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Manage your subscription
          </h1>
          <p className="text-blue-600 mb-6">
            Upgrade your plan to unlock advanced tools and maximize your
            business reach on Votely.
          </p>

          {/* Plans Section */}
          <SubPlans />

          {/* Payment Method Section */}
          <PaymentMethod />
        </div>
      </main>
    </div>
  );
};

export default SubscriptionPage;
