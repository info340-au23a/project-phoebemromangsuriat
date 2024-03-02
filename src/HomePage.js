import React from 'react';
import Header from './Header';
import Footer from './Footer';
import studyBuddyLogo from './img/studybuddy-logo.png';

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
                            <img src="profile_logo.png" alt="Profile Logo" />
                            <span>Profile</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => this.navigateToPage('shop.html')}>
                            <img src="shop_logo.png" alt="Shop Logo" />
                            <span>Shop</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => this.navigateToPage('sell.html')}>
                            <img src="sell_logo.png" alt="Sell Logo" />
                            <span>Sell</span>
                        </button>
                    </li>
                    <li>
                        <button onClick={() => this.navigateToPage('friends.html')}>
                            <img src="friends_logo.png" alt="Friends Logo" />
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