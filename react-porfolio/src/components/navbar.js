import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header id="nav-bar">
      <h1 id="nav-name">LaBelle</h1>
      <ul id="nav-list">
        <li className="nav-item">
          <a className="nav-a" href="#about">
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="#work">
            My Work
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-a" href="#contact">
            Contact Me
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-a"
            href="./ScottLaBelleCodingResume.pdf"
            target="_blank"
          >
            {" "}
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
