import React from 'react';
import {
    HeaderNavigation,
    ALIGN,
    StyledNavigationItem as NavigationItem,
    StyledNavigationList as NavigationList,
} from 'baseui/header-navigation';
import { styled } from 'baseui';
import { Label2 } from 'baseui/typography';

import Container from './container';
import UnstyledLink from './link';

const Link = styled(UnstyledLink, {
    color: '#ccc',
    textDecoration: 'none',
    ':hover': {
        textDecoration: 'underline',
    },
});

const links = [
    {
        label: 'Home',
        to: '/',
    },
    {
        label: 'Work',
        to: '/work',
    },
    {
        label: 'Contact',
        to: '/contact',
    },
];

export default () => (
    <Container width="1200px" $style={{ background: '#333' }}>
        <HeaderNavigation
            $style={{ borderBottom: 'none', paddingRight: '1rem' }}
        >
            <NavigationList $align={ALIGN.left}>
                <NavigationItem>
                    <Label2 color="white" fontSize="font600">
                        Gordon Doskas
                    </Label2>
                </NavigationItem>
            </NavigationList>
            <NavigationList $align={ALIGN.center} />
            <NavigationList $align={ALIGN.right}>
                {links.map(link => (
                    <NavigationItem key={link.label}>
                        <Link
                            to={link.to}
                            activeStyle={{
                                color: '#fff',
                            }}
                        >
                            {link.label}
                        </Link>
                    </NavigationItem>
                ))}
            </NavigationList>
        </HeaderNavigation>
    </Container>
);
