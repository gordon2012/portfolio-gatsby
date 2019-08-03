import React from 'react';
import { Block } from 'baseui/block';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import './index.css';
import Header from './header';
import Footer from './footer';

library.add(fab, faCircle);

export default ({ children, ...props }) => (
    <Block display="flex" flexDirection="column" minHeight="100vh">
        <Block flex="1" {...props}>
            <Header />
            {children}
        </Block>
        <Footer />
    </Block>
);
