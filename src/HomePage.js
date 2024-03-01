import React from 'react';
import Header from './Header'; 
import Footer from './Footer';
import './css/style.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import studyBuddyLogo from './img/studybuddy-logo.png';


function HomePage() {
  return (
    <div>
    <Header /> {}
      <main>
        <h1>Welcome to UW Study Buddy</h1>
        <img src={studyBuddyLogo} alt="Study Buddy Logo" />
        <h4>Unlock Your Learning Legacy: Connect, Sell, Succeed!</h4>
      </main>

      <Footer /> {}
    </div>
  );
}

export default HomePage;