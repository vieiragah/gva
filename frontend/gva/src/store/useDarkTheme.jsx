import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";

export const ThemeContext = createContext({ theme: "light" });

export const ThemeProviderComponent = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={{ mode: theme }}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
