import React from 'react';
import { makeStyles } from '@mui/styles';
import {Container, Grid, Typography} from "@mui/material";

function HomeSection ({ title, children, titleProps, ...rest }) {
    const classes = useStyles();

    return <section className={classes.root} {...rest} >
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant={'h2'} className={classes.title} {...titleProps}>
                        {title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    {children}
                </Grid>
            </Grid>
        </Container>
    </section>;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        [theme.breakpoints.down('md')]: {
            margin: theme.spacing(4, 0),
        }
    },
    title: {
        textAlign: 'left',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        }
    }
}));

export default HomeSection;