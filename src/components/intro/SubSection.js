import React from "react";
import { feature } from "./feature";
import logo_1 from "../../images/icon-online.svg";
import logo_2 from "../../images/icon-budgeting.svg";
import logo_3 from "../../images/icon-onboarding.svg";
import logo_4 from "../../images/icon-api.svg";

function SubSection() {
  return (
    <section>
      <div className="section-top">
        <h1 className="head">Why choose Easybank?</h1>
        <p className="sub-head">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="feature-container">
        {feature.map((item) => {
          const { id, text, description } = item;
          return (
            <div key={id} className="feature-list">
              <div className="feature-logo">
                {id === 1 && <img src={logo_1} alt="" />}
                {id === 2 && <img src={logo_2} alt="" />}
                {id === 3 && <img src={logo_3} alt="" />}
                {id === 4 && <img src={logo_4} alt="" />}
              </div>
              <h1>{text}</h1>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SubSection;
