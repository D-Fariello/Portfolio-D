import React, { useEffect } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaHome,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import "../../style/_contacts.scss";

function Contacts() {
  useEffect(() => {
    document.body.className = "";
    document.body.classList.add("contacts-body");
  }, []);
  return (
    <section id="contacts-page">
      <h1 className="contacts-title">Let's work together</h1>
      <ul className="contact-list">
        <li className="contact-item">
          <FaPhone className="contact-icon" />
          <span className="contact-text">+33 (0) 635130187</span>
        </li>
        <li className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span className="contact-text">dalila.fariello@gmail.com</span>
        </li>
        <li className="contact-item">
          <FaHome className="contact-icon" />
          <span className="contact-text">Nice, France</span>
        </li>
        <li className="contact-item">
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/D-Fariello"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-profile"
          >
            GitHub
          </a>
        </li>
        <li className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a
            href="https://www.linkedin.com/in/dalila-fariello/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-profile"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contacts;
