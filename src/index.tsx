import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/js/all.js";
import HabitPresenter from "./habit_presenter";
// import SimpleHabit from './components/simpleHabit';

const presenter = new HabitPresenter([
  { id: 1, name: "Reading", count: 0 },
  { id: 2, name: "Running", count: 0 },
  { id: 3, name: "Coding", count: 0 },
]);
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App presenter={presenter} />
  </React.StrictMode>
);
