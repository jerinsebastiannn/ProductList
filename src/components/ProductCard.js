import React from "react";
import "./ProductCard.css";

function ProductCard({ product, onAddToCart }) {
  const { name, price, category, rating, image } = product;

  return (
    <article className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-body">
        <h3 className="product-name">{name}</h3>
        <p className="product-category">{category}</p>
        <p className="product-price">₹{price}</p>
        <p className="product-rating">Rating: {rating}</p>
      </div>
      <button
        className="add-to-cart-btn"
        onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;
