import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';
//import profiles from 'public/profile.json';

// Define the profiles array
const profiles = [
  {
    "id": 1,
    "name": "John Doe",
    "major": "Computer Science",
    "grade": "Senior",
    "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sem euismod, blandit odio nec, feugiat quam."
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "major": "Biology",
    "grade": "Freshman",
    "bio": "Nulla facilisi. Sed sit amet ultrices nulla. Proin at eros rutrum, scelerisque dui nec, feugiat nisi."
  },
  {
    "id": 3,
    "name": "Alice Johnson",
    "major": "Chemistry",
    "grade": "Junior",
    "bio": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  }
];

function FriendItem({ friend }) {
  return (
    <div className="friend">
      <h2>{friend.name}</h2>
      <p>Major: {friend.major}</p>
      <p>Grade: {friend.grade}</p>
      <p>Bio: {friend.bio}</p>
    </div>
  );
}

function Friends() {
  const [searchCriteria, setSearchCriteria] = useState({
    major: '',
    grade: ''
  });
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchCriteria(prevCriteria => ({
      ...prevCriteria,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Filter profiles based on search criteria
    const filteredProfiles = profiles.filter(profile => {
      const majorMatch = !searchCriteria.major || profile.major.toLowerCase().includes(searchCriteria.major.toLowerCase());
      const gradeMatch = !searchCriteria.grade || profile.grade.toLowerCase() === searchCriteria.grade.toLowerCase();
      return majorMatch || gradeMatch;
    });
    setSearchResults(filteredProfiles);
  };

    return (
        <div>
        <Header /> {}

      <div className="friends-container">
        <section id="Find Friends">
          <h1>Find Friends</h1>

          <form onSubmit={handleSubmit} className="friends-form">
            <label htmlFor="major">Major:</label>
            <input type="text" id="major" name="major" onChange={handleInputChange} value={searchCriteria.major} />

            <label htmlFor="grade">Grade:</label>
            <select name="grade" id="grade" onChange={handleInputChange} value={searchCriteria.grade}>
              <option value="">Select grade</option>
              <option>Freshman</option>
              <option>Sophomore</option>
              <option>Junior</option>
              <option>Senior</option>
            </select>

            <button type="submit">Search</button>
          </form>
        </section>
      </div>

      <div id="results">
        {searchResults.length === 0 ? (
          <p>No matching friends found.</p>
        ) : (
          searchResults.map(friend => (
            <FriendItem key={friend.id} friend={friend} />
          ))
        )}
      </div>

      <div id="allFriends">
        {profiles.map(friend => (
          <div key={friend.id} className="friend">
            <h2>{friend.name}</h2>
            <p>Major: {friend.major}</p>
            <p>Grade: {friend.grade}</p>
            <p>Bio: {friend.bio}</p>
      </div>
  ))}
</div>

      <Footer /> {}
        </div>
    );
}

export default Friends;
