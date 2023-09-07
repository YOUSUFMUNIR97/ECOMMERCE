import React from "react";
import "./Product.css";
import img1 from '../../images/product-1-image.jpg'

function Product() {
  return (
    <div className="Product">
      <div className="Product-info">
        <img src={img1} alt="women" />
        <h6 className="Product-info-title">Women shirt</h6>
        <p className="Product-info-category">Women Clothing</p>
        <h3 className="Product-info-price">
          <span>$</span>
          23
        </h3>
      </div>
    </div>
  );
}

export default Product;
