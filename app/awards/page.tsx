/*
import React from "react";

function AwardsBusinesses() {
  return (
    <div className="w-full max-w-5xl mx-auto flex items-center justify-center">
      <p className="text-red-400">
        <span className="underline underline-offset-2">Under Development </span>
        🚧 🏗 👷‍♂️
      </p>
    </div>
  );
}

export default AwardsBusinesses;
*/





import React from "react";

const awardCategories = [
  {
    name: "Best Overall Company",
    image: "https://via.placeholder.com/150", // Replace with actual URL later
  },
  {
    name: "Best New Startup",
    image: "https://via.placeholder.com/150", // Replace with actual URL later
  },
  {
    name: "Best Diversity & Inclusion Program",
    image: "https://via.placeholder.com/150", // Replace with actual URL later
  },
  {
    name: "Best Social Impact Program",
    image: "https://via.placeholder.com/150", // Replace with actual URL later
  },
  {
    name: "Best Company Culture",
    image: "https://via.placeholder.com/150", // Replace with actual URL later
  },
  {
    name: "Best Leadership Team",
    image: "https://via.placeholder.com/150", // Replace with actual URL later
  },
  {
    name: "Best Employer Brand",
    image: "https://via.placeholder.com/150", // Replace with actual URL later
  },
  {
    name: "Best Place to Work",
    image: "https://via.placeholder.com/150", // Replace with actual URL later
  },
  {
    name: "Most Innovative Product",
    image: "https://via.placeholder.com/150", // Replace with actual URL later
  },
  {
    name: "Fastest Growing Company",
    image: "https://via.placeholder.com/150", // Replace with actual URL later
  },
];

function AwardsBusinesses() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">The 2023 Awards</h1>
        <p className="text-gray-600 mt-2">
          Nominate or vote for your favorite businesses. Winners will be
          announced at the 2023 Awards event in San Francisco on October 23,
          2023.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
          Nominate Now
        </button>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {awardCategories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-24 h-24 mb-4 object-contain"
            />
            <p className="text-center font-medium text-gray-700">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AwardsBusinesses;
