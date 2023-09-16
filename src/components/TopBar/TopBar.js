import React from 'react';
import './TopBar.css';

const TopBar = ({ currentSlide }) => {
    return (
        <div className="top-bar">
            <h1>Current Slide: {currentSlide}</h1>
        </div>
    );
};

export default TopBar;
