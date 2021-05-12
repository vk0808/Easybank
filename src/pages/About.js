import React from "react";

import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import AboutIntro from "../components/about/AboutIntro";
import Aboutus from "../components/about/Aboutus";

function About() {
  return (
    <>
      <Navbar />
      <AboutIntro />
      <Aboutus />
      <Footer />
    </>
  );
}

export default About;
