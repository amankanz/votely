import Image from "next/image";
import React, { useState } from "react";
import { MdStarRate } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import BusinessDetails from "../list/BusinessDetails";
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
            onClick={() => handleViewMore(business)}
          >
            <Image
              src={business.image}
              alt={business.name}
              width={400}
              height={200}
              className="object-cover w-full h-48"
            />
            <div className="p-4 lg:h-32 flex flex-col">
              <div className="text-sm text-blue-500 flex flex-nowrap">
                <span className="flex mr-1">
                  {Array.from({ length: Math.floor(business.rating) }).map(
                    (_, index) => (
                      <MdStarRate key={index} size={15} />
                    )
                  )}
                </span>
                <span>{`${business.rating} (${business.reviews} reviews)`}</span>
              </div>
              <h2 className="text-lg font-bold text-gray-800 text-nowrap">
                {business.name}
              </h2>
              <div className="text-blue-500 text-nowrap flex items-center gap-1">
                <span>
                  <FaLocationDot size={15} />
                </span>
                <div className="text-sm md:text-xs flex flex-wrap space-x-2 items-end h-4">
                  <span className="flex items-end">
                    {business.location.join(", ")}
                  </span>
                </div>
              </div>
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
