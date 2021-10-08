import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem("github-theme") || "light"
  );
  useEffect(() => {
    localStorage.setItem("github-theme", theme);
  }, [theme]);

  const values = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={values}>{children} </ThemeContext.Provider>
  );
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
