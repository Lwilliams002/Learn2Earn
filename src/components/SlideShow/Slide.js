import React, {useState} from 'react';
import './Slide.css';

const Slide = ({ images }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(images.length - 1);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    return (
        <div className="slide">
            <h2>Image Slide</h2>
            <img src={images[currentSlide]} alt={`Slide ${currentSlide}`} />
            <button onClick={goToPrevSlide}>Previous</button>
            <button onClick={goToNextSlide}>Next</button>
        </div>
    );
};

const SlideQ = ({ question }) => {
    return (
        <div className="slide">
            <h2>{question}</h2>
            <input type="text" placeholder="Your answer..." />
        </div>
    );
};

export default Slide;

