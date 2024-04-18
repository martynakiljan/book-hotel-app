/** @format */

import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = createRoot(document.getElementById("root")); // Użyj createRoot tutaj
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
