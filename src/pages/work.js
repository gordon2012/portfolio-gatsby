import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';
import * as T from 'baseui/typography';
import { Block } from 'baseui/block';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/layout';
import Container from '../components/container';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulProject {
                edges {
                    node {
                        title
                        category
                        skills
                        images {
                            title
                            file {
                                url
                            }
                        }
                        links {
                            title
                            url
                        }
                        body {
                            json
                        }
                    }
                }
            }
        }
    `);
    // const { title, category, skills, images, links, body } = data

    const nodes = data.allContentfulProject.edges.map(edge => edge.node);


    const test = [1, 2, 3, 4, 5, 6];

    return (
        <Layout>
            <T.H2 $style={{ textAlign: 'center' }}>My Work</T.H2>

            <pre>{JSON.stringify(nodes, undefined, 2)}</pre>

            <Container width="1200px" $style={{ border: '3px solid red' }}>
                <FlexGrid
                    $style={{ border: '3px solid magenta' }}
                    padding="2rem"
                    flexGridColumnCount={[1, 1, 2, 3]}
                    flexGridColumnGap="2rem"
                    flexGridRowGap="2rem"
                >
                    {nodes.map((node, i) => (
                    
                        <FlexGridItem key={i}>
                            <Card
                                headerImage={node.images[0].file.url}
                                title={node.title}
                            >
                                <StyledBody>
                                    {documentToReactComponents(node.body.json)}
                                </StyledBody>
                                <StyledAction>

                                    


                                    {/* {node.links.map((link, i, a) => (
                                        <Button style={{ width: `${a.length > 1 ? '50' : '100'}%` }}>
                                            Button Label
                                        </Button>
                                    ))} */}

                                    {node.links.length > 1 ? (
                                        <>
                                            <Button style={{ width: '50%', marginRight: '1rem' }}>
                                                {node.links[0].title}
                                            </Button>
                                            <Button style={{ width: '50%', marginLeft: '1rem' }}>
                                                {node.links[1].title}
                                            </Button>
                                        </>
                                    ) : (
                                        <Button style={{ width: '100%' }}>
                                            {node.links[0].title}
                                        </Button>
                                    )}
                                    
                                </StyledAction>
                            </Card>
                        </FlexGridItem>
                    ))}
                </FlexGrid>
            </Container>
        </Layout>
    );
};
