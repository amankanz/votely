/*
"use client";

import React, { useState } from "react";

interface FilterTagsProps {
  onFilter: (filterType: string, filterValue: string) => void;
}

const FilterTags: React.FC<FilterTagsProps> = ({ onFilter }) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleButtonClick = (filterType: string, filterValue: string) => {
    if (filterType === "all businesses" && filterValue === "all businesses") {
      setActiveFilter(null);
    } else {
      setActiveFilter(`${filterType}-${filterValue}`);
    }
    onFilter(filterType, filterValue);
  };

  return (
    <section className="mb-6">
      <div className="flex flex-wrap gap-8 border-b-[1px] border-b-gray-300">
        <button
          onClick={() => handleButtonClick("all businesses", "all businesses")}
          className={`px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-0 ${
            !activeFilter
              ? "border-b-[2px] border-b-blue-500 text-blue-500 font-bold"
              : " hover:bg-gray-100 hover:border-b-[2px] hover:border-b-blue-500"
          }`}
        >
          All businesses
        </button>

        <button
          onClick={() => handleButtonClick("favorites", "favorites")}
          className={`px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-0 ${
            !activeFilter
              ? "border-b-[2px] border-b-blue-500 text-blue-500 font-bold"
              : " hover:bg-gray-100 hover:border-b-[2px] hover:border-b-blue-500"
          }`}
        >
          Favorites
        </button>

        <button
          onClick={() => handleButtonClick("reviewed", "reviewed")}
          className={`px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-0 ${
            !activeFilter
              ? "border-b-[2px] border-b-blue-500 text-blue-500 font-bold"
              : " hover:bg-gray-100 hover:border-b-[2px] hover:border-b-blue-500"
          }`}
        >
          Reviewed
        </button>

        <button
          onClick={() => handleButtonClick("has votes", "has votes")}
          className={`px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-0 ${
            !activeFilter
              ? "border-b-[2px] border-b-blue-500 text-blue-500 font-bold"
              : " hover:bg-gray-100 hover:border-b-[2px] hover:border-b-blue-500"
          }`}
        >
          Has votes
        </button>
      </div>
    </section>
  );
};

export default FilterTags;
*/

"use client";

import React, { useState } from "react";

interface FilterTagsProps {
  onFilter: (filterType: string, filterValue: string) => void;
}

const FilterTags: React.FC<FilterTagsProps> = ({ onFilter }) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(
    "all businesses"
  );

  const handleButtonClick = (filterType: string) => {
    setActiveFilter(filterType);
    onFilter(filterType, filterType); // Pass both type and value as the same for simplicity
  };

  const buttonClasses = (filterType: string) =>
    `px-4 py-2 text-sm shadow-sm focus:outline-none focus:ring-0 ${
      activeFilter === filterType
        ? "border-b-[2px] border-b-blue-500 text-blue-500 font-bold"
        : "hover:bg-gray-100 hover:border-b-[2px] hover:border-b-blue-500"
    }`;

  return (
    <section className="mb-6">
      <div className="flex flex-wrap gap-8 border-b-[1px] border-b-gray-300">
        <button
          onClick={() => handleButtonClick("all businesses")}
          className={buttonClasses("all businesses")}
        >
          All Businesses
        </button>
        <button
          onClick={() => handleButtonClick("favorites")}
          className={buttonClasses("favorites")}
        >
          Favorites
        </button>
        <button
          onClick={() => handleButtonClick("reviewed")}
          className={buttonClasses("reviewed")}
        >
          Reviewed
        </button>
        <button
          onClick={() => handleButtonClick("has votes")}
          className={buttonClasses("has votes")}
        >
          Has Votes
        </button>
      </div>
    </section>
  );
};

export default FilterTags;
