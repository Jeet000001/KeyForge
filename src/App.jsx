import FaQ from "./components/FaQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import KeyGenerator from "./components/KeyGenerator";
import Navbar from "./components/Navbar";
import PasswordTips from "./components/PasswordTips";
import { useTheme } from "./theme/ThemeToggler";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300
        ${theme === "dark" ? "bg-gray-950 text-white" : "bg-white text-black"}`}
    >
      <Navbar />
      <div >
        <section id="home">
          <Hero />
        </section>

        <section id="generator">
          <KeyGenerator />
        </section>

        <section id="tips">
          <PasswordTips />
        </section>

        <section id="faq">
          <FaQ />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default App;
