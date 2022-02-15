import React from "react";
import "../styles/Navbar.css";

function Navbar({ currentPage, handlePageChange }) {
  return (
    <header id="nav-bar">
      <h1 id="nav-name">LaBelle</h1>
      <ul id="nav-list">
        <li className="nav-item">
          <a
            className="nav-a"
            href="#about"
            onClick={() => handlePageChange("About Me")}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-a"
            href="#work"
            onClick={() => handlePageChange("My Work")}
          >
            My Work
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-a"
            href="#contact"
            onClick={() => handlePageChange("Contact Me")}
          >
            Contact Me
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-a"
            href="./ScottLaBelleCodingResume.pdf"
            onClick={() => handlePageChange("Resume")}
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
