import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ResponsiveLine } from '@nivo/line';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './BankSummary.css';



const BankSummary = () => {
    const [hoveredData, setHoveredData] = useState(null);
    const navigate = useNavigate();

    const initiateSlides = () => {
        navigate('/slideshow');

    };


    const data = [
        {
            id: 'Monthly Payment',
            data: [
                { x: 'Jan', y: 1000 },
                { x: 'Feb', y: 2000 },
                { x: 'Mar', y: 3000 },
                { x: 'Apr', y: 4000 },
                { x: 'May', y: 5000 },
                { x: 'Jun', y: 6000 },
                { x: 'Jul', y: 7000 },
                { x: 'Aug', y: 8000 },
                { x: 'Sep', y: 9000 },
                { x: 'Oct', y: 10000 },
                { x: 'Nov', y: 11000 },
                { x: 'Dec', y: 11500 },
            ],
        },
    ];


    const handleMouseMove = (point) => {
        const month = point.data.x;
        const monthlyPayment = point.data.y.toFixed(2);
        setHoveredData({ month, monthlyPayment });
    };

    return (
        <div>
            <div className="flex-container">
                <div className="flex-item-left">
                    {/* Credit Score Information */}
                    <Typography variant="h5" gutterBottom>
                        Credit Score Information
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Your credit score is a crucial factor that financial institutions consider when determining
                        your eligibility for loans, interest rates, and other credit facilities. A higher credit
                        score can qualify you for lower interest rates, saving you money in the long run.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Input your credit score below to see how it affects your monthly payments:
                    </Typography>
                    <label>Credit Score: </label>
                    <input
                        type="number"
                        placeholder="Enter your credit score"
                    />
                </div>

                    {/* Interactive Chart */}
                <div className="flex-item-right">
                    {hoveredData && (
                        <div className={"flex-item-center"}>
                            Month: {hoveredData.month}, Monthly Payment: ${hoveredData.monthlyPayment}
                        </div>
                    )}
                        <div className="chart-container">
                            <ResponsiveLine
                                data={data}
                                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                                enablePoints={true}
                                enableSlices={false}
                                pointSize={10}
                                pointColor={{ theme: 'background' }}
                                pointBorderWidth={2}
                                pointBorderColor={{ from: 'serieColor' }}
                                pointLabelYOffset={-12}
                                useMesh={true}
                                enableCrosshair={true}
                                onMouseMove={handleMouseMove}
                                tooltip={() => null}
                            />
                        </div>
                </div>

            </div>
                    {/* More Information */}
            <div className={"flex-item-left"}>
                    <Typography variant="h5" gutterBottom>
                        More Information
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Additional details about interest rates and payments...
                    </Typography>
            </div>
        </div>
    );
};

export default BankSummary;
