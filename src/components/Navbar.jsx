import Button from "./Button";
import { useTheme } from "../theme/ThemeToggler";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`w-full px-6 py-4 flex items-center justify-between sticky top-0 z-50
        transition-all duration-300
        ${
          theme === "dark"
            ? "bg-gray-950 text-white border-b border-gray-800"
            : "bg-white text-gray-900 shadow-md border-b border-gray-100"
        }`}
    >
      {/* Logo */}
      <h1
        className={`text-2xl font-extrabold doto ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        KeyForge
      </h1>

      {/* Links + Button */}
      <div className="flex items-center gap-6">
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

        <Button
          logo={
            theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />
          }
          click={toggleTheme}
          style="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
        />
      </div>
    </nav>
  );
};

export default Navbar;
