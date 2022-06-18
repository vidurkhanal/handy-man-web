import { Route, Routes } from "solid-app-router";
import type { Component } from "solid-js";
import LandingPage from "./pages/LandingPage/LandingPage";
import TestPage from "./pages/Test-Page/TestPage";

const App: Component = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </div>
  );
};

export default App;
