import React from "react";
import ai from "../../assets/kid7.png";
import "./header.css";

const Header = () => (
  <div className="header section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">
        Welcome to KelemKids, where education meets excitement!🚀
      </h1>
      <p>
        Explore a world of fun and learning designed just for kids. Our
        interactive platform engages young minds with educational games,
        creative activities, and exciting lessons. KelemKids is not just a
        website .🌟
      </p>
      <div className="header-button">
        <a href="#about">
          <button type="button">Learn More</button>
        </a>
      </div>
    </div>
    <div className="header-image">
      <img src={ai} alt="ai" />
    </div>
  </div>
);

export default Header;
