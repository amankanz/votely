import React from "react";

export default function FeaturedBusinesses() {
  return (
    <section className="container mx-auto py-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Featured Businesses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Map through featured businesses data here */}
        <div className="p-4 bg-white shadow-md rounded-md">Business Card 1</div>
        <div className="p-4 bg-white shadow-md rounded-md">Business Card 2</div>
        <div className="p-4 bg-white shadow-md rounded-md">Business Card 3</div>
      </div>
    </section>
  );
}
