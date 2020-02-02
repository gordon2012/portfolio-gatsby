import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

const StyledGatsbyLink = styled(GatsbyLink)``;
const Anchor = styled.a``;

const Link = ({ children, to = '/', ...props }) => {
    const internal = /^\/(?!\/)/.test(to);
    return internal ? (
        <StyledGatsbyLink to={to} {...props}>
            {children}
        </StyledGatsbyLink>
    ) : (
        <Anchor href={to} {...props}>
            {children}
        </Anchor>
    );
};

export default Link;
