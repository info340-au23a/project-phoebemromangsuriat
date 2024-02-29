// Header.js
import React from 'react';
import './css/style.css'; 
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
        <li><Link to="/">Home</Link></li>
          <li><Link to="/Profile">Profile</Link></li> 
          <li><Link to="/Shop">Shop</Link></li>
          <li><Link to="/Sell">Sell</Link></li>
          <li><Link to="/Friends">Friends</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;