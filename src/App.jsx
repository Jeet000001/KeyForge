import FaQ from "./components/FaQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import KeyGenerator from "./components/KeyGenerator";
import Navbar from "./components/Navbar";
import PasswordTips from "./components/PasswordTips";
import { useTheme } from "./theme/ThemeToggler";

const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300
        ${theme === "dark" ? "bg-gray-950 text-white" : "bg-white text-black"}`}
    >
      <Navbar />
      <div className="flex flex-col gap-10">
        <Hero />
        <KeyGenerator />
        <PasswordTips />
        <FaQ />
        <Footer />
      </div>
    </div>
  );
};

export default App;
