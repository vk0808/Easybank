import React from "react";
import { Link } from "react-router-dom";

import { links } from "./dataFooter";
import { ReactComponent as Facebook } from "../../images/icon-facebook.svg";
import { ReactComponent as Youtube } from "../../images/icon-youtube.svg";
import { ReactComponent as Twitter } from "../../images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../images/icon-instagram.svg";
import { ReactComponent as Logo } from "../../images/logo.svg";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <div className="a">
          <div className="footer-logo">
            <Logo />
          </div>
          <div className="social-links">
            <a href="www.facebook.com" target="_blank">
              <Facebook />
            </a>
            <a href="www.youtube.com" target="_blank">
              <Youtube />
            </a>
            <a href="www.twitter.com" target="_blank">
              <Twitter />
            </a>
            <a href="www.pinterest.com" target="_blank">
              <Pinterest />
            </a>
            <a href="www.instagram.com" target="_blank">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="b">
          <div className="links">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <p key={id}>
                  <Link to={url}>{text}</Link>
                </p>
              );
            })}
          </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="btn-div">
          <button className="request-btn">request invite</button>
        </div>
        <div className="copyright"> &copy; Easybank. All Rights Reserved</div>
      </div>
    </footer>
  );
}

export default Footer;
