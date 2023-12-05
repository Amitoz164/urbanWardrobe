import React from 'react';
import "../App.css"
import img from "../Assets/model bg 4.webp"

const MainSection = () => {
  return (
    <div className="main">
      <div className="mainText">
        <h2>URBAN WARDROBE</h2>
        <h1 className="top">Super Value Deals</h1>
        <h1>On All Products</h1>
        <p>Get up to 30% off on New Arrivals</p>
        <a href="newArrivals.html">
          <button>Explore</button>
        </a>
      </div>
      <img src={img} alt="" height="" />
    </div>
  );
};

export default MainSection;
