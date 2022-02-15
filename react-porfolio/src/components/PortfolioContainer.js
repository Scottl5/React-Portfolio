import React, { useState } from "react";
import Navbar from "./navbar";
import About from "./pages/About";
import Work from "./pages/Work";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About Me");
  const renderPage = () => {
    if (currentPage === "About Me") {
      return <About />;
    }

    return <Work />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
