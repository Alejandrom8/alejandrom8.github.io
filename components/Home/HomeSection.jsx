import React from 'react';
import { makeStyles } from '@mui/styles';
import {Box, Container, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import clsx from "clsx";

function HomeSection ({ title, children, centerTitle = false, topSeparation = true, ...rest }) {
    const classes = useStyles();
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    return <section className={clsx(classes.root, { [classes.topSeparation]: topSeparation })} {...rest} >
        <Container disableGutters={isMd}>
            <Grid container spacing={3}>
                <Grid item xs={12} sx={{ marginBottom: '10px' }}>
                    <Typography variant="h2" className={clsx(classes.title, { [classes.centerTitle]: centerTitle })}>
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ width: '100%' }}>
                        {children}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </section>;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 'fit-content',
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(4, 0),
        }
    },
    topSeparation: {
        paddingTop: '100px',
    },
    title: {
        textAlign: 'left',
    },
    centerTitle: {
        textAlign: 'center',
        width: '100%',
        marginTop: '100px',
    },
}));

export default HomeSection;