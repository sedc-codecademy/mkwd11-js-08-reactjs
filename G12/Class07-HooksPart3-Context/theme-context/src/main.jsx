import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./Contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // By wrapping app with the browser router wrapper everything in app gets react-router functionality
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);
