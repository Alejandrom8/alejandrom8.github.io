import React from 'react';

const Context = React.createContext({
    toggleColorMode: () => {},
    colorMode: null
});

export default Context;