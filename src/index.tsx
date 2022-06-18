/* @refresh reload */

import "tailwindcss/tailwind.css";
import "./index.css";
import App from "./App";
import { render } from "solid-js/web";
import { Router } from "solid-app-router";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root") as HTMLElement,
);
