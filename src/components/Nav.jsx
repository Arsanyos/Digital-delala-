import React from 'react';
import Search from "./Search.jsx";
import '../style/style-nav.css';

function NavBar() {
  return (
    <div class="container">
      <nav className="Nav-bar">
        <div className="logo">
          <h2>Digital Delala</h2>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <a href="" className="home">
                Home
              </a>
            </li>
            <li>
              <a href="#latest" className="latest">
                Latest
              </a>
            </li>
            <li>
              <a href="#location" className="location">
                Location
              </a>
            </li>
            <li>
              <a href="" className="contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="language">
          <h2> </h2>
        </div>
      </nav>
      <div className="background-image">
        <img
          src="https://images.unsplash.com/photo-1512654458600-cf5387bd9428?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
      </div>
      <div className="search-app">
        <Search />
      </div>
    </div>
  );
}

export default NavBar;
