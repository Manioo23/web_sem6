import React from 'react';
import '../index.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <form
        action="/"
        method="get"
        autoComplete="off"
    >
        <label htmlFor="header-search">
            <span className="visually-hidden">
                Search
            </span>
        </label>
        <input
            value={searchQuery}
            onInput={(e) => setSearchQuery(e.target.value)}
            type="text"
            id="header-search"
            placeholder="Search"
            name="search"
        />
    </form>
);
export default SearchBar
