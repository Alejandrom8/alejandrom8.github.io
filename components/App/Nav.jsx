import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    useScrollTrigger,
    Box,
    Button,
    useTheme, useMediaQuery
} from '@mui/material';
import {styled} from '@mui/material/styles';
import React from 'react';
import Context from './Context';
import { useRouter } from 'next/router';
import {makeStyles} from '@mui/styles'
import MenuIcon from '@mui/icons-material/Menu';
import MenuMobile from "./MenuMobile";
import SocialNetworks from "./SocialNetworks";
import LanguageToggle from "./LanguageToggle";
import {useTranslation} from "react-i18next";
import {useRouteHandler} from "../../hooks";

function ElevationScroll ({ children }) {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
      });
    
      return React.cloneElement(children, {
        elevation: trigger ? 0 : 0,
          style: trigger ? {
              backgroundColor: 'rgba(6, 11, 26, 0.4)',
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
        name: 'nav.item.home',
        path: '/',
    },
    {
        name: 'nav.item.services',
        path: 'services',
    },
    {
        name: 'nav.item.portfolio',
        path: '/',
    },
    {
        name: 'nav.item.who',
        path: '/',
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
    const router = useRouter();
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));
    const [isMenuMobileOpen, setIsMenuMobileOpen] = React.useState(false);
    const { t } = useTranslation();
    const handleRoute = useRouteHandler();


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
                                        {t(name)}
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
                    <Box sx={{ mr: 2 }}>
                        <Button variant={'outlined'} color={'secondary'} onClick={() => handleRoute('contact')} style={{ height: '30px' }}>
                            {t('nav.button.contact')}
                        </Button>
                    </Box>
                    <LanguageToggle />
                </Toolbar>
            </AppBar>
        </ElevationScroll>
    </>
}

export default Nav