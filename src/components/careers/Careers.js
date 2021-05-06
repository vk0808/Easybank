import React from "react";

import "./career.css";
import CareerIcon from "../../images/career-outline.svg";
import Book from "../../images/book.svg";
import Calendar from "../../images/calendar-outline.svg";
import Fitness from "../../images/fitness.svg";
import Health from "../../images/health-outline.svg";
import Meal from "../../images/healthy-meal-outline.svg";
import Scooter from "../../images/scooter.svg";

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

      <div className="perks">
        <h3 className="about-subhead">Perks and benefits</h3>
        <h2>Why join us?</h2>
        <div className="benefits">
          <div className="benefit-group">
            <img src={Book} alt="" />
            <div className="inner">
              <h3>Lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                quas?
              </p>
            </div>
          </div>
          <div className="benefit-group">
            <img src={Calendar} alt="" />
            <div className="inner">
              <h3>Lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                quas?
              </p>
            </div>
          </div>
          <div className="benefit-group">
            <img src={Fitness} alt="" />
            <div className="inner">
              <h3>Lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                quas?
              </p>
            </div>
          </div>
          <div className="benefit-group">
            <img src={Health} alt="" />
            <div className="inner">
              <h3>Lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                quas?
              </p>
            </div>
          </div>
          <div className="benefit-group">
            <img src={Meal} alt="" />
            <div className="inner">
              <h3>Lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                quas?
              </p>
            </div>
          </div>
          <div className="benefit-group">
            <img src={Scooter} alt="" />
            <div className="inner">
              <h3>Lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
                quas?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
