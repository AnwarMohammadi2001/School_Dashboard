import React, { useState } from "react";

const SelectTeacher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("Select s subject");

  const subjects = [
    "ReactJs",
    "Html & CSS",
    "Python",
    "NodeJs",
    "JavaCript",
    "Tailwind",
    "NextJS",
    "Laravel",
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (subject) => {
    setSelectedSubject(subject);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-56">
      <button
        onClick={toggleDropdown}
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md flex justify-between items-center"
      >
        {selectedSubject}
        <svg
          className={`w-5 h-5 transition-transform ${
            isOpen ? "transform rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-72 overflow-y-auto">
          {subjects.map((subject, index) => (
            <li
              key={index}
              onClick={() => handleSelect(subject)}
              className="px-4 py-2 hover:bg-gray-100 w-full cursor-pointer"
            >
              {subject}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectTeacher;
