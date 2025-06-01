import React, {useCallback} from 'react';
import {
    Alert,
    Box,
    Button, Card, CardActions, CardContent, CardHeader, CircularProgress,
    Container, Divider,
    Grid, IconButton, Paper, Snackbar,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import Particles from "react-tsparticles";

import ParticlesConfig from "../config/particles.json";
import {makeStyles} from "@mui/styles";
import{ init, send } from '@emailjs/browser';
import {useRouter} from "next/router";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

init("qMI5x_Ktft1NRhGYh");

const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 10,
        position: 'absolute',
        marginBottom: theme.spacing(5)
    },
    content: {
        padding: theme.spacing(5),
        borderRadius: '8px',
        backgroundColor: '#212121'
    },
}));

function ContactPage () {
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

    return <Box pt={4} pb={4}>
        <Grid container className={classes.root}>
            <Grid item xs={12}>
                <Box width={'100%'} minHeight={isMd ? '80vh' : '60vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Box width={isMd ? '40%' : '90%'} height={'fit-content'}>
                        <form onSubmit={handleFormSubmit}>
                            <Paper elevation={0} className={classes.content}>
                                {
                                    success
                                        ? <Box>
                                            <Typography variant={'h2'} color={'tertiary'} gutterBottom>
                                                Your message has been sent successfully.
                                            </Typography>
                                            <Typography variant={'body1'}>Thank you, I'll respond to you as soon as possible :)</Typography>
                                        </Box>
                                        : <>
                                            <Box>
                                                <Typography variant={'h2'} gutterBottom>
                                                    Contact
                                                </Typography>
                                            </Box>
                                        <Box pb={3}>
                                            <Typography>
                                                If you want to talk about a project or just want to say hi, feel free to contact me.
                                            </Typography>
                                        </Box>
                                            <Stack spacing={3}>
                                                <TextField
                                                    required
                                                    variant={'outlined'}
                                                    placeholder={'Enter your full name'}
                                                    type={'text'}
                                                    name={'name'}
                                                    label={'Name'}
                                                    value={name}
                                                    disabled={loading}
                                                    autoFocus={true}
                                                    onChange={(e) => setName(e.target.value)}
                                                />
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
                                                />
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
                                                />
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
                                                <Divider>
                                                    Or
                                                </Divider>
                                                <Box>
                                                    <Typography gutterBottom>
                                                        You can also contact me on:
                                                    </Typography>
                                                    <Stack spacing={1} direction={'row'}>
                                                        <IconButton size={'large'} target={'_blank'} href={'https://www.linkedin.com/in/alejandro-gomez-dev'}>
                                                            <LinkedInIcon fontSize={'large'}/>
                                                        </IconButton>
                                                        <IconButton size={'large'} target={'_blank'} href={'https://wa.me/525545825533?text=Hello+Alejandro'}>
                                                            <WhatsAppIcon fontSize={'large'}/>
                                                        </IconButton>
                                                    </Stack>
                                                </Box>
                                            </Stack>
                                        </>
                                }
                            </Paper>
                        </form>
                    </Box>
                </Box>
            </Grid>
            { isMd && <Grid item md={4} /> }
        </Grid>
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
}

export default ContactPage;