import { useTheme } from "../theme/ThemeToggler";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <header
      id="home"
      className={`w-full min-h-[calc(100vh-80px)]
      flex flex-col items-center justify-center
      text-center px-4 sm:px-6 md:px-10 lg:px-16
      transition-colors duration-300
      ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}
    >
      {/* Version Badge */}
      <h1
        className={`px-4 py-2 rounded-full font-medium mb-4 text-sm
        ${
          theme === "dark"
            ? "text-white bg-gray-900"
            : "text-white bg-gray-900 shadow-lg"
        }`}
      >
        Just released v1.0.0
      </h1>

      {/* Main Heading */}
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
        className={`mt-5 sm:mt-6
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
        className="mt-8 sm:mt-10 flex flex-col sm:flex-row
        items-center gap-4 sm:gap-6"
      >
        <a href="#generator">
          <button
            className="w-72 sm:w-auto px-8 py-3 rounded-full
            bg-blue-600 text-white font-semibold
            hover:bg-blue-700 transition
            shadow-[0_10px_30px_-8px_rgba(37,99,235,0.6)]"
          >
            Generate Key
          </button>
        </a>

        <a href="#tips">
          <button
            className={`w-72 sm:w-auto px-8 py-3 rounded-full font-semibold transition
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
