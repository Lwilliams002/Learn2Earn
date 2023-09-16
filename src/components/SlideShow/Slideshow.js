import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Slide from './Slide'; // Import your Slide component
import SlideQ from './Slide'; // Import your SlideQ component

const Slideshow = () => {
    const [start, setStart] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide
    const navigate = useNavigate();

    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        // Add more image URLs here
    ];

    const questions = [
        'Question 1',
        'Question 2',
        'Question 3',
        // Add more questions here
    ];

    const initiateSlides = () => {
        setStart(true);
        navigate('/slide');
    };

    const goToPreviousSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const goToNextSlide = () => {
        if (currentSlide < images.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    return (
        <div style={{
            backgroundImage: 'url("https://bpb-us-w2.wpmucdn.com/u.osu.edu/dist/6/44792/files/2017/04/stock-market-3-21gyd1b.jpg")',
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            {start ? (
                // Render the Slide or Slide_Q component based on the current slide
                currentSlide < images.length ? (
                    <Slide images={images} currentSlide={currentSlide} />
                ) : (
                    <SlideQ question={questions[currentSlide - images.length]} />
                )
            ) : (
                <div>
                    <Button variant="contained" color="primary" onClick={initiateSlides}>
                        Start Slides
                    </Button>
                </div>
            )}
            {start && (
                <div style={{ marginTop: '20px' }}>
                    <Button variant="contained" color="primary" onClick={goToPreviousSlide}>
                        Previous
                    </Button>
                    <Button variant="contained" color="primary" onClick={goToNextSlide}>
                        Next
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Slideshow;
