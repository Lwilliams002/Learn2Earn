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
                { x: 'Jan', y: 600 },
                { x: 'Feb', y: 650 },
                { x: 'Mar', y: 700 },
                { x: 'Apr', y: 750 },
                { x: 'May', y: 800 },
                { x: 'Jun', y: 850 },
                { x: 'Jul', y: 900 },
                { x: 'Aug', y: 950 },
                { x: 'Sep', y: 1000 },
                { x: 'Oct', y: 1050 },
                { x: 'Nov', y: 1100 },
                { x: 'Dec', y: 1150 },
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
                        Your credit score affects your monthly payments...
                    </Typography>
                </div>

                    {/* Interactive Chart */}
                <div className="flex-item-right">
                    {hoveredData && (
                        <div>
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
                    <Typography variant="h5" gutterBottom>
                        More Information
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Additional details about interest rates and payments...
                    </Typography>
        </div>
    );
};

export default BankSummary;
