import React from "react";
import Image from "../assets/port2.jpg";
import PortfolioGrid from "./ui/PortfolioGrid";

function Portfolio() {
  return (
    <div className="relative h-screen">
      <div className="header">
        <img
          src={Image}
          alt="Car"
          className="w-full md:h-64 h-32 object-cover"
        />
        <div className="portfolio w-full h-36 absolute md:top-10 top-0 left-0 flex items-center justify-center">
          <p className="md:text-6xl text-4xl font-bold text-primary">
            Portfolio
          </p>
        </div>
      </div>

      <div className="text md:pt-32 pt-12 text-center">
        <p className="text-xl font-medium text-white/100">Click to View My Work</p>
      </div>
      <div className="images">
        <PortfolioGrid />
      </div>
        
    </div>
  );
}

export default Portfolio;
