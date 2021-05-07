import React from "react";

import { benefits } from "./benefits";
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
          <button className="submit-btn">
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

      <div className="perks">
        <h3 className="about-subhead">Perks and benefits</h3>
        <h2>Why join us?</h2>
        <div className="benefits">
          {benefits.map((perk) => {
            const { id, img, content } = perk;
            return (
              <div key={id} className="benefit-group">
                <img src={`./${img}`} alt="" />
                <div className="inner">
                  <p>{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Careers;
