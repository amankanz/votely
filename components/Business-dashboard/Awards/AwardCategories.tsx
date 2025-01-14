import React from "react";

const mockAwards = [
  {
    title: "Top Rated Award",
    description: "Awarded for maintaining a 4.5+ average rating this year.",
  },
  {
    title: "Best of the Year",
    description: "Given to businesses with the highest customer satisfaction.",
  },
  {
    title: "Excellence in Service Delivery",
    description: "For exceptional service across all customer interactions.",
  },
];

const AwardCategories: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {mockAwards.map((award, index) => (
        <div key={index} className="bg-white p-4 rounded-md shadow-sm">
          <h3 className="text-lg font-semibold mb-2">{award.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{award.description}</p>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md">
            Apply Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default AwardCategories;
