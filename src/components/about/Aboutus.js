import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import MapChart from "./Maps";
import "./about.css";

function Aboutus() {
  const [content, setContent] = useState("");

  return (
    <>
      <div className="about-container wrapper">
        <div className="first box">
          <div className="about-left">
            <h2 className="about-subhead">Who we are</h2>
            <h1 className="about-head">Next generation digital banking</h1>
            <p className="descriptions">
              Easybank is an one-stop-shop for spending, saving, budgeting,
              investing, and much more. Easybank has been using digital banking
              for some time now. Digital banking helps consumers by bringing the
              bank to their homes. With advances in technology, new developments
              have led to better and improved solutions.
            </p>
            <p className="descriptions">
              The Next-generation digital banking solutions that are now
              available allow business to seamless integrate their services
              across multiple channels. Apart from the core banking services,
              these solutions offer a host of other services making digital
              banking a value-adding experience for customers.
            </p>
          </div>
          <div className="about-right">
            <p>
              <span className="stats">52%</span> of urban bank customers in
              Asian emerging countries use Easybank to carry out transactions.
            </p>
          </div>
        </div>
      </div>

      <div className="about-container">
        <div className="second box">
          <div className="about-right">
            <p>
              <span className="stats">68%</span> of urban bank customers in
              developed countries use Easybank to carry out transactions.
            </p>
          </div>
          <div className="about-left">
            <h2 className="about-subhead">Benefits</h2>
            <h1 className="about-head">We offer one-stop-shop to customers</h1>
            <p className="descriptions">
              Easybank offer a complete bouquet of services to customers. This
              would include:
              <ul className="points">
                <li>Account management, including transaction on accounts</li>
                <li>Single sign on to account</li>
                <li>
                  Value added services like investment, insurance, savings, and
                  loans
                </li>
                <li>Integration with mobile banking</li>
                <li>Single platform for transacting on all channels</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div className="about-container wrapper">
        <div className="third box">
          <h2 className="about-subhead">Globally renownedd & trusted</h2>
          <h1 className="about-head">Easybank's Working Everywhere</h1>
          <div className="location">
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip>{content}</ReactTooltip>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
