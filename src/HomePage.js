import React from 'react';
import Header from './Header';
import Footer from './Footer';
import studyBuddyLogo from './img/studybuddy-logo.png';
import profileLogo from './img/profile.png';
import shopLogo from './img/shop.png';
import sellLogo from './img/sell.png';
import friendsLogo from './img/friends.png';

function HomePage() {
  return (
    <div>
    <Header />
      <main>
        <h1>Welcome to UW Study Buddy</h1>
        <img src={studyBuddyLogo} alt="Study Buddy Logo" />
        <h4>Unlock Your Learning Legacy: Connect, Sell, Succeed!</h4>

        <div className="home-btns">
                <ul>
                    <li>
                        <button onClick={() => this.navigateToPage('profile.html')}>
                            <img src={profileLogo} alt="Profile Logo" />
                            <span>Profile</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => this.navigateToPage('shop.html')}>
                            <img src={shopLogo} alt="Shop Logo" />
                            <span>Shop</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => this.navigateToPage('sell.html')}>
                            <img src={sellLogo} alt="Sell Logo" />
                            <span>Sell</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => this.navigateToPage('friends.html')}>
                            <img src={friendsLogo} alt="Friends Logo" />
                            <span>Friends</span>
                        </button>
                    </li>
                </ul>
            </div>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;