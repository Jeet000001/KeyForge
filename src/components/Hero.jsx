import { useTheme } from "../theme/ThemeToggler";

const Hero = () => {
  const { theme } = useTheme();

  return (
    <header
      className={`w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-6 pt-10 transition-colors duration-300
        ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}
    >
      {/* Heading */}
      <h1
        className={`text-4xl md:text-6xl font-bold tracking-tight max-w-4xl
          ${theme === "dark" ? "text-white" : "text-gray-900"}`}
      >
        Generate Secure, Unbreakable Passwords Instantly
      </h1>

      {/* Subheading */}
      <p
        className={`mt-6 text-lg md:text-xl max-w-2xl leading-relaxed
          ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
      >
        Instantly generate cryptographically secure, high-entropy passwords
        engineered to protect your online accounts against brute-force attacks,
        data breaches, and unauthorized access.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex items-center gap-4">
        <button
          className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium 
                     hover:bg-blue-700 transition shadow-[0_6px_20px_-6px_rgba(37,99,235,0.6)]"
        >
          Generate Key
        </button>

        <button
          className={`px-6 py-3 rounded-full font-medium transition
            ${
              theme === "dark"
                ? "border border-gray-600 text-gray-300 hover:bg-gray-800"
                : "border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
        >
          Learn more
        </button>
      </div>
    </header>
  );
};

export default Hero;
