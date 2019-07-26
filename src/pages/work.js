import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as T from 'baseui/typography';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

import Layout from '../components/layout';
import Container from '../components/container';
import WorkCard from '../components/work-card';

export default () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulProject(
                filter: {
                    category: { enabled: { eq: true } }
                    enabled: { eq: true }
                }
                sort: { fields: [order], order: ASC }
            ) {
                group(field: category___order) {
                    edges {
                        node {
                            title
                            category {
                                name
                            }
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
        }
    `);

    const categories = data.allContentfulProject.group.map(group => {
        return {
            name: group.edges[0].node.category.name,
            projects: group.edges.map(edge => {
                const { category, ...node } = edge.node;
                return node;
            }),
        };
    });

    return (
        <Layout backgroundColor="#ddd">
            <T.H2 $style={{ textAlign: 'center' }}>My Work</T.H2>

            <Container
                width="1200px"
                padding="0 2rem 2rem"
                $style={{ border: '0px solid red' }}
            >
                {categories.map(category => (
                    <React.Fragment key={category.name}>
                        <T.H4>{category.name}</T.H4>
                        <FlexGrid
                            $style={{ border: '0px solid magenta' }}
                            padding="0rem"
                            flexGridColumnCount={[1, 1, 2, 3]}
                            flexGridColumnGap="2rem"
                            flexGridRowGap="2rem"
                        >
                            {category.projects.map((project, i) => (
                                <FlexGridItem key={i}>
                                    <WorkCard work={project} />
                                </FlexGridItem>
                            ))}
                        </FlexGrid>
                    </React.Fragment>
                ))}
            </Container>
        </Layout>
    );
};
