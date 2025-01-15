/*
import React, { useState } from "react";

interface FeedbackFormProps {
  onSubmit: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic if needed
    onSubmit();
  };

  return (
    <form
      className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      {/* Rating Section =/}
      <div>
        <h2 className="text-lg font-medium mb-4">
          How would you rate the Votely platform?
        </h2>
        <div className="space-y-2">
          {[
            "1 - Not useful at all",
            "2 - Slightly useful",
            "3 - Moderately useful",
            "4 - Very useful",
            "5 - Extremely useful",
          ].map((option, index) => (
            <div
              key={index}
              className={`flex items-center p-2 rounded-lg cursor-pointer ${
                rating === index + 1 ? "bg-orange-100" : "hover:bg-orange-50"
              }`}
              onClick={() => setRating(index + 1)}
            >
              <input
                type="radio"
                id={`rating-${index}`}
                name="rating"
                value={index + 1}
                className="h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-400"
                checked={rating === index + 1}
                onChange={() => setRating(index + 1)}
              />
              <label htmlFor={`rating-${index}`} className="ml-3 text-gray-700">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Suggestions Section =/}
      <div>
        <h2 className="text-lg font-medium mb-2">Additional Feedback ✍️</h2>
        <textarea
          rows={4}
          placeholder="Please share any additional feedback here"
          className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Follow-Up Checkbox =/}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="follow-up"
          name="follow-up"
          className="h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-400"
        />
        <label htmlFor="follow-up" className="ml-3 text-gray-700">
          Yes, I’d like to be contacted for follow-up
        </label>
      </div>

      {/* Feature Request Section =/}
      <div>
        <h2 className="text-lg font-medium mb-4">
          Which features would you like to see added to the platform? 💡
        </h2>
        {["Feature Voting", "Business Analytics", "Customizable Awards"].map(
          (feature, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`feature-${index}`}
                name={`feature-${index}`}
                className="h-4 w-4 text-orange-500 border-gray-300 focus:ring-orange-400"
              />
              <label
                htmlFor={`feature-${index}`}
                className="ml-3 text-gray-700"
              >
                {feature}
              </label>
            </div>
          )
        )}
      </div>

      {/* Submit Button =/}
      <button
        type="submit"
        className="w-full px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition"
      >
        Submit Feedback ✅
      </button>
    </form>
  );
};

export default FeedbackForm;
*/

import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";

interface FeedbackFormProps {
  onSubmit: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ onSubmit }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [followUp, setFollowUp] = useState<boolean>(false); // Track follow-up checkbox value
  const [error, setError] = useState<string | null>(null);

  const features = [
    "Feature Voting",
    "Business Analytics",
    "Customizable Awards",
  ];

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const validateForm = () => {
    if (!rating) {
      setError("Please select a rating.");
      return false;
    }
    if (feedback.trim() === "") {
      setError("Please provide additional feedback.");
      return false;
    }
    if (selectedFeatures.length === 0) {
      setError("Please select at least one feature.");
      return false;
    }
    setError(null);
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };

  return (
    <form
      className="space-y-6 bg-gray-50 p-6 rounded-lg shadow-md"
      onSubmit={handleSubmit}
    >
      {/* Rating Section */}
      <div>
        <h2 className="text-lg font-medium mb-4">
          How would you rate the Votely platform?
        </h2>
        <div className="space-y-2">
          {[
            "1 - Not useful at all",
            "2 - Slightly useful",
            "3 - Moderately useful",
            "4 - Very useful",
            "5 - Extremely useful",
          ].map((option, index) => (
            <div
              key={index}
              className={`flex items-center p-2 rounded-lg cursor-pointer ${
                rating === index + 1 ? "bg-blue-100" : "hover:bg-blue-50"
              }`}
              onClick={() => setRating(index + 1)}
            >
              <input
                type="radio"
                id={`rating-${index}`}
                name="rating"
                value={index + 1}
                className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
                checked={rating === index + 1}
                onChange={() => setRating(index + 1)}
              />
              <label htmlFor={`rating-${index}`} className="ml-3 text-gray-700">
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Suggestions Section */}
      <div>
        <h2 className="text-lg font-medium mb-2">Additional Feedback ✍️</h2>
        <textarea
          rows={4}
          placeholder="Please share any additional feedback here"
          className="w-full p-3 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
      </div>

      {/* Follow Up */}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="followUp"
          name="followUp"
          className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
          checked={followUp}
          onChange={() => setFollowUp((prev) => !prev)} // Toggle follow-up state
        />
        <label htmlFor="followUp" className="ml-3 text-gray-700">
          Yes, I&#39;d like to be contacted for follow-up
        </label>
      </div>

      {/* Feature Request Section */}
      <div>
        <h2 className="text-lg font-medium mb-4">
          Which features would you like to see added to the platform? 💡
        </h2>
        {features.map((feature, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`feature-${index}`}
              name={`feature-${index}`}
              className="h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400"
              checked={selectedFeatures.includes(feature)}
              onChange={() => handleFeatureToggle(feature)}
            />
            <label htmlFor={`feature-${index}`} className="ml-3 text-gray-700">
              {feature}
            </label>
          </div>
        ))}
      </div>

      {/* Error alert */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-6 py-3 flex justify-center items-center gap-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
      >
        <span>Submit</span>
        <span>
          <IoMdSend size={20} />
        </span>
      </button>
    </form>
  );
};

export default FeedbackForm;
