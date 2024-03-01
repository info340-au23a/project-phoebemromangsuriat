import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MarketPlace from './MarketPlace';
import Sell from './Sell';
import Profile from './Profile';
import Listing from './Listing';
import Friends from './Friends';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';

function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/friends" element={<Friends />} />
      </Routes>
    </div>
  );
}

export default App;