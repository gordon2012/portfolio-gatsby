import React from 'react';
import './index.css';
import { Block } from 'baseui/block';

import Header from './header';

export default props => (
    <Block display="flex" flexDirection="column" minHeight="100vh">
        <Block flex="1">
            <Header />
            {props.children}
        </Block>
        <footer>footer</footer>
    </Block>
);
