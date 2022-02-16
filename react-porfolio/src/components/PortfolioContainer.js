import React, { useState } from "react";
import Navbar from "./navbar";
import About from "./pages/About";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");
  const renderPage = () => {
    if (currentPage === "About Me") {
      return <About />;
    }
    if (currentPage === "Contact Me") {
      return <Contact />;
    }
    if (currentPage === "My Work") {
      return <Work />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
