import Accordion from "./Accordion";
import { useTheme } from "../theme/ThemeToggler";

const FaQ = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`w-full px-4 sm:px-6 md:px-10 sm:py-16 md:pt-5 
        flex flex-col items-center transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-gray-950 text-gray-300"
            : "bg-white text-gray-900"
        }`}
    >
      {/* Heading */}
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold
          mb-4 text-center
          ${theme === "dark" ? "text-white" : "text-gray-900"}`}
      >
        Got Questions? We’ve Got Answers
      </h2>

      {/* Subheading */}
      <p
        className={`text-sm sm:text-base md:text-lg
          text-center max-w-3xl
          mb-10 sm:mb-12 leading-relaxed
          ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
      >
        Curious about how this password generator works? You’ll find all the
        answers right here.
      </p>

      {/* Accordions */}
      <div className="w-full max-w-4xl flex flex-col gap-3 sm:gap-4">
        <Accordion
          title="Is this Password Generator safe to use?"
          description="Absolutely. This random password generator uses advanced entropy to create strong, unpredictable passwords with letters, numbers, and symbols. All passwords are generated locally on your device, nothing is sent or stored online. Not even KeyForge can see, track, or save your passwords, giving you complete privacy and control."
        />

        <Accordion
          title="Why should I use a password generator?"
          description="You should use a password generator because it creates strong, random passwords that are extremely difficult to guess or crack, helps you avoid reusing weak passwords across multiple accounts, protects you from common security threats and data breaches, and improves your overall online safety with minimal effort."
        />

        <Accordion
          title="Do I need a unique password for every account?"
          description="Having a unique, complex password for every account is essential, especially since leaked passwords often end up in breach databases or on the dark web. Reusing passwords makes it easier for attackers to access multiple accounts at once. If managing strong passwords feels overwhelming, our password generator makes it simple."
        />

        <Accordion
          title="What is the best kind of password generator?"
          description="The best password generators use cryptographic entropy to create truly random and secure passwords. KeyForge is built to do exactly that—without complexity or frustration. All passwords are generated locally on your device, with nothing transmitted or stored online."
        />

        <Accordion
          title="How do I get a random password?"
          description="KeyForge’s random password generator lets you instantly create strong passwords in your browser. Adjust length and character types, check strength indicators, and copy your password securely with one click."
        />

        <Accordion
          title="Can password generators be hacked?"
          description="KeyForge generates passwords locally on your device and never sends data over the internet. Nothing is stored or tracked, so hackers can’t access your passwords."
        />

        <Accordion
          title="Is there a secure way to store passwords?"
          description="Yes! Use a trusted password manager with encryption and two-factor authentication. Never share passwords or store them in plain text."
        />

        <Accordion
          title="What makes a password safe?"
          description="A safe password is long, random, and unique. Use at least 16 characters with symbols, avoid reuse, and rely on a password generator like KeyForge."
        />
      </div>
    </section>
  );
};

export default FaQ;
