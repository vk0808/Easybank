import React from "react";

import { ReactComponent as About } from "../../images/about.svg";

function AboutIntro() {
  return (
    <div className="about-intro">
      <div className="about-intro-left">
        <About />
      </div>
      <div className="about-intro-right">
        <h1 className="bxt">welcome to Easybank</h1>
      </div>
    </div>
  );
}

export default AboutIntro;
