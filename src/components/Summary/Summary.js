import React from 'react';
import './Summary.css';
import Emojislider from "../SlideShow/Quiz/Emojislider";

const Summary = () => {
    return (
        <div className="outer-box-container">
            <div className="dual-transparent-box">
                <h2>Additional Resources</h2>
                <h3>Best credit card for college students awarded by NerdWallet</h3>
                <p>Capital One Savor One CC</p>
                <p>If you would like to read more about credit cards, their benefits, and how to properly build credit, please read the following article. <a href="https://www.capitalone.com/learn-grow/money-management/best-student-credit-cards/">Learn more</a></p>
                <h3>Best ETFs for beginners or college students just starting to invest</h3>
                <p>Vanguard S&P 500 ETF (VOO)</p>
                <p>If you would like to read more about ETFs, their impressive and steadily increasing gains, and how to understand the basics then please read the following article. <a href="https://youngandtheinvested.com/best-etfs-for-young-investors/">Learn more</a></p>
                <h3>General or directional help towards investing into different types of insurance such as life or health insurance</h3>
                <p>If you would like to read more about life insurance or in specific, whole life insurance, the possibilities and the overall goals of having you then please read the following article from statefarm. <a href="https://www.statefarm.com/insurance/life/whole-life">Learn more</a></p>
                <h3>Financial Literacy / Budgeting</h3>
                <p>If you would like to start tracking your spending and start budgeting for your future success then please click the free link which leads you to one of our recommended courses by KhanAcademy regarding financial literacy / budgeting. <a href="https://www.khanacademy.org/college-careers-more/financial-literacy">Learn more</a></p>
            </div>
            <div className="dual-transparent-box">
                <div>
                    <h2 className={"knowledge-caption"}>
                        How do you feel know about these topics now ?
                    </h2>
                </div>
                <div>
                    <h2 className={"knowledge-sub"}>
                        Banking
                    </h2>
                    <Emojislider></Emojislider>
                </div>
                <div>
                    <h2 className={"knowledge-sub"}>
                        Investing
                    </h2>
                    <Emojislider></Emojislider>
                </div>
                <div>
                    <h2 className={"knowledge-sub"}>
                        Budgeting
                    </h2>
                    <Emojislider></Emojislider>
                </div>
            </div>
        </div>
    );
};

export default Summary;
