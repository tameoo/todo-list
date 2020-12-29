import React from 'react';
import './app-header.css';

const Header = () => {
    return (
        <div className="app-header">
            <h1>My TodoList</h1> 
            <div className="app-status">
                <span className="app-item">3 </span>todo item, liked is <span className="app-liked">0</span>, done <span className="app-done">0</span>
            </div>
        </div>
    );
};

export default Header;