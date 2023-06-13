import React, { useState } from "react";

const FAQitem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 w-full">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={toggleAnswer}
      >
        <h2 className="font-rubik font-normal text-xl text-[#1C1F35]">
          {question}
        </h2>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
      </div>
      {isOpen && (
        <p className="mt-5 font-krub font-medium text-lg text-[#666C89]">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQitem;
