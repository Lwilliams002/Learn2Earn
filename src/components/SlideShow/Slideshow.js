import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Slide from './Slide';

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

    const slides = [
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "test",
            question: 'Question 1',
        },
        {
            image: 'https://www.oncourselearning.com/wp-content/uploads/2021/04/Financial_Literacy_BLOG.jpg',
            topic: "test",
            question: 'Question 2',
        },
        {
            image: 'https://static01.nyt.com/images/2018/01/18/business/18Adviser/merlin_132485441_8a30c8a2-59fb-4f83-9e78-38d57720fcd6-jumbo.jpg?quality=75&auto=webp',
            topic: "test",
            question: 'Question 3',
        },
        // Add more slides here
    ];

    const goToNextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    return (
        <div style={{
            backgroundImage: `url("${slides[currentSlide].image}")`, // Display image as background
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Slide
                currentSlide={currentSlide}
                slide={slides[currentSlide]}
                goToNextSlide={goToNextSlide}
            />
        </div>
    );
};

export default Slideshow;
