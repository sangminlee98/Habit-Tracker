import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/js/all.js";
// import SimpleHabit from './components/simpleHabit';

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
