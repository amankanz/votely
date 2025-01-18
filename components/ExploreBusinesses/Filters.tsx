/*
import React from "react";

interface FiltersProps {
  filters: {
    categories: string[];
    locations: string[];
    ratings: string[];
    awards: string[];
  };
}

const Filters: React.FC<FiltersProps> = ({ filters }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Filter</h2>

      <div className="space-y-4">
        {Object.entries(filters).map(([filterName, filterOptions]) => (
          <div key={filterName}>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  className="text-sm bg-gray-200 py-2 px-3 rounded-lg font-medium hover:bg-gray-300"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
*/

import React from "react";

interface FiltersProps {
  filters: {
    categories: string[];
    locations: string[];
    ratings: string[];
    awards: string[];
  };
  activeFilters: { [key: string]: string };
  onFilterChange: (filterType: string, value: string) => void;
  onClearFilters: () => void;
}

const Filters: React.FC<FiltersProps> = ({
  filters,
  activeFilters,
  onFilterChange,
  onClearFilters,
}) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Filter</h2>

      <div className="flex gap-4 flex-wrap">
        {/* Categories Dropdown */}
        <div>
          <select
            id="categories"
            value={activeFilters.category}
            onChange={(e) => onFilterChange("category", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            {filters.categories.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Locations Dropdown */}
        <div>
          <select
            id="locations"
            value={activeFilters.location}
            onChange={(e) => onFilterChange("location", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            {filters.locations.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Ratings Dropdown */}
        <div>
          <select
            id="ratings"
            value={activeFilters.rating}
            onChange={(e) => onFilterChange("rating", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            {filters.ratings.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Awards Dropdown */}
        <div>
          <select
            id="awards"
            value={activeFilters.award}
            onChange={(e) => onFilterChange("award", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
          >
            {filters.awards.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={onClearFilters}
          className="text-sm bg-gray-200 font-medium px-4 py-2 rounded-lg hover:bg-gray-300"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
