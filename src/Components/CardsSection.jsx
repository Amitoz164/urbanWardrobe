import React from 'react'
import "../App.css"

const CardsSection = () => {
  return (
    <>
        <div className="trend">
        <div className="head">
          <h1><span>Men's Wear</span></h1>
        </div>
        <div className="card">
          <div className="crd">
            <img src="https://assets.ajio.com/medias/sys_master/root/20220824/EYiY/63053f0ef997dd394c170b23/-473Wx593H-441144812-olive-MODEL.jpg" alt="" id="change" />
            <div className="crdText">
              <h2> T-shirts</h2>
              <br />
              <a href="products.htm">
                <button>Shop</button>
              </a>
            </div>
          </div>

          <div className="crd">
            <img src="https://assets.ajio.com/medias/sys_master/root/20230831/ONn9/64f0b0b0ddf77915198e05bf/-473Wx593H-442111555-ltgrey-MODEL.jpg" alt="" />
            <div className="crdText">
              <h2>Jeans And Joggers</h2>
              <br />
              <a href="jeans and lowers.html">
                <button>Shop</button>
              </a>
            </div>
          </div>

          <div className="crd">
            <img src="https://assets.ajio.com/medias/sys_master/root/20230602/v4Ms/64793ff942f9e729d70e042f/-473Wx593H-461725396-maroon-MODEL.jpg" alt="" />
            <div className="crdText">
              <h2>Shirts</h2>
              <br />
              <a href="shirts.html">
                <button>Shop</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="trend" id="trendsec">
        <div className="head">
          <h1><span>Women's Wear</span></h1>
        </div>
        <div className="card">
          <div className="crd">
            <img src="https://assets.ajio.com/medias/sys_master/root/20231116/Qf5I/655547e6ddf7791519865177/-473Wx593H-466799276-red-MODEL.jpg" alt="" />
            <div className="crdText">
              <h2> Top's</h2>
              <a href="womenstop.html">
                <button>Shop</button>
              </a>
            </div>
          </div>

          <div className="crd">
            <img src="https://assets.ajio.com/medias/sys_master/root/20230720/EMeQ/64b83883eebac147fc7b8496/-473Wx593H-466372693-black-MODEL.jpg" alt="" />
            <div className="crdText">
              <h2>Jeans </h2>
              <a href="womensjeans.html">
                <button>Shop</button>
              </a>
            </div>
          </div>

          <div className="crd">
            <img src="https://rukminim2.flixcart.com/image/832/832/xif0q/kurta/i/k/3/-original-imagu22bwe4bhp3y.jpeg?q=70" alt="" />
            <div className="crdText">
              <h2>Kurtas</h2>
              <a href="kurta.html">
                <button>Shop</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardsSection