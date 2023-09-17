import React, { useState, useEffect } from 'react';
import { ResponsiveBar } from '@nivo/bar'; // Import ResponsiveBar
import Typography from '@mui/material/Typography';
import './BankSummary.css';

const calculateMonthlyPayment = (principal, interestRate, months) => {
    const rate = interestRate / 100 / 12;
    return (principal * rate) / (1 - Math.pow(1 + rate, -months));
};

const generateMonthlyPayments = (principal, interestRate) => {
    const months = 12;
    const monthlyPayment = calculateMonthlyPayment(principal, interestRate, months);
    return {
        x: interestRate.toFixed(2),
        y: parseFloat(monthlyPayment.toFixed(2)),
    };
};

const BankSummary = () => {
    const [creditScore, setCreditScore] = useState(600);
    const [barChartData, setBarChartData] = useState([]);
    const badCreditScore = 300;
    const goodCreditScore = 850;

    const calculateMonthlyPaymentsForScores = (scores) => {
        return scores.map(score => {
            const interestRate = 5 - (score - 600) / 100;
            const monthlyPaymentData = generateMonthlyPayments(20000, interestRate);

            let label;
            switch (score) {
                case badCreditScore:
                    label = 'Bad Credit';
                    break;
                case goodCreditScore:
                    label = 'Good Credit';
                    break;
                default:
                    label = 'Your Credit';
            }
            return {
                credit: label,
                payment: monthlyPaymentData.y
            };
        });
    };

    useEffect(() => {
        setBarChartData(calculateMonthlyPaymentsForScores([badCreditScore, goodCreditScore, creditScore]));
    }, [creditScore]);

    return (
        <div className="transparent-box">
            <div className="flex-container">
                <div className="flex-item-left">
                    <Typography variant="h5" gutterBottom>
                        Credit Score Information
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Your credit score is more than just a number; it's the key that unlocks financial freedom. The higher your score, the more favorable your interest rates will be. Conversely, a lower score can mean higher rates, costing you more in the long run.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        The interactive chart to the right serves as a guide to monthly payments based on different credit scores. You'll notice three bars—representing Bad Credit, Good Credit, and Your Credit. Feel free to adjust your score below to visualize its impact on your monthly payments.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Imagine you're planning to take out a $20,000 loan to buy a car, renovate your home, or perhaps even launch a small business. This chart can help you predict what your monthly costs might be, based on your current credit status.
                    </Typography>
                    <label>Credit Score: </label>
                    <input
                        type="number"
                        value={creditScore}
                        onChange={(e) => setCreditScore(e.target.value)}
                        placeholder="Enter your credit score"
                    />
                </div>

                <div className="flex-item-right">
                    <div className="chart-container">
                        <ResponsiveBar
                            data={barChartData}
                            keys={['payment']}
                            indexBy="credit"
                            margin={{ top: 0, right: 130, bottom: 20, left: 60 }}
                            padding={0.3}
                            valueScale={{
                                type: 'linear',
                                min: "auto",
                                max: 1800
                            }}
                            axisLeft={{
                                tickValues: Array.from({ length: 19 }, (_, i) => i * 100),
                                tickPadding: 5
                            }}
                            colors={(d) => {
                                switch (d.indexValue) {
                                    case 'Bad Credit':
                                        return 'red';
                                    case 'Good Credit':
                                        return 'green';
                                    case 'Your Credit':
                                        return 'blue';
                                    default:
                                        return '#ccc';
                                }
                            }}
                            enableLabel={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankSummary;
