import React, { useState } from 'react';
import { Slider } from '@mui/material';
import './Emojislider.css'; // Import the CSS file

const EmojiSlider = () => {
    const [emojiIndex, setEmojiIndex] = useState(1); // Default to neutral face
    const emojis = ['😞', '😐', '🤑'];

    const valuetext = (value) => {
        if (value <= 49) {
            return 0;
        } else if (value <=88) {
            return 1;
        } else {
            return 2;
        }
    };

    const handleChange = (event, newValue) => {
        setEmojiIndex(valuetext(newValue));
    };

    return (
        <div className="emoji-slider"> {/* Apply the custom styles */}
            <Slider
                aria-label="Confidence"
                defaultValue={50}
                value={emojiIndex * 50} // Increment by 50
                onChange={handleChange}
                step={50} // Increment by 50
                min={0}
                max={100}
                valueLabelDisplay="off"
            />
            <div style={{ textAlign: 'center', fontSize: '2rem' }}>{emojis[emojiIndex]}</div>
        </div>
    );
};

export default EmojiSlider;