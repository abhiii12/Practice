// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about-her">About Her</Link>
      <Link to="/relationship">Our Relationship</Link>
      <Link to="/firsts">Our Firsts</Link>
      <Link to="/things-i-call-her">Things I Call Her</Link>
      <Link to="/things-she-calls-me">Things She Calls Me</Link>
      <Link to="/things-she-likes">Things She Likes</Link>
      <Link to="/things-she-dislikes">Things She Dislikes</Link>
      <Link to="/things-i-love-about-her">Things I Love About Her</Link>
      <Link to="/things-about-her-body">Things Only I Know </Link>
      <Link to="/promises">Promises</Link>
      <Link to="/photo-gallery">Photo Gallery</Link>
      <Link to="/proposal">Proposal</Link>
    </nav>
  );
};

export default Navbar;