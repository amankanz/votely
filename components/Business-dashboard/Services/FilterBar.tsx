/*
// components/Business-dashboard/Services/FilterBar.tsx
import React from "react";

interface FilterBarProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilter: (filter: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onSearch, onFilter }) => {
  return (
    <div className="flex flex-wrap items-center justify-between mb-4 space-x-4">
      <input
        type="text"
        placeholder="Search services by name..."
        onChange={onSearch}
        className="w-full sm:w-auto border p-2 rounded-md"
      />
      <button
        onClick={() => onFilter("Available")}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Available
      </button>
      <button
        onClick={() => onFilter("In Stock")}
        className="px-4 py-2 bg-green-500 text-white rounded-md"
      >
        In Stock
      </button>
      <button
        onClick={() => onFilter("Out of Stock")}
        className="px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Out of Stock
      </button>
    </div>
  );
};

export default FilterBar;
*/

import React from "react";

interface FilterBarProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilter: (filter: string) => void;
  onAddService: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  onSearch,
  onFilter,
  onAddService,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between mb-4 lg:space-x-4">
      <input
        type="text"
        placeholder="Search services by name..."
        onChange={onSearch}
        className="w-full mb-4 lg:mb-0 sm:w-full lg:w-auto border p-2 rounded-md"
      />
      <div className="flex gap-2 items-center">
        <button
          onClick={onAddService}
          className="px-3 py-1 text-sm md:text-base md:px-4 md:py-2 bg-blue-500 text-white rounded-md"
        >
          Add Service
        </button>
        <button
          onClick={() => onFilter("In Stock")}
          className="px-3 py-1 text-sm md:text-base md:px-4 md:py-2 bg-green-500 text-white rounded-md"
        >
          In Stock
        </button>
        <button
          onClick={() => onFilter("Out of Stock")}
          className="px-3 py-1 text-sm md:text-base md:px-4 md:py-2 bg-red-500 text-white rounded-md"
        >
          Out of Stock
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
