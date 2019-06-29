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

import WorkCard from '../components/work-card';

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
        <Layout backgroundColor="#ddd">
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
                            <WorkCard work={node}/>
                        </FlexGridItem>
                    ))}
                </FlexGrid>
            </Container>
        </Layout>
    );
};
