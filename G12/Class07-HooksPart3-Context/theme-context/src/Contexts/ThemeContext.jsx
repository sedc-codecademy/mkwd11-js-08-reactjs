import { createContext, useState } from "react";

const themes = {
  light: {
    backgroundColor: "white",
    border: "3px solid darkgray",
    color: "black",
  },
  dark: {
    backgroundColor: "black",
    border: "3px solid lightgray",
    color: "white",
  },
};

const ThemeContext = createContext({
  theme: {},
  toggleTheme() {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = selectedTheme => {
    // selected theme can be "light" or "dark"
    setTheme(themes[selectedTheme]);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
