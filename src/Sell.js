import React from 'react';
import './css/style.css';
import Header from './Header';

const Sell = () => {
    return (
        <>
            <head>
                <title>Listings Page</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
                <link href="css/style.css" rel="stylesheet" />
            </head>

            <body>
                <div className="menu-bar">
                    <ul>
                    <Header />;
                    </ul>
                </div>

                <div className="container">
                    <div className="existing-listings">
                        <h2>Your Listings</h2>
                        <ul>
                            <li>Sign in to View your Listing</li>
                        </ul>
                    </div>

                    <div className="new-listings">
                        <h2>Add a New Listing</h2>
                        <ul>
                            <li><a href="booklisting.html">Book Listing</a></li>
                            <li><a href="schoolsupplylisting.html">School Supply Listing</a></li>
                            <li><a href="noteslisting.html">Notes Listing</a></li>
                        </ul>
                    </div>
                </div>

            </body>

            <footer>
                <p>&copy; 2024 UW Study Buddy App. All rights reserved.</p>
            </footer>
        </>
    );
}

export default Sell;
