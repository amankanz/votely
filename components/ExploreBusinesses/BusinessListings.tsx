/*
import React from "react";

interface Business {
  id: number;
  name: string;
  rating: number;
  reviews: number;
}

interface BusinessListingsProps {
  businesses: Business[];
}

const BusinessListings: React.FC<BusinessListingsProps> = ({ businesses }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Business Listings</h2>
      <div className="space-y-4">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="flex items-center justify-between bg-white shadow-md p-4 rounded-md"
          >
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-gray-100 rounded-full"></div>{" "}
              {/* Placeholder for logo =/}
              <div>
                <h3 className="text-lg font-semibold">{business.name}</h3>
                <p className="text-sm text-gray-500">
                  {business.rating} stars from {business.reviews}+ reviews
                </p>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessListings;
*/

import React from "react";
import Image from "next/image";

interface Business {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  image: string;
}

interface Props {
  businesses: Business[];
}

const BusinessListings: React.FC<Props> = ({ businesses }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Business Listings</h2>

      <div
        // className="business-listings space-y-4"
        className="space-y-4"
      >
        {businesses.map((business) => (
          <div
            key={business.id}
            className="flex items-center gap-4 p-4 rounded-lg shadow-md bg-white"
            // className="h-12 w-12 bg-gray-100 rounded-full"
          >
            <Image
              src={business.image}
              alt={business.name}
              width={64}
              height={64}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-sm font-semibold">{business.name}</h3>
              {/* <p className="text-xs text-gray-500">{business.category}</p> */}
              <p className="text-xs text-blue-400">
                {business.rating} stars from {business.reviews}+ reviews
              </p>
            </div>
            <button className="text-sm bg-gray-200 py-2 px-3 rounded-lg font-medium hover:bg-gray-300">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessListings;
