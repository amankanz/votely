/*
import React from "react";
// import { categoriesData } from "./data";

type Category = {
  name: string;
  votes: number;
  averageRating: number;
  reviews: number;
};

type ServicesDataProps = {
  categories: Category[];
};

const servicesData = [
  { name: "Event Catering", votes: 250, averageRating: 4.5, reviews: 150 },
  { name: "Private Dining", votes: 180, averageRating: 4.8, reviews: 90 },
  { name: "Corporate Lunches", votes: 300, averageRating: 4.2, reviews: 210 },
  { name: "Wedding Packages", votes: 120, averageRating: 3.9, reviews: 75 },
  { name: "Beverage Services", votes: 80, averageRating: 3.5, reviews: 45 },
];

const Categories: React.FC<ServicesDataProps> = ({ servicesData }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b p-4 text-left">Services/Products</th>
            <th className="border-b p-4 text-right">Votes</th>
            <th className="border-b p-4 text-right">Ratings</th>
            <th className="border-b p-4 text-right">Reviews</th>
          </tr>
        </thead>
        <tbody>
          {servicesData.map((service, index) => (
            <tr key={index}>
              <td className="border-b p-4">{service.name}</td>
              <td className="border-b p-4 text-right">
                {service.votes.toLocaleString()}
              </td>
              <td className="border-b p-4 text-right">
                {service.averageRating.toLocaleString()}
              </td>
              <td className="border-b p-4 text-right">
                {service.reviews.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CategoriesWrapper = () => <Categories categories={servicesData} />;

export default CategoriesWrapper;
*/

/*
import React from "react";

// Define a type for individual category data
type Category = {
  name: string;
  votes: number;
  averageRating: number;
  reviews: number;
};

// Define a type for the props passed to the Categories component
type ServicesDataProps = {
  categories: Category[];
};

// Sample data
const servicesData: Category[] = [
  { name: "Event Catering", votes: 250, averageRating: 4.5, reviews: 150 },
  { name: "Private Dining", votes: 180, averageRating: 4.8, reviews: 90 },
  { name: "Corporate Lunches", votes: 300, averageRating: 4.2, reviews: 210 },
  { name: "Wedding Packages", votes: 120, averageRating: 3.9, reviews: 75 },
  { name: "Beverage Services", votes: 80, averageRating: 3.5, reviews: 45 },
];

// Categories component
const Categories: React.FC<ServicesDataProps> = ({ categories }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b p-4 text-left">Services/Products</th>
            <th className="border-b p-4 text-right">Votes</th>
            <th className="border-b p-4 text-right">Ratings</th>
            <th className="border-b p-4 text-right">Reviews</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((service: Category, index: number) => (
            <tr key={index}>
              <td className="border-b p-4">{service.name}</td>
              <td className="border-b p-4 text-right">
                {service.votes.toLocaleString()}
              </td>
              <td
                className={`border-b p-4 text-right ${
                  service.averageRating > 4
                    ? "text-green-500"
                    : "text-orange-400"
                }`}
              >
                {service.averageRating.toFixed(1)}
              </td>
              <td className="border-b p-4 text-right text-blue-500">
                {service.reviews.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Wrapper component to pass data dynamically
const CategoriesWrapper = () => {
  // You can fetch or dynamically generate categories here
  return <Categories categories={servicesData} />;
};

export default CategoriesWrapper;
*/

