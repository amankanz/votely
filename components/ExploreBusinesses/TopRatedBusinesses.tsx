/*
import React from "react";
import Image from "next/image";

interface Business {
  id: number;
  name: string;
  category: string;
  image: string;
}

interface Props {
  businesses: Business[];
}

const TopRatedBusinesses: React.FC<Props> = ({ businesses }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Top Rated</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {businesses.map((business) => (
          <div
            key={business.id}
            // className="w-40 shrink-0 rounded-lg shadow-md bg-white p-4"
            className="bg-white shadow-md p-4 rounded-md space-y-2"
          >
            <Image
              src={business.image}
              alt={business.name}
              width={160}
              height={96}
              className="w-full h-24 object-cover rounded-md mb-2"
            />
            <div className="flex flex-col">
              <h3 className="text-sm font-medium">{business.name}</h3>
              <p className="text-xs text-blue-400">{business.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedBusinesses;
*/

import React from "react";
import Image from "next/image";

interface Business {
  id: number;
  name: string;
  category: string;
  image: string;
}

interface Props {
  businesses: Business[];
}

const TopRatedBusinesses: React.FC<Props> = ({ businesses }) => {
  if (businesses.length === 0) return null;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Top Rated Businesses</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="bg-white shadow-md p-4 rounded-md space-y-2"
          >
            <Image
              src={business.image}
              alt={business.name}
              width={160}
              height={96}
              className="w-full h-24 object-cover rounded-md mb-2"
            />
            <div className="flex flex-col">
              <h3 className="text-sm font-medium">{business.name}</h3>
              <p className="text-xs text-blue-400">{business.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedBusinesses;
