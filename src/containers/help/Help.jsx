// Help.jsx

import React from "react";
import "./Help.css"; // You can create a separate CSS file for styling

const Help = () => {
  return (
    <div className="help-container">
      <h2 className="title">How Can We Help?</h2>
      <p className="description">
        Welcome to our fun and friendly help center! If you have any questions
        or need assistance, feel free to reach out.
      </p>
      <div className="contact-options">
        <div className="contact-option">
          <i className="bx bx-message-rounded-dots icon"></i>
          <p>Live Chat</p>
        </div>
        <div className="contact-option">
          <i className="bx bx-envelope icon"></i>
          <p>Email Us</p>
        </div>
        <div className="contact-option">
          <i className="bx bx-phone icon"></i>
          <p>Call Us</p>
        </div>
      </div>
    </div>
  );
};

export default Help;
