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
import {styled} from '@mui/material/styles';
import React from 'react';
import Context from './Context';
import { useRouter } from 'next/router';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import {makeStyles} from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu';
import MenuMobile from "./MenuMobile";
import SocialNetworks from "./SocialNetworks";

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

const UnderlineButton = styled(Button)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    color: theme.palette.text.primary,
    background: 'none',

    '&::after': {
        content: '""',
        position: 'absolute',
        left: '50%',
        bottom: 4,
        width: 0,
        height: '2px',
        backgroundColor: theme.palette.primary.main,
        transition: 'all 0.4s ease',
        transform: 'translateX(-50%)',
    },

    '&:hover::after': {
        width: '100%',
    },
}));

const pages = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'My services',
        path: '/#services',
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
                                    <UnderlineButton
                                        key={name}
                                        onClick={() => handleRoute(path)}
                                        sx={{ my: 2, mr: 2, color: 'inherit', display: 'block' }}
                                    >
                                        {name}
                                    </UnderlineButton>
                                ))}
                            </Box>
                        </>
                        : <Box sx={{ flexGrow: 1 }}>
                            <IconButton onClick={toggleMenuMobile}>
                                <MenuIcon />
                            </IconButton>
                        </Box>
                    }
                    <SocialNetworks />
                    <Button variant={'outlined'} color={'secondary'} onClick={() => handleRoute('/#contact')} style={{ height: '30px' }}>
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    </>
}

export default Nav