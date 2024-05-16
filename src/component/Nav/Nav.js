import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";

export default function nav() {
  return (
    <div className="mainNav">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </div>
  );
}
