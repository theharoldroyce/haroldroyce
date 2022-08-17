import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Socials from "./components/Socials";
import Technology from "./components/Technology";
import Experience from "./components/Experience";
import Foother from "./components/Foother";
import Certificate from "./components/Certificate";


function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About />
    <Socials />
    <Technology/>
    <Portfolio />
    <Experience/>
    <Contact />
    <Foother/>

    </>



  );
}

export default App;
