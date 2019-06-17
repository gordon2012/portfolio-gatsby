import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';
import * as T from 'baseui/typography';
import { Block } from 'baseui/block';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';
import { Tag } from 'baseui/tag';
import Search from 'baseui/icon/search';

// import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

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
    const nodes = data.allContentfulProject.edges.map(edge => edge.node);

    return (
        <Layout>
            <T.H2 $style={{ textAlign: 'center' }}>My Work</T.H2>

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
                                overrides={{
                                    Contents: {
                                        style: {
                                            marginTop: '0.2rem',
                                        },
                                    },
                                }}
                            >
                                <StyledBody>
                                    <Block
                                        marginLeft="-5px"
                                        marginBottom="0.2rem"
                                    >
                                        <Tag
                                            $as="div"
                                            closeable={false}
                                            kind="neutral"
                                            variant="outlined"
                                        >
                                            {node.category}
                                        </Tag>
                                    </Block>

                                    <Block marginLeft="-5px">
                                        {node.skills.map((skill, i) => (
                                            <Tag
                                                key={i}
                                                closeable={false}
                                                kind="neutral"
                                                variant="solid"
                                            >
                                                {skill}
                                            </Tag>
                                        ))}
                                    </Block>
                                </StyledBody>
                                <StyledAction>
                                    <Button
                                        size="compact"
                                        kind="primary"
                                        style={{ width: `100%` }}
                                    >
                                        <Search size={48} />
                                    </Button>
                                </StyledAction>
                            </Card>
                        </FlexGridItem>
                    ))}
                </FlexGrid>
            </Container>
        </Layout>
    );
};
