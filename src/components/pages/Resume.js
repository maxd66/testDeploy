// Import React and necessary styles
import React from "react";
import "../../styles/Resume.css";

// Define a functional React component called Resume
export default function Resume() {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <figure className="resume-container">
        {/* Create an iframe element to embed the resume document */}
        <iframe
          className="resumeFrame"
          title="Christian_resume"
          src="https://docs.google.com/document/d/1HcIGHoyYnHlUF_Eev8tnxs7WfAxJBlZS1FSY8CzjBR8/edit?usp=sharing"
        ></iframe>
      </figure>
    </div>
  );
}
