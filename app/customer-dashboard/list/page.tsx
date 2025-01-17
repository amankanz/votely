/*
import Sidebar from "@/components/Customer-dashboard/sidebar";
import React from "react";

function customerDashboardList() {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar =/}
        <Sidebar />

        {/* Main Content Area =/}
        <main className="flex-1 bg-white p-8">
          {/* Placeholder for dynamic content =/}
          <h1 className="text-2xl font-bold mb-6">Welcome to List</h1>
          <p className="text-gray-600">
            Select an option from the sidebar to Home, Profile, Help
          </p>
        </main>
      </div>
    </div>
  );
}

export default customerDashboardList;
*/

/*
"use client";

import React from "react";
import Sidebar from "@/components/Customer-dashboard/sidebar";
import FilterTags from "@/components/Customer-dashboard/list/FilterTags";
import SearchBar from "@/components/Customer-dashboard/list/SearchBar";
import BusinessList from "@/components/Customer-dashboard/list/BusinessList";

const customerDashboardList = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen bg-gray-50">
      {/* Sidebar =/}
      <Sidebar />

      {/* Main Content Area =/}
      <main className="flex-1 bg-white p-8">
        {/* Header =/}
        <header className="mb-6">
          <h1 className="text-2xl font-bold">Your customer dashboard</h1>
          <p className="text-gray-600">
            Here you’ll find all the businesses you’ve interacted with. You can
            leave feedback, vote on feature requests, and more.
          </p>
        </header>

        {/* Tabs =/}
        <FilterTags />

        {/* Search Bar =/}
        <SearchBar />

        {/* Recent Activity =/}
        <BusinessList />
      </main>
    </div>
  );
};

export default customerDashboardList;
*/

