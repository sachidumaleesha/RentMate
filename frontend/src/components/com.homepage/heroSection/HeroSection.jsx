import React from "react";
import "./heroSection.css";
import HeroImage from "./images/hero-section.jpg";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="image">
          <img src={HeroImage} alt="Hero-Image" />
        </div>
        <div className="hero-section-content">
          <div className="text">
            <span className="main-title">Discover your perfect rental</span>
            <br />
            <span className="secondary-title">
              Search nearby House, Rooms and Apartments for rent
            </span>
          </div>
          {/* <div className="search-box">
            <form action="#">
              <input type="text" />
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
