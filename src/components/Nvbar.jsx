import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

const MyToolbar = styled(Toolbar)({
    backgroundColor: '#2196f3',
    '@media (max-width: 600px)': { // Adjust styles for screens with a max-width of 600px
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
});

const MyButton = styled(Button)({
    marginLeft: '16px',
    '@media (max-width: 600px)': {
        margin: '8px 0',
    },
});

const MyTypography = styled(Typography)({
    flexGrow: 1,
    '@media (max-width: 600px)': {
        margin: '8px 0',
    },
});

function Navbar() {
    return (
        <AppBar position="sticky" sx={{
            // zIndex: '1'
        }}>
            <MyToolbar>
                <MyTypography variant="h6" component="div">
                    almaBetter
                </MyTypography>
                <div>
                    <MyButton color="inherit" component={Link} to="/">Home</MyButton>
                    {/* <MyButton color="inherit" component={Link} to="/details">Details</MyButton> */}
                    <MyButton color="inherit" component={Link} to="/Preview">Preview</MyButton>
                    <MyButton color="inherit" component={Link} to="/about">About US</MyButton>
                </div>
            </MyToolbar>
        </AppBar>
    );
}

export default Navbar;
