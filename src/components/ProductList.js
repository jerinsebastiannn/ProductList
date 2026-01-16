import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ products, onAddToCart }) {
  if (products.length === 0) {
    return <p className="no-results">No products found.</p>;
  }

  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </section>
  );
}

export default ProductList;
