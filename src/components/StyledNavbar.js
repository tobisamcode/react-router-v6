import React from "react";
import { NavLink } from "react-router-dom";

function StyledNavbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/products">Products</NavLink>
    </nav>
  );
}

export default StyledNavbar;
