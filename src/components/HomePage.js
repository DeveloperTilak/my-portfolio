import React from 'react'
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Footer from "./Pages/Footer"

export default function HomePage() {
  return (
    <div>
        
        <Home />
        <Services />
        <About />
        <Projects />
        <Contact />
        <Footer />


    </div>
  );
}
