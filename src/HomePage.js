import React from 'react';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
  return (
    <div>
      <div className="menu-bar">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="profile.html">Profile</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="sell.html">Sell</a></li>
          <li><a href="friends.html">Friends</a></li>
        </ul>
      </div>

      <main>
        <h1>Welcome to UW Study Buddy</h1>
        <img src="img/studybuddy-logo.png" alt="Study Buddy Logo" />
        <h4>Unlock Your Learning Legacy: Connect, Sell, Succeed!</h4>
      </main>

      <footer>
        <p>&copy; 2024 UW Study Buddy App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;