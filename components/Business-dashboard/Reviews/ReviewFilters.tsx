/*
import React from "react";

interface ReviewFiltersProps {
  onFilter: (filterType: string, filterValue: any) => void;
}

const ReviewFilters: React.FC<ReviewFiltersProps> = ({ onFilter }) => {
  return (
    <section className="mb-6">
      <div className="flex flex-wrap gap-2">
        {["All", "Unread", "Read", "Replied", "Not replied"].map((filter) => (
          <button
            key={filter}
            onClick={() => onFilter("type", filter)}
            className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100"
          >
            {filter}
          </button>
        ))}

        {/* Rating Filter Dropdown =/}
        <div className="relative">
          <select
            onChange={(e) => onFilter("rating", e.target.value)}
            className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg shadow-sm"
          >
            <option value="">Filter by Rating</option>
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={star}>{`${star} stars`}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default ReviewFilters;
*/

/*
import React, { useState } from "react";

interface ReviewFiltersProps {
  onFilter: (filterType: string, filterValue: string | number) => void;
}

const ReviewFilters: React.FC<ReviewFiltersProps> = ({ onFilter }) => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filters = ["All", "Unread", "Read", "Replied", "Not replied"];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilter("type", filter);
  };

  return (
    <section className="mb-6">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`px-4 py-2 text-sm border rounded-lg shadow-sm ${
              activeFilter === filter
                ? "bg-blue-500 text-white"
                : "bg-white border-gray-300 hover:bg-gray-100"
            }`}
          >
            {filter}
          </button>
        ))}

        <div className="relative">
          <select
            onChange={(e) => onFilter("rating", e.target.value)}
            className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg shadow-sm"
          >
            <option value="">Filter by Rating</option>
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={star}>{`${star} stars`}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
};

export default ReviewFilters;
*/

import React, { useState } from "react";

interface ReviewFiltersProps {
  onFilter: (
    filterType: string,
    filterValue: string | number | boolean
  ) => void;
}

const ReviewFilters: React.FC<ReviewFiltersProps> = ({ onFilter }) => {
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
        <button
          onClick={() => handleButtonClick("isRead", false)}
          className={`px-4 py-2 text-sm rounded-lg shadow-sm ${
            activeFilter === "isRead-false"
              ? "bg-blue-500 text-white"
              : "bg-white border border-gray-300 hover:bg-gray-100"
          }`}
        >
          Unread
        </button>
        <button
          onClick={() => handleButtonClick("isRead", true)}
          className={`px-4 py-2 text-sm rounded-lg shadow-sm ${
            activeFilter === "isRead-true"
              ? "bg-blue-500 text-white"
              : "bg-white border border-gray-300 hover:bg-gray-100"
          }`}
        >
          Read
        </button>
        <button
          onClick={() => handleButtonClick("isReplied", true)}
          className={`px-4 py-2 text-sm rounded-lg shadow-sm ${
            activeFilter === "isReplied-true"
              ? "bg-blue-500 text-white"
              : "bg-white border border-gray-300 hover:bg-gray-100"
          }`}
        >
          Replied
        </button>
        <button
          onClick={() => handleButtonClick("isReplied", false)}
          className={`px-4 py-2 text-sm rounded-lg shadow-sm ${
            activeFilter === "isReplied-false"
              ? "bg-blue-500 text-white"
              : "bg-white border border-gray-300 hover:bg-gray-100"
          }`}
        >
          Not Replied
        </button>

        {/* Rating Filter Dropdown */}
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

export default ReviewFilters;
