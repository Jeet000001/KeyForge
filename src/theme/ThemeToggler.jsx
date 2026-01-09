import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prevState) => !prevState);
  };

  const theme = isDark ? "dark" : "light";

  return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>;
};
