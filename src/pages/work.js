import 'array-flat-polyfill';
import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import * as T from 'baseui/typography';
// import { Block } from 'baseui/block';
// import { Tag } from 'baseui/tag';
// import { Card } from 'baseui/card';

import Layout from '../components/layout';
// import Container from '../components/container';
import WorkCard from '../components/work-card';
import WorkModal from '../components/work-modal';

import styled from 'styled-components';

const Background = styled.div`
    flex: 1;
    background: #ddd;
`;

const Container = styled.div`
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
`;

const Card = styled.div`
    background: white;
    padding: 2rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
`;

const Tag = ({ children }) => {
    const Outer = styled.span`
        display: inline-block;
        background: red;
        color: white;
        padding: 2px 12px;
        margin: 5px;
        border-radius: 12px;
        height: 24px;
    `;
    const Inner = styled.span`
        font-weight: bold;
        text-align: center;
    `;
    return (
        <Outer>
            <Inner>
                {children}
            </Inner>
        </Outer>
    );
};

const Grid = styled.div`
    /* border: 3px solid red; */

    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(3, 1fr);

    & > div {
        /* border: 3px solid magenta; */

        display: flex;
        flex-direction: column;
    }
`;

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
    const [filter, setFilter] = useState('');

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

    return (
        <Layout>
            <Background>
                <Container>
                    <h2>My Work</h2>
                    <Card>
                        <h3>Filter by Skill:</h3>
                        <Tag>ALL</Tag>
                        {skills.map(skill => (
                            <Tag key={skill}>{skill}</Tag>
                        ))}
                    </Card>
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
                            <h4>{category.name}</h4>
                            <Grid>
                                {category.projects.map((project, i) => (
                                    <div key={i}>
                                        <WorkItem
                                            work={project}
                                            filter={filter}
                                            setFilter={setFilter}
                                        />
                                    </div>
                                ))}
                            </Grid>
                        </React.Fragment>
                    ))}
                </Container>
            </Background>
        </Layout>

        // <Layout backgroundColor="#ddd">
        //     <T.H2 $style={{ textAlign: 'center' }}>My Work</T.H2>

        //     <Container width="1200px" padding="0 2rem">
        //         <Card>
        //             <T.H5>Filter by Skill:</T.H5>
        //             <Block
        //                 $style={{
        //                     textAlign: 'center',
        //                     border: '0px solid red',
        //                 }}
        //             >
        //                 <Tag
        //                     closeable={false}
        //                     kind="primary"
        //                     variant={filter === '' ? 'solid' : 'outlined'}
        //                     onClick={filter === '' ? null : () => setFilter('')}
        //                     isFocused
        //                 >
        //                     ALL
        //                 </Tag>
        //                 {skills.map(skill => (
        //                     <Tag
        //                         key={skill}
        //                         closeable={false}
        //                         kind="negative"
        //                         variant={
        //                             filter === skill || filter === ''
        //                                 ? 'solid'
        //                                 : 'outlined'
        //                         }
        //                         onClick={
        //                             filter === skill
        //                                 ? null
        //                                 : () => setFilter(skill)
        //                         }
        //                     >
        //                         {skill}
        //                     </Tag>
        //                 ))}
        //             </Block>
        //         </Card>
        //     </Container>

        //     <Container width="1200px" padding="0 2rem 2rem">
        //         {(filter
        //             ? categories
        //                   .filter(c =>
        //                       c.projects.some(p =>
        //                           p.skills.some(s => s === filter)
        //                       )
        //                   )
        //                   .map(c => ({
        //                       ...c,
        //                       projects: c.projects.filter(p =>
        //                           p.skills.some(s => s === filter)
        //                       ),
        //                   }))
        //             : categories
        //         ).map(category => (
        //             <React.Fragment key={category.name}>
        //                 <T.H4>{category.name}</T.H4>
        //                 <Block
        //                     display="grid"
        //                     gridTemplateColumns={[
        //                         '1fr',
        //                         '1fr',
        //                         '1fr 1fr',
        //                         '1fr 1fr 1fr',
        //                     ]}
        //                     gridGap="2rem"
        //                 >
        //                     {category.projects.map((project, i) => (
        //                         <Block key={i} display="flex">
        //                             <WorkItem
        //                                 work={project}
        //                                 filter={filter}
        //                                 setFilter={setFilter}
        //                             />
        //                         </Block>
        //                     ))}
        //                 </Block>
        //             </React.Fragment>
        //         ))}
        //     </Container>
        // </Layout>
    );
};

export default WorkPage;
