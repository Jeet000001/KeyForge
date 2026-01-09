import React, { useState } from "react";
import { RxPlus } from "react-icons/rx";

const Accordion = ({ title, description }) => { 
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex justify-center px-4">
      <div
        className={`w-full max-w-2xl mb-3 rounded-2xl border border-gray-300 bg-white overflow-hidden
        transition-all duration-500 ease-in-out
        ${open ? "shadow-xl border-gray-200" : "shadow-md"}`}
      >
        {/* Header */}
        <div
          onClick={() => setOpen(!open)}
          role="button"
          tabIndex={0}
          className={`cursor-pointer flex items-center justify-between
                     px-6 py-5 font-semibold transition-colors duration-300
                     ${open ? "bg-gray-100" : "hover:bg-gray-50"}`}
        >
          <span
            className={`text-base md:text-lg transition-all duration-300 
            ${open ? "text-blue-600 translate-x-1" : "text-gray-800"}`}
          >
            {title}
          </span>

          {/* Icon - Plus rotating to Cross */}
          <span
            className={`transition-all duration-500 ease-out p-2 rounded-full
            ${open ? "bg-blue-500 text-white rotate-45" : "bg-gray-100 text-gray-600 rotate-0"}`}
          >
            <RxPlus size={20} />
          </span>
        </div>

        {/* Smooth Content Animation using Grid */}
        <div
          className={`grid transition-all duration-500 ease-in-out
          ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            <div
              className={`px-6 pb-6 text-gray-600 leading-relaxed transition-all duration-700
              ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
            >
              {description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;