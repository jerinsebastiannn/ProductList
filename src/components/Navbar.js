import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">ProductList</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

export default Navbar;
