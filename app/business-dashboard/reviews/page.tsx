/*
import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";

const BusinessDashboardReviews: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar =/}
      <Sidebar />

      {/* Main Content Area =/}
      <main className="flex-1 bg-white p-8">
        <h1 className="text-2xl font-bold mb-6">
          Welcome to Review Moderation page
        </h1>
        <p className="text-gray-600">
          Select an option from the sidebar to manage your business profile,
          services, awards, or view analytics.
        </p>
      </main>
    </div>
  );
};

export default BusinessDashboardReviews;
*/

/*
import React from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";

const BusinessDashboardReviews: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar =/}
      <Sidebar />

      {/* Main Content Area =/}
      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6 sm:p-8">
          {/* Page Header =/}
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Moderate your reviews
            </h1>
            <p className="text-blue-600">
              Engage with your customers and improve your product. 3.5 average
              rating (53 reviews)
            </p>
          </header>

          {/* Filter Section =/}
          <section className="mb-6">
            <div className="flex flex-wrap gap-2">
              {[
                "All",
                "5 stars",
                "4 stars",
                "3 stars",
                "2 stars",
                "1 star",
                "Unread",
                "Read",
                "Replied",
                "Not replied",
              ].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 text-sm bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100"
                >
                  {filter}
                </button>
              ))}
            </div>
          </section>

          {/* Reviews Table =/}
          <section>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-sm font-medium text-gray-700">
                    Review
                  </th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-700">
                    Rating
                  </th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-700">
                    Service/Product
                  </th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-700">
                    Posted
                  </th>
                  <th className="px-4 py-2 text-sm font-medium text-gray-700">
                    Reply
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...Array(10)].map((_, idx) => (
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                        <p className="text-gray-800">
                          This is a sample review.
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-600">4 stars</td>
                    <td className="px-4 py-4 text-gray-600">App Name</td>
                    <td className="px-4 py-4 text-gray-600">June 12, 2023</td>
                    <td className="px-4 py-4">
                      <button className="text-blue-600 hover:underline">
                        Reply
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </main>
    </div>
  );
};

export default BusinessDashboardReviews;
*/

/*
"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";
import ReviewFilters from "@/components/Business-dashboard/Reviews/ReviewFilters";
import ReviewTable from "@/components/Business-dashboard/Reviews/ReviewTable";

const BusinessDashboardReviews: React.FC = () => {
  // Static reviews data
  const [reviews, setReviews] = useState([
    {
      id: 1,
      customerName: "Alice",
      review: "Great service! Highly recommend.",
      rating: 5,
      serviceName: "Interior Design",
      datePosted: "January 5, 2025",
    },
    {
      id: 2,
      customerName: "Bob",
      review: "Good value for money.",
      rating: 4,
      serviceName: "Furniture Assembly",
      datePosted: "January 3, 2025",
    },
    {
      id: 3,
      customerName: "Charlie",
      review: "Could improve the response time.",
      rating: 3,
      serviceName: "Partition Installation",
      datePosted: "January 1, 2025",
    },
  ]);

  const handleFilter = (filterType: string, filterValue: any) => {
    // Placeholder for filter logic, update reviews based on filters
    console.log(`Filter applied: ${filterType} - ${filterValue}`);
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar =/}
      <Sidebar />

      {/* Main Content Area =/}
      <main className="flex-1 bg-gray-50 p-6 sm:p-8">
        {/* Page Header =/}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Moderate your reviews
          </h1>
          <p className="text-blue-600">
            Engage with your customers and improve your product.{" "}
            {reviews.length} reviews available.
          </p>
        </header>

        {/* Filter Section =/}
        <ReviewFilters onFilter={handleFilter} />

        {/* Reviews Table =/}
        <ReviewTable reviews={reviews} />
      </main>
    </div>
  );
};

export default BusinessDashboardReviews;
*/

