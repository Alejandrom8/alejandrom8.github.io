import { Toolbar } from '@mui/material';
import React from 'react';
import Nav from './Nav';

function Container ({ children }) {
    return <React.Fragment>
        <Nav />
        <Toolbar />
        <main>
            {children}
        </main>
    </React.Fragment>
}

export default Container