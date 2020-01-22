import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import Layout from '../components/layout';
import UnstyledLink from '../components/link';

import skyDarkImg from '../images/sky-dark.jpg';

const Button = styled(UnstyledLink)`
    outline: white solid;
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: white;
    :hover {
        color: black;
        background: white;
    }
    :focus {
        color: black;
        background: white;
    }
`;

const IconButton = styled(Button)`
    font-size: 3em;
    padding: 0.5rem;
`;

const Container = ({ children }) => {
    const Content = ({ left, right }) => {
        const A = styled.div`
            flex: 1;
            display: flex;
            background-image: url(${skyDarkImg});
            background-size: cover;
            background-position: center;
        `;

        const B = styled.div`
            flex: 1;
            max-width: 1000px;
            margin: 0 auto;
            display: flex;
        `;

        const C = styled.div`
            flex: 1;
            padding: 1rem;
            display: flex;
            @media (max-width: 899px) {
                flex-direction: column;
            }
        `;

        const S = styled.div`
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            color: white;
            @media (max-width: 899px) {
                align-items: center;
            }
        `;

        const L = styled(S)``;

        const R = styled(S)`
            h2 {
                margin: 0.5rem 0;
            }
        `;

        return (
            <A>
                <B>
                    <C>
                        <L>{left}</L>
                        <R>{right}</R>
                    </C>
                </B>
            </A>
        );
    };

    const social = [
        ['github', 'github.com/gordon2012'],
        ['linkedin', 'linkedin.com/in/gordon-doskas'],
        ['twitter', 'twitter.com/gordondoskas'],
    ];

    const Grid = styled.div`
        padding-top: 1rem;
        display: flex;
        div {
            padding: 0 0.5rem;
        }
        div:first-child {
            padding-left: 0;
        }
        div:last-child {
            padding-right: 0;
        }
    `;

    return (
        <Content
            left={
                <>
                    <h1>Gordon Doskas</h1>
                </>
            }
            right={
                <>
                    <h2>
                        I am a <strong>Web Developer</strong>
                    </h2>
                    <h2>
                        Check out my <Button to="work">Projects</Button>
                    </h2>
                    <h2>Find me on Social Media:</h2>
                    <Grid>
                        {social.map(([icon, url]) => {
                            return (
                                <div>
                                    <IconButton to={`https://${url}`}>
                                        <FontAwesomeIcon
                                            icon={['fab', icon]}
                                            size=""
                                        />
                                    </IconButton>
                                </div>
                            );
                        })}
                    </Grid>
                </>
            }
        />
    );
};

const IndexPage = () => (
    <Layout>
        <Container>
            <div>Gordon Doskas</div>
            <div>
                I am a <strong>Web Developer</strong>
            </div>
        </Container>
    </Layout>
);

export default IndexPage;
