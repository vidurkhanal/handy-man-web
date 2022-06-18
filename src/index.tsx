/* @refresh reload */
import { render } from "solid-js/web";

import "tailwindcss/tailwind.css";
import { Router } from "solid-app-router";

import "./index.css";
import App from "./App";
import { createClient, Provider } from "urql";

const client = createClient({
  url: "http://localhost:8000/graphql",
});

render(
  () => (
    <Provider value={client}>
      <Router>
        <App />
      </Router>
    </Provider>
  ),
  document.getElementById("root") as HTMLElement
);
