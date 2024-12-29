import React from "react";

import Button from "@/components/Button";

export default function HeroSection() {
  return (
    <section className="bg-blue-600 text-white text-center py-16">
      <h1 className="text-4xl font-bold mb-4">
        Empowering Customers, Celebrating Excellence.
      </h1>
      <div className="flex justify-center gap-4 mt-6">
        <Button text="Explore Top Businesses" variant="primary" />
        <Button text="Join as a Business" variant="secondary" />
      </div>
    </section>
  );
}
