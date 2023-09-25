import React, { useState } from 'react';
import Slide from './Slide';
import TopBar from "../TopBar/TopBar";
import BankSummary from "../Summary/Mini Summaries/BankSummary";
import InvestSummary from "../Summary/Mini Summaries/InvestSummary";
import BankIntro from "./BankIntro";
import BudgetTips from "../Summary/Mini Summaries/BudgetTips";
import {useNavigate} from "react-router-dom";
import './Slide.css';
import Summary from "../Summary/Summary";
// import EmojiSlider from './EmojiSlider';

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const randomNumber = Math.floor(Math.random() * 5) + 1;

    console.log(randomNumber);


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
            topic: "Building Trust with Banks",
            type: "multiple choice",
            question: 'Do you currently own a credit card?',
            choices: ['Yes', 'No'],
            prev: 1,
        },
        {
            image: 'https://static01.nyt.com/images/2018/01/18/business/18Adviser/merlin_132485441_8a30c8a2-59fb-4f83-9e78-38d57720fcd6-jumbo.jpg?quality=75&auto=webp',
            topic: "Building Trust with Banks",
            type: "multiple choice",
            question: 'Do you have any plans to establish or improve your credit score?',
            choices: ['Yes, Im actively working on improving my credit score right now.', 'Yes, I plan to work on it in the near future.', 'No, I am satisfied with my credit score.','No, I havent thought about it yet.'],
            prev: 2,
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
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "Building Trust with Banks",
            type: "multiple choice",
            question: 'Which of the following best describes your spending habits? ',
            choices: ["I consistently spend less than I earn and maintain a healthy savings habit.","I try to save, but I occasionally overspend or struggle to stick to a budget.","I often find myself living paycheck to paycheck and have difficulty saving.","I frequently spend beyond my means and accumulate debt."],
            prev: 2,
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "Building Trust with Banks",
            type: "multiple choice",
            choices: ["Yes","No"],
            question: 'Have you ever had or currently have any loans, including but not limited to student loans, car loans, or bank loans?',
            prev: 2,
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "Building Trust with Banks",
            type: "multiple choice",
            question: 'Are you knowledgeable about what constitutes good or bad interest rates on loans and credit products?',
            choices:[" I understand the criteria for determining good or bad interest rates."," I have some knowledge but would like to learn more.","I am unsure about what qualifies as good or bad interest rates. "],
            prev: 2,
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "Building Trust with Banks",
            type: "multiple choice",
            question: 'What role do you believe credit cards and loans should play in achieving your financial goals? ',
            choices:["I see them as tools to help build credit and achieve my financial aspirations. ","I primarily use them for convenience and everyday expenses.","I avoid credit cards and loans as much as possible to prevent debt."," I'm uncertain about their role in my financial goals. "],
            prev: 2,
        },
        {
            prev: 3,
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "Investing Into Your Future & Basics",
            type: "multiple choice",
            choices: ["Yes","No"],
            question: 'Have you started thinking about your financial goals for the first five years after graduation? ',
            prev: 1,
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
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "Investing Into Your Future & Basics",
            type: "multiple choice",
            choices: ["Yes", "No"],
            question: 'Do you understand how insurance can provide financial protection for unexpected emergencies and contribute to your long-term financial security? ',
            prev: 2,
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "Investing Into Your Future & Basics",
            type: "multiple choice",
            choices: ["Yes", "No"],
            question: 'Have you received an introduction to investment options specifically tailored for students? ',
            prev: 2,
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "Investing Into Your Future & Basics",
            type: "multiple choice",
            choices: ["Yes", "No"],
            question: 'Do you have a grasp of how risk and return work in the context of investing? ',
            prev: 2,
        },
        {
            image: 'https://d32ijn7u0aqfv4.cloudfront.net/wp/wp-content/uploads/raw/SOBK0422040_1560x880_desktop.jpg',
            topic: "Investing Into Your Future & Basics",
            type: "multiple choice",
            choices: ["Yes", "No"],
            question: 'Have you explored the possibility of building a diversified investment portfolio even while on a college budget? ',
            prev: 2,
        },
        {
            prev: 4,
        },
        {
            prev: 5,
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
            topic: "Financial Health Score(1-5)",
            type: "multiple choice",
            choices: [randomNumber],
            question: 'Based on the financial literacy answers you provided, you have a final score of:',
            prev: 2,
        },
        {
            prev: 6,
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
                ) : current.prev === 6 ? (
                    <button className="previous-button" onClick={goToPrevSlide}>{"<"}</button>
                ) : null}
            </div>
        </div>
    );
};

export default Slideshow;





