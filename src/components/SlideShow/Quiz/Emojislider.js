import React, { useState } from 'react';
import { Slider } from '@mui/material';


const EmojiSlider = () => {
    const [emojiIndex, setEmojiIndex] = useState(1); // Default to neutral face
    const emojis = ['😞', '😐', '🤑'];

    const valuetext = (value) => {
        if (value <= 33) {
            return 0;
        } else if (value <= 66) {
            return 1;
        } else {
            return 2;
        }
    };

    const handleChange = (event, newValue) => {
        setEmojiIndex(valuetext(newValue));
    };

    return (
        <div>
            <Slider
                aria-label="Confidence"
                defaultValue={50}
                value={emojiIndex * 33.33}
                onChange={handleChange}
                step={33}
                min={0}
                max={100}
                valueLabelDisplay="auto"
            />
            <div style={{ textAlign: 'center', fontSize: '2rem' }}>{emojis[emojiIndex]}</div>
        </div>
    );
};

export default EmojiSlider;