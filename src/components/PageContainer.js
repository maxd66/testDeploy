// Import React and necessary components
import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";

// Define a functional React component called PortfolioContainer
export default function PortfolioContainer() {
  // Define a state variable called `currentPage` and initialize it with "About Me"
  const [currentPage, setCurrentPage] = useState("About Me");

  // This method determines which page component to render based on the value of `currentPage`
  const renderPage = () => {
    if (currentPage === "About Me") {
      return (
        <>
          <AboutMe />
          <Footer />
        </>
      );
    }
    if (currentPage === "Portfolio") {
      return (
        <>
          <Portfolio />
          <Footer />
        </>
      );
    }
    if (currentPage === "Contact Me") {
      return (
        <>
          <ContactMe />
          <Footer />
        </>
      );
    }
    if (currentPage === "Resume") {
      return (
        <>
          <Resume />
          <Footer />
        </>
      );
    }
  };

  // Define a function called `handlePageChange` to update the `currentPage` state
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      {/* Header section */}
      <header className="header-container">
        <h1 className="christian-title">Christian Setiawan</h1>
        {/* Render the Navbar component and pass in `currentPage` and `handlePageChange` as props */}
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </header>
      {/* Main content section, renders the page based on `currentPage` */}
      <main>{renderPage()}</main>
    </>
  );
}
