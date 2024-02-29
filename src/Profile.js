import React, { useState } from 'react';
import './css/style.css';

function EditProfile({ onSaveProfile }) {
  const [profileData, setProfileData] = useState({
    name: '',
    image: '',
    major: '',
    grade: '',
    bio: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveProfile(profileData);
  };

  return (
    <div>
      <div className="menu-bar">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="profile.html">Profile</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="sell.html">Sell</a></li>
          <li><a href="sell.html">Friends</a></li>
        </ul>
      </div>

      <div className="profile-container">
        <section id="Build Profile">
          <h1>Create Your Profile!</h1>

          <form onSubmit={handleSubmit} className="profile-form">
            {/* Will add form link later */}
            <label htmlFor="name">Username:</label>
            <input type="text" id="name" name="name" required onChange={handleInputChange} value={profileData.name} />

            <label htmlFor="profile-picture">Profile Picture:</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={handleInputChange} />

            <label htmlFor="major">Major:</label>
            <input type="text" id="major" name="major" onChange={handleInputChange} value={profileData.major} />

            <label htmlFor="grade">Grade</label>
            <select name="grade" className="grade-picker" onChange={handleInputChange} value={profileData.grade}>
              <option value="">Select your grade</option>
              <option>Freshman</option>
              <option>Sophomore</option>
              <option>Junior</option>
              <option>Senior</option>
            </select>

            <label htmlFor="bio">Bio:</label>
            <textarea id="bio" name="bio" rows="4" onChange={handleInputChange} value={profileData.bio}></textarea>

            <button type="submit">Make Changes!</button>
          </form>
        </section>
      </div>

      <footer>
        <p>&copy; 2024 UW Study Buddy App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default EditProfile;
