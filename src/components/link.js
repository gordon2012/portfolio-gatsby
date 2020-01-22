import React from 'react';

import { Link as GatsbyLink } from 'gatsby';

// import { styled } from 'baseui';
import styled from 'styled-components';

// const StyledGatsbyLink = styled(GatsbyLink);
// const Anchor = styled('a');

const StyledGatsbyLink = styled(GatsbyLink)``;
const Anchor = styled.a``;

export default props => {
    const { children, to = '/', ...restProps } = props;
    const internal = /^\/(?!\/)/.test(to);
    return internal ? (
        <StyledGatsbyLink to={to} {...restProps}>
            {children}
        </StyledGatsbyLink>
    ) : (
        <Anchor href={to} {...restProps}>
            {children}
        </Anchor>
    );
};
