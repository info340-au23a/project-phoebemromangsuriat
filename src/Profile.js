import React from 'react';
import './css/style.css'; 

function EditProfile() {
  return (
    <div>
      <div className="menu-bar">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="profile.html">Profile</a></li>
          <li><a href="shop.html">Shop</a></li>
          <li><a href="sell.html">Sell</a></li>
          <li><a href="">Friends</a></li>
        </ul>
      </div>

      <div className="profile-container">
        <section id="Build Profile">
          <h1>Edit Your Profile!</h1>

          <div className="profile-form">
            {/* Will add form link later */}
            <label htmlFor="name">Username:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="profile-picture">Profile Picture:</label>
            <input type="file" id="image" name="image" accept="image/*" />

            <label htmlFor="major">Major:</label>
            <input type="text" id="major" name="major" />

            <label htmlFor="grade">Grade</label>
            <select name="grade" className="grade-picker">
              <option value=" ">Select your grade</option>
              <option>Freshman</option>
              <option>Sophomore</option>
              <option>Junior</option>
              <option>Senior</option>
            </select>

            <label htmlFor="bio">Bio:</label>
            <textarea id="bio" name="bio" rows="4"></textarea>

            <button type="make-changes">Make Changes!</button>
          </div>
        </section>
      </div>

      <footer>
        <p>&copy; 2024 UW Study Buddy App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default EditProfile;