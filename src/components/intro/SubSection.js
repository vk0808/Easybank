import React from "react";
import { feature } from "./feature";

function SubSection() {
  return (
    <section className="feature sub-section">
      <div className="section-top">
        <h1 className="head">Why choose Easybank?</h1>
        <p className="sub-head">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="feature-container">
        {feature.map((item) => {
          const { id, logo, text, description } = item;
          return (
            <div key={id} className="feature-list">
              <div className="feature-logo">
                <img src={`./images/intro/${logo}`} alt="" />
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
