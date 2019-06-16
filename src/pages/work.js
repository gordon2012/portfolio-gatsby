import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';
import * as T from 'baseui/typography';
import { Block } from 'baseui/block';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

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

    const test = [1, 2, 3, 4, 5, 6];

    return (
        <Layout>
            <T.H2 $style={{ textAlign: 'center' }}>My Work</T.H2>

            <Container width="1200px" $style={{ border: '3px solid red' }}>
                <FlexGrid
                    $style={{ border: '3px solid magenta' }}
                    padding="2rem"
                    flexGridColumnCount={[1, 1, 1, 2, 3]}
                    flexGridColumnGap="2rem"
                    flexGridRowGap="2rem"
                >
                    {/* {data.allContentfulProject.edges.map((edge, i) => ( */}
                    {test.map((t, i) => (
                        <FlexGridItem key={t}>
                            <Card
                                headerImage={
                                    'https://source.unsplash.com/user/erondu/700x400'
                                }
                                title={t}
                            >
                                <StyledBody>
                                    Proin ut dui sed metus pharetra hend rerit
                                    vel non mi. Nulla ornare faucibus ex, non
                                    facilisis nisl.
                                </StyledBody>
                                <StyledAction>
                                    <Button style={{ width: '100%' }}>
                                        Button Label
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