/*
"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";
import ReviewFilters from "@/components/Business-dashboard/Reviews/ReviewFilters";
import ReviewTable from "@/components/Business-dashboard/Reviews/ReviewTable";

interface Review {
  id: number;
  customerName: string;
  review: string;
  rating: number;
  serviceName: string;
  datePosted: string;
  isRead: boolean;
  isReplied: boolean;
}

const BusinessDashboardReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      customerName: "Alice",
      review: "Great service! Highly recommend.",
      rating: 5,
      serviceName: "Interior Design",
      datePosted: "January 5, 2025",
      isRead: false,
      isReplied: false,
    },
    {
      id: 2,
      customerName: "Bob",
      review: "Good value for money.",
      rating: 4,
      serviceName: "Furniture Assembly",
      datePosted: "January 3, 2025",
      isRead: true,
      isReplied: false,
    },
    {
      id: 3,
      customerName: "Charlie",
      review: "Could improve the response time.",
      rating: 3,
      serviceName: "Partition Installation",
      datePosted: "January 1, 2025",
      isRead: false,
      isReplied: false,
    },
  ]);

  const handleFilter = (filterType: string, filterValue: string | number) => {
    if (filterType === "type") {
      if (filterValue === "All") {
        setReviews((prev) => [...prev]); // Reset to all reviews
      } else if (filterValue === "Unread") {
        setReviews((prev) => prev.filter((review) => !review.isRead));
      } else if (filterValue === "Read") {
        setReviews((prev) => prev.filter((review) => review.isRead));
      } else if (filterValue === "Replied") {
        setReviews((prev) => prev.filter((review) => review.isReplied));
      } else if (filterValue === "Not replied") {
        setReviews((prev) => prev.filter((review) => !review.isReplied));
      }
    } else if (filterType === "rating") {
      setReviews((prev) =>
        prev.filter((review) => review.rating === Number(filterValue))
      );
    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <Sidebar />

      <main className="flex-1 bg-gray-50 p-6 sm:p-8">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Moderate your reviews
          </h1>
          <p className="text-blue-600">
            Engage with your customers and improve your product.{" "}
            {reviews.length} reviews available.
          </p>
        </header>

        <ReviewFilters onFilter={handleFilter} />
        <ReviewTable reviews={reviews} setReviews={setReviews} />
      </main>
    </div>
  );
};

export default BusinessDashboardReviews;
*/

"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Business-dashboard/Sidebar";
import ReviewFilters from "@/components/Business-dashboard/Reviews/ReviewFilters";
import ReviewTable from "@/components/Business-dashboard/Reviews/ReviewTable";

const BusinessDashboardReviews: React.FC = () => {
  const [reviews] = useState([
    {
      id: 1,
      customerName: "Alice Smith",
      review: "Great service! Highly recommend.",
      rating: 5,
      serviceName: "Interior Design",
      datePosted: "January 5, 2025",
      isRead: false,
      isReplied: false,
    },
    {
      id: 2,
      customerName: "Bob",
      review: "Good value for money.",
      rating: 4,
      serviceName: "Furniture Assembly",
      datePosted: "January 3, 2025",
      isRead: false,
      isReplied: false,
    },
    {
      id: 3,
      customerName: "Charlie",
      review: "Could improve the response time.",
      rating: 3,
      serviceName: "Partition Installation",
      datePosted: "January 1, 2025",
      isRead: false,
      isReplied: false,
    },
    {
      id: 4,
      customerName: "Jenny",
      review: "The service was very bad, i'm not coming back!!",
      rating: 2,
      serviceName: "GYM Training",
      datePosted: "Dec 1, 2024",
      isRead: false,
      isReplied: false,
    },
    {
      id: 5,
      customerName: "Jane Smith",
      review:
        "I had a great experience at this restaurant. The food was delicious and the services was excellent. I will definitely be back!",
      rating: 4.5,
      serviceName: "Chicken & Pizza",
      datePosted: "Nov 12, 2024",
      isRead: false,
      isReplied: false,
    },
  ]);

  const [filteredReviews, setFilteredReviews] = useState(reviews);

  const handleFilter = (
    filterType: string,
    filterValue: string | number | boolean
  ) => {
    if (filterType === "all") {
      setFilteredReviews(reviews);
    } else if (filterType === "isRead") {
      setFilteredReviews(
        reviews.filter((review) => review.isRead === filterValue)
      );
    } else if (filterType === "isReplied") {
      setFilteredReviews(
        reviews.filter((review) => review.isReplied === filterValue)
      );
    } else if (filterType === "rating") {
      setFilteredReviews(
        reviews.filter((review) =>
          filterValue ? review.rating === filterValue : review
        )
      );
    }
  };

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto bg-gray-50 p-6 sm:p-8">
          {/* Page Header */}
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">
              Moderate your reviews
            </h1>
            <p className="text-blue-600">
              Engage with your customers and improve your product.{" "}
              {reviews.length} reviews available.
            </p>
          </header>

          {/* Filter Section */}
          <ReviewFilters onFilter={handleFilter} />

          {/* Reviews Table */}
          <ReviewTable reviews={filteredReviews} />
        </div>
      </main>
    </div>
  );
};

export default BusinessDashboardReviews;
