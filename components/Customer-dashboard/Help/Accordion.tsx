import React from "react";

interface AccordionProps {
  question: string;
  answer: string;
  index: number;
  toggleFAQ: () => void;
  openIndex: number | null;
}

export const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  index,
  openIndex,
  toggleFAQ,
}) => {
  return (
    <div className="border-b border-gray-200">
      <button
        className="w-full text-left flex justify-between items-center py-4 text-gray-800 font-medium focus:outline-none"
        onClick={() => {
          toggleFAQ();
        }}
      >
        {question}
        <span>{openIndex === index ? "-" : "+"}</span>
      </button>
      {openIndex === index && (
        <div className="text-gray-600 px-4 pb-4">{answer}</div>
      )}
    </div>
  );
};
