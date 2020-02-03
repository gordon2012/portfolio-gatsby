import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faCircle } from '@fortawesome/free-solid-svg-icons';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './header';
import Footer from './footer';

library.add(fab, faSearch, faCircle);

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Ubuntu', 'Helvetica', 'Arial', 'sans-serif';
    }
    input, select, textarea, button {
        font-family: 'Ubuntu Mono', 'monospace';
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
        font-family: 'Montserrat', 'Helvetica', 'Arial', 'sans-serif';
        font-weight: bold;
    }
    h1 {
        font-size: 2.5em;
    }
    h2 {
        font-size: 1.5em;
    }
    h3 {
        font-size: 1.2em;
    }
    h4 {
        font-size: 0.7em;
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

const Layout = ({ children }) => (
    <>
        <GlobalStyle />
        <Flex>
            <Header />
            <Box>{children}</Box>
            <Footer />
        </Flex>
    </>
);

export default Layout;
