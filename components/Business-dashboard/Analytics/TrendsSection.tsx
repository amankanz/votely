/*
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { format, parseISO, subDays } from "date-fns";

interface DataPoint {
  date: string;
  value: number;
}

const data: DataPoint[] = [];
for (let num = 0; num < 30; num++) {
  // Generate data for 30 days
  data.push({
    date: subDays(new Date(), num).toISOString().substring(0, 10),
    value: 1 + Math.random(),
  });
}

function TrendsSection() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity="0.4" />
            <stop offset="75%" stopColor="#2451B7" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

        <XAxis
          dataKey="date"
          axisLine={false}
          tickLine={false}
          tickFormatter={(str) => {
            const date = parseISO(str);
            if (date.getDate() % 7 === 0) {
              return format(date, "MMM, d");
            }
            return "";
          }}
        />

        <YAxis
          dataKey="value"
          axisLine={false}
          tickLine={false}
          tickCount={8}
          tickFormatter={(number) => `$${number.toFixed(2)}`}
        />

        <Tooltip content={<CustomTooltip />} />

        <CartesianGrid opacity={0.1} vertical={false} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default TrendsSection;

import { TooltipProps } from "recharts";


function CustomTooltip({
  active,
  payload,
  label,
}: TooltipProps<number, string>) {
  if (active && payload && payload.length > 0 && label) {
    const value = payload[0].value; // Ensure payload[0] exists
    if (value !== undefined) {
      return (
        <div className="rounded-md bg-[#26313c] text-white p-4 shadow-lg text-center">
          <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
          <p>${value.toFixed(2)} CAD</p>
        </div>
      );
    }
  }
  return null;
}
*/

/*
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  TooltipProps,
} from "recharts";
import { format, parseISO, addMonths, startOfMonth } from "date-fns";

interface VoteDataPoint {
  date: string;
  votes: number;
}

// Generate vote data for six months (Jan 1 to Jun 1)
const voteData: VoteDataPoint[] = [];
const startMonth = startOfMonth(new Date(2023, 0)); // Jan 1, 2023
for (let i = 0; i < 6; i++) {
  voteData.push({
    date: addMonths(startMonth, i).toISOString().substring(0, 10),
    votes: Math.floor(Math.random() * 100) + 20, // Random votes between 20 and 120
  });
}

const TrendsSection: React.FC = () => {
  return (
    <section className="bg-white shadow rounded-lg p-6 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Trends</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={voteData}>
          <defs>
            <linearGradient id="colorVotes" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1D4ED8" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#1D4ED8" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Area
            type="monotone"
            dataKey="votes"
            stroke="#1D4ED8"
            fill="url(#colorVotes)"
          />

          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickFormatter={(str) => {
              const date = parseISO(str);
              return format(date, "MMM 1"); // Display month and day (e.g., Jan 1)
            }}
          />

          <YAxis
            dataKey="votes"
            axisLine={false}
            tickLine={false}
            tick={false}
            tickFormatter={(value) => `${value} votes`}
          />

          <Tooltip content={<CustomTooltip />} />

          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
};

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length > 0 && label) {
    return (
      <div className="rounded-md bg-[#1E293B] text-white p-4 shadow-md">
        <h4 className="font-semibold">
          {format(parseISO(label), "MMMM 1, yyyy")}
        </h4>
        <p className="mt-2 text-sm">
          Votes: <span className="font-bold">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default TrendsSection;
*/

