import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Tooltip, Typography, Container, Grid } from '@mui/material/';
import { useNavigate } from 'react-router-dom';
import Temp1Image from '../images/temp1.jpg';
import Temp2Image from '../images/temp2.jpg';
import Temp3Image from '../images/temp3.jpg';
import Temp4Image from '../images/temp4.jpg';

const templates = [
    {
        image: Temp1Image,
        title: 'Template 1',
    },
    {
        image: Temp2Image,
        title: 'Template 2',
    },
    {
        image: Temp3Image,
        title: 'Template 3',
    },
    {
        image: Temp4Image,
        title: 'Template 4',
    },
];

const CardContainer = styled(Grid)`
  margin-top: 30px;
`;

const HoverCardWrapper = styled(Card)`
  transition: background-color 0.3s;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(193, 193, 193);

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    .hover-button {
      display: block;
    }
  }
`;

const HoverButton = styled(Button)`
  display: none;
  margin: 10px; /* Add some margin to separate the button from the image */
`;

const ImageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
};

const centerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
};

function Home() {
    const navigate = useNavigate();

    const routeChange = () => {
        navigate('/details');
    };

    return (
        <div>
            <Container>
                <Typography variant="h4" sx={{ marginTop: '12px' }}>
                    Templates
                </Typography>
                <Typography variant="subtitle1">Select a Template to Get Started</Typography>
                <CardContainer container spacing={2}>
                    {templates.map((template, index) => (
                        <Grid item key={index} xs={12} sm={6} md={3}>
                            <Tooltip title={template.title}>
                                <HoverCardWrapper>
                                    <CardContent style={centerStyle}>
                                        <img
                                            src={template.image}
                                            alt={template.title}
                                            style={ImageStyle}
                                        />
                                        <HoverButton className="hover-button" variant="contained" color="primary" onClick={routeChange}>
                                            Use Template
                                        </HoverButton>
                                    </CardContent>
                                </HoverCardWrapper>
                            </Tooltip>
                        </Grid>
                    ))}
                </CardContainer>
            </Container>
        </div>
    );
}

export default Home;
