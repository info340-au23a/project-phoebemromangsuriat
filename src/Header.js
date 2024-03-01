// Header.js
import React from 'react';
import {Link} from 'react-router-dom';


function Header() {
  return (
    <div class="menu-bar">
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="Profile">Profile</a></li>
            <li><a href="MarketPlace">Shop</a></li>
            <li><a href="Sell">Sell</a></li>
            <li><a href="Friends">Friends</a></li>
        </ul>
    </div>
  );
}

export default Header;