// Import React and necessary styles and images
import React from "react";
import "../styles/Footer.css";
import githubLogo from "../images/github-mark.png";
import linkedInLogo from "../images/linkedin-mark.png";

// Define a functional React component called Footer
export default function Footer() {
  return (
    <footer className="center-footer">
      {/* Create a link to Christian Setiawan's GitHub profile */}
      <a target="_blank" rel="noreferrer" href="https://github.com/csetiawan88">
        {/* Display the GitHub logo with an alt text */}
        <img
          className="footer-logo"
          src={githubLogo}
          alt="github logo which links to Christian Setiawan's github profile"
        ></img>
      </a>
      {/* Create a link to Christian Setiawan's LinkedIn profile */}
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/christian-setiawan-1564081a3/"
      >
        {/* Display the LinkedIn logo with an alt text */}
        <img
          className="footer-logo"
          src={linkedInLogo}
          alt="linkdcin logo which links to Christian Setiawan's LinkedIn profile"
        ></img>
      </a>
    </footer>
  );
}
