import 'array-flat-polyfill';
import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import * as T from 'baseui/typography';
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid';

import Layout from '../components/layout';
import Container from '../components/container';
import WorkCard from '../components/work-card';
import WorkModal from '../components/work-modal';

import { Block } from 'baseui/block';
import { Tag } from 'baseui/tag';
import { Card } from 'baseui/card';

const WorkItem = ({ work, filter, setFilter }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <WorkCard
                work={work}
                setOpen={setOpen}
                filter={filter}
                setFilter={setFilter}
            />
            <WorkModal work={work} isOpen={isOpen} setOpen={setOpen} />
        </>
    );
};

const WorkPage = () => {
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

    const skills = Array.from(
        new Set(
            categories
                .map(category =>
                    category.projects.map(project => project.skills)
                )
                .flat(2)
        )
    ).sort();

    const [filter, setFilter] = useState('');

    return (
        <Layout backgroundColor="#ddd">
            <T.H2 $style={{ textAlign: 'center' }}>My Work</T.H2>

            <Container width="1200px" padding="0 2rem">
                <Card>
                    <T.H5>Filter by Skill:</T.H5>
                    <Block
                        $style={{
                            textAlign: 'center',
                            border: '0px solid red',
                        }}
                    >
                        <Tag
                            closeable={false}
                            kind="primary"
                            variant={filter === '' ? 'solid' : 'outlined'}
                            onClick={filter === '' ? null : () => setFilter('')}
                            isFocused
                        >
                            ALL
                        </Tag>
                        {skills.map(skill => (
                            <Tag
                                key={skill}
                                closeable={false}
                                kind="negative"
                                variant={
                                    filter === skill || filter === ''
                                        ? 'solid'
                                        : 'outlined'
                                }
                                onClick={
                                    filter === skill
                                        ? null
                                        : () => setFilter(skill)
                                }
                            >
                                {skill}
                            </Tag>
                        ))}
                    </Block>
                </Card>
            </Container>

            <Container width="1200px" padding="0 2rem 2rem">
                {(filter
                    ? categories
                          .filter(c =>
                              c.projects.some(p =>
                                  p.skills.some(s => s === filter)
                              )
                          )
                          .map(c => ({
                              ...c,
                              projects: c.projects.filter(p =>
                                  p.skills.some(s => s === filter)
                              ),
                          }))
                    : categories
                ).map(category => (
                    <React.Fragment key={category.name}>
                        <T.H4>{category.name}</T.H4>
                        <FlexGrid
                            padding="0rem"
                            flexGridColumnCount={[1, 1, 2, 3]}
                            flexGridColumnGap="2rem"
                            flexGridRowGap="2rem"
                        >
                            {category.projects.map((project, i) => (
                                <FlexGridItem key={i}>
                                    <WorkItem
                                        work={project}
                                        filter={filter}
                                        setFilter={setFilter}
                                    />
                                </FlexGridItem>
                            ))}
                        </FlexGrid>
                    </React.Fragment>
                ))}
            </Container>
        </Layout>
    );
};

export default WorkPage;
