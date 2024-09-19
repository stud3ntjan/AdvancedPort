import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <Hero />
      <Skills />
      <WorkExperience />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
