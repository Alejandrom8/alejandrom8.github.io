import React from 'react';
import Nav from './Nav';
import {makeStyles} from "@mui/styles";

function Container ({ children }) {
    const classes = useStyles();
    return <React.Fragment>
        <Nav />
        <main>
            {children}
        </main>
    </React.Fragment>
}

const useStyles = makeStyles((theme) => ({
    main: {
        position: 'relative',
        zIndex: 1,
    }
}));

export default Container