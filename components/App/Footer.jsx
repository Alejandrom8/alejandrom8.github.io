import {makeStyles} from "@mui/styles";
import {Box, Container, Divider, Stack, Typography} from "@mui/material";
import SocialNetworks from "./SocialNetworks";
import {useTranslation} from "next-i18next";

export default function Footer() {
  const classes = useStyles();
  const { t } = useTranslation();
  return <Box className={classes.footer}>
    <Container className={classes.container}>
      <Box sx={{ marginBottom: 3, textAlign: 'center', minHeight: '200px', display: 'grid', placeItems: 'center' }}>
        <Typography variant={'h6'} sx={{ width: '65%' }}>
          {t('footer.quote')}
        </Typography>
      </Box>
      <Divider />
      <Box style={{ display: 'flex', marginTop: '20px', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant={'subtitle1'}>
            © 2025 Alejandro Gómez
          </Typography>
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