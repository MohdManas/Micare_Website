import React from "react";
import { AboutUs, Departments, Hero, Services } from "../sections";

const Home = () => {
  return (
    <main className="min-h-screen w-screen overflow-x-hidden">
      <Hero />
      <AboutUs />
      <Services />
      <Departments />
    </main>
  );
};

export default Home;
