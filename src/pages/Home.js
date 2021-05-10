import React from "react";

import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import Hero from "../components/intro/Hero";
import SubSection from "../components/intro/SubSection";
import Articles from "../components/intro/Articles";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SubSection />
      <Articles />
      <Footer />
    </>
  );
}

export default Home;
