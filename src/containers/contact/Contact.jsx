import React, { useState } from "react";
import "./Contact.css"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-container">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Your Message
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-custom">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
