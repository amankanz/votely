/*
import Sidebar from "@/components/Customer-dashboard/sidebar";
import React from "react";

function customerDashboardHome() {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar =/}
        <Sidebar />

        {/* Main Content Area =/}
        <main className="flex-1 bg-white p-8">
          {/* Placeholder for dynamic content =/}
          <h1 className="text-2xl font-bold mb-6">Welcome to Home</h1>
          <p className="text-gray-600">
            Select an option from the sidebar to List, Profile, Help
          </p>
        </main>
      </div>
    </div>
  );
}

export default customerDashboardHome;
*/

"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Customer-dashboard/sidebar";
import SearchBar from "@/components/Customer-dashboard/Home/SearchBar";
import FilterTags from "@/components/Customer-dashboard/Home/FilterTags";
import BusinessList from "@/components/Customer-dashboard/Home/BusinessList";
import { allBusinesses } from "@/lib/allBusinesses";

function CustomerDashboardHome() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("all");
  const [filterValue, setFilterValue] = useState<string | number>("all");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilter = (type: string, value: string | number) => {
    if (type === "all" && value === "all") {
      setFilterType("all");
      setFilterValue("all");
      setSearchTerm(""); // Optional: Clear the search input when resetting filters
    } else {
      setFilterType(type);
      setFilterValue(value);
    }
  };

  const filteredBusinesses = allBusinesses.filter((business) => {
    const matchesSearch = business.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (filterType === "all" || filterValue === "all") {
      return matchesSearch;
    }

    if (filterType === "location") {
      return matchesSearch && business.location.includes(filterValue as string);
    }

    if (filterType === "category") {
      return matchesSearch && business.category.includes(filterValue as string);
    }

    if (filterType === "rating") {
      return matchesSearch && Math.floor(business.rating) === filterValue;
    }

    return matchesSearch;
  });

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {/* Header */}
          <h1 className="text-2xl font-bold mb-4">Find a business</h1>

          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} />

          {/* Filter Tags */}
          <FilterTags onFilter={handleFilter} />

          {/* Business List */}
          {filteredBusinesses.length > 0 ? (
            <BusinessList businesses={filteredBusinesses} />
          ) : (
            <p className="text-center text-gray-500 mt-4">
              No businesses found.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}

export default CustomerDashboardHome;
