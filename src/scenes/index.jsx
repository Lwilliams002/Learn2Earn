import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Index = () => {
    const [start, setStart] = React.useState(false);

    const navigate = useNavigate();

    const initiateSlides = () => {
        navigate('/slideshow');
    };

    return (
        <div style={{
            backgroundImage: 'url("https://bpb-us-w2.wpmucdn.com/u.osu.edu/dist/6/44792/files/2017/04/stock-market-3-21gyd1b.jpg")',
            backgroundSize: 'cover',
            height: '100vh'
        }}>
            <Container
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <Paper elevation={3} style={{ padding: '20px' }}>
                    {start ? (
                        <div>Your slides will go here</div>
                    ) : (
                        <>
                            <Typography variant="h5" gutterBottom>
                                Welcome to Our Slide Show
                            </Typography>
                            <Typography variant="body1" paragraph>
                                This is some introductory text. Press the button below to start the slides.
                            </Typography>
                            <Button variant="contained" color="primary" onClick={initiateSlides}>
                                Start Slides
                            </Button>
                        </>
                    )}
                </Paper>
            </Container>
        </div>
    );
};

export default Index;
