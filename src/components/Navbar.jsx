import { useState } from "react";
import Button from "./Button";
import { useTheme } from "../theme/ThemeToggler";
import {
  MdOutlineLightMode,
  MdOutlineDarkMode,
  MdMenu,
  MdClose,
} from "react-icons/md";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`w-full px-6 py-4 sticky top-0 z-50 transition-all duration-300
        ${
          theme === "dark"
            ? "bg-gray-950 text-white border-b border-gray-800"
            : "bg-white text-gray-900 shadow-md border-b border-gray-100"
        }`}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold doto">KeyForge</h1>

        {/* Right Side (Theme Toggle + Hamburger) */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Theme Toggle (OUTSIDE hamburger) */}
          <Button
            logo={
              theme === "dark" ? (
                <MdOutlineLightMode />
              ) : (
                <MdOutlineDarkMode />
              )
            }
            click={toggleTheme}
            style="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
          />

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl"
          >
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className={`font-medium transition ${
              theme === "dark"
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Password Generator
          </a>

          <a
            href="#"
            className={`font-medium transition ${
              theme === "dark"
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            FAQ
          </a>

          {/* Theme Toggle (Desktop) */}
          <Button
            logo={
              theme === "dark" ? (
                <MdOutlineLightMode />
              ) : (
                <MdOutlineDarkMode />
              )
            }
            click={toggleTheme}
            style="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300
          ${
            menuOpen
              ? "max-h-40 opacity-100 mt-4"
              : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-4">
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className={`font-medium transition ${
              theme === "dark"
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            Password Generator
          </a>

          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            className={`font-medium transition ${
              theme === "dark"
                ? "text-gray-300 hover:text-blue-400"
                : "text-gray-700 hover:text-blue-600"
            }`}
          >
            FAQ
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
