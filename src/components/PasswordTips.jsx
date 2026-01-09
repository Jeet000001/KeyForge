import Card from "./Card";
import { useTheme } from "../theme/ThemeToggler";
import key from "../images/key.png";
import lock from "../images/lock.png";
import unique from "../images/unique.png";

const PasswordTips = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`max-w-6xl mx-auto p-6 flex flex-col items-center justify-center transition-colors duration-300
        ${theme === "dark" ? "bg-gray-950" : "bg-white"}`}
    >
      {/* Section Heading */}
      <h1
        className={`text-3xl md:text-4xl font-bold text-center mb-6 max-w-4xl
          ${theme === "dark" ? "text-white" : "text-gray-800"}`}
      >
        Need a quick refresher on what makes a password truly secure?
      </h1>

      {/* Description */}
      <p
        className={`text-center mb-12 max-w-3xl mx-auto leading-relaxed
          ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
      >
        Here are our top security tips for creating strong, hard-to-crack
        passwords—beyond simply using our password generator. Focus on
        maximizing password length, increasing complexity, and ensuring every
        password is completely unique to significantly reduce the risk of
        attacks.
      </p>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl">
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
    </section>
  );
};

export default PasswordTips;
