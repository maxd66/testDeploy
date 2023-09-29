// Import the React library
import React from "react";
// Import the ReactDOM library for rendering React components
import ReactDOM from "react-dom";
// Import the top-level App component from './App'
import App from "./App";
// Import the Bootstrap CSS styles
import "bootstrap/dist/css/bootstrap.min.css";

// Render the App component into the element with the 'root' ID in the HTML document
ReactDOM.render(<App />, document.getElementById("root"));
