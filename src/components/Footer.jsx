import { FaRegCopyright } from "react-icons/fa";
import { useTheme } from "../theme/ThemeToggler";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`w-full mt-16 sm:mt-20 py-6 sm:py-8 px-4 sm:px-6
        border-t transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-gray-950 border-gray-800 text-gray-400"
            : "bg-white border-gray-200 text-gray-600"
        }`}
    >
      <div
        className="
          max-w-6xl mx-auto
          flex flex-col items-center
          gap-2 sm:gap-3
          text-center
        "
      >
        <h3
          className="
            flex items-center gap-2
            text-xs sm:text-sm
            font-medium
          "
        >
          <FaRegCopyright className="text-[10px] sm:text-xs" />
          <span>2026 KeyForge</span>
        </h3>

        <p
          className="
            text-[11px] sm:text-xs md:text-sm
            max-w-xs sm:max-w-md
            leading-relaxed
          "
        >
          Your passwords are generated locally. Nothing is stored or tracked.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
