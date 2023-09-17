import React from 'react';
import Typography from '@mui/material/Typography';
import './BudgetTips.css';
import { ResponsivePie } from '@nivo/pie';

const BudgetTips = () => {
    const data = [
        {
            id: 'Fixed Expenses (Needs)',
            value: 50,
        },
        {
            id: 'Flexible Spending (Wants)',
            value: 30,
        },
        {
            id: 'Savings and Debt Repayment',
            value: 20,
        },
    ];

    return (
        <div className="outer-container">
            <div className="transparent-box">
                <div className="flex-container">
                    <div className="flex-item-left">
                        <Typography variant="h5" gutterBottom>
                            Budgeting Tips for College Students
                        </Typography>
                        <Typography variant="body1" paragraph>
                            The 50-30-20 rule is a budgeting strategy in which you divide your monthly income into three categories: fixed expenses (needs),
                            flexible spending (wants), and savings and debt repayment. This strategy is useful because you divide half of your monthly income
                            into essentials such as groceries, housing, utilities, health insurance, and car payments; you divide 30% of your monthly income into products
                            for your enjoyment; and you invest in the remaining 20% if you have no debt to repay.
                        </Typography>
                    </div>
                    <div className="flex-item-right">
                        <div className="chart-container">
                            <div className="chart-inner-container">
                                <ResponsivePie
                                    data={data}
                                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                                    innerRadius={0}
                                    padAngle={0.7}
                                    cornerRadius={3}
                                    colors={{ scheme: 'category10' }}
                                    borderWidth={1}
                                    borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bullet-point-container">
                <ul className="bullet-point-list">
                    <li>Track Expenses - Record monthly spending, including rent, groceries, and discretionary items.</li>
                    <li>Financial Education - Access resources for money management, investing, and debt reduction.</li>
                    <li>Analyze Spending - Review spending trends to identify areas for adjustment.</li>
                </ul>
                <ul className="bullet-point-list">
                    <li>Emergency Fund - Build a safety net for unexpected expenses; track your savings goal.</li>
                    <li>Debt Reduction - Calculate how extra payments can shorten loan repayment and save on interest.</li>
                    <li>Income Tracking - Monitor sources of income, such as part-time jobs or scholarships.</li>
                </ul>
                <ul className="bullet-point-list">
                    <li>Mobile Access - Access your budget tool on your smartphone for convenience.</li>
                    <li>Feedback Welcomed - Share your thoughts and suggestions for tool improvement.</li>
                </ul>
            </div>
        </div>
    );
};

export default BudgetTips;
