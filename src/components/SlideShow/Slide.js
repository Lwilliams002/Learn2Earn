import React, { useState } from 'react';
import './Slide.css';
import { Slider } from '@mui/material';

const Slide = ({ currentSlide, slide, goToNextSlide }) => {
    const [selectedChoice, setSelectedChoice] = useState(null);

    const handleChoiceChange = (choice) => {
        setSelectedChoice(choice);
    };

    const valuetext = (value) => {
        return `${value}°C`;
    };

    return (
        <>
            <div className="slide">
                <div className="slide-content">
                    <h2 className="topic">{slide.topic}</h2>
                    {/*TODO Question should be in a fixed box width so the question goes to the next line if too long*/}
                    <p className="question">{slide.question}</p>
                    {/* TODO slider should be a fixed size not based on how long the question is */}
                    {slide.type === "slider" ? (
                        <Slider
                            aria-label="Confidence"
                            defaultValue={50}
                            getAriaValueText={valuetext}
                            valueLabelDisplay="auto"
                            step={10}
                            min={0}
                            max={100}
                            style={{
                                width: '300px',
                                height: '20px',
                            }}
                        />
                    ) : slide.type === "multiple choice" ? (
                        <div>
                            {slide.choices.map((choice, index) => (
                                <label key={index}>
                                    <input
                                        type="radio"
                                        value={choice}
                                        checked={selectedChoice === choice}
                                        onChange={() => handleChoiceChange(choice)}
                                    />
                                    {choice}
                                </label>
                            ))}
                        </div>
                    ) : null}
                </div>
            </div>
            {/*TODO implement back button Should only be display after first question and should be removed when a new section gets started */}
            <button className="next-button" onClick={goToNextSlide}>></button>
        </>
    );
};

export default Slide;
