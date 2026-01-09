import { useTheme } from "../theme/ThemeToggler";

const Card = ({ heading, discription, image}) => {
  const { theme } = useTheme();

  return (
    <div
      className={`border-l-4 rounded-xl p-6 flex flex-col items-center text-center
        transition-all duration-300 hover:shadow-2xl
        ${
          theme === "dark"
            ? "bg-gray-900 border-gray-700 shadow-black/40"
            : "bg-gray-50 border-gray-400 shadow-lg"
        }`}
    >
      {/* Icon */}
      <img
        src={image}
        alt="icon"
        className={`w-16 h-16 mb-4 ${
          theme === "dark" ? "brightness-90" : ""
        }`}
      />

      {/* Heading */}
      <h3
        className={`text-xl font-semibold mb-2
          ${theme === "dark" ? "text-white" : "text-gray-800"}`}
      >
        {heading}
      </h3>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed
          ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
      >
        {discription}
      </p>
    </div>
  );
};

export default Card;
