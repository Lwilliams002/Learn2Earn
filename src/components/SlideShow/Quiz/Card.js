import React from 'react';
import './Card.css';

const MagicCard = ({ children }) => {
    return (
        <div className="magic-card-container">
            <div className="card">
                {children}
            </div>
        </div>

    );
};

export default MagicCard;
