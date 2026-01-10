import { useTheme } from "../theme/ThemeToggler";

const Card = ({ heading, discription, image }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full border-l-4 rounded-2xl
        p-5 sm:p-6 md:p-7
        flex flex-col items-center text-center
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-2xl
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
        className={`mb-4
          w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18
          ${theme === "dark" ? "brightness-90" : ""}`}
      />

      {/* Heading */}
      <h3
        className={`font-semibold mb-2
          text-lg sm:text-xl
          ${theme === "dark" ? "text-white" : "text-gray-800"}`}
      >
        {heading}
      </h3>

      {/* Description */}
      <p
        className={`leading-relaxed
          text-sm sm:text-base
          ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
      >
        {discription}
      </p>
    </div>
  );
};

export default Card;
