import React from 'react';
import { Name, Title } from './templeteComponents/Header';
import Contact from './templeteComponents/Contact';
import { Degree, Institution, Year } from './templeteComponents/Education';
import WorkExperience from './templeteComponents/WorkExperience';
import Skills from './templeteComponents/Skills';
import { Container, Paper, Typography, Grid } from '@mui/material';

export default function Template1() {

    return (
        <Container sx={{ padding: 3, backgroundColor: '#F0F0F0', fontFamily: 'Arial, sans-serif' }}>
            <Paper sx={{ padding: 3, marginBottom: 3, backgroundColor: '#2196F3', color: 'white' }}>
                <Name />
                <Title />
            </Paper>
            <Paper sx={{ padding: 3, marginBottom: 3, backgroundColor: '#FFFFFF' }}>
                <Typography variant="h6" sx={{ marginBottom: 2, color: '#2196F3' }}>
                    Contact Information
                </Typography>
                <Contact />
            </Paper>
            <Paper sx={{ padding: 3, marginBottom: 3, backgroundColor: '#FFFFFF' }}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography variant="h6" sx={{ marginBottom: 2, color: '#2196F3' }}>
                            Education
                        </Typography>
                        <Degree />
                        <Institution />
                        <Year />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="h6" sx={{ marginBottom: 2, color: '#2196F3' }}>
                            Work Experience
                        </Typography>
                        <WorkExperience />
                    </Grid>
                </Grid>
            </Paper>
            <Paper sx={{ padding: 3, backgroundColor: '#FFFFFF' }}>
                <Typography variant="h6" sx={{ marginBottom: 2, color: '#2196F3' }}>
                    Skills
                </Typography>
                <Skills />
            </Paper>
        </Container >
    );
}
