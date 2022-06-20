import type { Component } from "solid-js";

import LandingPage from "./pages/LandingPage/LandingPage";
import TestPage from "./pages/Test-Page/TestPage";
import { Route, Routes } from "solid-app-router";

import { createClient, Provider } from "solid-urql";

const client = createClient({
  url: "http://localhost:8080/",
  fetchOptions: { credentials: "include" },
});

const App: Component = () => {
  return (
    <div>
      <Provider value={client}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;
