import React from "react";
import { FiAward, FiUsers, FiSettings, FiBarChart2 } from "react-icons/fi";
import FeatureCard from "./FeatureCard";

function KeyFeatures() {
  return (
    <section className="w-full max-w-7xl mx-auto mt-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Why Choose Votely?
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Explore the core features that make Votely the preferred choice for
        businesses and customers alike.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard
          icon={<FiAward />}
          title="Industry Recognition"
          description="Highlight excellence and gain industry-wide recognition."
        />
        <FeatureCard
          icon={<FiUsers />}
          title="Community Focused"
          description="Engage with a community of dedicated businesses and customers."
        />
        <FeatureCard
          icon={<FiSettings />}
          title="Seamless Integration"
          description="Easy-to-use platform with powerful tools for growth."
        />
        <FeatureCard
          icon={<FiBarChart2 />}
          title="Data-Driven Insights"
          description="Access analytics to make informed business decisions."
        />
      </div>
    </section>
  );
}

export default KeyFeatures;
