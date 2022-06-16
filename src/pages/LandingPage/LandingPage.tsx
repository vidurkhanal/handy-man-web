import type { Component } from "solid-js";
import NavBar from "../../Components/navbar";
import "tailwindcss/tailwind.css";
import Hero from "./components/hero";

const LandingPage: Component = () => {
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  );
};

export default LandingPage;
