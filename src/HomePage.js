import React from 'react';
import './css/style.css';
import Header from './Header';

const Sell = () => {
    return (
        <>
<head>
    <title>UW Study Buddy App</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link href="css/style.css" rel="stylesheet" />
</head>

<body>
    <div class="menu-bar">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="profile.html">Profile</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="sell.html">Sell</a></li>
            <li><a href="#">Friends</a></li>

        </ul>
    </div>

<main>
    <h1>Welcome to UW Study Buddy </h1> 
    <img src="img/studybuddy-logo.png" alt="Study Buddy Logo">
    <h4>Unlock Your Learning Legacy: Connect, Sell, Succeed! </h2>
</main>

<footer>
    <p>&copy; 2024 UW Study Buddy App. All rights reserved.</p>
</footer>

</body>
</>
)}

export default Sell;