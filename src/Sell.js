import React from 'react';
import './css/style.css'; 

function ListingsPage() {
  return (
    <div>
      <div className="menu-bar">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="profile.html">Profile</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="sell.html">Sell</a></li>
          <li><a href="">Friends</a></li>
        </ul>
      </div>

      <div className="container">
        <div className="existing-listings">
          <h2>Your Listings</h2>
          <ul>
            <li>Sign in to View your Listing</li>
          </ul>
        </div>

        <div className="new-listings">
          <h2>Add a New Listing</h2>
          <ul>
            <li><a href="booklisting.html">Book Listing</a></li>
            <li><a href="schoolsupplylisting.html">School Supply Listing</a></li>
            <li><a href="noteslisting.html">Notes Listing</a></li>
          </ul>
        </div>
      </div>

      <footer>
        <p>&copy; 2024 UW Study Buddy App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default ListingsPage;