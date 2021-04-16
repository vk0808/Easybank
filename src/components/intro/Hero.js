import React from "react";
import BgIcon from "../../images/bg-intro-desktop.svg";

import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="left">
        <h1 className="title">Next generation digital banking</h1>
        <p className="sub-title">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div>
          <button className="request-btn">request invite</button>
        </div>
      </div>
      <div className="right">
        <img src={BgIcon} alt="" />
      </div>
    </div>
  );
}

export default Hero;
