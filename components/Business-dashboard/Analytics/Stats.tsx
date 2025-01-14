/*
import React from "react";

type StatsProps = {
  posts: number;
  impressions: number;
  engagement: number;
};

const Stats: React.FC<StatsProps> = ({ posts, impressions, engagement }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-md">
      <div className="text-center">
        <h3 className="text-lg font-medium">Posts</h3>
        <p className="text-xl font-bold">{posts}</p>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-medium">Impressions</h3>
        <p className="text-xl font-bold">{impressions.toLocaleString()}</p>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-medium">Engagement</h3>
        <p className="text-xl font-bold">{engagement}</p>
      </div>
    </div>
  );
};

export default Stats;
*/

/*
import React from "react";
// import { statsData } from "./data";
type StatsProps = {
  stats: {
    label: string;
    value: number;
  }[];
};

const statsData = [
  { label: "Posts", value: 10 },
  { label: "Impressions", value: 1000 },
  { label: "Engagement", value: 100 },
];

const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <section>
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
        Last 7 days
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center bg-white shadow rounded-lg p-4 border-[1px] border-blue-500"
          >
            <h3 className="text-lg font-medium">{stat.label}</h3>
            <p className="text-xl font-bold">{stat.value.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const StatsWrapper = () => <Stats stats={statsData} />;

export default StatsWrapper;
*/

import React, { useEffect, useState } from "react";

type StatsProps = {
  stats: {
    label: string;
    value: number;
  }[];
};

const statsData = [
  { label: "Posts", value: 10 },
  { label: "Impressions", value: 1000 },
  { label: "Engagement", value: 100 },
];

const Stats: React.FC<StatsProps> = ({ stats }) => {
  const [displayValues, setDisplayValues] = useState<number[]>(
    stats.map(() => 0)
  );

  useEffect(() => {
    stats.forEach((stat, index) => {
      let current = 0;
      const increment = Math.ceil(stat.value / 100);
      const interval = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setDisplayValues((prev) => {
            const updated = [...prev];
            updated[index] = stat.value;
            return updated;
          });
          clearInterval(interval);
        } else {
          setDisplayValues((prev) => {
            const updated = [...prev];
            updated[index] = current;
            return updated;
          });
        }
      }, 50);

      return () => clearInterval(interval);
    });
  }, [stats]);

  return (
    <section>
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
        Last 7 days
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center bg-white shadow rounded-lg p-4 border-[1px] border-blue-500"
          >
            <h3 className="text-lg font-medium">{stat.label}</h3>
            <p className="text-xl font-bold">
              {displayValues[index].toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const StatsWrapper = () => <Stats stats={statsData} />;

export default StatsWrapper;
