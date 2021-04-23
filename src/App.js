import React from "react";
import Navbar from "./components/header/Navbar";
import Hero from "./components/intro/Hero";
import SubSection from "./components/intro/SubSection";
import Articles from "./components/intro/Articles";
import Footer from "./components/footer/Footer";

function App() {
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

export default App;
