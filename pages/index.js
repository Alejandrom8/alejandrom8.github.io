import {
  Grid,
  Box,
  Typography,
  Button,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  useMediaQuery,
  useTheme, Collapse
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import "swiper/css/grid";
import 'swiper/css/pagination';

import SwiperCore, {
  Pagination,
} from 'swiper';
import clsx from 'clsx';
import HomeSection from "../components/Home/HomeSection";

// install Swiper modules
SwiperCore.use([Pagination]);

const projects = [
  {
    name: 'Wally',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus justo eu odio facilisis porttitor. Pellentesque urna nisi, accumsan rhoncus turpis at, ultricies tincidunt diam. In condimentum, velit eu ultrices congue, tellus enim placerat nisl, et cursus nisi magna et justo. Aliquam non molestie turpis, quis imperdiet odio. Ut in metus ante.',
    link: '',
    cover: './test.webp',
    techStack: [
      {
        name: '',
        icon: ''
      }
    ]
  },
  {
    name: 'Wally',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus justo eu odio facilisis porttitor. Pellentesque urna nisi, accumsan rhoncus turpis at, ultricies tincidunt diam. In condimentum, velit eu ultrices congue, tellus enim placerat nisl, et cursus nisi magna et justo. Aliquam non molestie turpis, quis imperdiet odio. Ut in metus ante.',
    link: '',
    cover: './test.webp',
    techStack: [
      {
        name: '',
        icon: ''
      }
    ]
  },
  {
    name: 'Wally',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus justo eu odio facilisis porttitor. Pellentesque urna nisi, accumsan rhoncus turpis at, ultricies tincidunt diam. In condimentum, velit eu ultrices congue, tellus enim placerat nisl, et cursus nisi magna et justo. Aliquam non molestie turpis, quis imperdiet odio. Ut in metus ante.',
    link: '',
    cover: './test.webp',
    techStack: [
      {
        name: '',
        icon: ''
      }
    ]
  },
  {
    name: 'Wally',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus justo eu odio facilisis porttitor. Pellentesque urna nisi, accumsan rhoncus turpis at, ultricies tincidunt diam. In condimentum, velit eu ultrices congue, tellus enim placerat nisl, et cursus nisi magna et justo. Aliquam non molestie turpis, quis imperdiet odio. Ut in metus ante.',
    link: '',
    cover: './test.webp',
    techStack: [
      {
        name: '',
        icon: ''
      }
    ]
  }
];

function Home() {
  const classes = useStyles(),
      theme = useTheme(),
      isMd = useMediaQuery(theme.breakpoints.up('md'));

  return <React.Fragment>
    <Head>
      <title>Home | Alejandro Gómez</title>
    </Head>
    <section className={clsx(classes.heading, classes.block)}>
      <Container style={{height:'100%'}}>
        <Grid container spacing={1} style={{height: '100%'}}>
          <Grid item xs={12} md={6}>
            <Box sx={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <Box sx={{
                width: '80%',
              }}>
                <Typography variant={'h1'} gutterBottom>
                  Hi, my name is Alejandro and I'm a <span className={classes.contrastText}>{"<Software Engineer/>"}</span>
                </Typography>
                <Typography>
                  Passionate autodidactic programmer with 3 years of expirience in the fields of <b>web development</b> and <b>big data engineering</b>.
                </Typography>
                <Box pt={3} display={'flex'} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
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
                <img src={'/me.png'} className={classes.me} alt={'Alejandro Gómez picture'}/>
              </Box>
            </Grid>
          }
        </Grid>
      </Container>
    </section>
    <HomeSection title={'About me'}>
      about
    </HomeSection>
    <HomeSection title={'My Resume'}>
      hola
    </HomeSection>
    <HomeSection title={'Portfolio'}>
      <Swiper
          pagination={{
            clickable: true,
          }}
          spaceBetween={50}
          slidesPerView={isMd ? 2 : 1}
      >
        {
          projects.map((project, index) => (
              <SwiperSlide key={index}>
                <Card>
                  <CardMedia
                      component={'img'}
                      height={'200px'}
                      image={project.cover}
                      alt={project.name}
                  />
                  <CardContent>
                    <Typography variant={'h5'}>
                      {project.name}
                    </Typography>
                    <Typography variant={'body2'} color={'text.secondary'} style={{ marginTop: 4 }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </SwiperSlide>
          ))
        }
      </Swiper>
    </HomeSection>
  </React.Fragment>
}

const useStyles = makeStyles((theme) => ({
  block: {
    width: '100%',
    padding: theme.spacing(2, 0),
    margin: theme.spacing(0, 0, 4, 0),
    [theme.breakpoints.down('md')]: {
      margin: theme.spacing(4, 0),
    }
  },
  heading: {
    height: '92vh',
    marginTop: 0,
    [theme.breakpoints.down('md')]: {
      height: '60vh',
    },
    backgroundColor: 'rgb(0, 13, 41)',
    //backgroundColor: '#3E65B6'
  },
  contrastText: {
    color: theme.palette.secondary.main
  },
  me: {
    width: '490px',
    '-webkit-user-select': 'none',
    '-khtml-user-select': 'none',
    '-moz-user-select': 'none',
    '-o-user-select': 'none',
    userSelect: 'none',
  }
}))

export default Home;