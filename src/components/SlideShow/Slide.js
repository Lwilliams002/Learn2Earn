import React, { useState } from 'react';
import './Slide.css';
import { Slider } from '@mui/material';
import BankSummary from '../Summary/Mini Summaries/BankSummary';
import InvestSummary from '../Summary/Mini Summaries/InvestSummary';
import BankIntro from "./BankIntro";
import BudgetTips from "../Summary/Mini Summaries/BudgetTips";
import EmojiSlider from './Quiz/Emojislider';
import Summary from "../Summary/Summary";

const Slide = ({ currentSlide, slide, goToNextSlide, goToPrevSlide }) => {
    const [selectedChoice, setSelectedChoice] = useState(null);

    const handleChoiceChange = (choice) => {
        setSelectedChoice(choice);
    };

    const valuetext = (value) => {
        return `${value}°C`;
    };

    return (
        <>
            {slide.prev <= 2 | slide.prev === 6 ? (
                <div className={"transparent-box-question"}>
                <div className="slide">
                    <div className="slide-content">
                        <h2 className="topic">{slide.topic}</h2>
                        <p className="question">{slide.question}</p>
                        {slide.type === "slider" ? (
                            <EmojiSlider /> // Use the EmojiSlider component
                        ) : slide.type === "multiple choice" ? (
                            <div className="radio-container">
                                {slide.choices.map((choice, index) => (
                                    <label key={index}>
                                        <input
                                            type="radio"
                                            value={choice}
                                            checked={selectedChoice === choice}
                                            onChange={() => handleChoiceChange(choice)}
                                        />
                                        <span className="custom-radio"></span>
                                        {choice}
                                    </label>
                                ))}
                            </div>
                        ) : null}
                    </div>
                </div>
                </div>
            ) : slide.prev === 3 ? (
                <div>
                    <BankSummary />
                </div>
            ) : slide.prev === 4 ? (
                <div>
                    <InvestSummary />
                </div>
            ) : slide.prev === 5 ? (
                <div>
                    <BudgetTips />
                </div>
            ) : slide.prev === 6 ? (
                <div>
                    <Summary />
                </div>
            ) : null}
        </>
    );
};

export default Slide;
