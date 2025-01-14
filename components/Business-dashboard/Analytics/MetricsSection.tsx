/*
import React from "react";

interface MetricCardProps {
  title: string;
  value: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow rounded-lg p-4 border-[1px] border-blue-500">
      <span className="text-2xl font-bold text-gray-800">{value}</span>
      <span className="text-blue-500 text-sm">{title}</span>
    </div>
  );
};

const MetricsSection: React.FC = () => {
  const metrics = [
    { title: "Reach", value: "5,000" },
    { title: "Impressions", value: "1,000" },
    { title: "Engagements", value: "10,000" },
    { title: "Clicks", value: "120" },
    { title: "Post engagement rate", value: "30%" },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {metrics.map((metric) => (
        <MetricCard
          key={metric.title}
          title={metric.title}
          value={metric.value}
        />
      ))}
    </section>
  );
};

export default MetricsSection;
*/

import React, { useEffect, useState } from "react";

interface MetricCardProps {
  title: string;
  value: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const maxValue = parseInt(value.replace(/[,\%]/g, "")) || 0;

  useEffect(() => {
    let current = 0;
    const increment = Math.ceil(maxValue / 100);
    const interval = setInterval(() => {
      current += increment;
      if (current >= maxValue) {
        setDisplayValue(maxValue);
        clearInterval(interval);
      } else {
        setDisplayValue(current);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [maxValue]);

  return (
    <div className="flex flex-col items-center justify-center bg-white shadow rounded-lg p-4 border-[1px] border-blue-500">
      <span className="text-2xl font-bold text-gray-800">
        {value.includes("%")
          ? `${displayValue}%`
          : displayValue.toLocaleString()}
      </span>
      <span className="text-blue-500 text-sm">{title}</span>
    </div>
  );
};

const MetricsSection: React.FC = () => {
  const metrics = [
    { title: "Reach", value: "5,000" },
    { title: "Impressions", value: "1,000" },
    { title: "Engagements", value: "10,000" },
    { title: "Clicks", value: "120" },
    { title: "Post engagement rate", value: "30%" },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
      {metrics.map((metric) => (
        <MetricCard
          key={metric.title}
          title={metric.title}
          value={metric.value}
        />
      ))}
    </section>
  );
};

export default MetricsSection;
