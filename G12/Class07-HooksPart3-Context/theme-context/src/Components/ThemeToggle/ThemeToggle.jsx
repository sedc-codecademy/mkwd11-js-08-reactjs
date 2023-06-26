import { useState } from "react";
import "./ThemeToggle.css";
import { useContext } from "react";
import ThemeContext from "../../Contexts/ThemeContext";
import { useEffect } from "react";

const ThemeToggle = props => {
  const [inputValue, setInputValue] = useState("light");

  const { toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    toggleTheme(inputValue);
  }, [inputValue]);

  return (
    <div className="ThemeToggle">
      <span>Select Theme</span>
      <select value={inputValue} onChange={e => setInputValue(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default ThemeToggle;
