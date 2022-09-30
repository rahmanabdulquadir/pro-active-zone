import React from 'react';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <div className='navbar-container'>
       <div>
        <h1>Pro Active Zone</h1>
      </div>
      <div>
        <a href="/home">Home</a><a href="/sign-up">Sign Up</a><a href="/contact">Contact</a>
      </div>
    </div>
    </div>
  );
};

export default Navbar;