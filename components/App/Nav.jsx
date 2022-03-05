import { AppBar, IconButton, List, ListItem, ListItemText, Toolbar, Typography, useScrollTrigger, Box, Button, Tooltip } from '@mui/material';
import React from 'react';
import Context from './Context';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useRouter } from 'next/router';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { makeStyles } from '@mui/styles';

function ElevationScroll ({ children }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
      });
    
      return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      });
}

const pages = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About me',
        path: '/me',
    },
    {
        name: 'Resume',
        path: '/resume',
    },
    {
        name: 'Portfolio',
        path: '/portfolio',
    },
    {
        name: 'Blog',
        path: '/blog',
    }
];

const socialNetworks = [
    {
        name: 'Linkedin',
        icon: <LinkedInIcon/>,
        link: 'https://www.linkedin.com/in/alejandro-gomez-dev'
    },
    {
        name: 'Github',
        icon: <GitHubIcon />,
        link: 'https://github.com/Alejandrom8'
    }
];

const useStyles = makeStyles((theme) => ({
    paper: {
    }
}));

function Nav ({  }) {
    const classes = useStyles();
    const { colorMode, toggleColorMode } = React.useContext(Context);
    const router = useRouter();

    const handleRoute = (path) => {
        router.push(path);
    };

    return <ElevationScroll>
        <AppBar classes={{root: classes.paper}}>
            <Toolbar>
                {/* <IconButton onClick={toggleColorMode} color='inherit'>
                    {colorMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </IconButton> */}
                <Box pr={4}>
                    <Typography style={{fontWeight: 'bold', fontSize: '2rem'}}>{'</>'}</Typography>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map(({ name, path }) => (
                    <Button
                        key={name}
                        onClick={() => handleRoute(path)}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        {name}
                    </Button>
                    ))}
                </Box>
                {
                    socialNetworks.map(({ icon, name, link }) => (
                        <Tooltip key={name} title={name}>
                            <Box 
                                sx={{ mr: 1, color: 'white', display: 'block' }}
                            >
                                    <IconButton onClick={() => window.open(link)}>
                                        {icon}
                                    </IconButton>
                            </Box>
                        </Tooltip>
                    ))
                }
                <Button variant={'contained'} color={'secondary'}>
                    Contact
                </Button>
            </Toolbar>
        </AppBar>
    </ElevationScroll> 
}

export default Nav