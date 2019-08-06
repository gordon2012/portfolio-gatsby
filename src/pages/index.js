import React from 'react';
import Layout from '../components/layout';

import skyDarkImg from '../images/sky-dark.jpg';
import { Block } from 'baseui/block';
import * as T from 'baseui/typography';
import { Button, KIND, SIZE, SHAPE } from 'baseui/button';
import { Link as UnstyledLink } from '../components/link';
import { styled } from 'baseui';

const Link = styled(UnstyledLink, {
    textDecoration: 'none',
});

// const

const GhostButton = ({ children }) => {
    return (
        <Button
            kind={KIND.primary}
            size={SIZE.large}
            shape={SHAPE.default}
            overrides={{
                BaseButton: {
                    style: ({ $isSelected }) => {
                        return {
                            outline: 'white solid',
                            backgroundColor: 'transparent',
                            textDecoration: 'none',
                            ':hover': {
                                color: 'black',
                                backgroundColor: 'white',
                            },
                            ':focus': {
                                color: 'black',
                                backgroundColor: 'white',
                                // backgroundColor: 'transparent',
                            },
                        };
                    },
                },
            }}
        >
            {children}
        </Button>
    );
};

const IndexPage = () => {
    return (
        <Layout display="flex" flexDirection="column">
            <Block
                flex="1"
                backgroundImage={`url(${skyDarkImg})`}
                backgroundSize="cover"
                display="flex"
            >
                <Block
                    flex="1"
                    maxWidth="1000px"
                    margin="0 auto"
                    display="flex"
                >
                    <Block
                        flex="1"
                        padding="1rem"
                        display="flex"
                        flexDirection={['column', 'column', 'row']}
                        $style={{ border: '3px solid red' }}
                    >
                        <Block
                            flex="1"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems={['center', 'center', 'flex-start']}
                            $style={{
                                border: '3px solid magenta',
                                textAlign: 'left',
                            }}
                        >
                            <T.H1 color="white">
                                Gordon
                                <br />
                                Doskas
                            </T.H1>
                        </Block>
                        <Block
                            flex="1"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems={['center', 'center', 'flex-start']}
                            $style={{ border: '3px solid lime' }}
                        >
                            <T.H5 color="white">
                                I am a <strong>Web Developer</strong>
                            </T.H5>
                            <T.H5 color="white">
                                Check out my{' '}
                                <Link to="/work">
                                    <GhostButton>Projects</GhostButton>
                                </Link>
                            </T.H5>
                        </Block>
                    </Block>
                </Block>
            </Block>
        </Layout>
    );
};

export default IndexPage;
