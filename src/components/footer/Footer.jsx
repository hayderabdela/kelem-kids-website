import React from "react";
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "./footer.css"; // Make sure to import your CSS file

const Footer = () => {
  return (
    <footer>
      <div className="footer_main">
        <div className="tag">
          <h1>Quick Link</h1>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#featured">Featured</a>
          <a href="#arrivals">Arrivals</a>
          <a href="#revies">Reviews</a>
          <a href="#blog">Blog</a>
        </div>

        <div className="tag">
          <h1>Contact Info</h1>
          <a href="#phone"><FaPhone />+94 12 345 6789</a>
          <a href="#phone"><FaPhone />+94 32 444 699</a>
          <a href="#message"><FaEnvelope />kelmekids@gmail.com</a>
        </div>

        <div className="tag">
          <h1>Follow Us</h1>
          <div className="social_link">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>

        <div className="tag">
          <h1>Newsletter</h1>
          <div className="search_bar">
            <input type="text" placeholder="Your email id here" />
            <button type="submit">Subscribe</button>
          </div>
        </div>

      </div>

      <p className="end">Design By<span>KelemKids</span></p>
    </footer>
  );
};

export default Footer;
