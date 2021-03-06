import React, { useState, useEffect, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import ReadingProgress from "react-reading-progress";

import { links } from "./links";
import { ReactComponent as Logo } from "../../images/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight + 65}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <>
      {id && <ReadingProgress targetEl="#target-el" />}
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <div>
              <Logo className="logo" />
              <button
                className="nav-toggle"
                onClick={() => setShowLinks(!showLinks)}
              >
                <FaBars />
              </button>
            </div>
          </div>

          <div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="btn-div">
              <button className="request-btn">request invite</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
