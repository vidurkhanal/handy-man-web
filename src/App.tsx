import { Route, Routes } from "solid-app-router";
import type { Component } from "solid-js";
import LandingPage from "./pages/LandingPage/LandingPage";

const App: Component = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<h1>Test Page</h1>} />
      </Routes>
    </div>
  );
};

export default App;
