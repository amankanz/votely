/*
import { StarRatingProps } from "@/lib/type";
import React, { useState } from "react";

const StarRating: React.FC<StarRatingProps> = ({
  maxStars = 5,
  onRatingChange,
}) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);
  const [selectedRating, setSelectedRating] = useState<number>(0);

  const handleMouseEnter = (index: number) => {
    setHoveredStar(index);
  };

  const handleMouseLeave = () => {
    setHoveredStar(null);
  };

  const handleClick = (index: number) => {
    setSelectedRating(index);
    if (onRatingChange) {
      onRatingChange(index);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex">
        {Array.from({ length: maxStars }, (_, index) => {
          const starIndex = index + 1;
          const isFilled = hoveredStar
            ? starIndex <= hoveredStar
            : starIndex <= selectedRating;

          return (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isFilled ? "#fbbf24" : "none"}
              stroke={isFilled ? "#fbbf24" : "#d1d5db"}
              strokeWidth={2}
              className="w-8 h-8 cursor-pointer transition-transform transform hover:scale-110"
              onMouseEnter={() => handleMouseEnter(starIndex)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(starIndex)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.027 6.26a1 1 0 00.95.69h6.615c.969 0 1.371 1.24.588 1.81l-5.36 3.9a1 1 0 00-.364 1.118l2.027 6.26c.3.921-.755 1.688-1.538 1.118l-5.36-3.9a1 1 0 00-1.175 0l-5.36 3.9c-.783.57-1.838-.197-1.538-1.118l2.027-6.26a1 1 0 00-.364-1.118l-5.36-3.9c-.783-.57-.381-1.81.588-1.81h6.615a1 1 0 00.95-.69l2.027-6.26z"
              />
            </svg>
          );
        })}
      </div>
      <p className="text-gray-600 text-sm">
        Rating: {selectedRating} / {maxStars}
      </p>
    </div>
  );
};

export default StarRating;
*/

import { StarRatingProps } from "@/lib/type";
import React, { useState } from "react";

const StarRating: React.FC<StarRatingProps> = ({
  maxStars = 5,
  initialRating = 0,
  onRatingChange,
  readOnly = false,
}) => {
  const [hoveredStar, setHoveredStar] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    if (!readOnly) {
      setHoveredStar(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredStar(null);
  };

  const handleClick = (index: number) => {
    if (!readOnly && onRatingChange) {
      onRatingChange(index);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="flex items-center space-x-2">
        {Array.from({ length: maxStars }, (_, index) => {
          const starIndex = index + 1;
          const isFilled = hoveredStar
            ? starIndex <= hoveredStar
            : starIndex <= initialRating;

          return (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isFilled ? "#fbbf24" : "none"}
              stroke={isFilled ? "#fbbf24" : "#d1d5db"}
              strokeWidth={2}
              className={`w-8 h-8 cursor-pointer ${
                !readOnly
                  ? "transition-transform transform hover:scale-110"
                  : ""
              }`}
              onMouseEnter={() => handleMouseEnter(starIndex)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(starIndex)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.027 6.26a1 1 0 00.95.69h6.615c.969 0 1.371 1.24.588 1.81l-5.36 3.9a1 1 0 00-.364 1.118l2.027 6.26c.3.921-.755 1.688-1.538 1.118l-5.36-3.9a1 1 0 00-1.175 0l-5.36 3.9c-.783.57-1.838-.197-1.538-1.118l2.027-6.26a1 1 0 00-.364-1.118l-5.36-3.9c-.783-.57-.381-1.81.588-1.81h6.615a1 1 0 00.95-.69l2.027-6.26z"
              />
            </svg>
          );
        })}
      </div>
      <p className="text-gray-600 text-sm">
        Rating: {initialRating} / {maxStars}
      </p>
    </div>
  );
};

export default StarRating;
