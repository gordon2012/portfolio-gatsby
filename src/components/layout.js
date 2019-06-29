import React from 'react';
import './index.css';
import { Block } from 'baseui/block';

import Header from './header';
import Footer from './footer';

export default ({children, ...props}) => (
    <Block display="flex" flexDirection="column" minHeight="100vh">
        <Block flex="1" {...props}>
            <Header />
            {children}
        </Block>
        <Footer />
    </Block>
);
