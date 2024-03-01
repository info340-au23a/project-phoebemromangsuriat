import React from 'react';
import Header from './Header'; 
import Footer from './Footer';

function ListingsPage() {
  return (
    <div>
      <Header /> {}

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

      <Footer /> {}
    </div>
  );
}

export default ListingsPage;