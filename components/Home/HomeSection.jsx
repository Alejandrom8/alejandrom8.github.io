import React from 'react';
import { makeStyles } from '@mui/styles';
import {Box, Container, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import clsx from "clsx";
import Link from "next/link";
import { Link as MuiLink } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function HomeSection ({ title, children, centerTitle = false, topSeparation = true, link, linkName, ...rest }) {
    const classes = useStyles();
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'));

    return <section className={clsx(classes.root, { [classes.topSeparation]: topSeparation })} {...rest} >
        <Container disableGutters={isMd}>
            <Grid container spacing={3} alignItems={'center'}>
                <Grid item flexGrow={1}>
                    <Box sx={{ marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <Typography variant="h2" className={clsx(classes.title, { [classes.centerTitle]: centerTitle })}>
                            {title}
                        </Typography>
                        {
                          (link && linkName) &&
                          <Link href={link} legacyBehavior>
                              <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                                  <MuiLink className={classes.link}>
                                      { linkName }
                                  </MuiLink>
                                  <KeyboardArrowRightIcon />
                              </Box>
                          </Link>
                        }
                    </Box>
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
        },
    },
    topSeparation: {
        paddingTop: '150px',
    },
    title: {
        textAlign: 'left',
        fontSize: '40px',
        flexGrow: 1,
    },
    centerTitle: {
        textAlign: 'center',
        width: '100%',
    },
    link: {
        color: theme.palette.secondary.main,
        textDecorationColor: theme.palette.secondary.main,
        '&:visited': {
            color: theme.palette.primary.main,
        },
        '&:active': {
            color: theme.palette.primary.main,
        },
        '&:hover': {
            color: theme.palette.primary.main,
        },
        cursor: 'pointer'
    }
}));

export default HomeSection;