import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // By wrapping app with the browser router wrapper everything in app gets react-router functionality
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
