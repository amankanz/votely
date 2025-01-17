/*
import React from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { MdStarRate } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Business } from "@/lib/type";
import { MdFavoriteBorder } from "react-icons/md";
import { MdFavorite } from "react-icons/md";

interface BusinessDetailsProps {
  business: Business;
  onClose: () => void;
}

const BusinessDetails: React.FC<BusinessDetailsProps> = ({
  business,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-start z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 overflow-hidden mt-12">
        <div className="relative">
          <Image
            src={business.image}
            alt={business.name}
            width={800}
            height={400}
            className="object-cover w-full h-48 sm:h-64 md:h-72 lg:h-80"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <IoMdClose />
          </button>
        </div>
        <div className="p-4 sm:p-6 md:p-8 flex flex-col overflow-y-auto h-96">
          {/* Left side =/}
          <div className="flex flex-col">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-800">
              {business.name}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              {business.description}
            </p>
            <div className="text-blue-500 text-sm mb-4 flex">
              <span>
                <FaLocationDot size={15} />
              </span>
              <span>{business.location.join(", ")}</span>
            </div>
            <div className="mb-4">
              <p className="text-sm sm:text-lg md:text-xl lg:text-4xl font-bold">
                {business.rating}{" "}
              </p>
              <span className="text-blue-500 flex mb-2">
                {Array.from({ length: Math.floor(business.rating) }).map(
                  (_, index) => (
                    <MdStarRate key={index} size={15} />
                  )
                )}
              </span>
              <p className="text-sm">{business.reviews} reviews</p>
            </div>
          </div>

          {/* Leave a reviews, ratings and vote =/}
          <div className="w-full">
            <h3 className="text-lg sm:text-2xl font-bold mb-2 text-gray-800">
              You can <span className="text-blue-600">rate</span>,{" "}
              <span className="text-blue-600">vote</span> or leave a{" "}
              <span className="text-blue-600">review</span> to help{" "}
              <strong>{business.name}</strong> improve their services.
            </h3>

            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
*/

/*
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { MdStarRate, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Business } from "@/lib/type";
import StarRating from "./StarRating"; // Ensure the StarRating component is in the same directory.

interface BusinessDetailsProps {
  business: Business;
  onClose: () => void;
}

const BusinessDetails: React.FC<BusinessDetailsProps> = ({
  business,
  onClose,
}) => {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [favorite, setFavorite] = useState<boolean>(business.favorite || false);
  const [vote, setVote] = useState<string | null>(null); // "yes" or "no"

  useEffect(() => {
    // Prevent background scrolling when the modal is open
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleSubmit = () => {
    // Save user's rating, review, vote, and favorite status
    console.log("Rating:", rating);
    console.log("Review:", review);
    console.log("Favorite:", favorite);
    console.log("Vote:", vote);

    // Simulate updating business reviews count
    business.reviews += 1;

    alert("Your feedback has been saved!");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 overflow-hidden">
        <div className="h-1/2 overflow-y-auto">
          {/* Business Image and Close Button =/}
          <div className="relative">
            <Image
              src={business.image}
              alt={business.name}
              width={800}
              height={400}
              className="object-cover w-full h-48 sm:h-64 md:h-72 lg:h-80"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <IoMdClose />
            </button>
          </div>

          {/* Business Details =/}
          <div className="p-4 sm:p-6 md:p-8 flex flex-col h-96">
            <div className="flex flex-col">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-800">
                {business.name}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {business.description}
              </p>
              <div className="text-blue-500 text-sm mb-4 flex items-center">
                <FaLocationDot size={15} className="mr-1" />
                <span>{business.location.join(", ")}</span>
              </div>
              <div className="mb-4">
                <p className="text-sm sm:text-lg md:text-xl lg:text-4xl font-bold">
                  {business.rating.toFixed(1)}
                </p>
                <div className="text-blue-500 flex mb-2">
                  {Array.from({ length: Math.floor(business.rating) }).map(
                    (_, index) => (
                      <MdStarRate key={index} size={15} />
                    )
                  )}
                </div>
                <p className="text-sm">{business.reviews} reviews</p>
              </div>
            </div>

            {/* User Interactions =/}
            <div className="w-full mt-4 space-y-4">
              {/* Favorite Toggle =/}
              <button
                onClick={() => setFavorite(!favorite)}
                className="flex items-center space-x-2 text-blue-600"
              >
                {favorite ? (
                  <MdFavorite size={24} />
                ) : (
                  <MdFavoriteBorder size={24} />
                )}
                <span>{favorite ? "Favorited" : "Set as Favorite"}</span>
              </button>

              {/* Rating =/}
              <div>
                <h3 className="text-lg font-bold mb-2">Your Rating:</h3>
                <StarRating maxStars={5} onRatingChange={setRating} />
              </div>

              {/* Review Input =/}
              <div>
                <h3 className="text-lg font-bold mb-2">Your Review:</h3>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                  rows={4}
                  placeholder="Write your review here..."
                ></textarea>
              </div>

              {/* Voting =/}
              <div>
                <h3 className="text-lg font-bold mb-2">Your Vote:</h3>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setVote("yes")}
                    className={`py-2 px-4 rounded-md ${
                      vote === "yes"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    Vote Yes
                  </button>
                  <button
                    onClick={() => setVote("no")}
                    className={`py-2 px-4 rounded-md ${
                      vote === "no"
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    Vote No
                  </button>
                </div>
              </div>

              {/* Submit Button =/}
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
*/

