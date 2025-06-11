import {makeStyles} from "@mui/styles";
import {Box, Container, Divider, Stack} from "@mui/material";
import SocialNetworks from "./SocialNetworks";
import {useTranslation} from "react-i18next";

export default function Footer() {
  const classes = useStyles();
  const { t } = useTranslation();
  return <Box className={classes.footer}>
    <Container className={classes.container}>
      <Box sx={{ marginBottom: 3, textAlign: 'center' }}>
        {t('footer.quote')}
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