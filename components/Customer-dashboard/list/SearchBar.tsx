"use client";

import React, { useState } from "react";
import { MdSearch } from "react-icons/md";

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-6 flex flex-row-reverse items-center gap-4 p-4 bg-white border border-gray-300 rounded-lg">
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search for a business"
        className="w-full text-gray-700 focus:outline-none"
      />
      <span className="text-gray-400">
        <MdSearch size={20} />
      </span>
    </div>
  );
};

export default SearchBar;
