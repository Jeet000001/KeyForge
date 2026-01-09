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
        <Accordion
        title="Do I need a unique password for every account?"
        description="Having a unique, complex password for every account is essential, especially since leaked passwords often end up in breach databases or on the dark web. Reusing passwords makes it easier for attackers to access multiple accounts at once. If managing strong passwords feels overwhelming, our password generator makes it simple. It quickly creates secure passwords and helps protect your identity from hackers and cybercriminals."
        />
        <Accordion />
      </div>
    </div>
  );
};

export default FaQ;
