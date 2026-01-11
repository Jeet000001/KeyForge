import { useTheme } from "../theme/ThemeToggler";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <header
      className={`w-full flex flex-col items-center justify-center 
      text-center px-4 sm:px-6 md:px-10 lg:px-16 pt-14 md:pt-10 md:pb-10
      transition-colors duration-300
      ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}
    >
      <h1
        className={`px-4 py-3 rounded-full font-sans font-medium mb-5 ${
          theme === "dark"
            ? "text-white bg-gray-900"
            : "text-white bg-gray-900 shadow-2xl"
        }`}
      >
        Just released v1.0.0
      </h1>
      {/* Heading */}
      <h1
        className={`font-extrabold tracking-tight leading-tight
        text-3xl sm:text-4xl md:text-5xl lg:text-6xl
        max-w-5xl
        ${theme === "dark" ? "text-white" : "text-gray-900"}`}
      >
        Generate Secure, Unbreakable Passwords Instantly
      </h1>

      {/* Subheading */}
      <p
        className={`mt-6 sm:mt-7 md:mt-8
        text-base sm:text-lg md:text-xl
        max-w-xl md:max-w-2xl
        leading-relaxed
        ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
      >
        Instantly generate cryptographically secure, high-entropy passwords
        engineered to protect your online accounts against brute-force attacks,
        data breaches, and unauthorized access.
      </p>

      {/* CTA Buttons */}
      <div
        className="mt-10 sm:mt-12 flex flex-col sm:flex-row 
        items-center gap-4 sm:gap-6"
      >
        <a href="#generator">
          <button
            className="w-80 sm:w-auto px-8 py-3 rounded-full bg-blue-600 
          text-white font-semibold
          hover:bg-blue-700 transition
          shadow-[0_10px_30px_-8px_rgba(37,99,235,0.6)]"
          >
            Generate Key
          </button>
        </a>

        <a href="#tips">
          <button
            className={`w-80 sm:w-auto px-8 py-3 rounded-full font-semibold transition
            ${
              theme === "dark"
                ? "border border-gray-600 text-gray-300 hover:bg-gray-800"
                : "border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            Learn More
          </button>
        </a>
      </div>
    </header>
  );
};

export default Hero;
