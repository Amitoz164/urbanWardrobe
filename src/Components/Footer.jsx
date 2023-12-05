import React from 'react';
import "../App.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerText">
        <h2>Legal Information</h2>
        <p>Privacy Policy</p>
        <p>Terms and Conditions</p>
        {/* Additional <p> elements go here */}
      </div>
      <div className="footerText">
        <h2>About US</h2>
        <p>Address:  <br /></p>
        <p>Service's</p>
        <p>Customer</p>
        <p>Satisfaction</p>
      </div>
      <div className="footerText">
        <h2>Need Help</h2>
        <p>Email: urbanwardrobe99@gmail.in</p>
        <p>Phone Number</p>
        <p>8765987634</p>
        {/* Additional <p> elements go here */}
      </div>
      <div className="footerText">
        <h2>Trending</h2>
        <p>New Arrivals</p>
        {/* Additional <p> elements go here */}
      </div>
    </div>
  );
};

export default Footer;
