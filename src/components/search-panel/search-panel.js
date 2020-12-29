import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
    return(
        <div className="search-panel">
            <input placeholder="Search"/> 
            <button className="btn-all">All</button>
            <button className="btn-liked">Liked</button>
        </div>
    );
};

export default SearchPanel;
