import React, { useState } from 'react';
import Slide from './Slide';
import TopBar from "../TopBar/TopBar";
import BankSummary from "../Summary/Mini Summaries/BankSummary";
import InvestSummary from "../Summary/Mini Summaries/InvestSummary";

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // TODO How are answers going to be stored ?
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
            choices: ['1', '2'],
            prev: 1,
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "Banking",
            type: "slider",
            question: 'asssssssssssssssssssssjjjddjdjjddjdjjdjdjdjjddjdjddddjdjddjjdjdjdjdjjdjdjdjddjdjdjddjdjdj',
            prev: 1,
        },
        {
            prev: 2,
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "Investing",
            type: "slider",
            question: 'asssssssssssssssssssssjjjddjdjjddjdjjdjdjdjjddjdjddddjdjddjjdjdjdjdjjdjdjdjddjdjdjddjdjdj',
            prev: 0,
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "test",
            type: "slider",
            question: 'asssssssssssssssssssssjjjddjdjjddjdjjdjdjdjjddjdjddddjdjddjjdjdjdjdjjdjdjdjddjdjdjddjdjdj',
            prev: 1,
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "test",
            type: "slider",
            question: 'asssssssssssssssssssssjjjddjdjjddjdjjdjdjdjjddjdjddddjdjddjjdjdjdjdjjdjdjdjddjdjdjddjdjdj',
            prev: 1,
        },
        {
            prev: 3,
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "test",
            type: "slider",
            prev: 0,
            question: 'asssssssssssssssssssssjjjddjdjjddjdjjdjdjdjjddjdjddddjdjddjjdjdjdjdjjdjdjdjddjdjdjddjdjdj',
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "test",
            type: "slider",
            prev: 1,
            question: 'asssssssssssssssssssssjjjddjdjjddjdjjdjdjdjjddjdjddddjdjddjjdjdjdjdjjdjdjdjddjdjdjddjdjdj',
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "test",
            type: "slider",
            prev: 1,
            question: 'asssssssssssssssssssssjjjddjdjjddjdjjdjdjdjjddjdjddddjdjddjjdjdjdjdjjdjdjdjddjdjdjddjdjdj',
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "test",
            type: "slider",
            prev: 1,
            question: 'asssssssssssssssssssssjjjddjdjjddjdjjdjdjdjjddjdjddddjdjddjjdjdjdjdjjdjdjdjddjdjdjddjdjdj',
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "test",
            type: "slider",
            prev: 1,
            question: 'asssssssssssssssssssssjjjddjdjjddjdjjdjdjdjjddjdjddddjdjddjjdjdjdjdjjdjdjdjddjdjdjddjdjdj',
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "test",
            type: "slider",
            prev: 4,
            question: 'asssssssssssssssssssssjjjddjdjjddjdjjdjdjdjjddjdjddddjdjddjjdjdjdjdjjdjdjdjddjdjdjddjdjdj',
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "test",
            type: "slider",
            question: 'asssssssssssssssssssssjjjddjdjjddjdjjdjdjdjjddjdjddddjdjddjjdjdjdjdjjdjdjdjddjdjdjddjdjdj',
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "test",
            type: "slider",
            question: 'asssssssssssssssssssssjjjddjdjjddjdjjdjdjdjjddjdjddddjdjddjjdjdjdjdjjdjdjdjddjdjdjddjdjdj',
        },

        // Add more slides here
    ];

    const goToNextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setCurrentSlide(currentSlide + 1);
        }
    };
    const goToPrevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        }
    };
    const navigate = useNavigate();

    const renderContent = () => {
        const current = slides[currentSlide];

        if (current.prev === 0) {
            return <BankIntro goToNextSlide={goToNextSlide}/>;
        }

        if (current.prev === 3) {
            return <BankSummary goToNextSlide={goToNextSlide} />;
        }

        if (current.prev === 4) {
            return <InvestSummary goToNextSlide={goToNextSlide} />;
        }

        if (current.prev === 5) {
            return <BudgetTips goToNextSlide={goToNextSlide} />;
        }

        return (
            <Slide
                currentSlide={currentSlide}
                slide={current}
                goToNextSlide={goToNextSlide}
                goToPrevSlide={goToPrevSlide}
            />
        );
    };

    const current = slides[currentSlide]; // Get the current slide details

    return (
        <div style={{
            backgroundImage: `url("${slides[currentSlide]?.image || ''}")`,
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <TopBar currentSlideIndex={currentSlide} totalSlides={slides.length} />
            {renderContent()}
            <div>
                {current.prev === 1 || current.prev === 3 || current.prev === 4 || current.prev === 5 ? (
                    <button className="next-button" onClick={goToNextSlide}>></button>
                ) : current.prev === 2 ? (
                    <>
                        <button className="next-button" onClick={goToNextSlide}>></button>
                        <button className="previous-button" onClick={goToPrevSlide}>{"<"}</button>
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default Slideshow;





