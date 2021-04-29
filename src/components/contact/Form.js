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
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-left">
          <h2>Interested in Discussing?</h2>
          <form onSubmit={handleSubmit}>
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
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13078.071878265395!2d77.74112867346791!3d12.96327410342785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11f35d0dfc83%3A0x30cfa512d80115f9!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1619612453801!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
    </section>
  );
}

export default ContactForm;
