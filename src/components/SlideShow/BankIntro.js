import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const BankIntro = () => {
    const [hoveredData, setHoveredData] = useState(null);
    const [started, setStarted] = useState(false); // Add a state variable for tracking if the learning has
    const navigate = useNavigate();

    const initiateSlides = () => {
        navigate('/slideshow');
    };

    return (
        <div
            style={{
                backgroundImage:
                    'url("https://bpb-us-w2.wpmucdn.com/u.osu.edu/dist/6/44792/files/2017/04/stock-market-3-21gyd1b.jpg")',
                backgroundSize: 'cover',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backdropFilter: 'blur(30px)',
            }}
        >
            <Container
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                    background: 'linear-gradient(251deg, #00b8ff52 -53%, rgba(255, 255, 255, 0) 65%)',
                }}
            >
                <Paper
                    elevation={3}
                    style={{
                        padding: '30px 60px',
                        textAlign: 'center',
                    }}
                >
                    {started ? (
                        <div>Your slides will go here</div>
                    ) : (
                        <>
                            <Typography variant="h5" gutterBottom style={{ margin: '0', fontSize: '42px', textShadow: '1px 2px 0 rgba(0, 0, 0, 0.35)' }}>
                                Banking
                            </Typography>
                            <Typography variant="body1" paragraph style={{ opacity: 0.8, fontWeight: 300 }}>
                                The purpose of this web app is to gather what knowledge on the topics in finances and provide knowledge so you can learn
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={initiateSlides}
                                style={{
                                    padding: '12px 26px',
                                    borderRadius: '4px',
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                                }}
                            >
                                Let's go
                            </Button>
                        </>
                    )}
                </Paper>
            </Container>
        </div>
    );
};

export default BankIntro;
