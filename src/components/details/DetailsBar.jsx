import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Hidden from '@mui/material/Hidden';
import { Outlet, NavLink, useLocation } from 'react-router-dom';

const drawerWidth = 200;

export default function DetailsBar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation(); // Get the current location

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Hidden mdUp>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        width: drawerWidth,
                        zIndex: '0',
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Divider />
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {[
                                { text: 'Personal', NavLink: '/details/' },
                                { text: 'Work Experience', NavLink: '/details/workExperience' },
                                { text: 'Education', NavLink: '/details/education' },
                                { text: 'Key Skills', NavLink: '/details/keySkills' },
                            ].map((item, index) => (
                                <ListItem
                                    key={item.text}
                                    disablePadding
                                    sx={{
                                        backgroundColor: location.pathname === item.NavLink ? '#e0e0e0' : 'transparent',
                                    }}
                                >
                                    <ListItemButton component={NavLink} to={item.NavLink}>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Hidden>
            <Hidden smDown>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        zIndex: '0',
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                >
                    <Divider />
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {[
                                { text: 'Personal', NavLink: '/details/' },
                                { text: 'Work Experience', NavLink: '/details/workExperience' },
                                { text: 'Education', NavLink: '/details/education' },
                                { text: 'Key Skills', NavLink: '/details/keySkills' },
                            ].map((item, index) => (
                                <ListItem
                                    key={item.text}
                                    disablePadding
                                    sx={{
                                        backgroundColor: location.pathname === item.NavLink ? '#e0e0e0' : 'transparent',
                                    }}
                                >
                                    <ListItemButton component={NavLink} to={item.NavLink}>
                                        <ListItemText primary={item.text} />
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </Hidden>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}
