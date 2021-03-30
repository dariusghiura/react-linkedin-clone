import React from "react";
import Logo from "../../assets/img/LI-Logo.png";

export default function Footer({}) {
  return (
    <footer>
      <div className="footer-container">
        <a href="https://www.google.com/" target="_blank">
          About
        </a>
        <a href="https://www.google.com/" target="_blank">
          Accessibility
        </a>
        <a href="https://www.google.com/" target="_blank">
          Help Center
        </a>
        <a href="https://www.google.com/" target="_blank">
          Privacy and terms
        </a>
        <a href="https://www.google.com/" target="_blank">
          Ad Choices
        </a>
        <a href="https://www.google.com/" target="_blank">
          Advertising
        </a>
        <a href="https://www.google.com/" target="_blank">
          Business Services
        </a>
        <a href="https://www.google.com/" target="_blank">
          Get the LinkedIn app
        </a>
        <a href="https://www.google.com/" target="_blank">
          More
        </a>
      </div>
      <div className="footer-copyright">
        <img src={Logo} />
        <p>LinkedIn Corporation © 2021</p>
      </div>
    </footer>
  );
}
