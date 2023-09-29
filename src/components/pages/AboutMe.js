// Import the React library to create React components
import React from "react";

// Import the CSS styles for this component
import "../../styles/AboutMe.css";

// Import the profile picture as a variable
import profilePic from "../../images/profilePic.png";

// Define a functional React component called AboutMe
export default function AboutMe() {
  return (
    // Create a div element with the class "aboutme"
    <div className="aboutme">
      {/* Create a heading with the text "About Me" */}
      <h1>About Me</h1>

      {/* Create an image element with the source set to the profile picture */}
      {/* and the class "profileImg", and provide alternative text for accessibility */}
      <img src={profilePic} className="profileImg" alt="Christian Pic"></img>

      {/* Create a paragraph element with a brief introduction */}
      <p>
        Step into my digital realm! I'm Christian Setiawan, a Mechatronic
        Engineer and Full Stack Web Developer, and I wholeheartedly embrace the
        belief that life serves as a blank canvas eagerly awaiting the strokes
        of vibrant experiences and the bonds of meaningful connections. My
        reputation is founded on an enduring passion for discovery and an
        unwavering commitment to crafting a brighter world.
      </p>

      {/* Create another paragraph element with additional information */}
      <p>
        Throughout my journey, I've remained dedicated to leaving behind a
        legacy of positivity. This website serves as a gateway to connect with
        kindred souls who resonate with my pursuits, and in collaboration, we
        can set sail on a shared voyage of exploration, personal growth, and
        transformative impact. I extend my heartfelt gratitude for your visit,
        and I eagerly anticipate the exciting journey we're about to embark upon
        together.
      </p>
    </div>
  );
}