/*
import React from "react";

// Define a type for individual category data
type Category = {
  name: string;
  votes: number;
  averageRating: number;
  reviews: number;
};

// Define a type for the props passed to the Categories component
type ServicesDataProps = {
  categories: Category[];
};

// Sample data
const servicesData: Category[] = [
  { name: "Event Catering", votes: 250, averageRating: 4.5, reviews: 150 },
  { name: "Private Dining", votes: 180, averageRating: 4.8, reviews: 90 },
  { name: "Corporate Lunches", votes: 300, averageRating: 4.2, reviews: 210 },
  { name: "Wedding Packages", votes: 120, averageRating: 3.9, reviews: 75 },
  { name: "Beverage Services", votes: 80, averageRating: 3.5, reviews: 45 },
];

// Function to determine color for votes
const getVoteColor = (votes: number) => {
  if (votes >= 250) return "text-green-500"; // High votes
  if (votes >= 100) return "text-orange-400"; // Medium votes
  return "text-red-500"; // Low votes
};

// Function to determine color for ratings
const getRatingColor = (rating: number) => {
  if (rating >= 4.5) return "text-blue-500"; // High ratings
  if (rating >= 4) return "text-purple-500"; // Medium ratings
  return "text-gray-500"; // Low ratings
};

// Function to determine color for reviews
const getReviewColor = (reviews: number) => {
  if (reviews >= 150) return "text-indigo-500"; // High reviews
  if (reviews >= 75) return "text-yellow-500"; // Medium reviews
  return "text-pink-500"; // Low reviews
};

// Categories component
const Categories: React.FC<ServicesDataProps> = ({ categories }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Service Metrics</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="border-b p-4 text-left font-medium text-gray-600">
              Services/Products
            </th>
            <th className="border-b p-4 text-right font-medium text-gray-600">
              Votes
            </th>
            <th className="border-b p-4 text-right font-medium text-gray-600">
              Ratings
            </th>
            <th className="border-b p-4 text-right font-medium text-gray-600">
              Reviews
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((service: Category, index: number) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border-b p-4 text-gray-800">{service.name}</td>
              <td
                className={`border-b p-4 text-right font-bold ${getVoteColor(
                  service.votes
                )}`}
              >
                {service.votes.toLocaleString()}
              </td>
              <td
                className={`border-b p-4 text-right font-bold ${getRatingColor(
                  service.averageRating
                )}`}
              >
                {service.averageRating.toFixed(1)}
              </td>
              <td
                className={`border-b p-4 text-right font-bold ${getReviewColor(
                  service.reviews
                )}`}
              >
                {service.reviews.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Wrapper component to pass data dynamically
const CategoriesWrapper = () => {
  // You can fetch or dynamically generate categories here
  return <Categories categories={servicesData} />;
};

export default CategoriesWrapper;
*/

import React from "react";

// Define a type for individual category data
type Category = {
  name: string;
  votes: number;
  averageRating: number;
  reviews: number;
};

// Define a type for the props passed to the Categories component
type ServicesDataProps = {
  categories: Category[];
};

// Sample data
const servicesData: Category[] = [
  { name: "Event Catering", votes: 250, averageRating: 4.5, reviews: 150 },
  { name: "Private Dining", votes: 180, averageRating: 4.8, reviews: 90 },
  { name: "Corporate Lunches", votes: 300, averageRating: 4.2, reviews: 210 },
  { name: "Wedding Packages", votes: 120, averageRating: 3.9, reviews: 75 },
  { name: "Beverage Services", votes: 80, averageRating: 3.5, reviews: 45 },
];

// Function to determine color for votes
const getVoteColor = (votes: number) => {
  if (votes >= 250) return "text-green-500"; // High votes
  if (votes >= 100) return "text-orange-400"; // Medium votes
  return "text-red-500"; // Low votes
};

// Function to determine color for ratings
const getRatingColor = (rating: number) => {
  if (rating >= 4.5) return "text-blue-500"; // High ratings
  if (rating >= 4) return "text-purple-500"; // Medium ratings
  return "text-gray-500"; // Low ratings
};

// Function to determine color for reviews
const getReviewColor = (reviews: number) => {
  if (reviews >= 150) return "text-indigo-500"; // High reviews
  if (reviews >= 75) return "text-yellow-500"; // Medium reviews
  return "text-pink-500"; // Low reviews
};

// Categories component
const Categories: React.FC<ServicesDataProps> = ({ categories }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Service Metrics</h2>
      {/* Table Wrapper for Horizontal Scroll on Small Devices */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-50">
              <th className="border-b p-4 text-left font-medium text-gray-600">
                Services/Products
              </th>
              <th className="border-b p-4 text-right font-medium text-gray-600">
                Votes
              </th>
              <th className="border-b p-4 text-right font-medium text-gray-600">
                Ratings
              </th>
              <th className="border-b p-4 text-right font-medium text-gray-600">
                Reviews
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((service: Category, index: number) => (
              <tr
                key={index}
                className="hover:bg-gray-50 border-b last:border-none"
              >
                <td className="p-4 text-gray-800">{service.name}</td>
                <td
                  className={`p-4 text-right font-bold ${getVoteColor(
                    service.votes
                  )}`}
                >
                  {service.votes.toLocaleString()}
                </td>
                <td
                  className={`p-4 text-right font-bold ${getRatingColor(
                    service.averageRating
                  )}`}
                >
                  {service.averageRating.toFixed(1)}
                </td>
                <td
                  className={`p-4 text-right font-bold ${getReviewColor(
                    service.reviews
                  )}`}
                >
                  {service.reviews.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Wrapper component to pass data dynamically
const CategoriesWrapper = () => {
  // You can fetch or dynamically generate categories here
  return <Categories categories={servicesData} />;
};

export default CategoriesWrapper;
