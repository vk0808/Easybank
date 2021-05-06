import React from "react";

import "./career.css";
import CareerIcon from "../../images/career-outline.svg";

function Careers() {
  return (
    <div className="career">
      <div className="career-intro">
        <div className="career-intro-left">
          <h2>Shape the next generation digital banking</h2>
          <p>
            We provide industry-defining financial services that meets customer
            needs head-on. Our team is at the forefront of a next generation
            digital banking and now is a pivotal point — join us in our journey
            to change the world over using banking.
          </p>
          <button class="submit-btn">
            <a href="#open-positions">Apply now</a>
          </button>
        </div>

        <div
          style={{
            backgroundImage: `url(${CareerIcon})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center top",
          }}
          className="career-intro-right"
        ></div>
      </div>
    </div>
  );
}

export default Careers;
