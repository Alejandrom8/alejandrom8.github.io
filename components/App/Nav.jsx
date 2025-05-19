import {
    AppBar,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
    useScrollTrigger,
    Box,
    Button,
    Tooltip,
    useTheme, useMediaQuery
} from '@mui/material';
import React from 'react';
import Context from './Context';
import { useRouter } from 'next/router';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import MenuMobile from "./MenuMobile";

function ElevationScroll ({ children }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
      });
    
      return React.cloneElement(children, {
        elevation: trigger ? 0 : 0,
          style: trigger ? {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
          } : { }
      });
}

const pages = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'My services',
        path: '/me',
    },
    {
        name: 'Portfolio',
        path: '/portfolio',
    },
    {
        name: '¿Who am I?',
        path: '/who-am-i',
    },
    // {
    //     name: 'Blog',
    //     path: '/blog',
    // }
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
        backgroundColor: 'transparent',
        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    }
}));

function Nav ({  }) {
    const classes = useStyles();
    const { colorMode, toggleColorMode } = React.useContext(Context);
    const router = useRouter(),
        theme = useTheme(),
        isMd = useMediaQuery(theme.breakpoints.up('md')),
        [isMenuMobileOpen, setIsMenuMobileOpen] = React.useState(false);

    const handleRoute = (path) => {
        router.push(path);
    };

    const toggleMenuMobile = () => {
        setIsMenuMobileOpen(!isMenuMobileOpen);
    };

    return <>
        <MenuMobile open={isMenuMobileOpen} onClose={toggleMenuMobile} options={pages} />
        <ElevationScroll>
            <AppBar classes={{root: classes.paper }}>
                <Toolbar style={{ display: 'flex', alignItems: 'center' }} mx={10}>
                    {
                        isMd
                        ? <>
                            <Box pr={4}>
                                <Typography
                                    style={{fontWeight: 'bold', fontSize: '1.5rem', cursor: 'pointer'}}
                                    onClick={() => handleRoute('/')}
                                >
                                    {'</>'}
                                </Typography>
                            </Box>
                            <Box sx={{ flexGrow: 1, display: 'flex' }}>
                                {pages.map(({ name, path }) => (
                                    <Button
                                        key={name}
                                        onClick={() => handleRoute(path)}
                                        sx={{ my: 2, mr: 2, color: 'inherit', display: 'block' }}
                                    >
                                        {name}
                                    </Button>
                                ))}
                            </Box>
                        </>
                        : <Box sx={{ flexGrow: 1 }}>
                            <IconButton onClick={toggleMenuMobile}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    }
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
                    {
                        router.pathname !== '/contact' &&
                        <Button variant={'outlined'} color={'primary'} onClick={() => handleRoute('/contact')} style={{ height: '30px' }}>
                            Contact
                        </Button>
                    }
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    </>
}

export default Nav