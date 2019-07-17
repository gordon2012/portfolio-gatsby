import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as T from 'baseui/typography';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

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

    const categories = Array.from(new Set(nodes.map(node => node.category)));

    let projects = {};
    categories.forEach(category => {
        projects[category] = nodes.filter(node => node.category === category);
    });

    return (
        <Layout backgroundColor="#ddd">
            <T.H2 $style={{ textAlign: 'center' }}>My Work</T.H2>

            <Container width="1200px" padding="0 2rem 2rem" $style={{ border: '0px solid red' }}>
                {categories.map(category => (
                    <React.Fragment key={category}>
                        <T.H4>{category}</T.H4>
                        <FlexGrid
                            $style={{ border: '0px solid magenta' }}
                            padding="0rem"
                            flexGridColumnCount={[1, 1, 2, 3]}
                            flexGridColumnGap="2rem"
                            flexGridRowGap="2rem"
                        >
                            {projects[category].map((project, i) => (
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
