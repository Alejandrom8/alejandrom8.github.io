import {
  Grid,
  Box,
  Typography,
  Button,
  Container,
  useMediaQuery,
  useTheme,
  Toolbar, Tabs, Tab, Card, CardActionArea, CardContent, CardMedia,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Head from 'next/head';
import Particles from "react-tsparticles";

import clsx from 'clsx';
import ParticlesConfig from "../config/particles.json";
import HomeSection from "../components/Home/HomeSection";
import ServiceCard from "../components/Home/ServiceCard";
import Footer from "../components/App/Footer";
import TechStackTabs from "../components/Home/TechStackTabs";
import ContactForm from "../components/Home/ContactForm";
import { useTranslation, Trans } from 'react-i18next';
import ServiceCardCarousel from "../components/Home/ProjectsCarousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useRouteHandler} from "../hooks";

const cards = [
  <ServiceCard
    title={'Data Mining for Your Business'}
    description={'Need data? Web scraping lets you quickly extract information from any website in any format, fast and automated.'}
  />,
  <ServiceCard
    title={'Data Mining for Your Business'}
    description={'Need data? Web scraping lets you quickly extract information from any website in any format, fast and automated.'}
  />,
  <ServiceCard
    title={'Data Mining for Your Business'}
    description={'Need data? Web scraping lets you quickly extract information from any website in any format, fast and automated.'}
  />,
  <ServiceCard
    title={'Data Mining for Your Business'}
    description={'Need data? Web scraping lets you quickly extract information from any website in any format, fast and automated.'}
  />,
];

function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const { t} = useTranslation();
  const handleRoute = useRouteHandler();

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
        <Container disableGutters={isMd}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <Box sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Box sx={{
                  width: '100%',
                }}>
                  <Typography variant={'h1'} gutterBottom className={classes.howdy}>
                    <Trans
                      i18nKey="hero"
                      shouldUnescape={true}
                      components={{
                        0: <span className={classes.contrastText} />,
                        1: <span />,
                      }}
                      values={{
                        role: `&lt;Full Stack Engineer/&gt;`
                      }}
                    />
                  </Typography>
                  <Typography style={{ lineHeight: 1.6, fontSize: '1.3rem', fontWeight: '500', color: '#DDD' }} my={4}>
                    <Trans
                      i18nKey="hero.description"
                      components={{
                        b: <b style={{ fontSize: '1.3rem', color: '#fff' }} />
                      }}
                    />
                  </Typography>
                  <Box display={'flex'} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
                    <Box pr={isMd ? 2 : 0} pb={isMd ? 0 : 2}>
                      <Button
                        variant={'contained'}
                        color={'primary'}
                        fullWidth={!isMd}
                        onClick={() => handleRoute('contact')}
                      >
                        {t('hero.lets_talk')}
                      </Button>
                    </Box>
                    <Button variant={'outlined'} color={'primary'} fullWidth={!isMd}>{t('hero.see_projects')}</Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            {
              isMd && <Grid item xs={12} md={6}>
                <Box sx={{display: 'flex', justifyContent: 'right', width: '100%', alignItems: 'center', height: '100%'}}>
                  <div className={classes.me} />
                </Box>
              </Grid>
            }
          </Grid>
        </Container>
      </section>
      <HomeSection id={'services'} title={t('home.services.title')} topSeparation={false} link={'/'} linkName={t('home.services.link')}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5.5}>
            <ServiceCard
              title={t('home.services.personal_website.title')}
              image={"/website.png"}
              description={t('home.services.personal_website.description')}
            />
          </Grid>
          <Grid item xs={12} md={3.25}>
            <ServiceCard
              title={t('home.services.mobile.title')}
              image={"/mobile.png"}
              description={t('home.services.mobile.description')}
            />
          </Grid>
          <Grid item xs={12} md={3.25}>
            <ServiceCard
              title={t('home.services.web_scraping.title')}
              image={"/webscraping.png"}
              description={t('home.services.web_scraping.description')}
            />
          </Grid>
        </Grid>
      </HomeSection>
      <HomeSection title={t('home.stack.title')}>
        <TechStackTabs />
      </HomeSection>
      {/*<section className={classes.techStackSection}>*/}
      {/*  <Container disableGutters>*/}
      {/*    <Typography variant="h2" sx={{ marginBottom: '40px' }}>*/}
      {/*      Featured Projects*/}
      {/*    </Typography>*/}
      {/*  </Container>*/}
      {/*  <Box sx={{ width: '100%', px: 13 }}>*/}
      {/*    <ServiceCardCarousel items={cards} />*/}
      {/*  </Box>*/}
      {/*</section>*/}
      <HomeSection title={t('home.featured.title')} link={'/'} linkName={'See all projects'}>
        <ServiceCardCarousel items={cards} />
        {/*<Grid container spacing={3}>*/}
        {/*  <Grid item xs={12} md={6}>*/}
        {/*    <ServiceCard*/}
        {/*      title={'Build your personal website'}*/}
        {/*      description={'Are you a professional looking for a personal web site? Let\'s have a meet and set up your new way to connect with your clients!!'}*/}
        {/*    />*/}
        {/*  </Grid>*/}
        {/*  <Grid item xs={12} md={6}>*/}
        {/*    <ServiceCard*/}
        {/*      title={'Hybrid Mobile Solutions'}*/}
        {/*      description={'With hybrid tools (React Native, Ionic, etc.), I can take your ideas and transform them into a new brand IOS/Android applicaiton'}*/}
        {/*    />*/}
        {/*  </Grid>*/}
        {/*</Grid>*/}
      </HomeSection>
      {/*<section className={classes.techStackSection}>*/}
      {/*  <Container disableGutters>*/}
      {/*    <Typography variant="h2" sx={{ marginBottom: '40px' }}>*/}
      {/*      My Tech Stack*/}
      {/*    </Typography>*/}
      {/*  </Container>*/}
      {/*  <Box sx={{ width: '100%' }}>*/}
      {/*    <TechStackTabs />*/}
      {/*  </Box>*/}
      {/*</section>*/}
      <ContactForm />
      <Footer />
    </div>
  </>
}

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 10,
    position: 'absolute',
    width: '100%',
    height: 'fit-content',
    backdropFilter: 'blur(5px)',
    backgroundColor: 'rgba(10, 10, 10, 0.1)',
  },
  block: {
    width: '100%',
    [theme.breakpoints.down('md')]: {
    }
  },
  heading: {
    height: '95vh',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      height: '95vh',
    },
    [theme.breakpoints.up('xl')]: {
      height: '75vh',
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
    width: '390px',
    height: '400px',
    borderRadius: '50%',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url(/me_yellow.webp)',
    border: '5px solid #FCAB10',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-o-user-select': 'none',
    userSelect: 'none',
  },
  techStackSection: {
    width: '100%',
    paddingTop: '130px',
  }
}))

export default Home;