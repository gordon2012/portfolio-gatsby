import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faCircle } from '@fortawesome/free-solid-svg-icons';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './header';
import Footer from './footer';

library.add(fab, faSearch, faCircle);

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:700|Ubuntu|Ubuntu+Mono&display=swap');
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
    }
    h1, h2, h3, h4, h5, h6 {
        border: 3px solid blue;
        margin: 0;
        font-family: "Montserrat";
        font-weight: bold;
    }
    h1 {
        border: 3px solid red;
        font-size: 3em;
    }
    h2 {
        border: 3px solid magenta;
        font-size: 2em;
    }
    h3 {
        border: 3px solid lime;
        font-size: 1.7em;
    }
    h4 {
        font-size: 0.8em;
    }
`;

const Flex = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Box = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Layout = ({children}) => (
    <>
        <GlobalStyle />
        <Flex>
            <Header />
            <Box>
                {children}
            </Box>
            <Footer />
        </Flex>
    </>
);

export default Layout;
