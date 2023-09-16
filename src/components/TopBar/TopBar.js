import React from 'react';
import './TopBar.css';

const TopBar = ({ currentSlideIndex, totalSlides }) => {
    const segments = Array.from({ length: totalSlides }, (_, i) => i);

    return (
        <div className="top-bar">
            {segments.map((_, i) => (
                <div
                    key={i}
                    className={`progress-segment ${i <= currentSlideIndex ? 'filled' : ''}`}
                ></div>
            ))}
        </div>
    );
};

export default TopBar;
