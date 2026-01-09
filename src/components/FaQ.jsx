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
        <Accordion 
        title="What is the best kind of password generator?"
        description="The best password generators use cryptographic entropy to create truly random and secure passwords. KeyForge is built to do exactly that—without complexity or frustration. All passwords are generated locally on your device, with nothing transmitted or stored online. We never create fake passwords or collect your data, ensuring complete privacy. With KeyForge, you can confidently generate strong, unique passwords for both online and offline use."
        />
        <Accordion 
        title="How do I get a random password?"
        description="KeyForge’s random password generator makes securing your accounts effortless. You can instantly create strong, random passwords right in your browser. Use the length toggle and character selection to customize your password. The generated password area shows its strength, from Very Weak to Very Strong. Click or tap the Copy button to save your password on any device. Apply it to your accounts to keep them extra secure and protected."
        />

        <Accordion 
        title="Can password generators be hacked?"
        description="You’re safer with KeyForge’s random password generator because your passwords are generated locally on your device and never sent over the internet. We don’t store or track anything, so hackers can’t access your data. Only you can see the characters your device generates in your browser. Plus, KeyForge is backed by a trusted cybersecurity brand, giving you extra confidence in your online safety."
        />
        <Accordion 
        title="Is there a secure way to store passwords?"
        description="Yes! You can store passwords safely using a secure password manager with features like two-factor authentication and encrypted syncing. Always avoid sharing your passwords and steer clear of scam websites to keep your accounts fully protected."
        />
        <Accordion 
        title="What makes a password safe?"
        description="A safe password is strong, unique, and hard to crack. Follow these tips to stay secure: Use at least 16 characters with a mix of letters, numbers, and symbols. Never reuse passwords across multiple accounts. Avoid saving passwords in your browser to prevent unauthorized access. Use a password generator, like KeyForge, to create strong, random passwords instantly. Store passwords in a secure password manager, not in plain text or unsecured locations."
        />
      </div>
    </div>
  );
};

export default FaQ;
