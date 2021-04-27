import React, { useState } from "react";
import ReactTooltip from "react-tooltip";

import MapChart from "./Maps";
import "./about.css";

function Aboutus() {
  const [content, setContent] = useState("");

  return (
    <div className="about-container">
      <div className="first box">
        <h1 className="head">Who are we?</h1>
        <p className="descriptions">
          Easybank is an one-stop-shop for spending, saving, budgeting,
          investing, and much more. Easybank has been using digital banking for
          some time now. Digital banking helps consumers by bringing the bank to
          their homes. With advances in technology, new developments have led to
          better and improved solutions.
        </p>
        <p className="descriptions">
          The Next-generation digital banking solutions that are now available
          allow business to seamless integrate their services across multiple
          channels. Apart from the core banking services, these solutions offer
          a host of other services making digital banking a value-adding
          experience for customers.
        </p>
      </div>
      <div className="second box">
        <h1 className="head">What do we offer?</h1>
        <p className="descriptions">
          Easybank offer a complete bouquet of services to customers. This would
          include:
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
      <div className="third box">
        <h1 className="head">Our Global presence</h1>
        <h2 className="sub-head">Stats</h2>
        <p className="descriptions">
          <ul>
            <li>
              <span className="stats">52%</span> of urban bank customers in
              Asian emerging countries use Easybank to carry out transactions.
            </li>
            <li>
              In developed countries, the usage rate of Easybank is{" "}
              <span className="stats">68%</span> of urban bank customers
            </li>
          </ul>
        </p>
        <h2 className="sub-head">Locations</h2>
        <div className="location">
          <MapChart setTooltipContent={setContent} />
          <ReactTooltip>{content}</ReactTooltip>
        </div>
        {/* <ul className="location">
          <li>India</li>
          <li>Japan</li>
          <li>Singapore</li>
          <li>South</li> Korea
          <li>Hong</li> Kong
          <li>Taiwan</li>
          <li>China</li>
          <li>Indonesia</li>
          <li>Malaysia</li>
          <li>Philippines</li>
          <li>Thailand</li>
          <li>Myanmar</li>
          <li>Vietnam</li>
        </ul> */}
      </div>
    </div>
  );
}

export default Aboutus;
