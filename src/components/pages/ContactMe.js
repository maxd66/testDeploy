// Import React and useState from the React library
import React, { useState } from "react";

// Import a custom validation function from the "helpers" module
import { validateEmail } from "../../utils/helpers";

// Import CSS styles for this component
import "../../styles/ContactMe.css";

// Define a functional React component called ContactMe
export default function ContactMe() {
  // Create state variables for the fields in the form
  // Initialize them with empty strings
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle changes in input fields and update corresponding state variables
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior (page refresh)

    // Validate email and name fields
    if (!validateEmail(email) || !name) {
      setErrorMessage("Name or Email is invalid. Please enter them correctly.");
      return; // Exit the function if there's an error
    }

    // Check if the message field is empty
    if (!message) {
      setErrorMessage("Please enter a message.");
      return;
    }

    // Display a thank you alert with the user's name
    alert(`Thank you ${name}!`);

    // Clear form fields and error message after successful submission
    setName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  };

  return (
    <div className="contactme">
      <h1>Contact Me</h1>
      <p>(Contact csetiawan@yahoo.com if you would like to get in touch!)</p>
      <form className="form">
        <p>Name:</p>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder=""
        />
        <p>Email:</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder=""
        />
        <p>Message:</p>
        <textarea
          value={message}
          name="message"
          onChange={handleInputChange}
          cols="50"
          rows="10"
          placeholder=""
        ></textarea>
        <br></br>
        <button className="button" type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {/* Display error message if there's an error */}
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
