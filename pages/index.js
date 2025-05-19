import {
  Grid,
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
  useTheme,
  Toolbar,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Head from 'next/head';
import Particles from "react-tsparticles";


import 'swiper/css';
import "swiper/css/grid";
import 'swiper/css/pagination';

import clsx from 'clsx';
import ParticlesConfig from "../config/particles.json";
import HomeSection from "../components/Home/HomeSection";
import ServiceCard from "../components/Home/ServiceCard";

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  return <>
    <Head>
      <title>Home | Alejandro Gómez</title>
    </Head>
    <Particles
        id={'tsparticles'}
        style={{ zIndex: -1, position: 'relative' }}
        options={ParticlesConfig}
    />
    <div className={classes.root}>
      <Toolbar />
      <section className={clsx(classes.heading, classes.block)}>
        <Container style={{height:'100%'}} disableGutters>
          <Grid container spacing={1} style={{height: '100%'}}>
            <Grid item xs={12} md={6}>
              <Box sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(4, 12, 33)'
              }}>
                <Box sx={{
                  width: '80%',
                }}>
                  <Typography variant={'h1'} gutterBottom className={classes.howdy}>
                    Hi, I'm Alex, and I'm a <br /><span className={classes.contrastText}>{"<Full Stack Engineer/>"}</span>
                  </Typography>
                  <Typography style={{ lineHeight: 1.6, fontSize: '1.3rem', fontWeight: '500', color: '#DDD' }} my={4}>
                    Full Stack Software Engineer with 5+ years of experience in high-scale <b style={{ fontSize: '1.3rem', color: '#fff' }}>Web Development</b>, <b style={{ fontSize: '1.3rem', color: '#fff' }}>Big
                    Data</b> and <b style={{ fontSize: '1.3rem', color: '#fff' }}>Web Scraping</b>. Skilled in optimizing web performance and architecting cloud-based solutions.
                    Passionate about building scalable systems that drive business impact and improve the
                    world 🚀.
                  </Typography>
                  <Box display={'flex'} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                    <Box pr={isMd ? 2 : 0} pb={isMd ? 0 : 2}>
                      <Button variant={'contained'} color={'primary'} fullWidth={!isMd}>Let's talk</Button>
                    </Box>
                    <Button variant={'outlined'} color={'primary'} fullWidth={!isMd}>See my projects</Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {
              isMd && <Grid item xs={12} md={6}>
                <Box sx={{display: 'flex', justifyContent: 'center', width: '100%', alignItems: 'center', height: '100%'}}>
                  <div className={classes.me} />
                </Box>
              </Grid>
            }
          </Grid>
        </Container>
      </section>
      <HomeSection title={'My Services'} style={{ }} titleProps={{ style: { textAlign: 'center', width: '100%', marginTop: '100px' } }}>
        <Grid container>
          <Grid item sm={12} md={4}>
            <ServiceCard
              title={'Build your personal website'}
              image={"/website.png"}
              description={'Are you a professional looking for a personal web site? Let\'s have a meet and set up your new way to connect with your clients!!'}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <ServiceCard
              title={'Hybrid Mobile Solutions'}
              image={"/mobile.png"}
              description={'With hybrid tools (React Native, Ionic, etc.), I can take your ideas and transform them into a new brand IOS/Android applicaiton'}
            />
          </Grid>
          <Grid item sm={12} md={4}>
            <ServiceCard
              title={'Data Mining for Your Business'}
              image={"/webscraping.png"}
              description={'Need data? Web scraping lets you quickly extract information from any website in any format, fast and automated.'}
            />
          </Grid>
        </Grid>
      </HomeSection>
    </div>
  </>
}

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 10,
    position: 'absolute',
    width: '100%',
    height: 'fit-content',
    backgroundColor: 'rgba(10, 10, 10, 0.2)'
  },
  block: {
    width: '100%',
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down('md')]: {
    }
  },
  heading: {
    height: '85vh',
    paddingTop: theme.spacing(6),
    color: '#fff',
    [theme.breakpoints.down('md')]: {
      height: '60vh',
    },
  },
  howdy: {
    fontWeight: '600',
    fontSize: '2.7rem',
  },
  contrastText: {
    color: theme.palette.secondary.main,
    fontWeight: '700',
    fontSize: '2.9rem',
    textWrap: 'nowrap',
    [theme.breakpoints.down('md')]: {
      textWrap: 'wrap',
    },
  },
  me: {
    width: '400px',
    height: '410px',
    borderRadius: '50%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(/me_yellow.jpeg)',
    border: '5px solid #FCAB10',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-o-user-select': 'none',
    userSelect: 'none',
  }
}))

export default Home;