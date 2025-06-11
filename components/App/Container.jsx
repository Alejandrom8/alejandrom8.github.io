import React from 'react';
import Nav from './Nav';
import {makeStyles} from "@mui/styles";
import ScrollTopButton from "./ScrollTopButton";

function Container ({ children }) {
    const classes = useStyles();
    return <React.Fragment>
        <Nav />
        <main>
            {children}
        </main>
        <ScrollTopButton />
    </React.Fragment>
}

const useStyles = makeStyles((theme) => ({
    main: {
        position: 'relative',
        zIndex: 1,
    }
}));

export default Container