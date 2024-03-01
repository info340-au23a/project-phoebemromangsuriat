import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer'; 
import algebrabook from './img/algebrabook.jpg';
import biobook from './img/biobook.png';
import pythonbook from './img/pythonbook.png';

function AvailableListings() {

const [listingType, setType] = useState("All"); 

const filterListings = (listings) => {
    return listings.filter((listing) => {
      if (listingType !== "All" && listingType !== listing.type) return false;
      return true;
    });
  };

const listingData = [
    { id: 1, type: "Textbook", name: "Python Textbook", price: 20.00, condtion: "fair", image: pythonbook },
    { id: 2, type: "Textbook", name: "Biology Textbook", price: 15.00, condition: "good", image: biobook },
    { id: 3, type: "Textbook", name: "Algebra Textbook", price: 35.00, condition: "very good", image: algebrabook },
];

const filteredListings = filterListings(listingData);


return (
    <div>
      <Header />
      <section id="All-Listings">
        <h2>Available Listings</h2>
        <section id="Filter">
          <label htmlFor="category">Filter by Category:</label>
          <select id="category" onChange={(e) => { setType(e.target.value); console.log(e.target.value); }}>
            <option value="All">All</option>
            <option value="Textbook">Textbooks</option>
            <option value="Notes">Notes</option>
            <option value="Supplies">School Supplies</option>
            <option value="Other">Other</option>
          </select>
        </section>
        <div className="listings-container">
          <section className="textbook-listings">
            {filteredListings.map((listing) => (
              <div key={listing.id} className="textbook-item-container">
                <img src={listing.image} alt={`${listing.name} Image`} />
                <a href="#">{listing.name}</a>
              </div>
            ))}
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AvailableListings;