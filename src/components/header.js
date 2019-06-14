import React from 'react';

// import { Block } from 'baseui/block';

import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationItem as NavigationItem,
    StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import { StyledLink as Link } from 'baseui/link';
import { Button } from 'baseui/button';

import Container from './container';

export default () => (
    <Container width="1200px" $style={{ background: '#333' }}>
        <HeaderNavigation>
            <NavigationList $align={ALIGN.left}>
                <NavigationItem>Uber</NavigationItem>
            </NavigationList>
            <NavigationList $align={ALIGN.center} />
            <NavigationList $align={ALIGN.right}>
                <NavigationItem>
                    <Link href="#">Tab Link One</Link>
                </NavigationItem>
                <NavigationItem>
                    <Link href="#">Tab Link Two</Link>
                </NavigationItem>
            </NavigationList>
            <NavigationList $align={ALIGN.right}>
                <NavigationItem>
                    <Button>Get started</Button>
                </NavigationItem>
            </NavigationList>
        </HeaderNavigation>
    </Container>
);
