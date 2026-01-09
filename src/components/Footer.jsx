import { FaRegCopyright } from "react-icons/fa";
import { useTheme } from "../theme/ThemeToggler";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`w-full mt-20 py-6 px-4 border-t transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-gray-950 border-gray-800 text-gray-400"
            : "bg-white border-gray-200 text-gray-600"
        }`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-2 text-center">
        <h3 className="flex items-center gap-2 text-sm font-medium">
          <FaRegCopyright className="text-xs" />
          <span>2026 KeyForge</span>
        </h3>

        <p className="text-xs max-w-md leading-relaxed">
          Your passwords are generated locally. Nothing is stored or tracked.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
