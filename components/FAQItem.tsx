"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

interface FAQItemProps {
  question: string;
  answer: string;
}

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-lg">{question}</span>
        {isOpen ? (
          <FiChevronUp className="text-xl" />
        ) : (
          <FiChevronDown className="text-xl" />
        )}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
}

export default FAQItem;
