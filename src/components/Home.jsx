import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material/';
import Temp1Image from '../images/temp1.jpg';
import Temp2Image from '../images/temp2.jpg';
import Temp3Image from '../images/temp3.jpg';
import Temp4Image from '../images/temp4.jpg';
import { selectCard } from '../redux/actions/selectCardAction';

const images = [
    {
        imageUrl: Temp1Image,
        title: 'Template 1',
    },
    {
        imageUrl: Temp2Image,
        title: 'Template 2',
    },
    {
        imageUrl: Temp3Image,
        title: 'Template 3',
    },
    {
        imageUrl: Temp4Image,
        title: 'Template 4',
    },
    {
        imageUrl: Temp4Image,
        title: 'Template 4',
    },
    {
        imageUrl: Temp4Image,
        title: 'Template 4',
    },
    {
        imageUrl: Temp4Image,
        title: 'Template 4',
    },

];

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const routeChange = (index) => {
        dispatch(selectCard(index))
        navigate('/details');
    };

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (<div>
        <Typography variant="h4" sx={{ marginTop: '12px' }}>
            Templates
        </Typography>
        <Typography variant="subtitle1" sx={{ marginBottom: '12px' }}>Select a Template to Get Started</Typography>
        <Grid container spacing={2}>
            {images.map((image, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Paper
                        elevation={6}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            backgroundColor: hoveredIndex === index ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
                        }}
                    >
                        <img
                            src={image.imageUrl}
                            alt={image.title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                transition: 'opacity 0.5s',
                                opacity: hoveredIndex === index ? 0.7 : 1,
                            }}
                        />
                        {hoveredIndex === index && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '48%',
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 1,
                                }}
                            >
                                <Button variant="contained" color="primary" onClick={() => routeChange(index)}>
                                    Use Template
                                </Button>
                            </div>
                        )}
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </div>
    );
};

export default Home;