/*
import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  TooltipProps,
} from "recharts";
import { format, parseISO, addMonths, startOfMonth } from "date-fns";

interface VoteDataPoint {
  date: string;
  votes: number;
}

// Generate vote data for six months (Jan 1 to Jun 1)
const voteData: VoteDataPoint[] = [];
const startMonth = startOfMonth(new Date(2023, 0)); // Jan 1, 2023
for (let i = 0; i < 6; i++) {
  voteData.push({
    date: addMonths(startMonth, i).toISOString().substring(0, 10),
    votes: Math.floor(Math.random() * 100) + 20, // Random votes between 20 and 120
  });
}

const TrendsSection: React.FC = () => {
  return (
    <section className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-8 mb-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
        Trends
      </h2>
      <div className="h-64 sm:h-72 lg:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={voteData}>
            <defs>
              <linearGradient id="colorVotes" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1D4ED8" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#1D4ED8" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <Area
              type="monotone"
              dataKey="votes"
              stroke="#1D4ED8"
              fill="url(#colorVotes)"
            />

            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tickFormatter={(str) => {
                const date = parseISO(str);
                return format(date, "MMM 1"); // Display month and day (e.g., Jan 1)
              }}
              tick={{ fontSize: 12, dy: 6 }}
            />

            <YAxis
              dataKey="votes"
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value} votes`}
              tick={false}
            />

            <Tooltip content={<CustomTooltip />} />

            <CartesianGrid opacity={0.1} vertical={false} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length > 0 && label) {
    return (
      <div className="rounded-md bg-[#1E293B] text-white p-4 shadow-md">
        <h4 className="font-semibold">
          {format(parseISO(label), "MMMM 1, yyyy")}
        </h4>
        <p className="mt-2 text-sm">
          Votes: <span className="font-bold">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default TrendsSection;
*/

import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
  TooltipProps,
} from "recharts";
import { format, parseISO, addMonths, startOfMonth } from "date-fns";

interface VoteDataPoint {
  date: string;
  votes: number;
}

// Generate vote data for six months (Jan 1 to Jun 1)
const voteData: VoteDataPoint[] = [];
const startMonth = startOfMonth(new Date(2023, 0)); // Jan 1, 2023
for (let i = 0; i < 6; i++) {
  voteData.push({
    date: addMonths(startMonth, i).toISOString().substring(0, 10),
    votes: Math.floor(Math.random() * 100) + 20, // Random votes between 20 and 120
  });
}

const TrendsSection: React.FC = () => {
  return (
    <section className="bg-white w-full p-4 sm:p-6 lg:p-8 mb-8">
      <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-4">
        Trends
      </h2>

      <div className="bg-white shadow rounded-lg p-4 sm:p-6 lg:p-8">
        <h3 className="text-sm sm:text-lg lg:text-2xl text-gray-800 mb-4">
          Votes over time
        </h3>
        {/* Scrollable container for mobile */}
        <div className="overflow-x-auto">
          <div className="min-w-[600px] h-64 sm:h-72 lg:h-96">
            {" "}
            {/* Minimum width for scroll */}
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={voteData}>
                <defs>
                  <linearGradient id="colorVotes" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                    <stop offset="75%" stopColor="#3b82f6" stopOpacity={0.05} />
                  </linearGradient>
                </defs>

                <Area
                  type="monotone"
                  dataKey="votes"
                  stroke="#3b82f6"
                  strokeLinecap="round"
                  strokeWidth={5}
                  fill="url(#colorVotes)"
                />

                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(str) => {
                    const date = parseISO(str);
                    return format(date, "MMM d"); // Display month and day (e.g., Jan 1)
                  }}
                  tick={{ fontSize: 12, dy: 6 }}
                />

                <YAxis
                  dataKey="votes"
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `${value} votes`}
                  tick={false}
                />

                <Tooltip content={<CustomTooltip />} />

                <CartesianGrid opacity={0.1} vertical={false} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length > 0 && label) {
    return (
      <div className="rounded-md bg-[#1E293B] text-white p-4 shadow-md">
        <h4 className="font-semibold">
          {format(parseISO(label), "MMMM d, yyyy")}
        </h4>
        <p className="mt-2 text-sm">
          Votes: <span className="font-bold">{payload[0].value}</span>
        </p>
      </div>
    );
  }
  return null;
};

export default TrendsSection;
