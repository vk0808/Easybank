/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { FiMail } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";

import { ReactComponent as Facebook } from "../../images/icon-facebook.svg";
import { ReactComponent as Youtube } from "../../images/icon-youtube.svg";
import { ReactComponent as Twitter } from "../../images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../../images/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../images/icon-instagram.svg";

import "./contact.css";

function ContactForm() {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Interested in Discussing?</h2>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Name"
              />
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                id="message"
                rows="10"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="form-group">
              <button className="submit-btn">send message</button>
            </div>
          </form>
        </div>
        <div className="contact-right">
          <h3>Get in touch with us</h3>
          <div className="contact-info">
            <div className="card">
              <FiMail />
              <div>
                <h4>Email</h4>
                <p>contact@easybank.in</p>
              </div>
            </div>
            <div className="card">
              <FiPhone />
              <div>
                <h4>Phone</h4>
                <p>+91 1234567890</p>
              </div>
            </div>
            <div className="card">
              <FiMapPin />
              <div>
                <h4>Address</h4>
                <p>Whitefield, Bangalore</p>
                <p>India</p>
              </div>
            </div>
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
      </div>
    </section>
  );
}

export default ContactForm;
