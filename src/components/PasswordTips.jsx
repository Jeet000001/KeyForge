import Card from "./Card";
import { useTheme } from "../theme/ThemeToggler";
import key from "../images/key.png";
import lock from "../images/lock.png";
import unique from "../images/unique.png";

const PasswordTips = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 md:py-10
      transition-colors duration-300
      ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Heading */}
        <h1
          className={`text-center font-extrabold tracking-tight
          text-2xl sm:text-3xl md:text-4xl
          max-w-4xl
          ${theme === "dark" ? "text-white" : "text-gray-800"}`}
        >
          Need a quick refresher on what makes a password truly secure?
        </h1>

        {/* Description */}
        <p
          className={`mt-6 md:mt-8 text-center leading-relaxed
          text-sm sm:text-base md:text-lg
          max-w-3xl
          ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
        >
          Here are our top security tips for creating strong, hard-to-crack
          passwords—beyond simply using our password generator. Focus on
          maximizing password length, increasing complexity, and ensuring every
          password is completely unique to significantly reduce the risk of
          attacks.
        </p>

        {/* Cards Section */}
        <div
          className="mt-14 grid gap-8 sm:gap-10
          grid-cols-1 sm:grid-cols-2 md:grid-cols-3
          max-w-5xl w-full"
        >
          <Card
            image={key}
            heading="Long"
            discription="The longer a password is, the harder it becomes to crack. For strong security, your password should be at least 10 characters in length."
          />

          <Card
            image={lock}
            heading="Complex"
            discription="Strong passwords combine letters, numbers, uppercase and lowercase characters, and symbols to create an unpredictable string that doesn’t resemble real words, names, or common patterns."
          />

          <Card
            image={unique}
            heading="Unique"
            discription="A strong password should be different for every account to minimize the risk if one of your accounts gets hacked."
          />
        </div>
      </div>
    </section>
  );
};

export default PasswordTips;
