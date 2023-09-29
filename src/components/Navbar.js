// Import React and necessary styles
import React from "react";
import "../styles/Header.css";

// Define a functional React component called Navbar
// It receives two props: `currentPage` and `handlePageChange`
export default function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar-container">
      <ul className="navbar-style">
        {/* Navigation item 1: About Me */}
        <li>
          <a
            href="#About-Me"
            onClick={() => handlePageChange("About Me")}
            // Set the class based on whether the current page is "About Me"
            className={
              currentPage === "About Me" ? "nav-link-active" : "nav-link"
            }
          >
            About Me
          </a>
        </li>

        {/* Navigation item 2: Portfolio */}
        <li>
          <a
            href="#Portfolio"
            onClick={() => handlePageChange("Portfolio")}
            // Set the class based on whether the current page is "Portfolio"
            className={
              currentPage === "Portfolio" ? "nav-link-active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>

        {/* Navigation item 3: Contact Me */}
        <li>
          <a
            href="#Contact-Me"
            onClick={() => handlePageChange("Contact Me")}
            // Set the class based on whether the current page is "Contact Me"
            className={
              currentPage === "Contact Me" ? "nav-link-active" : "nav-link"
            }
          >
            Contact Me
          </a>
        </li>

        {/* Navigation item 4: Resume */}
        <li>
          <a
            href="#Resume"
            onClick={() => handlePageChange("Resume")}
            // Set the class based on whether the current page is "Resume"
            className={
              currentPage === "Resume" ? "nav-link-active" : "nav-link"
            }
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
