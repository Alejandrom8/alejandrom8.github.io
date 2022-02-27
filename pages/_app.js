import React from 'react';
import { CssBaseline, useMediaQuery } from "@mui/material"
import { ThemeProvider } from "@mui/system"
import { createTheme } from '@mui/material/styles';
import { Container, themeSelector, Context, Theme } from '../components/App'

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = React.useState('dark'),
    ctx = {
      colorMode: mode,
      toggleColorMode: () => {
        setMode((prev) => prev === 'light' ? 'dark' : 'light')
      }
    }

  const theme = React.useMemo(
    () => createTheme(Theme, {
      palette: {
        ...Theme.palette,
        mode: mode || 'dark',
      },
    }),
    [mode],
  );

  return <ThemeProvider theme={theme}>
    <Context.Provider value={ctx}>
      <CssBaseline />
      <Container>
        <Component {...pageProps} />
      </Container>
    </Context.Provider>
  </ThemeProvider>
}

export default MyApp
