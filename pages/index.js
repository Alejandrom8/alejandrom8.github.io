import { Grid, Box, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import Image from 'next/image';

function Home() {
  const classes = useStyles();
  return <React.Fragment>
    <section className={classes.block}>
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
                <Box pt={3} display={'flex'}>
                  <Box pr={2}>
                  <Button variant={'outlined'} color={'primary'}>See my projects</Button>
                  </Box>
                  <Button variant={'contained'} color={'primary'}>Let's talk</Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
              <img src={'/me.svg'} className={classes.me}/>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
    <section className={classes.block}>
        hello
    </section>
  </React.Fragment>
}

const useStyles = makeStyles((theme) => ({
  block: {
    width: '100%',
    height: '80vh',
    //backgroundColor: '#3E65B6'
  },
  contrastText: {
    color: theme.palette.tertiary.main
  },
  me: {
    width: '490px',
  }
}))

export default Home;