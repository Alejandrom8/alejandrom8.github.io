import React from 'react';
import {Box, Drawer, IconButton, List, ListItem, ListItemText, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import CloseIcon from '@mui/icons-material/Close';
import {useRouter} from "next/router";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
    },
    drawerPaper: {
        width: '100%',
        backgroundColor: 'rgba(6, 53, 55, 1)',
        backdropFilter: 'blur(8px)',
    },
    header: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: theme.spacing(2, 3, 0, 0),
    },
    option: {
        width: '100%',
        textAlign: 'center',
        height: '15vh',
        textTransform: 'uppercase',
    },
    optionText: {
        fontWeight: 'bold',
        fontSize: '1.5rem'
    }
}));

function MenuMobile ({ open, onClose, options }) {
    const classes = useStyles();
    const router = useRouter();
    const { t } = useTranslation();

    const handleRoute = (route) => {
        router.push(route);
        onClose();
    };

    return <Drawer
        type="temporary"
        anchor="left"
        open={open}
        onClose={onClose}
        className={classes.drawer}
        classes={{
            paper: classes.drawerPaper,
        }}
    >
        <Box className={classes.header}>
            <IconButton size={'large'} color={'inherit'} onClick={onClose}>
                <CloseIcon fontSize={'large'}/>
            </IconButton>
        </Box>
        <List>
            {
                options?.length > 0 && options.map((option, index) => {
                    return <ListItem key={index} className={classes.option} button onClick={() => handleRoute(option.path)}>
                        <ListItemText className={classes.optionText}>
                            <Typography variant={'h2'} color={'inherit'}>
                                {t(option.name)}
                            </Typography>
                        </ListItemText>
                    </ListItem>
                })
            }
        </List>
    </Drawer>
}

export default MenuMobile;