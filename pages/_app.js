import React, {useEffect} from 'react';
import { CssBaseline, useMediaQuery } from "@mui/material"
import { ThemeProvider } from "@mui/system"
import { createTheme } from '@mui/material/styles';
import { Container, themeSelector, Context, Theme } from '../components/App'
import * as gtag from '../lib/gtag';
import '../i18n';
import {useRouter} from "next/router";
import Script from "next/script";
import { appWithTranslation } from 'next-i18next';

const isProduction = process.env.NODE_ENV === 'production';

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = React.useState('dark');
  const router = useRouter();
  const ctx = {
    colorMode: mode,
    toggleColorMode: () => {
      setMode((prev) => prev === 'light' ? 'dark' : 'light')
    }
  };

  const theme = React.useMemo(
    () => createTheme(Theme, {
      palette: {
        ...Theme.palette,
        mode: mode || 'dark',
      },
    }),
    [mode],
  );

  useEffect(() => {
    if (!isProduction) return;

    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <>
    {isProduction && (
      <>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `,
          }}
        />
      </>
    )}
    <ThemeProvider theme={theme}>
      <Context.Provider value={ctx}>
        <CssBaseline />
        <Container>
          <Component {...pageProps} />
        </Container>
      </Context.Provider>
    </ThemeProvider>
  </>
}

export default appWithTranslation(MyApp);