/*
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { MdStarRate, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Business } from "@/lib/type";
import StarRating from "./StarRating"; // Ensure the StarRating component is in the same directory.

interface BusinessDetailsProps {
  business: Business;
  onClose: () => void;
}

const BusinessDetails: React.FC<BusinessDetailsProps> = ({
  business,
  onClose,
}) => {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [favorite, setFavorite] = useState<boolean>(business.favorite || false);
  const [vote, setVote] = useState<string | null>(null); // "yes" or "no"

  useEffect(() => {
    // Prevent background scrolling when the modal is open
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleSubmit = () => {
    // Save user's rating, review, vote, and favorite status
    console.log("Rating:", rating);
    console.log("Review:", review);
    console.log("Favorite:", favorite);
    console.log("Vote:", vote);

    // Simulate updating business reviews count
    business.reviews += 1;

    alert("Your feedback has been saved!");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4">
        {/* Wrapper for scrolling and height control =/}
        <div className="h-1/2 overflow-y-auto">
          {/* Business Image and Close Button =/}
          <div className="relative">
            <Image
              src={business.image}
              alt={business.name}
              width={800}
              height={400}
              className="object-cover w-full h-48 sm:h-64 md:h-72 lg:h-80"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <IoMdClose />
            </button>
          </div>

          {/* Business Details =/}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-800">
                {business.name}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {business.description}
              </p>
              <div className="text-blue-500 text-sm mb-4 flex items-center">
                <FaLocationDot size={15} className="mr-1" />
                <span>{business.location.join(", ")}</span>
              </div>
              <div className="mb-4">
                <p className="text-sm sm:text-lg md:text-xl lg:text-4xl font-bold">
                  {business.rating.toFixed(1)}
                </p>
                <div className="text-blue-500 flex mb-2">
                  {Array.from({ length: Math.floor(business.rating) }).map(
                    (_, index) => (
                      <MdStarRate key={index} size={15} />
                    )
                  )}
                </div>
                <p className="text-sm">{business.reviews} reviews</p>
              </div>
            </div>

            {/* User Interactions =/}
            <div className="w-full mt-4 space-y-4">
              {/* Favorite Toggle =/}
              <button
                onClick={() => setFavorite(!favorite)}
                className="flex items-center space-x-2 text-blue-600"
              >
                {favorite ? (
                  <MdFavorite size={24} />
                ) : (
                  <MdFavoriteBorder size={24} />
                )}
                <span>{favorite ? "Favorited" : "Set as Favorite"}</span>
              </button>

              {/* Rating =/}
              <div>
                <h3 className="text-lg font-bold mb-2">Your Rating:</h3>
                <StarRating maxStars={5} onRatingChange={setRating} />
              </div>

              {/* Review Input =/}
              <div>
                <h3 className="text-lg font-bold mb-2">Your Review:</h3>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                  rows={4}
                  placeholder="Write your review here..."
                ></textarea>
              </div>

              {/* Voting =/}
              <div>
                <h3 className="text-lg font-bold mb-2">Your Vote:</h3>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setVote("yes")}
                    className={`py-2 px-4 rounded-md ${
                      vote === "yes"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    Vote Yes
                  </button>
                  <button
                    onClick={() => setVote("no")}
                    className={`py-2 px-4 rounded-md ${
                      vote === "no"
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    Vote No
                  </button>
                </div>
              </div>

              {/* Submit Button =/}
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
*/

