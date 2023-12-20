// Home.js
import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <Container maxWidth="ld" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Typography variant="h2" component="h1" gutterBottom>
                Create Your Professional Resume
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
                Build a stunning resume that showcases your skills and experiences. Get noticed by employers!
            </Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/"
                style={{ marginTop: '1rem' }}
            >
                Get Started
            </Button>

            <Grid container spacing={2} style={{ marginTop: '2rem' }}>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Easy to Use
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Create your resume with our user-friendly interface. No design skills needed.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Professional Templates
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Choose from a variety of professionally designed templates to make your resume stand out.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" gutterBottom>
                        Download and Share
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Download your resume in PDF format or share it directly with employers.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default About;
