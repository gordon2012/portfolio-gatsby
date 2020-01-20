import React from 'react';
// import { Block } from 'baseui/block';
// import * as T from 'baseui/typography';
// import { Button, KIND, SIZE, SHAPE } from 'baseui/button';
// import { useStyletron } from 'baseui';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
// import UnstyledLink from '../components/link';

import skyDarkImg from '../images/sky-dark.jpg';

const Button = styled.span`
    outline: white solid;
    padding: 0.5rem 1rem;

    /* overrides? */
    text-decoration: none;

    a {
        color: white;
        text-decoration: none;
    }

    :hover {
        a {
            color: black;
        }
        background: white;
    }
    :focus {
        color: black;
        background: white;
    }

    :visited {
        /* color: white; */
    }
`;

const Link = ({children, to}) => (
    <Button>
        <GatsbyLink to={to}>{children}</GatsbyLink>
    </Button>
);

// const Anchor = () => <></>;

// const GhostButton = ({ children }) => {
//     return (
//         <Button
//             kind={KIND.primary}
//             size={SIZE.large}
//             shape={SHAPE.default}
//             overrides={{
//                 BaseButton: {
//                     style: () => {
//                         return {
//                             outline: 'white solid',
//                             backgroundColor: 'transparent',
//                             textDecoration: 'none',
//                             ':hover': {
//                                 color: 'black',
//                                 backgroundColor: 'white',
//                             },
//                             ':focus': {
//                                 color: 'black',
//                                 backgroundColor: 'white',
//                             },
//                         };
//                     },
//                 },
//             }}
//         >
//             {children}
//         </Button>
//     );
// };

const Container = ({ children }) => {
    const Outer = styled.div`
        border: 3px solid red;
        flex: 1;
        display: flex;
        justify-content: center;

    `;

    const Inner = styled.div`
        border: 3px solid lime;
        width: 100%;
        max-width: 1000px;
        display: flex;

        /* mobile */
        flex-direction: column;
        /* justify-content: center; */
        /* align-items: center; */
        div {
            border: 3px solid blue;
            flex: 1;
            /* display: flex; */
        }

    `;

    const Content = ({ left, right }) => {
        const A = styled.div`
            border: 3px solid red;
            flex: 1;
            display: flex;

            background-image: url(${skyDarkImg});
            background-size: cover;
            background-position: center;

        `;

        const B = styled.div`
            border: 3px solid magenta;

            flex: 1;
            max-width: 1000px;
            margin: 0 auto;
            display: flex;
        `;

        const C = styled.div`
            border: 3px solid blue;

            flex: 1;
            padding: 1rem;
            display: flex;

            /* TODO: mobile */
            @media (max-width: 899px) {
                flex-direction: column;
            }
        `;

        const S = styled.div`
            border: 3px solid lime;

            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;

            color: white;

            /* mobile? */
            /* align-items: flex-start; */
            @media (max-width: 899px) {
                align-items: center;
                /* text-align: center; */
            }
        `;

        const L = styled(S)`

        `;

        const R = styled(S)`
            h2 {
                border: 1px solid red;

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
        ['facebook', 'facebook.com']
    ];

    const Grid = styled.div`

    `;

    return (
        <Content
            left={<>
                <h1>Gordon Doskas</h1>
            </>}
            right={<>
                <h2>I am a <strong>Web Developer</strong></h2>
                <h2>Check out my <Link to="work">Projects</Link></h2>
                <h2>Find me on Social Media:</h2>
                <div>
                    {social.map(([icon, url]) => {
                        return (
                            <>{icon}</>
                        )
                    })}
                </div>
            </>}
        />
    );
};

const IndexPage = () => (
    <Layout>
        <Container>
            <div>
                Gordon Doskas
            </div>
            <div>
                I am a <strong>Web Developer</strong>
            </div>
        </Container>
    </Layout>
);

export default IndexPage;

// const IndexPage = () => {
//     const [css] = useStyletron();

//     const Link = ({ children, ...props }) => {
//         return (
//             <UnstyledLink
//                 className={css({ textDecoration: 'none' })}
//                 {...props}
//             >
//                 {children}
//             </UnstyledLink>
//         );
//     };

//     return (
//         <Layout display="flex" flexDirection="column">
//             <Block
//                 flex="1"
//                 backgroundImage={`url(${skyDarkImg})`}
//                 backgroundSize="cover"
//                 display="flex"
//             >
//                 <Block
//                     flex="1"
//                     maxWidth="1000px"
//                     margin="0 auto"
//                     display="flex"
//                 >
//                     <Block
//                         flex="1"
//                         padding="1rem"
//                         display="flex"
//                         flexDirection={['column', 'column', 'row']}
//                     >
//                         <Block
//                             flex="1"
//                             display="flex"
//                             flexDirection="column"
//                             justifyContent="center"
//                             alignItems={['center', 'center', 'flex-start']}
//                             $style={{
//                                 textAlign: 'left',
//                             }}
//                         >
//                             <T.H1 color="white">
//                                 Gordon
//                                 <br />
//                                 Doskas
//                             </T.H1>
//                         </Block>
//                         <Block
//                             flex="1"
//                             display="flex"
//                             flexDirection="column"
//                             justifyContent="center"
//                             alignItems={['center', 'center', 'flex-start']}
//                         >
//                             <T.H5 color="white" margin="0.5rem 0">
//                                 I am a <strong>Web Developer</strong>
//                             </T.H5>
//                             <T.H5 color="white" margin="0.5rem 0">
//                                 Check out my{' '}
//                                 <Link to="/work">
//                                     &nbsp;
//                                     <GhostButton>Projects</GhostButton>
//                                 </Link>
//                             </T.H5>
//                             <T.H5 color="white" marginBottom="0.5rem">
//                                 Find me on Social Media:
//                             </T.H5>
//                             <Block
//                                 display="grid"
//                                 gridTemplateColumns={[
//                                     '1fr 1fr',
//                                     '1fr 1fr 1fr 1fr',
//                                 ]}
//                                 gridGap="1rem"
//                             >
//                                 {[
//                                     ['github', 'https://github.com/gordon2012'],
//                                     [
//                                         'linkedin',
//                                         'https://www.linkedin.com/in/gordon-doskas',
//                                     ],
//                                     [
//                                         'twitter',
//                                         'https://twitter.com/gordondoskas',
//                                     ],
//                                     ['facebook', 'https://facebook.com'],
//                                 ].map(([icon, url]) => (
//                                     <Block key={icon}>
//                                         <Link
//                                             to={url}
//                                             target="_blank"
//                                             rel="noreferrer noopener"
//                                         >
//                                             <GhostButton>
//                                                 <FontAwesomeIcon
//                                                     icon={['fab', icon]}
//                                                     size="2x"
//                                                 />
//                                             </GhostButton>
//                                         </Link>
//                                     </Block>
//                                 ))}
//                             </Block>
//                         </Block>
//                     </Block>
//                 </Block>
//             </Block>
//         </Layout>
//     );
// };

// export default IndexPage;