/*
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { MdStarRate, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Business } from "@/lib/type";
import StarRating from "./StarRating"; // Ensure the StarRating component is in the same directory.

interface BusinessDetailsProps {
  business: Business;
  onClose: () => void;
}

const BusinessDetails: React.FC<BusinessDetailsProps> = ({
  business,
  onClose,
}) => {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [favorite, setFavorite] = useState<boolean>(business.favorite || false);
  const [vote, setVote] = useState<string | null>(null); // "yes" or "no"

  useEffect(() => {
    // Prevent background scrolling when the modal is open
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleSubmit = () => {
    // Save user's rating, review, vote, and favorite status
    console.log("Rating:", rating);
    console.log("Review:", review);
    console.log("Favorite:", favorite);
    console.log("Vote:", vote);

    // Simulate updating business reviews count
    business.reviews += 1;

    alert("Your feedback has been saved!");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 h-[60vh] flex flex-col">
        {/* Scrollable Content =/}
        <div className="flex-1 overflow-y-auto">
          {/* Business Image and Close Button =/}
          <div className="relative">
            <Image
              src={business.image}
              alt={business.name}
              width={800}
              height={400}
              className="object-cover w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <IoMdClose />
            </button>
          </div>

          {/* Business Details =/}
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-800">
                {business.name}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base mb-4">
                {business.description}
              </p>
              <div className="text-blue-500 text-sm mb-4 flex items-center">
                <FaLocationDot size={15} className="mr-1" />
                <span>{business.location.join(", ")}</span>
              </div>
              <div className="mb-4">
                <p className="text-sm sm:text-lg md:text-xl lg:text-4xl font-bold">
                  {business.rating.toFixed(1)}
                </p>
                <div className="text-blue-500 flex mb-2">
                  {Array.from({ length: Math.floor(business.rating) }).map(
                    (_, index) => (
                      <MdStarRate key={index} size={15} />
                    )
                  )}
                </div>
                <p className="text-sm">{business.reviews} reviews</p>
              </div>
            </div>

            {/* User Interactions =/}
            <div className="w-full mt-4 space-y-4">
              <button
                onClick={() => setFavorite(!favorite)}
                className="flex items-center space-x-2 text-blue-600"
              >
                {favorite ? (
                  <MdFavorite size={24} />
                ) : (
                  <MdFavoriteBorder size={24} />
                )}
                <span>{favorite ? "Favorited" : "Set as Favorite"}</span>
              </button>

              <div>
                <h3 className="text-lg font-bold mb-2">Your Rating:</h3>
                <StarRating maxStars={5} onRatingChange={setRating} />
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">Your Review:</h3>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full border border-gray-300 rounded-md p-2"
                  rows={4}
                  placeholder="Write your review here..."
                ></textarea>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">Your Vote:</h3>
                <div className="flex space-x-4">
                  <button
                    onClick={() => setVote("yes")}
                    className={`py-2 px-4 rounded-md ${
                      vote === "yes"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    Vote Yes
                  </button>
                  <button
                    onClick={() => setVote("no")}
                    className={`py-2 px-4 rounded-md ${
                      vote === "no"
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    Vote No
                  </button>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
*/

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { MdStarRate, MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Business } from "@/lib/type";
import StarRating from "./StarRating";

