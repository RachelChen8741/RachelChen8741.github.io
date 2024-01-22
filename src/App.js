// src/App.js

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Extracurriculars from "./components/Extracurriculars";
import Footer from "./components/Footer";
import Bio from "./components/Bio";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Extracurriculars />
      <Bio />
      <Contact />
      <Footer />
    </main>
  );
}