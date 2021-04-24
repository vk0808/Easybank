import React from "react";

import "./hero.css";

function Hero() {
  return (
    <div class="hero wrap">
      <div class="left"></div>

      <div class="right">
        <h1 class="title">Next generation digital banking</h1>
        <p class="sub-title">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="btn-div">
          <button className="request-btn">request invite</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
