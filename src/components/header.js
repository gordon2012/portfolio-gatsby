import React from 'react';
import styled from 'styled-components';
import { Link as GatsbyLink } from 'gatsby';

const Link = styled(GatsbyLink)`
    color: #ccc;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0 0.5rem;
    :hover {
        text-decoration: underline;
    }
`;

const Container = styled.div`
    background: #333;
    color: white;
    display: flex;
    justify-content: center;
    & > div {
        width: 100%;
        max-width: 1200px;
    }
`;

const Flex = styled.div`
    padding: 1rem;
    display: flex;
    span {
        font-size: 2rem;
    }
`;

const Box = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Header = () => {
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

    return (
        <Container>
            <div>
                <Flex>
                    <div>
                        <h3>Gordon Doskas</h3>
                    </div>
                    <Box>
                        {links.map(link => (
                            <Link
                                key={link.label}
                                to={link.to}
                                activeStyle={{
                                    color: '#fff',
                                }}
                            >
                                <h4>{link.label}</h4>
                            </Link>
                        ))}
                    </Box>
                </Flex>
            </div>
        </Container>
    )
};

export default Header;
