
import React, { useState } from 'react';
import { FaFacebook, FaPhoneAlt, FaGithub } from "react-icons/fa";
import { CiAlignCenterH } from "react-icons/ci";
import { IoIosMail } from "react-icons/io";
import { Link } from 'react-router-dom';
export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: ''
  });

  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!formData.name || !formData.number || !formData.email || !formData.message) {
      setPopupMessage('Please fill in all fields before submitting.');
      setShowPopup(true);
      return;
    }

    // If all fields are filled
    setPopupMessage('Message saved successfully!');
    setShowPopup(true);

  
    setFormData({
      name: '',
      number: '',
      email: '',
      message: ''
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (


    <div className="contact-container">

 
      <div className="box1">
        <h1>Contact Me</h1>
        <h6>Let's work together</h6>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatibus accusamus obcaecati, a laudantium ea eius nulla quas libero distinctio hic neque molestiae rerum facere ipsa minus ratione? Aspernatur, illo.
        </p>
        <IoIosMail />
        <span> lambertliya84@gmail.com</span>
        <br />
        <FaPhoneAlt />
        <span> :82545454545</span>
      </div>
      <div className="box2">
    <Link to="/LINKS">
        <FaFacebook />
        <CiAlignCenterH />
        <FaGithub />
        <IoIosMail />
    </Link>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="name">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="number">
            <input
              type="number"
              name="number"
              placeholder="Enter your number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>
          <div className="mail">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="message">
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Type your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="submit">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}; 