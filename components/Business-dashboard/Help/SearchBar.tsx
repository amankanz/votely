/*
import React, { useState } from "react";

interface SearchBarProps {
  placeholder: string;
  buttonLabel: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  buttonLabel,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      alert("Please enter a search query.");
      return;
    }

    // Example search logic
    const faqData = [
      {
        question: "How do I create a new poll?",
        answer: "Go to the 'Polls' section and click 'Create Poll'.",
      },
      {
        question: "How do I analyze poll results?",
        answer: "Visit the 'Analytics' section.",
      },
      {
        question: "How do I manage my subscription?",
        answer: "Go to the 'Subscription' settings.",
      },
    ];

    const results = faqData.filter((faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (results.length > 0) {
      console.log("Search results:", results);
    } else {
      alert("No results found.");
    }
  };

  return (
    <div className="flex items-center space-x-2 w-full max-w-lg">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
      >
        {buttonLabel}
      </button>
    </div>
  );
};
*/

/*
"use client";

import React, { useState } from "react";

interface SearchBarProps {
  placeholder: string;
  buttonLabel: string;
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  buttonLabel,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      alert("Please enter a search query.");
      return;
    }
    onSearch(searchQuery);
  };

  return (
    <div className="flex items-center space-x-2 w-full max-w-lg">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
      >
        {buttonLabel}
      </button>
    </div>
  );
};
*/

/*
"use client";

import React, { useState } from "react";

interface SearchBarProps {
  placeholder: string;
  buttonLabel: string;
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  buttonLabel,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      alert("Please enter a search query.");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      onSearch(searchQuery);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="flex items-center space-x-2 w-full max-w-lg">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : buttonLabel}
      </button>
    </div>
  );
};
*/

import React, { useState } from "react";

interface SearchBarProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); // Notify parent of changes
  };

  return (
    <div className="flex items-center space-x-2 w-full max-w-lg">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder={placeholder}
        className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
