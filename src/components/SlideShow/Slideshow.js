import React, { useState } from 'react';
import Slide from './Slide';
import TopBar from "../TopBar/TopBar";
import BankSummary from "../Summary/Mini Summaries/BankSummary";
import InvestSummary from "../Summary/Mini Summaries/InvestSummary";

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // TODO How are answers going to be stored ?
    const slides =[
        {
            prev: 0,
        },
        {
            image: 'https://www.oncourselearning.com/wp-content/uploads/2021/04/Financial_Literacy_BLOG.jpg',
            topic: "What you will be doing",
            type: "multiple choice",
            question: 'Now, please advance to the next page and answer the following questions to participate in our “Financial Health” game. Upon completion of the questions, you will have a health score ($$$) that directly correlates with your answers and financial literacy. Proceed to learn more.\n',
            choices: [],
            prev: 1,
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
            topic: "Building Trust with Banks",
            type: "multiple choice",
            question: 'When choosing a credit card, which features do you prioritize the most? ',
            choices: ["Low-interest rates or APR","Cashback rewards","Travel rewards or miles","No annual fees","Purchase protection","Mobile app and online account management"],
            prev: 2,
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
            topic: "Investing Into Your Future & Basics",
            type: "multiple choice",
            choices: ["Yes","No"],
            question: 'Are you familiar with the different types of insurance, such as life insurance, health insurance, or auto insurance? ',
            prev: 2,
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "Investing Into Your Future & Basics",
            type: "multiple choice",
            choices: ["Yes", "No"],
            question: 'Do you have a preconceived idea about life insurance (i.e. life insurance is only for older people)? ',
            prev: 2,
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
            topic: "Overall Solutions",
            question: 'Welcome to your comprehensive financial guide tailored to college students! Here, we provide crucial insights to help you navigate your financial journey with ease. Explore the world of investing, understanding the distinction between long-term strategies like 401(k)s or whole life insurance and short-term options like high-yield savings accounts. Diversify your investments with stocks, bonds, and mutual funds for a balanced portfolio. Demystify financial misconceptions, such as leveraging credit cards responsibly and considering affordable term life insurance for peace of mind. Manage student loans efficiently, explore income-driven repayment plans, and streamline your debt through consolidation. Set clear financial goals, from paying off student loans to building an emergency fund, and join our Learn2Earn Community to connect with fellow learners. Take action now by reviewing your budget, starting an emergency fund, or considering a secured credit card for newcomers. We value your feedback, so let us know how we can enhance your financial journey. For any questions or assistance, our customer support team is here to guide you.\n' +
                '\n' +
                '\n' +
                '\n' +
                '\n',
            prev: 2,
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

        if (current.prev === 6) {
            return <Summary goToNextSlide={goToNextSlide} />;
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
        <div className="slideshow-background">

            <TopBar currentSlideIndex={currentSlide} totalSlides={slides.length} />
            {renderContent()}
            <div>
                {current.prev === 0 || current.prev === 1 || current.prev === 3 || current.prev === 4 || current.prev === 5 ? (
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





