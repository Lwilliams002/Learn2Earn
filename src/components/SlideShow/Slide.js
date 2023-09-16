import React from 'react';
import './Slide.css';

const Slide = ({ currentSlide, slide, goToNextSlide }) => {
    return (
        <div className="slide">
            <div>
                <h2>{slide.topic}</h2>
                <p>{slide.question}</p>
                // Add an input which
            </div>
            <button onClick={goToNextSlide}>Next</button>
        </div>
    );
};

export default Slide;
