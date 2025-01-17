/*
import React from "react";

function FilterTags() {
  const tags = [
    "Open now",
    "Accepts credit cards",
    "Good for kids",
    "Outdoor seating",
    "Offers takeout",
    "Wheelchair accessible",
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {tags.map((tag, index) => (
        <button
          key={index}
          className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default FilterTags;
*/

/*
"use client";

import React, { useState } from "react";

interface FilterTagsProps {
  onFilter: (
    filterType: string,
    filterValue: string | number | boolean
  ) => void;
}

const FilterTags: React.FC<FilterTagsProps> = ({ onFilter }) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleButtonClick = (
    filterType: string,
    filterValue: string | number | boolean
  ) => {
    setActiveFilter(
      filterType === "all" ? null : `${filterType}-${filterValue}`
    );
    onFilter(filterType, filterValue);
  };

  return (
    <section className="mb-6">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleButtonClick("all", "all")}
          className={`px-4 py-2 text-sm rounded-lg shadow-sm ${
            !activeFilter
              ? "bg-blue-500 text-white"
              : "bg-white border border-gray-300 hover:bg-gray-100"
          }`}
        >
          All
        </button>

        {/* Location Filter Dropdown =/}
        <div className="relative">
          <select
            onChange={(e) => handleButtonClick("location", e.target.value)}
            className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg shadow-sm"
          >
            <option value={0}>Filter by Location</option>
            {["Mbarara", "Kampala", "Fort Portal", "Jinja"].map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Category Filter Dropdown =/}
        <div className="relative">
          <select
            onChange={(e) => handleButtonClick("category", e.target.value)}
            className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg shadow-sm"
          >
            <option value={0}>Filter by Category</option>
            {[
              "Open now",
              "Accepts credit cards",
              "Good for kids",
              "Outdoor seating",
              "Offers takeout",
              "Wheelchair accessible",
            ].map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Rating Filter Dropdown =/}
        <div className="relative">
          <select
            onChange={(e) =>
              handleButtonClick("rating", Number(e.target.value))
            }
            className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg shadow-sm"
          >
            <option value={0}>Filter by Rating</option>
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={star}>{`${star} stars`}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default FilterTags;
*/

/*
"use client";

import React, { useState } from "react";

interface FilterTagsProps {
  onFilter: (
    filterType: string,
    filterValue: string | number | boolean
  ) => void;
}

const FilterTags: React.FC<FilterTagsProps> = ({ onFilter }) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const handleButtonClick = (
    filterType: string,
    filterValue: string | number | boolean
  ) => {
    setActiveFilter(
      filterType === "all" ? null : `${filterType}-${filterValue}`
    );
    onFilter(filterType, filterValue);
  };

  return (
    <section className="mb-6">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleButtonClick("all", "all")}
          className={`px-4 py-2 text-sm rounded-lg shadow-sm ${
            !activeFilter
              ? "bg-blue-500 text-white"
              : "bg-white border border-gray-300 hover:bg-gray-100"
          }`}
        >
          All
        </button>

        {/* Location Filter =/}
        <select
          onChange={(e) => handleButtonClick("location", e.target.value)}
          className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg shadow-sm"
        >
          <option value="all">Filter by Location</option>
          {["Mbarara", "Kampala", "Fort Portal", "Jinja"].map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        {/* Category Filter =/}
        <select
          onChange={(e) => handleButtonClick("category", e.target.value)}
          className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg shadow-sm"
        >
          <option value="all">Filter by Category</option>
          {[
            "Open now",
            "Accepts credit cards",
            "Good for kids",
            "Outdoor seating",
            "Offers takeout",
            "Wheelchair accessible",
          ].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Rating Filter =/}
        <select
          onChange={(e) => handleButtonClick("rating", Number(e.target.value))}
          className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg shadow-sm"
        >
          <option value="all">Filter by Rating</option>
          {[5, 4, 3, 2, 1].map((star) => (
            <option key={star} value={star}>{`${star} stars`}</option>
          ))}
        </select>

      </div>
    </section>
  );
};

export default FilterTags;
*/

"use client";

import React, { useState } from "react";

interface FilterTagsProps {
  onFilter: (filterType: string, filterValue: string | number) => void;
}

const FilterTags: React.FC<FilterTagsProps> = ({ onFilter }) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [locationFilter, setLocationFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [ratingFilter, setRatingFilter] = useState<string>("all");

  const handleButtonClick = (
    filterType: string,
    filterValue: string | number
  ) => {
    if (filterType === "all" && filterValue === "all") {
      setActiveFilter(null);
      setLocationFilter("all");
      setCategoryFilter("all");
      setRatingFilter("all");
    } else {
      setActiveFilter(`${filterType}-${filterValue}`);
    }
    onFilter(filterType, filterValue);
  };

  return (
    <section className="mb-6">
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => handleButtonClick("all", "all")}
          className={`px-4 py-2 text-sm rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500 ${
            !activeFilter
              ? "bg-blue-500 text-white"
              : "bg-white border border-gray-300 hover:bg-gray-100"
          }`}
        >
          All
        </button>

        {/* Location Filter */}
        <select
          value={locationFilter}
          onChange={(e) => {
            setLocationFilter(e.target.value);
            handleButtonClick("location", e.target.value);
          }}
          className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="all">Filter by Location</option>
          {["Mbarara", "Kampala", "Fort Portal", "Jinja"].map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        {/* Category Filter */}
        <select
          value={categoryFilter}
          onChange={(e) => {
            setCategoryFilter(e.target.value);
            handleButtonClick("category", e.target.value);
          }}
          className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="all">Filter by Category</option>
          {[
            "Open now",
            "Accepts credit cards",
            "Good for kids",
            "Outdoor seating",
            "Offers takeout",
            "Wheelchair accessible",
          ].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Rating Filter */}
        <select
          value={ratingFilter}
          onChange={(e) => {
            setRatingFilter(e.target.value);
            handleButtonClick("rating", Number(e.target.value));
          }}
          className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
        >
          <option value="all">Filter by Rating</option>
          {[5, 4, 3, 2, 1].map((star) => (
            <option key={star} value={star}>{`${star} stars`}</option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default FilterTags;
