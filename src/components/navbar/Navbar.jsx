import React, { useState, useEffect, useRef} from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/kelemkids-logos_transparent.png"

import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const loginFormRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginFormRef.current &&
        !loginFormRef.current.contains(event.target)
      ) {
        // Clicked outside the login form, so close it
        setShowLoginForm(false);
      }
    };

    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLoginClick = () => {
    setToggleMenu(false);
    setShowLoginForm(true);

  };

  const handleLoginClose = () => {
    setShowLoginForm(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-links_container">
          <p>
            <Link to={'/'}>Home</Link>
          </p>
          <p>
            <a href="/header">About</a>
          </p>
          <p>
            <a href="#service">Service</a>
          </p>
          <p>
            <a href="#help">Help</a>
          </p>
          <p>
            <a href="#contact">Contact</a>
          </p>
        </div>
      </div>
      <div className="navbar-sign">
        <Link to={"login-signup"}><button type="button">Sign up</button></Link>
      </div>
      {showLoginForm && (
        <div className="login-form">
          <div className="login-form-container">
            <h2>Login</h2>
            <form>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" placeholder="Enter your email" />

              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
              />

              <button type="submit">Login</button>
            </form>
            <button className="close-btn" onClick={handleLoginClose}>
              Close
            </button>
          </div>
        </div>
      )}
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center">
            <div className="navbar-menu_container-links">
              <p>
                <Link to={'/'}>Home</Link>
              </p>
              <p>
                <Link to="/header">About</Link>
              </p>
              <p>
                <a href="#service">Service</a>
              </p>
              <p>
                <a href="#help">Help</a>
              </p>
              <p>
                <a href="#contact">Contact</a>
              </p>
            </div>
            <div className="navbar-menu_container-links-sign">
              <p onClick={handleLoginClick}>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
