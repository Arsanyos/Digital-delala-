import React from "react";
import "../style/style-search.css";

function SearchBar() {
  return (
    <div className="container">
      <div className="main-text">
        <h1>MAIN HEADING</h1>
        <h3>SUB HEADING</h3>
      </div>

      <div class="search-bar">
        <div class="input-field first-wrap">
          <input
            id="search"
            type="text"
            placeholder="What are you looking for?"
          />
        </div>

        <div class="input-field second-wrap">
          <button class="search" type="button">
            <img
              class="searc-img"
              src="https://img.icons8.com/fluent-systems-filled/24/000000/search.png"
              alt="search-button"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
