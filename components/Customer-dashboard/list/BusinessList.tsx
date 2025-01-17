/*
import Image from "next/image";
import React from "react";

interface Business {
  id: number;
  name: string;
  description: string;
  rating: number;
  reviews: number;
  location: string[];
  category: string[];
  favorite: boolean;
  vote: boolean;
  image: string;
}

interface BusinessListProps {
  businesses: Business[];
}

const BusinessList: React.FC<BusinessListProps> = ({ businesses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {businesses.map((business) => (
        <div
          key={business.id}
          className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:border hover:border-blue-300 overflow-hidden"
        >
          <Image
            src={business.image}
            alt={business.name}
            width={400}
            height={200}
            className="object-cover w-full h-48"
          />
          <div className="p-4 lg:h-32 flex flex-col">
            <h2 className="text-lg text-gray-800 text-nowrap mb-3">
              {business.name}
            </h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
              View More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessList;
*/

/*
import Image from "next/image";
import React from "react";

interface Business {
  id: number;
  name: string;
  description: string;
  rating: number;
  reviews: number;
  location: string[];
  category: string[];
  favorite: boolean;
  vote: boolean;
  image: string;
}

interface BusinessListProps {
  businesses: Business[];
}

const BusinessList: React.FC<BusinessListProps> = ({ businesses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {businesses.map((business) => (
        <div
          key={business.id}
          className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:border hover:border-blue-300 overflow-hidden"
        >
          <Image
            src={business.image}
            alt={business.name}
            width={400}
            height={200}
            className="object-cover w-full h-48"
          />
          <div className="p-4 lg:h-32 flex flex-col">
            <h2 className="text-lg text-gray-800 truncate mb-3">
              {business.name}
            </h2>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
              View More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessList;
*/

import Image from "next/image";
import React, { useState } from "react";
import BusinessDetails from "./BusinessDetails";
import { Business, BusinessListProps } from "@/lib/type";

const BusinessList: React.FC<BusinessListProps> = ({ businesses }) => {
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(
    null
  );

  const handleViewMore = (business: Business) => {
    setSelectedBusiness(business);
  };

  const closeDetails = () => {
    setSelectedBusiness(null);
  };

  return (
    <div>
      {/* Grid of businesses */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg hover:border hover:border-blue-300 overflow-hidden"
          >
            <Image
              src={business.image}
              alt={business.name}
              width={400}
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="p-4 lg:h-32 flex flex-col">
              <h2 className="text-lg text-gray-800 truncate mb-3">
                {business.name}
              </h2>
              <button
                onClick={() => handleViewMore(business)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md"
              >
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Business Details Modal */}
      {selectedBusiness && (
        <BusinessDetails business={selectedBusiness} onClose={closeDetails} />
      )}
    </div>
  );
};

export default BusinessList;
