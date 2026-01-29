import React, { useEffect } from "react"; // React + useEffect import
import "./App.css";

// Components import karo
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

function App() {

  // Backend API call
  useEffect(() => {
    fetch("https://vercel-backand.vercel.app/")
      .then(res => res.json())
      .then(data => {
        console.log(data.message); // Browser console me message
        alert(data.message);       // Alert box me message
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

// Default export
export default App;
