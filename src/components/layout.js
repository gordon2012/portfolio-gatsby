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
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
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
    <Flex>
        <GlobalStyle />
        <Header />
        <Box>
            {children}
        </Box>
        <Footer />
    </Flex>
);

export default Layout;
