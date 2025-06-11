import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let Theme = createTheme({
    typography: {
        h1: {
            fontFamily: 'Noto Sans',
            fontWeight: 'bold',
            fontSize: '3rem'
        },
        h2: {
            fontFamily: 'Noto Sans',
            fontWeight: 'bold',
            fontSize: '2.5rem'
        },
        h3: {
            fontFamily: 'Noto Sans',
            fontSize: '2rem',
        },
        body1: {
            fontFamily: 'Noto Sans',
        }
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#3777FF',
        },
        secondary: {
            main: '#FCAB10',
        },
        tertiary: {
            main: '#0A595C'
        },
        text: {
            secondary: '#444'
        },
        background: {
            default: '#222',
            paper: 'rgb(0, 13, 41)'
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    borderRadius: '16px',
                    fontWeight: 'bold'
                },
                text: {
                    backgroundColor: 'transparent',
                    '&:hover': {
                        backgroundColor: 'transparent',
                    }
                }
            }
        },
        MuiContainer: {
        },
    }
});

Theme = responsiveFontSizes(Theme);

function themeSelector (mode) {
    console.log(`Initialized theme with ${mode}`);
    return createTheme(Theme, {
        mode
    });
}

export {
    Theme, themeSelector
}

export default { Theme, themeSelector };