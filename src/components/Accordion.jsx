import React, { useState } from "react";
import { RxPlus } from "react-icons/rx";
import { useTheme } from "../theme/ThemeToggler";

const Accordion = ({ title, description }) => {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();

  const bgColor = theme === "dark" ? "bg-gray-900" : "bg-white";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-300";
  const hoverBg = theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-50";
  const openBg = theme === "dark" ? "bg-gray-800" : "bg-gray-100";
  const textColor = theme === "dark" ? "text-gray-200" : "text-gray-800";
  const descriptionColor = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const iconBg = theme === "dark" ? "bg-gray-700" : "bg-gray-100";
  const iconOpenBg = theme === "dark" ? "bg-blue-600 text-white" : "bg-blue-500 text-white";

  return (
    <div className="w-full flex justify-center px-4">
      <div
        className={`w-full max-w-2xl mb-3 rounded-2xl border ${borderColor} ${bgColor} overflow-hidden
          transition-all duration-500 ease-in-out
          ${open ? "shadow-xl" : "shadow-md"}`}
      >
        <div
          onClick={() => setOpen(!open)}
          role="button"
          tabIndex={0}
          className={`cursor-pointer flex items-center justify-between
            px-6 py-5 font-semibold transition-colors duration-300
            ${open ? openBg : hoverBg}`}
        >
          <span
            className={`text-base md:text-lg transition-all duration-300 
              ${open ? "text-blue-500 translate-x-1" : textColor}`}
          >
            {title}
          </span>

          <span
            className={`transition-all duration-500 ease-out p-2 rounded-full
              ${open ? iconOpenBg + " rotate-45" : iconBg + " text-gray-600 rotate-0"}`}
          >
            <RxPlus size={20} />
          </span>
        </div>

        <div
          className={`grid transition-all duration-500 ease-in-out
            ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
        >
          <div className="overflow-hidden">
            <div
              className={`px-6 pb-6 leading-relaxed transition-all duration-700
                ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"} ${descriptionColor}`}
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