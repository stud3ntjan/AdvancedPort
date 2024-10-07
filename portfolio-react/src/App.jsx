import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import BG_GRADIENT from "./assets/wave6.png";

function App() {
  return (
    <div className="bg-fuchsia-gradient">
      <div
        style={{
          backgroundImage: `url(${BG_GRADIENT})`,
          backgroundPosition: `50% 50%`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
          // backgroundAttachment: `fixed`, // Parallax?
        }}
      >
        <Navbar />
        <Hero />
      </div>
      <Skills />
      <WorkExperience />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

//bg-gradient-to-r from-fuchsia-800 to-slate-950 bg-clip-text text-transparent
