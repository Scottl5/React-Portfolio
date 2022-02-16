import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="page-section" id="contact-me">
      <h3 id="contact"> Contact Me</h3>
      <ul>
        <li className="info"> 603-903-2368</li>
        <a id="email" href="mailto:scott.labelle@snhu.edu">
          {" "}
          scott.labelle@snhu.edu
        </a>
        <a href="https://github.com/Scottl5" target="_blank">
          <li className="info"> My GitHub </li>
        </a>
        <a
          href="https://www.linkedin.com/in/scott-labelle-983371115/"
          target="_blank"
        >
          <li className="info"> My LinkedIn</li>
        </a>
      </ul>
    </footer>
  );
}

export default Footer;
