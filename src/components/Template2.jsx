import React from 'react';
import {
    Paper,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material';
import { Name, Summary, Title } from './templeteComponents/Header'

const headerStyle = {
    backgroundColor: 'lightblue',
    color: 'white',
    padding: '16px',
};

const dividerStyle = {
    margin: '20px 0',
};

const Template2 = () => {
    return (
        <div>
            <Paper style={{ padding: '16px', margin: 'auto', maxWidth: 800 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} style={headerStyle}>
                        <Typography variant="h4" align="center">
                            <Name />
                        </Typography>
                        <Typography variant="subtitle1" align="center">
                            <Title />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">Summary</Typography>
                        <Typography>
                            <Summary />
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider style={dividerStyle} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">Education</Typography>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Degree"
                                    secondary="University Name, Graduation Date"
                                />
                            </ListItem>
                            {/* Add more education items as needed */}
                        </List>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider style={dividerStyle} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6">Experience</Typography>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Job Title"
                                    secondary="Company Name, Employment Date"
                                />
                            </ListItem>
                            {/* Add more experience items as needed */}
                        </List>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default Template2;
