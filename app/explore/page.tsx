/*
import React from "react";

function ExploreBusinesses() {
  return (
    <div className="w-full max-w-5xl mx-auto flex items-center justify-center">
      <p className="text-red-400">
        <span className="underline underline-offset-2">Under Development </span>
        🚧 🏗 👷‍♂️
      </p>
    </div>
  );
}

export default ExploreBusinesses;
*/

/*
"use client";

import React, { useState } from "react";
import Filters from "@/components/ExploreBusinesses/Filters";
import BusinessListings from "@/components/ExploreBusinesses/BusinessListings";
import FeaturedBusinesses from "@/components/ExploreBusinesses/FeaturedBusinesses";
import { MdSearch } from "react-icons/md";
import TopRatedBusinesses from "@/components/ExploreBusinesses/TopRatedBusinesses";
import { businesses } from "@/lib/Explore-businesses/businesses";
import Pagination from "@/components/ExploreBusinesses/Pagination";

const ExploreBusinesses = () => {
  // Static data for businesses

  const filters = {
    categories: [
      "All Categories",
      "Restaurants",
      "Coffee Shops",
      "Bakeries",
      "Parks",
    ],
    locations: [
      "All Locations",
      "New York",
      "Los Angeles",
      "San Francisco",
      "Chicago",
      "Austin",
    ],
    ratings: ["All Ratings", "5 stars", "4 stars", "3 stars", "2 stars"],
    awards: ["All Awards", "Best of 2022", "Hall of Fame", "Best New"],
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Adjust based on the number of items and items per page

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Add logic to fetch or filter businesses for the selected page
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Page Header =/}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-4xl font-black">Explore Businesses</h1>
        <button className="text-nowrap text-sm bg-blue-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600">
          Nominate a Business
        </button>
      </div>

      {/* Search Bar =/}
      <div className="mb-6 flex flex-row-reverse items-center gap-4 p-4 bg-white border border-gray-300 rounded-lg">
        <input
          type="text"
          placeholder="Search for businesses by name, category, or tags"
          className="w-full text-xs sm:text-base text-gray-700 focus:outline-none"
        />
        <span className="text-gray-400">
          <MdSearch size={20} />
        </span>
      </div>

      {/* Filters =/}
      <Filters filters={filters} />

      {/* Featured Section =/}
      <FeaturedBusinesses businesses={businesses.slice(0, 5)} />

      {/* Featured Section =/}
      <TopRatedBusinesses businesses={businesses.slice(6, 14)} />

      {/* Business Listings =/}
      <BusinessListings businesses={businesses} />

      {/* Pagination Section =/}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ExploreBusinesses;
*/

"use client";

import React, { useState, useEffect } from "react";
import Filters from "@/components/ExploreBusinesses/Filters";
import BusinessListings from "@/components/ExploreBusinesses/BusinessListings";
import FeaturedBusinesses from "@/components/ExploreBusinesses/FeaturedBusinesses";
import { MdSearch } from "react-icons/md";
import TopRatedBusinesses from "@/components/ExploreBusinesses/TopRatedBusinesses";
import { businesses as allBusinesses } from "@/lib/Explore-businesses/businesses";
import Pagination from "@/components/ExploreBusinesses/Pagination";

interface Business {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  location: string;
  awards: string[];
  tags: string[];
  image: string;
  featured: boolean;
  topRated: boolean;
}

const ExploreBusinesses = () => {
  const filters = {
    categories: [
      "All Categories",
      "Restaurant",
      "Coffee Shop",
      "Bakery",
      "Park",
    ],
    locations: [
      "All Locations",
      "Kampala",
      "Entebbe",
      "Mbarara",
      "Fort Portal",
      "Jinja",
    ],
    ratings: ["All Ratings", "5 stars", "4 stars", "3 stars", "2 stars"],
    awards: ["All Awards", "Best of 2022", "Hall of Fame", "Best New"],
  };

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredBusinesses, setFilteredBusinesses] =
    useState<Business[]>(allBusinesses);
  const [activeFilters, setActiveFilters] = useState({
    category: "All Categories",
    location: "All Locations",
    rating: "All Ratings",
    award: "All Awards",
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginatedBusinesses, setPaginatedBusinesses] = useState<Business[]>(
    []
  );
  const itemsPerPage = 3;

  const isSearchActive = searchQuery.trim() !== "";

  useEffect(() => {
    let updatedBusinesses = allBusinesses;

    // Filter by category
    if (activeFilters.category !== "All Categories") {
      updatedBusinesses = updatedBusinesses.filter(
        (business) =>
          business.category.toLowerCase() ===
          activeFilters.category.toLowerCase()
      );
    }

    // Filter by location
    if (activeFilters.location !== "All Locations") {
      updatedBusinesses = updatedBusinesses.filter(
        (business) =>
          business.location.toLowerCase() ===
          activeFilters.location.toLowerCase()
      );
    }

    // Filter by rating
    if (activeFilters.rating !== "All Ratings") {
      const rating = parseInt(activeFilters.rating.charAt(0), 10);
      updatedBusinesses = updatedBusinesses.filter(
        (business) => Math.floor(business.rating) === rating
      );
    }

    // Filter by awards
    if (activeFilters.award !== "All Awards") {
      updatedBusinesses = updatedBusinesses.filter((business) =>
        business.awards.includes(activeFilters.award)
      );
    }

    // Search query filtering
    if (isSearchActive) {
      updatedBusinesses = updatedBusinesses.filter(
        (business) =>
          business.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          business.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          business.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    setFilteredBusinesses(updatedBusinesses);
    setCurrentPage(1); // Reset to the first page whenever filters or search change
  }, [activeFilters, searchQuery]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setPaginatedBusinesses(filteredBusinesses.slice(startIndex, endIndex));
  }, [filteredBusinesses, currentPage]);

  const handleFilterChange = (filterType: string, value: string) => {
    setActiveFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-4xl font-black">Explore Businesses</h1>
        <button className="text-nowrap text-sm bg-blue-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600">
          Nominate a Business
        </button>
      </div>

      <div className="mb-6 flex flex-row-reverse items-center gap-4 p-4 bg-white border border-gray-300 rounded-lg">
        <input
          type="text"
          placeholder="Search for businesses by name, category, or tags"
          value={searchQuery}
          onChange={handleSearch}
          className="w-full text-xs sm:text-base text-gray-700 focus:outline-none"
        />
        <span className="text-gray-400">
          <MdSearch size={20} />
        </span>
      </div>

      {!isSearchActive && (
        <Filters
          filters={filters}
          activeFilters={activeFilters}
          onFilterChange={handleFilterChange}
          onClearFilters={() =>
            setActiveFilters({
              category: "All Categories",
              location: "All Locations",
              rating: "All Ratings",
              award: "All Awards",
            })
          }
        />
      )}

      {filteredBusinesses.length === 0 ? (
        <div className="text-center text-gray-500 font-medium">
          No businesses match your criteria. Try adjusting your search or
          filters.
        </div>
      ) : (
        <>
          {!isSearchActive && (
            <>
              <FeaturedBusinesses
                businesses={filteredBusinesses.filter(
                  (business) => business.featured
                )}
              />
              <TopRatedBusinesses
                businesses={filteredBusinesses.filter(
                  (business) => business.topRated
                )}
              />
            </>
          )}
          <BusinessListings businesses={paginatedBusinesses} />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredBusinesses.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default ExploreBusinesses;
