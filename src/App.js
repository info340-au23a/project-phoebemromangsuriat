import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import MarketPlace from './MarketPlace';
import Sell from './Sell';
import Profile from './Profile';
import Listing from './Listing';

function App(props) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </div>
  );
}

export default App;