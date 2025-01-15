/*
import React from "react";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isCurrentPlan: boolean;
  onSwitch: () => void;
}

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0/mo",
    description: "Basic tools to list your business.",
    features: [
      "Basic business profile",
      "1 category listing",
      "Limited visibility",
    ],
    isCurrentPlan: true,
    onSwitch: () => alert("You are already on the Free plan."),
  },
  {
    name: "Monthly",
    price: "$30/mo",
    description: "Advanced features to grow your reach.",
    features: [
      "Enhanced business profile",
      "Up to 3 category listings",
      "Improved visibility",
      "Analytics reports",
    ],
    isCurrentPlan: false,
    onSwitch: () => alert("Switching to Monthly plan..."),
  },
  {
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
    isCurrentPlan: false,
    onSwitch: () => alert("Switching to Annual plan..."),
  },
];

const SubPlans: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${
            plan.isCurrentPlan ? "border-blue-600" : "border-gray-200"
          }`}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {plan.name}
          </h3>
          <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
          <p className="text-2xl font-bold text-gray-800 mb-5">{plan.price}</p>
          <button
            onClick={plan.onSwitch}
            className={`w-full py-2 text-sm font-medium rounded-lg mb-5 ${
              plan.isCurrentPlan
                ? "bg-blue-100 text-blue-600 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {plan.isCurrentPlan ? "Current Plan" : "Switch Plan"}
          </button>
          <ul className="text-gray-600 space-y-2 mb-4">
            {plan.features.map((item, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-600 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SubPlans;
*/

import React, { useState } from "react";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
}

const initialPlans: Plan[] = [
  {
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

const SubPlans: React.FC = () => {
  const [currentPlan, setCurrentPlan] = useState<string>("Free");

  const handleSwitchPlan = (planName: string) => {
    if (planName === currentPlan) {
      alert(`You are already on the ${planName} plan.`);
      return;
    }

    // Confirm the plan switch
    const confirmSwitch = window.confirm(
      `Are you sure you want to switch to the ${planName} plan?`
    );

    if (confirmSwitch) {
      setCurrentPlan(planName);
      alert(`Successfully switched to the ${planName} plan.`);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {initialPlans.map((plan) => (
        <div
          key={plan.name}
          className={`border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow ${
            currentPlan === plan.name ? "border-blue-600" : "border-gray-200"
          }`}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {plan.name}
          </h3>
          <p className="text-sm text-gray-500 mt-2">{plan.description}</p>
          <p className="text-2xl font-bold text-gray-800 mb-5">{plan.price}</p>
          <button
            onClick={() => handleSwitchPlan(plan.name)}
            className={`w-full py-2 text-sm font-medium rounded-lg mb-5 ${
              currentPlan === plan.name
                ? "bg-blue-100 text-blue-600 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {currentPlan === plan.name ? "Current Plan" : "Switch Plan"}
          </button>
          <ul className="text-gray-600 space-y-2 mb-4">
            {plan.features.map((item, index) => (
              <li key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-blue-600 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SubPlans;
