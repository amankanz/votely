import React from "react";
import AwardCard from "./AwardCard";
import Button from "./Button";

function AwardsShowcase() {
  return (
    <section className="w-full max-w-7xl mx-auto mt-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Showcase Top Awarded Businesses
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AwardCard
          title="Elite Fitness Studio"
          description="Awarded Best Fitness Center of 2024"
          image="/businesses/daniellee.jpg"
        />
        <AwardCard
          title="Gourmet Kitchen"
          description="Best Culinary Business Excellence"
          image="/businesses/coffee_purple.jpg"
        />
        <AwardCard
          title="Tech Solutions Inc."
          description="Innovative Technology Award Winner"
          image="/businesses/peno.jpg"
        />
      </div>
      <div className="flex justify-center mt-8">
        <Button text="View All Awards" variant="primary" />
      </div>
    </section>
  );
}

export default AwardsShowcase;
