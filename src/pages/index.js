import React from 'react';
import { Block } from 'baseui/block';
import * as T from 'baseui/typography';
import { Button, KIND, SIZE, SHAPE } from 'baseui/button';
import { useStyletron } from 'baseui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Layout from '../components/layout';
import UnstyledLink from '../components/link';

import skyDarkImg from '../images/sky-dark.jpg';

const GhostButton = ({ children }) => {
    return (
        <Button
            kind={KIND.primary}
            size={SIZE.large}
            shape={SHAPE.default}
            overrides={{
                BaseButton: {
                    style: () => {
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
    const [css] = useStyletron();

    const Link = ({ children, ...props }) => {
        return (
            <UnstyledLink
                className={css({ textDecoration: 'none' })}
                {...props}
            >
                {children}
            </UnstyledLink>
        );
    };

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
                    >
                        <Block
                            flex="1"
                            display="flex"
                            flexDirection="column"
                            justifyContent="center"
                            alignItems={['center', 'center', 'flex-start']}
                            $style={{
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
                        >
                            <T.H5 color="white" margin="0.5rem 0">
                                I am a <strong>Web Developer</strong>
                            </T.H5>
                            <T.H5 color="white" margin="0.5rem 0">
                                Check out my{' '}
                                <Link to="/work">
                                    &nbsp;
                                    <GhostButton>Projects</GhostButton>
                                </Link>
                            </T.H5>
                            <T.H5 color="white" marginBottom="0.5rem">
                                Find me on Social Media:
                            </T.H5>
                            <Block
                                display="grid"
                                gridTemplateColumns={[
                                    '1fr 1fr',
                                    '1fr 1fr 1fr 1fr',
                                ]}
                                gridGap="1rem"
                            >
                                {[
                                    ['github', 'https://github.com/gordon2012'],
                                    [
                                        'linkedin',
                                        'https://www.linkedin.com/in/gordon-doskas',
                                    ],
                                    [
                                        'twitter',
                                        'https://twitter.com/gordondoskas',
                                    ],
                                    ['facebook', 'https://facebook.com'],
                                ].map(([icon, url]) => (
                                    <Block key={icon}>
                                        <Link
                                            to={url}
                                            target="_blank"
                                            rel="noreferrer noopener"
                                        >
                                            <GhostButton>
                                                <FontAwesomeIcon
                                                    icon={['fab', icon]}
                                                    size="2x"
                                                />
                                            </GhostButton>
                                        </Link>
                                    </Block>
                                ))}
                            </Block>
                        </Block>
                    </Block>
                </Block>
            </Block>
        </Layout>
    );
};

export default IndexPage;
