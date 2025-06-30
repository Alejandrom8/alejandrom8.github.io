import {
  Alert,
  Box,
  Button,
  CircularProgress, Container,
  Divider, Grid, List, ListItem, ListItemIcon, ListItemText,
  Paper, Snackbar,
  TextField,
  Typography, useMediaQuery, useTheme,
  Link as MuiLink
} from "@mui/material";
import React, {useCallback} from "react";
import {useRouter} from "next/router";
import {init, send} from "@emailjs/browser";
import {makeStyles} from "@mui/styles";
import {useTranslation} from "next-i18next";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from "@mui/icons-material/LinkedIn";

init("qMI5x_Ktft1NRhGYh");

const useStyles = makeStyles((theme) => ({
  rootContactForm: {
    marginTop: '100px',
    width: '100%',
    // backgroundColor: 'rgba(6, 11, 26, 0.1)',
    backgroundColor: '#111C454C',
    backdropFilter: 'blur(10px)',
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
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { t } = useTranslation();

  const resetFields = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleFormSubmit = useCallback((e) => {
    e.preventDefault();
    setLoading(true);
    send('service_ehpcdpi', 'template_2efpflt', {
      to_name: 'Mr. Alejandro',
      from_name: name,
      from_email: email,
      subject,
      message,
    }).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccess(true);
      resetFields();
      //TODO: mostrar alerta de exito
    }).catch((error) => {
      console.log('FAILED...', error);
      //TODO: mostrar alerta de exito
      setError(error);
    }).finally(() => {
      setLoading(false);
    });
  }, [router, name, email, subject, message]);

  return <Box className={classes.rootContactForm} id={'contact'}>
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={12}>
            <Typography variant={'h3'} gutterBottom sx={{ fontWeight: 'bold', color: 'inherit' }}>
              {t('contact.title')}
            </Typography>
            <br />
            <Divider />
        </Grid>
        <Grid item xs={12} md={5}>
          <Box pb={4}>
            <Typography variant={'h6'}>
              {t('contact.description')}
            </Typography>
          </Box>
          <List>
            <ListItem>
              <ListItemIcon>
                <WhatsAppIcon />
              </ListItemIcon>
              <ListItemText>
                <MuiLink href={'https://wa.me/+525545825533'} target={'_blank'} color={'secondary'}>
                  {t('contact.whastapp.title')}
                </MuiLink>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText>
                <MuiLink href={'mailto:alejandro.gomez.dev@gmail.com'} target={'_blank'} color={'secondary'}>
                  {t('contact.mail.title')}
                </MuiLink>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText>
                <MuiLink href={'https://www.linkedin.com/in/agmez/'} target={'_blank'} color={'secondary'}>
                  {t('contact.linkedin.title')}
                </MuiLink>
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={7}>
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
                        placeholder={t('contact.input.name.placeholder')}
                        size={'small'}
                        type={'text'}
                        name={'name'}
                        label={t('contact.input.name')}
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
                        placeholder={t('contact.input.email.placeholder')}
                        size={'small'}
                        type={'email'}
                        name={'email'}
                        label={t('contact.input.email')}
                        value={email}
                        disabled={loading}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        variant={'outlined'}
                        placeholder={t('contact.input.subject.placeholder')}
                        type={'text'}
                        name={'subject'}
                        label={t('contact.input.subject')}
                        value={subject}
                        disabled={loading}
                        onChange={(e) => setSubject(e.target.value)}
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
                        label={t('contact.input.message')}
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
                        {t('contact.button.send')}
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