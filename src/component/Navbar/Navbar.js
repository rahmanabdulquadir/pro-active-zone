import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="logo-container">
          <FontAwesomeIcon className="icon" icon={faDumbbell}></FontAwesomeIcon>
          <h1>Pro Active Zone</h1>
        </div>
        <div>
          <a href="/home">Home</a>
          <a href="/sign-up">Sign Up</a>
          <a href="/contact">Contact</a>
          <a href="/About Us">About Us</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
