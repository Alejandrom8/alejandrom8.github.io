import {makeStyles} from "@mui/styles";
import {Box, Container, Divider, Stack} from "@mui/material";
import SocialNetworks from "./SocialNetworks";

export default function Footer() {
  const classes = useStyles();
  return <Box className={classes.footer}>
    <Container className={classes.container}>
      <Box sx={{ marginBottom: 3, textAlign: 'center' }}>
        "The people who are crazy enough to think they can change the world are the ones who do." - Apple
      </Box>
      <Divider />
      <Box style={{ display: 'flex', marginTop: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          © 2025 Alejandro Gómez
        </Box>
        <Stack direction={'row'}>
          <SocialNetworks />
        </Stack>
      </Box>
    </Container>
  </Box>
}

const useStyles = makeStyles((theme) => ({
  footer: {
    width: '100%',
    color: '#fff',
    backgroundColor: 'rgb(16, 22, 47)',
    borderTop: '1px solid rgb(255, 255, 255, 0.05)',
  },
  container: {
    padding: theme.spacing(4),
  }
}));