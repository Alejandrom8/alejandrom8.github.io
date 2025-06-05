import {
  Alert,
  Box,
  Button,
  CircularProgress, Container,
  Divider, Grid,
  IconButton,
  Paper, Snackbar,
  Stack,
  TextField,
  Typography, useMediaQuery, useTheme
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React, {useCallback} from "react";
import {useRouter} from "next/router";
import {init, send} from "@emailjs/browser";
import {makeStyles} from "@mui/styles";

init("qMI5x_Ktft1NRhGYh");

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '100px',
    width: '100%',
    backgroundColor: 'rgba(6, 11, 26, 0.1)',
    backdropFilter: 'blur(8px)',
    padding: theme.spacing(10, 0),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
  content: {
    padding: theme.spacing(5),
    borderRadius: '8px',
    backgroundColor: '#212121'
  },
}));

export default function ContactForm () {
  const classes = useStyles(),
    theme = useTheme(),
    router = useRouter(),
    isMd = useMediaQuery(theme.breakpoints.up('md')),
    [name, setName] = React.useState(''),
    [email, setEmail] = React.useState(''),
    [message, setMessage] = React.useState(''),
    [loading, setLoading] = React.useState(false),
    [success, setSuccess] = React.useState(false),
    [error, setError] = React.useState(null);

  const handleFormSubmit = useCallback((e) => {
    e.preventDefault();
    setLoading(true);
    send('service_ehpcdpi', 'template_2efpflt', {
      to_name: 'Mr. Alejandro',
      from_name: name,
      from_email: email,
      message,
    }).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccess(true);
      setTimeout(() => {
        router.push('/');
      }, 4000);
    }).catch((error) => {
      console.log('FAILED...', error);
      setError(error);
    }).finally(() => {
      setLoading(false);
    });
  }, [router, name, email, message]);

  return <Box className={classes.root} id={'contact'}>
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant={'h3'} gutterBottom sx={{ fontWeight: 'bold' }}>
              Ready to build something together?
            </Typography>
          </Box>
          <Box pb={4}>
            <Typography>
              If you want to talk about a project or just want to say hi, feel free to contact me.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleFormSubmit}>
            {
              success
                ? <Box>
                  <Typography variant={'h2'} color={'tertiary'} gutterBottom>
                    Your message has been sent successfully.
                  </Typography>
                  <Typography variant={'body1'}>Thank you, I'll respond to you as soon as possible :)</Typography>
                </Box>
                : <>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        required
                        variant={'outlined'}
                        placeholder={'Enter your full name'}
                        type={'text'}
                        name={'name'}
                        label={'Name'}
                        value={name}
                        disabled={loading}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        variant={'outlined'}
                        placeholder={'jhon.doe@email.com, o wait, this is not your email...'}
                        type={'email'}
                        name={'email'}
                        label={'Email'}
                        value={email}
                        disabled={loading}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        multiline
                        rows={5}
                        required
                        variant={'outlined'}
                        type={'text'}
                        name={'message'}
                        label={'Message'}
                        value={message}
                        disabled={loading}
                        onChange={(e) => setMessage(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        variant={'contained'}
                        color={'primary'}
                        fullWidth
                        disabled={!name || !email || !message || loading}
                        type={'submit'}
                      >
                        Send
                        {
                          loading && <CircularProgress size={24} />
                        }
                      </Button>
                    </Grid>
                    {/*<Grid item xs={12}>*/}
                    {/*  <Divider>*/}
                    {/*    Or*/}
                    {/*  </Divider>*/}
                    {/*</Grid>*/}
                    {/*<Grid item xs={12}>*/}
                    {/*  <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>*/}
                    {/*    <Typography gutterBottom>*/}
                    {/*      You can also contact me on:*/}
                    {/*    </Typography>*/}
                    {/*    <Stack spacing={1} direction={'row'}>*/}
                    {/*      <IconButton size={'large'} target={'_blank'} href={'https://www.linkedin.com/in/alejandro-gomez-dev'}>*/}
                    {/*        <LinkedInIcon fontSize={'large'}/>*/}
                    {/*      </IconButton>*/}
                    {/*      <IconButton size={'large'} target={'_blank'} href={'https://wa.me/525545825533?text=Hello+Alejandro'}>*/}
                    {/*        <WhatsAppIcon fontSize={'large'}/>*/}
                    {/*      </IconButton>*/}
                    {/*    </Stack>*/}
                    {/*  </Box>*/}
                    {/*</Grid>*/}
                  </Grid>
                </>
            }
          </form>
        </Grid>
      </Grid>
    </Container>
    <Snackbar
      open={Boolean(error)}
      autoHideDuration={6000}
      onClose={() => setError(null)}
    >
      <Alert severity={'error'}>
        Error sending message. Please try again later.
      </Alert>
    </Snackbar>
  </Box>
};