interface BusinessDetailsProps {
  business: Business;
  onClose: () => void;
}

const BusinessDetails: React.FC<BusinessDetailsProps> = ({
  business,
  onClose,
}) => {
  const [rating, setRating] = useState<number>(business.userRating || 0);
  const [review, setReview] = useState<string>(business.userReview || "");
  const [favorite, setFavorite] = useState<boolean>(business.favorite);
  const [vote, setVote] = useState<string | null>(business.userVote || null);
  const [isEditing, setIsEditing] = useState<boolean>(
    !business.userRating && !business.userReview && !business.userVote
  );

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handleSubmit = () => {
    // Simulate saving user input
    business.userRating = rating;
    business.userReview = review;
    business.favorite = favorite;
    business.userVote = vote;

    // Update reviews count if it's a new review
    if (!business.userReview) {
      business.reviews += 1;
    }

    alert("Your feedback has been saved!");
    setIsEditing(false);
    onClose();
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full mx-4 h-[60vh] flex flex-col">
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="relative">
            <Image
              src={business.image}
              alt={business.name}
              width={800}
              height={400}
              className="object-cover w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-lg"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full py-2 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <IoMdClose />
            </button>
          </div>

          <div className="p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-gray-800">
              {business.name}
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              {business.description}
            </p>
            <div className="text-blue-500 text-sm mb-4 flex items-center">
              <FaLocationDot size={15} className="mr-1" />
              <span>{business.location.join(", ")}</span>
            </div>
            <div className="mb-4">
              <p className="text-sm sm:text-lg md:text-xl lg:text-4xl font-bold">
                {business.rating.toFixed(1)}
              </p>
              <div className="text-blue-500 flex mb-2">
                {Array.from({ length: Math.floor(business.rating) }).map(
                  (_, index) => (
                    <MdStarRate key={index} size={15} />
                  )
                )}
              </div>
              <p className="text-sm">{business.reviews} reviews</p>
            </div>

            <div className="w-full mt-4 space-y-4">
              <button
                onClick={() => setFavorite(!favorite)}
                className="flex items-center space-x-2 text-blue-600"
              >
                {favorite ? (
                  <MdFavorite size={24} />
                ) : (
                  <MdFavoriteBorder size={24} />
                )}
                <span>{favorite ? "Favorited" : "Set as Favorite"}</span>
              </button>

              <div>
                <h3 className="text-lg font-bold mb-2">Your Rating:</h3>
                <StarRating
                  maxStars={5}
                  initialRating={rating}
                  onRatingChange={setRating}
                  readOnly={!isEditing}
                />
              </div>

              {isEditing ? (
                <>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Your Review:</h3>
                    <textarea
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      className="w-full border border-gray-300 rounded-md p-2"
                      rows={4}
                      placeholder="Write your review here..."
                    ></textarea>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">Your Vote:</h3>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => setVote("yes")}
                        className={`py-2 px-4 rounded-md ${
                          vote === "yes"
                            ? "bg-green-500 text-white"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        Vote Yes
                      </button>
                      <button
                        onClick={() => setVote("no")}
                        className={`py-2 px-4 rounded-md ${
                          vote === "no"
                            ? "bg-red-500 text-white"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        Vote No
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm">
                    <strong>Review:</strong> {review || "No review provided"}
                  </p>
                  <p className="text-sm">
                    <strong>Vote:</strong> {vote || "No vote provided"}
                  </p>
                  <button
                    onClick={handleEdit}
                    className="py-2 px-4 rounded-md bg-blue-500 text-white"
                  >
                    Edit Feedback
                  </button>
                </>
              )}
            </div>

            {/* Submit Button */}
            <div className="p-4">
              {isEditing && (
                <button
                  onClick={handleSubmit}
                  className="w-full py-2 px-4 rounded-md bg-blue-500 text-white"
                >
                  Submit Feedback
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
