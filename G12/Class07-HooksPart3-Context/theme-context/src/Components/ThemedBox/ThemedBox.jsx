import { useContext } from "react";
import "./ThemedBox.css";
import ThemeContext from "../../Contexts/ThemeContext";

const ThemedBox = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="ThemedBox" style={theme}>
      <h1>This is the themed box component</h1>
    </div>
  );
};

export default ThemedBox;
