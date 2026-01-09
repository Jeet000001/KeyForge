import React from "react";
import Accordion from "./Accordion";

const FaQ = () => {
  return (
    <div>
      <h2>Got Questions? We’ve Got Answers</h2>
      <p>
        Curious about how this password generator works? You’ll find all the
        answers right here.
      </p>
      <div>
        <Accordion
          title="Is this Password Generator safe to use?"
          description="Absolutely. This random password generator uses advanced entropy to create strong, unpredictable passwords with letters, numbers, and symbols. All passwords are generated locally on your device, nothing is sent or stored online. Not even KeyForge can see, track, or save your passwords, giving you complete privacy and control."
        />
        <Accordion
          title="Why should I use a password generator?"
          description="You should use a password generator because it creates strong, random passwords that are extremely difficult to guess or crack, helps you avoid reusing weak passwords across multiple accounts, protects you from common security threats and data breaches, and improves your overall online safety with minimal effort."
        />
      </div>
    </div>
  );
};

export default FaQ;
