import Image from "next/image";
import React from "react";

export default function FeaturedBusinesses() {
  const businesses = [
    { name: "Hotels & Lodges", img: "/hospitality.jpg" },
    { name: "Restaurants & Cafés", img: "/restaurant_cafe.jpg" },
    { name: "Hospitals & Clinics", img: "/hospitals_clinics.jpg" },
    { name: "Salons, Spas, and Gyms", img: "/beauty_wellness_2.jpg" },
    { name: "Schools & Learning Centers", img: "/schools_t_centers.jpg" },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="text-xl font-semibold mb-4">Featured Businesses</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {businesses.map((business, index) => (
            <div
              key={index}
              className=" w-full max-w-[260px] flex flex-col items-start rounded-xl hover:bg-gray-50 px-2 hover:cursor-pointer"
            >
              <Image
                src={business.img}
                alt={business.name}
                width={176}
                height={224}
                className="w-full object-contain rounded-2xl"
              />
              <p className="mt-2 md:text-xl xl:text-2xl text-wrap">
                {business.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
