import React, { useState } from 'react';
import './Header.css';

import Login from './Login';
const Header = () => {
    const [loginOpen, setLoginOpen] = useState(false);
    const handleLoginClick = () => {
        setLoginOpen(true);
      };
      

  return (
    <header className="header">
      <div className="logo">MyApp</div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </nav>
      <div className="auth">
      <button onClick={handleLoginClick}>Login</button>


        
        <a href="#">Sign up</a>
      </div>
    </header>
  );
};

export default Header;
