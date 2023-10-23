import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Tooltip, Typography, Container, Grid } from '@mui/material/';
import { useNavigate } from 'react-router-dom';


import Template1 from './Templete1';
import Template2 from './Templete2';
import Template3 from './Templete3';
import Template4 from './Templete4';


const templates = [
    {
        component: Template1,
        title: 'Template 1',
    },
    {
        component: Template2,
        title: 'Template 2',
    },
    {
        component: Template3,
        title: 'Template 3',
    },
    {
        component: Template4,
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
//   z-index: -1;
`;

function Home() {
    const navigate = useNavigate();
    const routeChange = () => {
        navigate('/details');
    }

    return (
        <div>
            <Container>
                <Typography variant="h4" sx={{ marginTop: '12px' }}>
                    Templates
                </Typography>
                <Typography variant='subheading'>Select a Template to Get Started</Typography>
                <CardContainer container spacing={2}>
                    {templates.map((template, index) => (
                        <Grid item key={index} xs={12} sm={6} md={3}>
                            <Tooltip title={template.title}>
                                <HoverCardWrapper>
                                    <CardContent>
                                        <template.component />
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
