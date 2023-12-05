import React from 'react';
import "../App.css"
import logo from "../Assets/logo.png"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" id="logonew" />
      </div>
      <ul>
        <li>
          <a href="index.html" style={{ textDecoration: 'none' }}>Home</a>
          <a id="shop">Shop</a>
          <a href="Login.html" style={{ textDecoration: 'none' }}>Login</a>
          <a id="about" href="aboutUs.html">About Us</a>
          <a href="contact Us.html">Contact Us</a>
          <a href="cart.html">
            <i className="fa-sharp fa-solid fa-cart-shopping"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
