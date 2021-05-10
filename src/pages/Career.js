import React from "react";

import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import Careers from "../components/careers/Careers";
import Roles from "../components/careers/Roles";

function Career() {
  return (
    <>
      <Navbar />
      <Careers />
      <Roles />
      <Footer />
    </>
  );
}

export default Career;
