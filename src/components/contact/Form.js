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
      </div>
    </section>
  );
}

export default ContactForm;