/*
"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Customer-dashboard/sidebar";
import FilterTags from "@/components/Customer-dashboard/list/FilterTags";
import SearchBar from "@/components/Customer-dashboard/list/SearchBar";
import BusinessList from "@/components/Customer-dashboard/list/BusinessList";

const allBusinesses = [
  {
    id: 1,
    name: "Bankers Hall",
    description: "Waterfront, restaurants, shopping",
    rating: 3.9,
    reviews: 1234,

    location: ["Mbarara", "Kampala"],
    category: [
      "Open now",
      "Accepts credit cards",
      "Outdoor seating",
      "Offers takeout",
      "Wheelchair accessible",
    ],
    favorite: false,
    vote: false,
    image: "/businesses/bankers_hall.jpg",
  },
  {
    id: 2,
    name: "Candy Land",
    description: "Shopping, dining, sea lions",
    rating: 4.7,
    reviews: 4034,
    location: ["Mbarara", "Kampala", "Fort Portal"],
    category: [
      "Open now",
      "Accepts credit cards",
      "Good for kids",
      "Outdoor seating",
      "Offers takeout",
      "Wheelchair accessible",
    ],
    favorite: false,
    vote: true,
    image: "/businesses/candy_land.jpg",
  },
  {
    id: 3,
    name: "China Shop",
    description: "Lush park, museums, gardens",
    rating: 2.5,
    reviews: 1234,
    location: ["Kampala"],
    category: [
      "Open now",
      "Accepts credit cards",
      "Outdoor seating",
      "Offers takeout",
      "Wheelchair accessible",
    ],
    favorite: false,
    vote: false,
    image: "/businesses/china.jpg",
  },
  {
    id: 4,
    name: "Coffee Purple",
    description: "Lush park, museums, gardens",
    rating: 2.8,
    reviews: 1234,
    location: ["Kampala"],
    category: [
      "Open now",
      "Accepts credit cards",
      "Outdoor seating",
      "Offers takeout",
    ],
    favorite: false,
    vote: false,
    image: "/businesses/coffee_purple.jpg",
  },
  {
    id: 5,
    name: "Danielle",
    description: "Lush park, museums, gardens",
    rating: 3.8,
    reviews: 1234,
    location: ["Kampala", "Mbarara"],
    category: ["Open now", "Accepts credit cards", "Wheelchair accessible"],
    favorite: false,
    vote: true,
    image: "/businesses/daniellee.jpg",
  },
  {
    id: 6,
    name: "The Family Business",
    description: "Lush park, museums, gardens",
    rating: 4.8,
    reviews: 1234,
    location: ["Kampala", "Jinja"],
    category: [
      "Open now",
      "Accepts credit cards",
      "Outdoor seating",
      "Offers takeout",
      "Wheelchair accessible",
    ],
    favorite: false,
    vote: true,
    image: "/businesses/family_business.jpg",
  },
  {
    id: 7,
    name: "Louis Vuitton",
    description: "Lush park, museums, gardens",
    rating: 4.8,
    reviews: 1234,
    location: ["Mbarara", "Kampala"],
    category: ["Open now", "Accepts credit cards", "Wheelchair accessible"],
    favorite: false,
    vote: false,
    image: "/businesses/louis_vuitton.jpg",
  },
  {
    id: 8,
    name: "Peno",
    description: "Lush park, museums, gardens",
    rating: 4.8,
    reviews: 1234,
    location: ["Mbarara", "Kampala", "Fort Portal", "Jinja"],
    category: [
      "Open now",
      "Accepts credit cards",
      "Good for kids",
      "Outdoor seating",
      "Offers takeout",
    ],
    favorite: false,
    vote: true,
    image: "/businesses/peno.jpg",
  },
  {
    id: 9,
    name: "Prada",
    description: "Lush park, museums, gardens",
    rating: 5.0,
    reviews: 1234,
    location: ["Jinja", "Kampala"],
    category: ["Open now", "Accepts credit cards", "Wheelchair accessible"],
    favorite: false,
    vote: true,
    image: "/businesses/prada.jpg",
  },
  {
    id: 10,
    name: "SEGA",
    description: "Lush park, museums, gardens",
    rating: 4.8,
    reviews: 1234,
    location: ["Mbarara", "Kampala", "Jinja"],
    category: [
      "Open now",
      "Accepts credit cards",
      "Good for kids",
      "Outdoor seating",
      "Offers takeout",
      "Wheelchair accessible",
    ],
    favorite: false,
    vote: true,
    image: "/businesses/sega.jpg",
  },
  {
    id: 11,
    name: "segovia",
    description: "Lush park, museums, gardens",
    rating: 3.8,
    reviews: 1234,
    location: ["Mbarara", "Kampala"],
    category: [
      "Open now",
      "Outdoor seating",
      "Offers takeout",
      "Wheelchair accessible",
    ],
    favorite: false,
    vote: false,
    image: "/businesses/segovia.jpg",
  },
  {
    id: 12,
    name: "Souvenir Center",
    description: "Lush park, museums, gardens",
    rating: 4.0,
    reviews: 4034,
    location: ["Fort Portal"],
    category: [
      "Open now",
      "Good for kids",
      "Outdoor seating",
      "Wheelchair accessible",
    ],
    favorite: false,
    vote: false,
    image: "/businesses/souvenir_center.jpg",
  },
];

function CustomerDashboardList() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterType, setFilterType] = useState<string | number | boolean>(
    "all businesses"
  );
  const [filterValue, setFilterValue] = useState<string | number | boolean>(
    "all businesses"
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilter = (
    type: string | boolean | number,
    value: string | number | boolean
  ) => {
    if (type === "all businesses" && value === "all businesses") {
      setFilterType("all businesses");
      setFilterValue("all businesses");
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

    if (filterType === "all businesses" || filterValue === "all businesses") {
      return matchesSearch;
    }

    if (filterType === "favorites") {
      return matchesSearch && business.location.includes(filterValue as string);
    }

    if (filterType === "reviewed") {
      return matchesSearch && business.category.includes(filterValue as string);
    }

    if (filterType === "has votes") {
      return matchesSearch && Math.floor(business.rating) === filterValue;
    }

    return matchesSearch;
  });

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar =/}
      <Sidebar />

      {/* Main Content Area =/}
      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {/* Header =/}
          <header className="mb-6">
            <h1 className="text-2xl font-bold mb-4">Welcome to List</h1>
            <p className="text-gray-600">
              Here you’ll find all the businesses you’ve interacted with. You
              can leave reviews, votes, ratings, and more.
            </p>
          </header>

          {/* Filter Tags =/}
          <FilterTags onFilter={handleFilter} />

          {/* Search Bar =/}
          <SearchBar onSearch={handleSearch} />

          {/* Business List =/}
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

export default CustomerDashboardList;
*/

"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Customer-dashboard/sidebar";
import FilterTags from "@/components/Customer-dashboard/list/FilterTags";
import SearchBar from "@/components/Customer-dashboard/list/SearchBar";
import BusinessList from "@/components/Customer-dashboard/list/BusinessList";
import { allBusinesses } from "@/lib/allBusinesses";

function CustomerDashboardList() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterType, setFilterType] = useState<string>("all businesses");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleFilter = (type: string) => {
    setFilterType(type);
  };

  const filteredBusinesses = allBusinesses.filter((business) => {
    const matchesSearch = business.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    if (filterType === "all businesses") {
      return matchesSearch;
    }

    if (filterType === "favorites") {
      return matchesSearch && business.favorite;
    }

    if (filterType === "has votes") {
      return matchesSearch && business.vote;
    }

    return matchesSearch;
  });

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <Sidebar />

      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6">
          <header className="mb-6">
            <h1 className="text-2xl font-bold mb-4">Welcome to List</h1>
            <p className="text-gray-600">
              Here you’ll find all the businesses you’ve interacted with. You
              can leave reviews, votes, ratings, and more.
            </p>
          </header>

          <FilterTags onFilter={handleFilter} />

          <SearchBar onSearch={handleSearch} />

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

export default CustomerDashboardList;
